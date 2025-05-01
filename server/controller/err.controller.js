const ErrorHandler = require("../utils/AppError");

const messageDulicateError = (err) => {
  const value = JSON.stringify(err.keyValue);
  const message = `Dulicate value ${value}`;

  return new ErrorHandler(message, 422);
};

function devErrorHandling(err, res) {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    stack: err.stack,
  });
}

function proErrorHandling(err, res) {
  if (err.isOperational) {
    //Operation error to send back a message
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    console.error("Error X", err);

    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }
}

module.exports = (err, req, res, next) => {
  //define
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "fail";

  if (process.env.NODE_ENV === "development") {
    devErrorHandling(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = { ...err };

    if (error.code === 11000) error = messageDulicateError(error);

    proErrorHandling(error, res);
  }
};
