import express from "express";
import {
  createGig,
  deleteGig,
  getGig,
  getGigs,
} from "../controllers/gig.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.get("/", verifyToken, getGigs);
router.post("/", verifyToken, createGig);

router.get("/:id", verifyToken, getGig);
router.delete("/:id", verifyToken, deleteGig);

export default router;
