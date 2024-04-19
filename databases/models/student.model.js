import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    dateOfPlace: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    grade: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password:{
      type: String,
      required: true
    },
    role: {
      type: String,
      default: "student",
    },
  },
  {
    timestamps: true,
  }
);

const studentModel = mongoose.model("Student", studentSchema);

export default studentModel;
