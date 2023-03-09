import express from "express";
import {
  allGigs,
  createGig, deleteGig
} from "../controllers/gig.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.get("/", verifyToken, allGigs);
router.post("/", verifyToken, createGig);
router.delete("/:id", verifyToken, deleteGig);
export default router;