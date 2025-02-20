// src/services/authService.ts
import User from '../models/userModel';
import * as bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
const { isEmpty, isNull, isNil, } = require("lodash");
interface RegisterInput {
  email: string;
  password: string;
  name: string;
  image_url: string;
  gender: string;
}
interface AuthResponse {
  user: User;
  token: string;
}
export class AuthService {
  static async registerUser(input: RegisterInput): Promise<AuthResponse> {
    const { email, password, image_url, name ,gender} = input;
    /* This is checking if the fields are empty or not. */
    if (isEmpty(email) || isEmpty(password) || isEmpty(image_url) || isEmpty(name) || isEmpty(gender)) {
      throw new Error('Required Fields cannot be empty');
    }
    // Check if the user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      throw new Error('User with this email already exists.');
    }

  if (password.length < 8) {
      throw new Error('Password must be at least 8 characters long.');
    }
const hashedPassword = await bcrypt.hash(password, 10);
console.log(hashedPassword);
    // Create the user
    const user = await User.create({
      email,
     password:hashedPassword,
      image_url,
      name,
      gender
    });

 const payload = {
      id: user.id,
      email: user.email,
    };

      const token:string= jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '100d' });
const { password: _, ...userWithoutPassword } = user.get({ plain: true });

    return { user: userWithoutPassword, token };
  }
}