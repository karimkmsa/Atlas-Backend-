import mongoose from "mongoose";


const medicalRecordSchema = new mongoose.Schema({
medicalRecord:{
    type:String,
    trim:true
}
},{
    timestamps: true
})

const medicalRecordModel = mongoose.model("MedicalRecord",medicalRecordSchema);


export default medicalRecordModel;
