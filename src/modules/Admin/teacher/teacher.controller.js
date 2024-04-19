import { teacherModel } from "../../../../databases/models/teacher.models.js"
import { Apifeatures } from "../../../utils/Apifeatures.js"
import { AppError } from "../../../utils/AppError.js"
import { catchError } from "../../../utils/catchError.js"
import { deleteOne } from "../../handlers/refactor.js"
import { generateToken } from "../../../middleware/authToken.js";




// Add teacher

 const addTeacher = catchError(async (req, res, next) => {
    let teacherData= req.body
    const exist = await teacherModel.findOne({email:teacherData.email});
    if (exist) {
      return res
        .status(404)
        .json({ success: false, message: "teacher email already exist" });
    }
    let result = new teacherModel(teacherData);
    
    try {
      await result.save();
      const token = generateToken({
        id: result._id,
        email: result.email,
        role: result.role,
      },process.env.JWT_SECRET)
      res
        .status(201)
        .json({ success: true, message: "teacher Added", result });
    } catch (error) {
      console.error("Error saving to the database:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
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
     
const updateTeacher= catchError(async(req,res,next)=>{
    const{id}=req.params
    const teacher=await teacherModel.findByIdAndUpdate(
        id,
        req.body,
        {new:true}
    )
    !teacher && next(new AppError('teacher not found',404))

      teacher &&   res.status(201).json({message:"Done",teacher})
}
)


 const deleteTeacher= deleteOne(teacherModel,"Teacher")




export {
 addTeacher,
 getAllteachers,   
 getTeacherByID,
//GetTeacherProfile,
 updateTeacher,
 deleteTeacher
}

  