const fs = require("fs");
const path = require("path");
const CatchAsync = require("../utils/CatchAsync");
const sharp = require("sharp");

exports.compressImage = CatchAsync(async (req, res, next) => {
  let filePath, folderPath;

  if (process.env.NODE_ENV === "production") {
    filePath = `/images/${req.user.id}/`;
    folderPath = path.join(__dirname, `../../client/dist/images/${req.user.id}/`);
  } else {
    filePath = `/images/${req.user.id}/`;
    folderPath = path.join(
      __dirname,
      `../../client/public/images/${req.user.id}/`
    );
  }
 
  const fileName = `${Date.now()}-${req.user.id}-${req.file.originalname}.webp`;
  const fileNameThumbnail = `${Date.now()}-${req.user.id}-${
    req.file.originalname
  }-thumbnail.webp`;
  const output = path.join(folderPath, fileName);
  const outputThumb = path.join(folderPath, fileNameThumbnail);

  await fs.promises.mkdir(folderPath, { recursive: true });

  await sharp(req.file.buffer)
    .webp({ quality: 70 })
    .withMetadata({ comment: `user_id=${req.user.id}` })
    .toFile(output);

  await sharp(req.file.buffer)
    .webp({ quality: 20 })
    .withMetadata({ comment: `user_id=${req.user.id}` })
    .toFile(outputThumb);

  req.url = path.join(filePath, fileName);;
  req.urlThumb = path.join(filePath, fileName);;
  next();
});

exports.uploadString = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  console.log(req.url);

  res.status(200).json({
    message: "File uploaded succesfully",
    path: req.url,
  });
};
