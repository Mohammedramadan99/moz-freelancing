import express from "express";
import {
  allGigs,
  createGig, deleteGig, getGig
} from "../controllers/gig.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();


router.post("/", verifyToken, createGig);

router.get("/:id", verifyToken, getGig);
router.delete("/:id", verifyToken, deleteGig);

export default router;