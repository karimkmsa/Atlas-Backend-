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
age: {
    type:Number,
    required:true

},
email:{
    type:String,
    required:true


},
complaint:{
    type:String,


}




},{
    timestamps: true
})

const studentModel = mongoose.model("Student",studentSchema);


export default studentModel;


