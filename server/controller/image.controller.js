const fs = require("fs");
const path = require("path");
const CatchAsync = require("../utils/CatchAsync");
const sharp = require("sharp");

exports.compressImage = CatchAsync(async (req, res, next) => {
  const filePath = path.join(
    __dirname,
    `../../client/public/images/${req.user.id}/`
  );
  const fileName = `${Date.now()}-${req.user.id}-${req.file.originalname}.webp`;
  const fileNameThumbnail = `${Date.now()}-${req.user.id}-${
    req.file.originalname
  }-thumbnail.webp`;
  const output = path.join(filePath, fileName);
  const outputThumb = path.join(filePath, fileNameThumbnail);

  await fs.promises.mkdir(filePath, { recursive: true });

  await sharp(req.file.buffer)
    .webp({ quality: 70 })
    .withMetadata({ comment: `user_id=${req.user.id}` })
    .toFile(output);

  await sharp(req.file.buffer)
    .webp({ quality: 20 })
    .withMetadata({ comment: `user_id=${req.user.id}` })
    .toFile(outputThumb);

  req.url = output;
  next();
});

exports.uploadString = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  res.status(200).json({
    message: "File uploaded succesfully",
    path: req.url,
  });
};
