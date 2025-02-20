import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./utils/db";
import authRoutes from "./routes/authRoutes";
import uploadRoutes from "./routes/upload"; // Import upload routes

dotenv.config();

const app = express();
app.use(express.json());

// Serve static images
app.use("/images", express.static("public/images"));

app.use("/api/auth", authRoutes);
uploadRoutes(app); // Initialize the upload route

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
