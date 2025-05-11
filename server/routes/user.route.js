const express = require("express");
const {
  login,
  signup,
  checkifcookieisvalid,
} = require("../controller/auth.controller");

const route = express.Router();

route.post("/login", login);

route.post("/signup", signup);

route.get("/cookieIsValid", checkifcookieisvalid);

module.exports = route;
