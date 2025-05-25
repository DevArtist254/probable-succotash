const CatchAsync = require("../utils/CatchAsync");
const Vehicle = require("./../models/vehicle.model");
const factory = require("./factory.controller");

exports.getCarListings = factory.getAll(Vehicle);
exports.getCarDetails = factory.getOne(Vehicle);
exports.createACarlisting = CatchAsync(async (req, res, next) => {
  const doc = await Vehicle.create({
    seller: req.user.id,
    ...req.body,
  });

  res.status(200).json({
    status: "success",
    doc,
  });
});
