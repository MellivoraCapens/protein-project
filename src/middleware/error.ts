import { ErrorResponse } from "../utils/errorResponse";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let error = { ...err };
  console.log(error);

  if (err.name === "CastError") {
    const message = `User not found with id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  if (err.name === "ValidationError") {
    const printMessages = Object.values(err.errors).map(
      (val: any) => val.message
    );
    const message = `${printMessages}`;
    error = new ErrorResponse(message, 400);
  }

  if (err.code === 11000) {
    const message = `Duplicate field value entered`;
    error = new ErrorResponse(message, 400);
  }

  console.log(error.statusCode);
  console.log(error);

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};
