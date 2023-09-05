import { Request, Response } from "express";

interface CustomRequest extends Request {
  decoded: string;
  user: IUser;
}

interface CustomError extends Error {}
