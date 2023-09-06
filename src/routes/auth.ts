import { Router } from "express";
import {
  login,
  register,
  getMe,
  forgotPassword,
  resetPassword,
} from "../controllers/auth";
import { protect } from "../middleware/auth";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.get("/me", protect, getMe);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword/:resettoken", resetPassword);

export default router;
