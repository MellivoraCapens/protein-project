import { Router } from "express";
import { createUser, getUsers } from "../controllers/users";

const router = Router();

router.route("/").get(getUsers).post(createUser);

export default router;
