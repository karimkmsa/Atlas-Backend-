import mongoose from "mongoose";


const medicalRecordSchema = new mongoose.Schema({
medicalRecord:{
    type:String
}
},{
    timestamps: true
})

const medicalRecordModel = mongoose.model("MedicalRecord",medicalRecordSchema);


export default medicalRecordModel;
