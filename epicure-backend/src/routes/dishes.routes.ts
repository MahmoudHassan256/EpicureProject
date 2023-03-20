import { Router } from "express";
import { DishesController } from "../controllers/dishesController";

const router = Router();

router.get("/getDishes", DishesController.getDishes);
router.post("/createDish", DishesController.createDish);
router.post("/updateDish", DishesController.updateDish);

export default router;


