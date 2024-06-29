import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import studentRoutes from "./routes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", studentRoutes);

export default app;
