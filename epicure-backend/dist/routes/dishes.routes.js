"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dishesController_1 = require("../controllers/dishesController");
const router = (0, express_1.Router)();
router.get("/getDishes", dishesController_1.DishesController.getDishes);
router.post("/createDish", dishesController_1.DishesController.createDish);
router.post("/updateDish", dishesController_1.DishesController.updateDish);
exports.default = router;
