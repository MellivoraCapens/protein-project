import { Request, Response, NextFunction } from "express";
import User from "../models/User";
import { ErrorResponse } from "../utils/errorResponse";
import { asyncHandler } from "../middleware/async";

// @desc    create user
// @route   POST /api/v1/users
// @access  private
export const createUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.create(req.body);
    res.status(200).json({
      success: true,
      data: user,
    });
  }
);

// @desc    show all users
// @route   GET /api/v1/users
// @access  public
export const getUsers = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await User.find();

    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  }
);

// @desc    show single user
// @route   GET /api/v1/users/:id
// @access  public
export const getUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findById(req.params.id);

    if (!user) {
      return next(
        new ErrorResponse(`User not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  }
);

// @desc    update user
// @route   PUT /api/v1/users/:id
// @access  private
export const updateUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return next(
        new ErrorResponse(`User not found with id of ${req.params.id}`, 404)
      );
    }

    if (req.body.password) {
      return next(
        new ErrorResponse(
          `User role is not authorized to access this route`,
          401
        )
      );
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  }
);

// @desc    delete user
// @route   DELETE /api/v1/users/:id
// @access  private
export const deleteUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return next(
        new ErrorResponse(`User not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({
      success: true,
      data: {},
    });
  }
);
