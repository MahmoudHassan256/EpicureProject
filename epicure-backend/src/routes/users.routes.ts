import { Router } from "express";
import { UsersController } from "../controllers/usersController";

const router = Router();

router.post("/getUser", UsersController.getUser);
router.post("/createUser", UsersController.createUser);

export default router;


