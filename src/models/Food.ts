import mongoose, { Schema, modelNames } from "mongoose";
import { IUser } from "./User";

export interface IFood extends mongoose.Document {
  name: string;
  description?: string;
  caloriesPerGram : number;
  proteinPerGram : number;
//   createUser: IUser;
  createdAt: Date;
}

const FoodSchema: Schema = new Schema<IFood>({
  name: {
    type: String,
    required: [true, "Please add a name"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Please add an description"],
  },
  caloriesPerGram: {
    type: Number,
    required : [true, "Please specify calories per gram for the food"],
  },
  proteinPerGram: {
    type: Number,
    required : [true, "Please specify protein per gram for the food"],
  },
//   createUser: {
//     type: mongoose.Types.ObjectId,
//     ref: 'User',
//   },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Food", FoodSchema);
