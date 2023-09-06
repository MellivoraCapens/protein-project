import { Router } from "express";
import {
  createFood,
  getFoods,
  getFood,
  updateFood,
  deleteFood,
} from "../controllers/foods";

const router = Router();

router.route("/").get(getFoods).post(createFood);

router.route("/:id").get(getFood).put(updateFood).delete(deleteFood);

export default router;
