import { studentModel } from "../../../databases/models/studentModel.models.js"
import { AppError } from "../../utils/AppError.js"
import { catchError } from "../../utils/catchError.js"


 
 


// Get Student grades 
export const getgrades = catchError(async (req, res, next) => {
    let subject = await subjectModel.find();
    // created
      res.status(201).json({ message: "your grades is", subject });
  });


  //  Get subject BY_ID
  
   export  const postComplaint =catchError(async(req,res,next)=>{
    complaint =new teacherModel(req.body)
    await complaint.save()
    res.status(201).json({message:"Done",complaint})

    })
       