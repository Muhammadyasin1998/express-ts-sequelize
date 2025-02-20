import { Sequelize } from "sequelize-typescript";
import User from '../models/userModel';
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  logging: false,
  models: [User],
});

export const connectDB = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("✅ Database connected");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
};
// src/utils/db.ts
// import { Sequelize } from 'sequelize-typescript';
// import { User } from '../models/userModel';
// import dotenv from 'dotenv';

// dotenv.config();

// const sequelize = new Sequelize({
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   dialect: 'mysql',
//   models: [User],
// });

// export default sequelize;
