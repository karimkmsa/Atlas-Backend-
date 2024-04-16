import mongoose from "mongoose";


const studentSchema = new mongoose.Schema({
 firstName: {
    type: String,
    required:true


 },
 LastName:{
    type: String,
    required:true

},
grade: {
    type:String,
    required:true

},
email:{
    type:String,
    required:true
}




},{
    timestamps: true
})

const studentModel = mongoose.model("Student",studentSchema);


export default studentModel;


