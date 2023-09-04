import mongoose from "mongoose";

export const connectDB = async () => {
  const conn = await mongoose.connect(
    `${process.env.MONGO_URI}/protein-project`
  );

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};
