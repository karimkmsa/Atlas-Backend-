import mongoose from "mongoose";


const complaintSchema = new mongoose.Schema({
complaint:{
    type:String
}
},{
    timestamps: true
})

const complaintModel = mongoose.model("complaint",complaintSchema);


export default complaintModel;


