import express, { Request, Response, NextFunction } from "express";
import { connectDB } from "./config/db";
import "dotenv/config";
import users from "./routes/users";
import foods from "./routes/foods";
import auth from "./routes/auth";
import { errorHandler } from "./middleware/error";

connectDB();

const app: express.Application = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1/users", users);
app.use("/api/v1/foods", foods);
app.use("/api/v1/auth", auth);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV}mode on port ${PORT}`
  );
});
