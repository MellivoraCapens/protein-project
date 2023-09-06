import { Request, Response, NextFunction } from "express";
import User from "../models/User";
import { ErrorResponse } from "../utils/errorResponse";
import { asyncHandler } from "../middleware/async";

// @desc    login user
// @route   POST /api/v1/auth/login
// @access  public
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

    sendTokenResponse(user, 200, res);
  }
);

// @desc    register user
// @route   POST /api/v1/auth/register
// @access  public
export const register = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password, role } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      role,
    });

    sendTokenResponse(user, 200, res);
  }
);

// @desc    get current logged in user
// @route   GET /api/v1/auth/me
// @access  private
export const getMe = asyncHandler(
  async (req: any, res: Response, next: NextFunction) => {
    const user = await User.findById(req.user.id);
    res.status(200).json({
      success: true,
      data: user,
    });
  }
);

const sendTokenResponse = (user: any, statusCode: number, res: Response) => {
  const token = user.getSignedJwtToken();
  const options = {
    expires: new Date(
      Date.now() + +process.env.JWT_COOKIE_EXPIRE! * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: false,
  };
  if (process.env.NODE_ENV === "product") {
    options.secure = true;
  }
  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({ success: true, token });
};
