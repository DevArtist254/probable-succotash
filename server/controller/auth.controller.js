const User = require("../models/user.model");

exports.signup = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(200).json({
      msg: "success",
      user,
    });
  } catch (error) {
    res.status(404).json({
      msg: "Failed try again",
      err: error.message,
    });
  }
};

exports.login = (req, res) => {
  console.log(req.body);

  res.status(200).json({
    msg: "success",
  });
};
