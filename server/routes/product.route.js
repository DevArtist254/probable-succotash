const express = require("express");
const { getCarListings } = require("../controller/product.controller");

const router = express.Router();

router.get("/car_listing", getCarListings);

module.exports = router;
