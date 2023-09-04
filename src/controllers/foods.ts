import { Request, Response, NextFunction, RequestHandler } from "express";
import Food from "../models/Food";
import { ErrorResponse } from "../utils/errorResponse";
import { asyncHandler } from "../middleware/async";

// @desc    create food
// @route   POST /api/v1/foods
// @access  private
export const createFood = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const food = await Food.create(req.body);
    res.status(200).json({
      success: true,
      data: food,
    });
  }
);

// @desc    show all foods
// @route   GET /api/v1/foods
// @access  public
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

// @desc    show single food
// @route   GET /api/v1/foods/:id
// @access  public
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

// @desc    update food
// @route   PUT /api/v1/foods/:id
// @access  private
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

// @desc    delete food
// @route   DELETE /api/v1/foods/:id
// @access  private
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
