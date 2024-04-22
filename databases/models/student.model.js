import mongoose from "mongoose";
import bcrypt from 'bcrypt';



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

studentSchema.pre("save", function () {
  this.password = bcrypt.hashSync(this.password, parseInt(process.env.SALTROUND))
})

studentSchema.pre('findOneAndUpdate',function(){
  // console.log(this)
      if(this._update.password)this._update.password=bcrypt.hashSync(this._update.password,parseInt(process.env.SALTROUND))
  })
  



const studentModel = mongoose.model("Student", studentSchema);

export default studentModel;
