import mongoose from "mongoose";


const complaintSchema = new mongoose.Schema({
complaint:{
    type:String
}
,
role: {
    type: String,
    enum:['admin','teacher','student','parent'],
    default:'student'
}
},{
    timestamps: true
})

const complaintModel = mongoose.model("complaint",complaintSchema);


export default complaintModel;


