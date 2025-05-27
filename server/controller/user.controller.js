const User = require("../models/user.model");
const factory = require("./factory.controller");

exports.getuser = factory.getOne(User);
