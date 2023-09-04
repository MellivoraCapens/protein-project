import mongoose from "mongoose";
import config from "./index";

export const connectDB = async () => {
  const conn = await mongoose.connect(
    `${process.env.MONGO_URI}/protein-project`
  );

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};
