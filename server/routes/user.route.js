const express = require("express");
const multer = require("multer");
const {
  login,
  signup,
  checkifcookieisvalid,
  protect,
} = require("../controller/auth.controller");
const { getuser } = require("../controller/user.controller");
const {
  uploadString,
  compressImage,
} = require("../controller/image.controller");

const route = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

route.post("/login", login);

route.post("/signup", signup);

route.post(
  "/upload",
  protect,
  upload.single("photo"),
  compressImage,
  uploadString
);

route.get("/cookieIsValid", checkifcookieisvalid);

route.get("/:id", getuser);

module.exports = route;
