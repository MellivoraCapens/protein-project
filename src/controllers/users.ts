import { RequestHandler } from "express";
import User from "../models/User";

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};

export const getUsers: RequestHandler = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};
