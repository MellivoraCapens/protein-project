import express from "express";
import { connectDB } from "./config/db";
import "dotenv/config";

connectDB();

const app: express.Application = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("TypeScript With Express");
});

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV}mode on port ${PORT}`
  );
});
