import { Router } from "express";
import {
  createFood,
  getFoods,
  getFood,
  updateFood,
  deleteFood,
} from "../controllers/foods";
// import { protect, authorize } from "../middleware/auth";

const router = Router();

// router.use(protect);
// router.use(authorize("admin"));

router.route("/").get(getFoods).post(createFood);

router.route("/:id").get(getFood).put(updateFood).delete(deleteFood);

export default router;
