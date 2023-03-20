"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const restaurantsController_1 = require("../controllers/restaurantsController");
const router = (0, express_1.Router)();
router.get("/getRestaurants", restaurantsController_1.RestaurantsController.getRestaurants);
router.post("/createRestaurant", restaurantsController_1.RestaurantsController.createRestaurant);
router.post("/updateRestaurant", restaurantsController_1.RestaurantsController.updateRestaurant);
exports.default = router;
