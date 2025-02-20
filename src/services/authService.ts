// src/services/authService.ts
import User from '../models/userModel';

interface RegisterInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export class AuthService {
  static async registerUser(input: RegisterInput): Promise<User> {
    const { email, password, firstName, lastName } = input;

    // Check if the user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      throw new Error('User with this email already exists.');
    }

       const existingUser1 = await User.findOne({ where: { firstName } });
    if (existingUser1) {
      throw new Error('User with this first name already exists.');
    }

    // Create the user
    const user = await User.create({
      email,
      password,
      firstName,
      lastName,
    });

    return user;
  }
}