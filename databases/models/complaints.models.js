import mongoose from "mongoose";


const complaintSchema = new mongoose.Schema({
complaint:{
    type:String,
    trim:true
}
,
role: {
    type: String,
    enum:['student','parent'],
    default:'student'
}
},{
    timestamps: true
})

const complaintModel = mongoose.model("complaint",complaintSchema);


export default complaintModel;


