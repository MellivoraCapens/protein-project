import express, { Request, Response, NextFunction } from "express";
import { connectDB } from "./config/db";
import "dotenv/config";
import User from "./models/User";
import users from "./routes/users";
import foods from "./routes/foods";
import { errorHandler } from "./middleware/error";

connectDB();

const app: express.Application = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/v1/users", users);
app.use("/api/v1/foods", foods);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV}mode on port ${PORT}`
  );
});
