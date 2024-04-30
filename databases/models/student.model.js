import mongoose from "mongoose";
import bcrypt from 'bcrypt';



const studentSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      // required: [true,"Student first name required"],
      trim :true
    },
    lastName: {
      type: String,
      // required: [true,"student last name required"],
      trim :true
    },
    dateOfBirth: {
      type: Date,
      // required: true,
    },
    dateOfPlace: {
      type: String,
      // required: true,
    },
    image:{
      type:String, 
    },
    address: {
      type:String,
      // required:[true,"address required"],
      trim:true
    },
    grade: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      // required: true,
      trim:true
    },
    password:{
      type: String,
      // required: true
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
      if(this._update.password)this._update.password=bcrypt.hashSync(this._update.password,parseInt(process.env.SALTROUND))
  })
  studentSchema.post('init',function(doc){
      console.log(doc.image);
    doc.image = process.env.BASE_FILE_URL+ doc.image
  })

const studentModel = mongoose.model("Student", studentSchema);

export default studentModel;
