import mongoose, { Schema } from "mongoose";

const parentSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password:{
      type: String,
      required: true,
    },
    phone:{
      type:String,
      required:true

    },
    address:{
      type:String,
      required:true

    },
    student: {
      type: Schema.ObjectId,
      ref: "Student",
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
