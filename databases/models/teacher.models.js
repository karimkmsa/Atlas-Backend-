import { Schema, Types, model } from "mongoose";

const teacherSchema = new Schema(
  {
    // personal information
    firstName: {
      type: String,
      required: [true, "firstname is required"],
      trim: true,
      min: [2, "minimum length 2 char"],
      max: [20, "max length 2 char"],
    },
    lastName: {
      type: String,
      required: [true, "lastname is required"],
      trim: true,
      min: [2, "minimum length 2 char"],
      max: [20, "max length 2 char"],
    },

    phone: {
      type: Number,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    password:{
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    dateOfPlace: {
      type: String,
      required: true,
    },
    subject: {
      type: Schema.ObjectId,
      ref: "subject",
    },
    education: {
      univeristy: {
        type: String,
        required: true,
      },
      degree: {
        type: String,
        required: true,
      },
      startDate: {
        type: Date,
        required: true,
      },
      endDate: {
        type: Date,
      },
      city: {
        type: String,
        required: true,
      },
    },
    role: {
      type: String,
      default: "teacher",
    },
  },
  { timeStamp: true }
);

export const teacherModel = model("teacher", teacherSchema);
