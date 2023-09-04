import { Request, Response, NextFunction, RequestHandler } from "express";
import Food from "../models/Food";
import { ErrorResponse } from "../utils/errorResponse";
import { asyncHandler } from "../middleware/async";

export const createFood = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const food = await Food.create(req.body);
    res.status(200).json({
      success: true,
      data: food,
    });
  }
);

export const getFoods = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const foods = await Food.find();

    res.status(200).json({
      success: true,
      count: foods.length,
      data: foods,
    });
  }
);

export const getFood = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const food = await Food.findById(req.params.id);

    if (!food) {
      return next(
        new ErrorResponse(`Food not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({
      success: true,
      data: food,
    });
  }
);

export const updateFood = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const food = await Food.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!food) {
      return next(
        new ErrorResponse(`Food not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({
      success: true,
      data: food,
    });
  }
);

export const deleteFood = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const food = await Food.findByIdAndDelete(req.params.id);

    if (!food) {
      return next(
        new ErrorResponse(`Food not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({
      success: true,
      data: {},
    });
  }
);
