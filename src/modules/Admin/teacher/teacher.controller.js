import { teacherModel } from "../../../../databases/models/teacher.models.js"
import { Apifeatures } from "../../../utils/Apifeatures.js"
import { AppError } from "../../../utils/AppError.js"
import { catchError } from "../../../utils/catchError.js"
import { deleteOne } from "../../handlers/refactor.js"
import { generateToken } from "../../../middleware/authToken.js";




// Add teacher
 const addTeacher = catchError(async (req, res, next) => {
  let teacherData = req.body;

  // Handle file upload for the teacher's image
  if (req.file) {
    const {secure_url} = await cloudinary.uploader.upload(req.file.path);
    teacherData.image = secure_url
    console.log(teacherData.image);
 } else {
      return res.status(400).json({ success: false, message: "No image file uploaded" });
  }

  console.log(req.body); // Debugging to see what is received in the request body

  // Check if a teacher with the same email already exists
  const exist = await teacherModel.findOne({ email: teacherData.email });
  if (exist) {
      return res.status(404).json({ success: false, message: "Teacher email already exists" });
  }

  // Create a new teacher record
  let result = new teacherModel(teacherData);

  try {
      await result.save(); // Save the new teacher record to the database
      const token = generateToken({
          id: result._id,
          email: result.email,
          role: result.role,
      }, process.env.JWT_SECRET);

      // Respond with success message
      res.status(201).json({ success: true, message: "Teacher Added", result });
  } catch (error) {
      console.error("Error saving to the database:", error);
      res.status(500).json({ success: false, message: "Internal server error", error });
  }
});



// Get teacher
const getAllteachers=catchError(async(req,res,next)=>{
    let apifeatures= new Apifeatures( teacherModel.find(),req.query)
    .pagination().search()
    // created
    const teachers = await apifeatures.mongooseQuery
        res.status(201).json({ message: 'Done this is teachers list', page:apifeatures.page, teachers });
    })


  //  Get Teacher BY_ID
  
    const getTeacherByID=catchError(async(req,res,next)=>{

        const teacher=await teacherModel.findById(req.params.id)
        if (!teacher) {
            next(new AppError(" Teacher not found",404))
        } else {
            res.status(201).json({ message: " Done this is teacher", teacher})
    
        }

    })
   //  updateTeacher

    const updateTeacher = catchError(async (req, res, next) => {
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

    const teacherData = await teacherModel.findByIdAndUpdate(
        id,
        rest,
        { new: true }
    );

    console.log(teacherData);
    !teacherData && next(new AppError('TeacherData not found', 404));

    teacherData && res.status(201).json({ message: "this is TeacherData", teacherData });
});



 const deleteTeacher= deleteOne(teacherModel,"Teacher")




export {
 addTeacher,
 getAllteachers,   
 getTeacherByID,
 updateTeacher,
 deleteTeacher
}

  