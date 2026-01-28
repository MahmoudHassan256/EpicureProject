import { Router } from "express";
import { UsersController } from "../controllers/usersController";

const router = Router();

router.post("/login", UsersController.loginUser);
router.post("/signup", UsersController.signupUser);

export default router;
