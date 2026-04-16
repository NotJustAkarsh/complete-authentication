import { Router } from "express";
import * as authController from "../controllers/auth.controlller.js";

const authRouter = Router();

/**
 * POST api/auth/register
 * Register User API
 */
authRouter.post("/register", authController.register);

/**
 * GET api/auth/get-me
 * Get Current User API
 */
authRouter.get("/get-me", authController.getMe);

export default authRouter;
