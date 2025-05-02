const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const CatchAsync = require("../utils/CatchAsync");
const { promisify } = require("util");
const ErrorHandler = require("../utils/AppError");

const jwtSign = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

function createSendToken(user, statusCode, res) {
  const token = jwtSign(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
  };

  if (process.env.NODE_ENV === "production") {
    cookieOptions.httpOnly = true;
    cookieOptions.sameSite = "Lax";
    cookieOptions.secure = true;
  }

  res.cookie("jwt", token, cookieOptions);

  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: { user },
  });
}

exports.signup = CatchAsync(async (req, res, next) => {
  const { username, email, password } = req.body;
  const newUser = await User.create({ username, email, password });

  createSendToken(newUser, 201, res);
});

exports.login = CatchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Invaild email or password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.isCorrectPassword(password, user.password))) {
    return next(new ErrorHandler("invalid email or password", 400));
  }

  createSendToken(user, 200, res);
});

exports.protect = CatchAsync(async (req, res, next) => {
  let token;

  if (req.cookie && req.cookie.jwt) {
    token = req.cookie.jwt;
  }

  if (!token) next(new ErrorHandler("Access denied, please login", 401));

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  let existingUser = await User.findById(decoded.id);

  if (!existingUser) next(new ErrorHandler("Access denied", 401));

  req.user = existingUser;
  next();
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    //roles = 'user'
    if (!roles.includes(req.user.role)) {
      return next(new ErrorHandle("Access denied", 403));
    }

    next();
  };
};

/**
 * Bonus: Combine Them

  Use JWTs stored in HttpOnly cookies:

  Best of both worlds: stateless, secure, and browser-managed.

    Prevents XSS (since JavaScript can’t access the cookie).

    Prevents CSRF with SameSite=Strict|Lax.
 */

//
