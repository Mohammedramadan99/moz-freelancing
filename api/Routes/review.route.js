import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import {
  createReview,
} from "../controllers/review.controller.js";

const router = express.Router();

router.post("/", verifyToken, createReview )
export default router;
