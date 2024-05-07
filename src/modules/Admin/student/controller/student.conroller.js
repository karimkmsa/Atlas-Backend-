import studentModel from "../../../../../databases/models/student.model.js"
import { AppError } from "../../../../utils/AppError.js"
import { catchError } from "../../../../utils/catchError.js"
import { deleteOne } from "../../../handlers/refactor.js"
import { generateToken } from "../../../../middleware/authToken.js";
import cloudinary from "../../../../multer/cloudinary.js";
 



// Add Student
export const addStudent = catchError(async (req, res, next) => {
  let studentData = req.body;
  if (req.file) {
      // Attach the image filename from the uploaded file to the student data
      studentData.image = req.file.filename;
      await cloudinary.uploader.upload(studentData.image)
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


  export const updateStudentData = catchError(async (req, res, next) => {
    const { id } = req.params;
 
    console.log(id);
    // Exclude email field from req.body
    const {email,...rest}=req.body
    if (req.file) {
        // Attach the image filename from the uploaded file to the student data
        rest.image = req.file.filename;
    } else {
        // Handle cases where no file was uploaded
        return res.status(400).json({ success: false, message: "No image file uploaded" });
    }

    const studentData = await studentModel.findByIdAndUpdate(
        id,
        rest,
        { new: true }
    );

    console.log(studentData);
    !studentData && next(new AppError('StudentData not found', 404));

    studentData && res.status(201).json({ message: "this is StudentData", studentData });
});




 export const deleteStudentData= deleteOne(studentModel,"StudentData")




  