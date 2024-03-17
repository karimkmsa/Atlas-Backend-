import complaintModel from "../../../../databases/models/complaints.models.js";
import { AppError } from "../../../utils/AppError.js"
import { catchError } from "../../../utils/catchError.js"






   export  const postComplaint =catchError(async(req,res,next)=>{
    let complaint= req.body
    let result = new complaintModel(complaint)
    await result.save()
    res.status(201).json({message:"complaint added", result})


    })
 export const show =catchError(async (req, res, next) => {
      let s = await complaintModel.find();
        res.status(201).json({ message: "complaints", s });
    });




   
    
