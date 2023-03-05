import express from "express";
import { deleteUser } from "../Controllers/user.controller.js";
import { register,login,logout } from "../Controllers/auth.controller.js";

const router = express.Router();

router.post("/register",register);
router.post("/login",login);
router.post("/logout",logout);

export default router;
