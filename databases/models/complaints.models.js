import mongoose from "mongoose";


const complaintSchema = new mongoose.Schema({
complaint:{
    type:String


},
student:{
    type:Schema.ObjectId,
    ref:"student",
  }
},{
    timestamps: true
})

const complaintModel = mongoose.model("complaint",complaintSchema);


export default complaintModel;


