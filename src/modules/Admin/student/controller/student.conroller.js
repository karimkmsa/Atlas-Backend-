import studentModel from "../../../../../databases/models/student.model.js"
import { AppError } from "../../../../utils/AppError.js"
import { catchError } from "../../../../utils/catchError.js"
import { deleteOne } from "../../../handlers/refactor.js"
import { generateToken } from "../../../../middleware/authToken.js";
 



// Add Student
export const addStudent = catchError(async (req, res, next) => {
    let studentData= req.body
    const exist = await studentModel.findOne({email:studentData.email });
    if (exist) {
      return res
        .status(404)
        .json({ success: false, message: "Student email already exist" });
    }
    let result = new studentModel(studentData);
    
    try {
      await result.save();
      const token = generateToken({
        id: result._id,
        email: result.email,
        role: result.role,
      },process.env.JWT_SECRET)
      res
        .status(201)
        .json({ success: true, message: "Student Added", result });
    } catch (error) {
      console.error("Error saving to the database:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
    
  });
   
// Get StudentData
export const getAllStudent = catchError(async (req, res, next) => {
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
     



    
  //  updateStudentData


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




  