import complaintModel from "../../../../databases/models/complaints.models.js";
import { catchError } from "../../../utils/catchError.js"



export  const postComplaint =catchError(async(req,res,next)=>{
    let complaint= req.body
    let result = new complaintModel(complaint)
    await result.save()
    res.status(201).json({message:"complaint added", result})


    })

    export const showComplaint =catchError(async (req, res, next) => {
        let show = await complaintModel.find();
          res.status(201).json({ message: "complaints", show });
      });
  