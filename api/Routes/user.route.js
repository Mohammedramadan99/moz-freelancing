import express from "express";
import { deleteUser,allUsers } from "../controllers/user.controller.js";


const router = express.Router();

router.get("/",allUsers);
router.post("/delete",deleteUser);

export default router;
