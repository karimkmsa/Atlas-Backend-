import mongoose from "mongoose";
import bcrypt from 'bcrypt';


const adminSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true,"admin first Name required"],
      trim :true
    },
    lastName: {
      type: String,
      required: [true,"admin last Name required"],
      trim :true
    },
    email: {
      type: String,
      required: [true,"email required"],
      trim :true
    },
    password:{
      type: String,
      required: true

    },
    role: {
      type: String,
      default: "admin",
    },
  },
  {
    timestamps: true,
  }
);
adminSchema.pre("save", function   ()  {
  this.password = bcrypt.hashSync(this.password,8)
})

const adminModel = mongoose.model("admin", adminSchema);

export default adminModel;
