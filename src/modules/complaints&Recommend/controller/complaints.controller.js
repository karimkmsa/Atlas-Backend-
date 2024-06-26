import complaintModel from "../../../../databases/models/complaints.models.js";
import { catchError } from "../../../utils/catchError.js"
import { deleteOne } from "../../handlers/refactor.js";



export  const postComplaint =catchError(async(req,res,next)=>{
    let complaint= req.body
    
    let result = new complaintModel(complaint)
    await result.save()
    res.status(201).json({message:"complaint added", result})
    })

    export const showComplaint =catchError(async (req, res, next) => {
        let show = await complaintModel.find();
          res.status(201).json({ message: "complaints", complaints:show });
      });
      export const deleteComplaint= deleteOne(complaintModel,"complaint")
