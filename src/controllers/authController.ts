// src/controllers/authController.ts
import { Request, Response } from 'express';
import { AuthService } from '../services/authService';

export class AuthController {
  static async register(req: Request, res: Response): Promise<void> {
    try {
      const { email, password, firstName, lastName } = req.body;

      // Register the user
      const user = await AuthService.registerUser({ email, password, firstName, lastName });

      // Success response
      res.status(201).json({
        status: true,
        message: null,
        data: user,
      });
    } catch (error) {
      // Handle the 'unknown' type error
      let errorMessage = 'An error occurred during registration.';
      if (error instanceof Error) {
        errorMessage = error.message;
      }

      // Error response
      res.status(400).json({
        status: false,
        message: errorMessage,
        data: null,
      });
    }
  }
}