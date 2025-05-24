const CatchAsync = require("../utils/CatchAsync");
const Vehicle = require("./../models/vehicle.model");

exports.getCarListings = CatchAsync(async (req, res, next) => {
  const cars = await Vehicle.find({});

  res.status(202).json({
    status: "success",
    data: {
      cars,
    },
  });
});
