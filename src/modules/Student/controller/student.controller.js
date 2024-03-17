import complaintModel from "../../../../databases/models/complaints.models.js";
import { AppError } from "../../../utils/AppError.js"
import { catchError } from "../../../utils/catchError.js"


 
 


// // Get Student grades 
// export const getgrades = catchError(async (req, res, next) => {
//     let subject = await subjectModel.find();
//     // created
//       res.status(201).json({ message: "your grades is", subject });
//   });


  //  post complaint 
  
   export  const postComplaint =catchError(async(req,res,next)=>{
    complaint =new complaintModel(req.body)
    await complaint.save()
    res.status(201).json({message:"Done",complaint})

    })
   
    
