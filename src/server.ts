import express from "express";
import { connectDB } from "./config/db";
import "dotenv/config";
import User from "./models/User";

connectDB();

const app: express.Application = express();

const PORT = process.env.PORT;

app.use(express.json());

app.get("/users", async (req, res) => {
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
});

app.post("/create", async (req, res) => {
  console.log(req.body);
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
});

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV}mode on port ${PORT}`
  );
});
