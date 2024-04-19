import studentModel from "../../../../../databases/models/student.model.js"
import { AppError } from "../../../../utils/AppError.js"
import { catchError } from "../../../../utils/catchError.js"
import { deleteOne } from "../../../handlers/refactor.js"



// Add Student
export const addStudent = catchError(async(req,res,next) => {
    let studentData= req.body
        let result = new studentModel(studentData)
        await result.save()
        res.status(201).json({success:true,message:"studentData added", result})
}) 


// Get StudentData
export const getAllSubjects = catchError(async (req, res, next) => {
    let studentData = await studentModel.find();
    // created
      res.status(201).json({ success:true,message: "Done this is StudentData", studentData });
  });


  //  Get StudentData BY_ID
  
    export const getStudentDataByID=catchError(async(req,res,next)=>{

        const StudentData=await studentModel.findById(req.params.id)
        !StudentData && next(new AppError('student not found',404))

        StudentData &&   res.status(201).json({success:true,message:"this is StudentData",StudentData})

    })
     



    


export const updateStudentData= catchError(async(req,res,next)=>{
    const{id}=req.params
    const StudentData=await studentModel.findByIdAndUpdate(
        id,
        req.body,
        {new:true}
    )
    !StudentData && next(new AppError('StudentData not found',404))

    StudentData &&   res.status(201).json({message:"this is StudentData",StudentData})
}
)


 export const deleteStudentData= deleteOne(studentModel,"StudentData")




  