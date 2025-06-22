const User = require("../models/user.model");
const CatchAsync = require("../utils/CatchAsync");
const factory = require("./factory.controller");

exports.getuser = factory.getOne(User);

exports.uploadpProfile = CatchAsync(async (req, res, next) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const doc = await User.findByIdAndUpdate(
    req.user.id,
    {
      photo: req.url,
      photoThumbnail: req.urlThumb,
    },
    {
      new: true,
      runValidators: false,
    }
  );

  if (!doc) {
    return new ErrorHandler(`There is no such item`, 404);
  }

  res.status(200).json({
    message: "File uploaded succesfully",
  });
});