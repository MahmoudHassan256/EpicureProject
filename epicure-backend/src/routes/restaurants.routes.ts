import { Router } from "express";
import { RestaurantsController } from "../controllers/restaurantsController";

const router = Router();

router.get("/getRestaurants", RestaurantsController.getRestaurants);
router.post("/createRestaurant", RestaurantsController.createRestaurant);
router.post("/updateRestaurant", RestaurantsController.updateRestaurant);
router.post("/getRestaurant", RestaurantsController.getRestaurant);
router.post("/deleteRestaurant", RestaurantsController.deleteRestaurant);

export default router;
