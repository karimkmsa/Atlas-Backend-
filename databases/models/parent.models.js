import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt';




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
parentSchema.pre("save", function () {
  this.password = bcrypt.hashSync(this.password, parseInt(process.env.SALTROUND))
})

parentSchema.pre('findOneAndUpdate',function(){
      if(this._update.password)this._update.password=bcrypt.hashSync(this._update.password,parseInt(process.env.SALTROUND))
  })
  




const parentModel = mongoose.model("parent", parentSchema);

export default parentModel;
