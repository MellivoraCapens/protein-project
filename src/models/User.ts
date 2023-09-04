import mongoose, { Schema } from "mongoose";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  role: string;
  resetPasswordToken: string;
  resetPasswordExpire: Date;
  createdAt: Date;
}

const UserSchema: Schema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, "Please add a name"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: 6,
    select: false,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET as jwt.Secret, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

UserSchema.methods.matchPassword = async function (enteredPassword: any) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model("User", UserSchema);
