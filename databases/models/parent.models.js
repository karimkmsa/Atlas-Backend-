import { number } from "joi";
import mongoose from "mongoose";

const parentSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    LastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone:{
      type:String,
      required:true

    },
    Address:{
      type:String,
      required:true

    },
    student: {
      type: Schema.ObjectId,
      ref: "student",
    },
    role :{
      type:String,
      default:"parent"
  
  
  }
  },
  {
    timestamps: true,
  }
);

const parentModel = mongoose.model("parent", parentSchema);

export default parentModel;
