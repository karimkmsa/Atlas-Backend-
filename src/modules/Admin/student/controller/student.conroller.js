import studentModel from "../../../../../databases/models/student.model.js"
import { AppError } from "../../../../utils/AppError.js"
import { catchError } from "../../../../utils/catchError.js"
import { deleteOne } from "../../../handlers/refactor.js"
import { generateToken } from "../../../../middleware/authToken.js";
 



// Add Student
// Add Student
export const addStudent = catchError(async (req, res, next) => {
  let studentData = req.body;
  if (req.file) {
      // Attach the image filename from the uploaded file to the student data
      studentData.image = req.file.filename;
  } else {
      // Handle cases where no file was uploaded
      return res.status(400).json({ success: false, message: "No image file uploaded" });
  }

  console.log(req.body); // Debugging to see what is received in the request body

  // Check if a student with the same email already exists
  const exist = await studentModel.findOne({ email: studentData.email });
  if (exist) {
      return res.status(404).json({ success: false, message: "Student email already exists" });
  }

  // Create a new student record
  let result = new studentModel(studentData);

  try {
      await result.save(); // Save the new student record to the database
      const token = generateToken({
          id: result._id,
          email: result.email,
          role: result.role,
      }, process.env.JWT_SECRET);

      // Respond with success message
      res.status(201).json({ success: true, message: "Student Added", result });
  } catch (error) {
      console.error("Error saving to the database:", error);
      res.status(500).json({ success: false, message: "Internal server error", error });
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




  