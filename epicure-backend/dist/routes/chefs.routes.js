"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chefsController_1 = require("../controllers/chefsController");
const router = (0, express_1.Router)();
router.get("/getChefs", chefsController_1.ChefsController.getChefs);
router.post("/getChef", chefsController_1.ChefsController.getChef);
router.post("/createChef", chefsController_1.ChefsController.createChef);
router.post("/updateChef", chefsController_1.ChefsController.updateChef);
exports.default = router;
