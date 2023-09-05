import { Router } from "express";
import { login, register, getMe } from "../controllers/auth";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.get("/me", getMe);

export default router;
