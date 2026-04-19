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

/**
 * GET /api/auth/refresh-token
 */
authRouter.get("/refresh-token", authController.refreshToken);

/**
 * GET /api/auth/logout
 * Logout User API
 */
authRouter.get("/logout", authController.logout);

/**
 * POST api/auth/login
 * Login User API
 */
authRouter.post("/login", authController.login);

/**
 * GET /api/auth/logout-all
 * Logout All User API
 */
authRouter.get("/logout-all", authController.logoutAll);

/**
 * GET /api/auth/verify-email
 * Verify Email API
 */
authRouter.get("/verify-email", authController.verifyEmail);

export default authRouter;
