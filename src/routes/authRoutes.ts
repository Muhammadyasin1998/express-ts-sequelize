// import express from "express";
// import { registerUser, loginUser } from "../controllers/authController";

// const router = express.Router();
// router.post("/signup", registerUser);
// router.post("/login", loginUser);

// export default router;
// src/routes/authRoutes.ts
import { Router } from 'express';
import { AuthController } from '../controllers/authController';

const router = Router();

router.post('/register', AuthController.register);

export default router;
