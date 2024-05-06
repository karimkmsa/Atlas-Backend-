import  enrollmentModel  from "../../../../../databases/models/enrollment.models.js"
import studentModel from "../../../../../databases/models/student.model.js";
import { subjectModel } from "../../../../../databases/models/subject.models.js";
import { AppError } from "../../../../utils/AppError.js"
import { catchError } from "../../../../utils/catchError.js"
import { deleteOne } from "../../../handlers/refactor.js" 





//ADD enrollment
 const addenrollment = catchError(async (req, res, next) => {
  let enrollmentData= req.body
  //search for Student & Subject if 
  const studentExist = await studentModel.findOne({_id:enrollmentData.student})
  const subjectExist = await subjectModel.findOne({_id:enrollmentData.subject})
  if(!studentExist){
  res.status(404).json({message:"Student not found"})

  }
  if(!subjectExist){
    res.status(404).json({message:"subject not found"})
  
    }
    else{
    let result = new enrollmentModel(enrollmentData)
    await result.save()
    res.status(201).json({message:"enrollment Data added", result})
    }
  });
// Get enrollment
const getAllenrollments = catchError(async (req, res, next) => {
    let data = await enrollmentModel.find().populate("student");
    res.status(201).json({ message: "enrollmentModel", data }); 

});




//  Update enrollment 
const updateenrollment= catchError(async(req,res,next)=>{
    const{id}=req.params
    const enrollment=await enrollmentModel.findByIdAndUpdate(
        id,
        req.body,
        {new:true}
    )
    !enrollment && next(new AppError('enrollment not found',404))

      enrollment &&   res.status(201).json({message:"Done",enrollment})
}
)




//  delete enrollment 

 const deleteenrollment= deleteOne(enrollmentModel,"enrollment")




export {
 addenrollment,
 getAllenrollments,   
 updateenrollment,
 deleteenrollment
}
