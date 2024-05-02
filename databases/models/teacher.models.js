import { Schema, Types, model } from "mongoose";
import bcrypt from 'bcrypt';


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
    placeOfBirth: {
      type:String,
      required: true,
    },
    image:{
      type:String, 
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
teacherSchema.pre("save", function () {
  this.password = bcrypt.hashSync(this.password, parseInt(process.env.SALTROUND))
})

teacherSchema.pre('findOneAndUpdate',function(){
      if(this._update.password)this._update.password=bcrypt.hashSync(this._update.password,parseInt(process.env.SALTROUND))
  })
  
  teacherSchema.post('init',function(doc){
    console.log(doc.image);
  doc.image = process.env.BASE_FILE_URL+"teacher/"+ doc.image
})





export const teacherModel = model("teacher", teacherSchema);
