import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import {
  createReview, getReviews,
} from "../controllers/review.controller.js";

const router = express.Router();

router.get("/:gigId", verifyToken, getReviews )
router.post("/", verifyToken, createReview )
export default router;
