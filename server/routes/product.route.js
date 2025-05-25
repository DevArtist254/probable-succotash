const express = require("express");
const {
  getCarListings,
  createACarlisting,
  getCarDetails,
} = require("../controller/product.controller");
const { protect, restrictTo } = require("../controller/auth.controller");

const router = express.Router();

router.get("/car_listing", getCarListings);
router.get("/car_listing/:id", getCarDetails);
router.post(
  "/createCarlisting",
  protect,
  restrictTo("seller"),
  createACarlisting
);

module.exports = router;
