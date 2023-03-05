import express from "express";
import { deleteUser } from "../Controllers/user.controller.js";


const router = express.Router();

router.post("/delete",deleteUser);

export default router;
