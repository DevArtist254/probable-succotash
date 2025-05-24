const CatchAsync = require("../utils/CatchAsync");
const Vehicle = require("./../models/vehicle.model");
const factory = require("./factory.controller");

exports.getCarListings = factory.getAll(Vehicle);
// exports.getCarDetail
