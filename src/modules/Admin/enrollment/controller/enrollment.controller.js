import  enrollmentModel  from "../../../../../databases/models/enrollment.models.js"
import { AppError } from "../../../../utils/AppError.js"
import { catchError } from "../../../../utils/catchError.js"
import { deleteOne } from "../../../handlers/refactor.js" 
import { generateToken } from "../../../../middleware/authToken.js";





//ADD enrollment
 const addenrollment = catchError(async (req, res, next) => {
  let enrollmentData= req.body
    let result = new enrollmentModel(enrollmentData)
    await result.save()
    res.status(201).json({message:"enrollment Data added", result})

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
