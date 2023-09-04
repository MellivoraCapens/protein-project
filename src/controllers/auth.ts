import { Request, Response, NextFunction } from "express";
import User from "../models/User";
import { ErrorResponse } from "../utils/errorResponse";
import { asyncHandler } from "../middleware/async";

export const login = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(
        new ErrorResponse("Please provide an email and a password", 400)
      );
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    const token = user.getSignedJwtToken();

    res.status(200).json({
      success: true,
      token,
    });
  }
);

export const register = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password, role } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      role,
    });

    const token = user.getSignedJwtToken();

    res.status(200).json({ success: true, token });
  }
);
