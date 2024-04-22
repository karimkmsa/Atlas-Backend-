import  parentModel  from "../../../../../databases/models/parent.models.js"
import { Apifeatures } from "../../../../utils/Apifeatures.js"
import { AppError } from "../../../../utils/AppError.js"
import { catchError } from "../../../../utils/catchError.js"
import { deleteOne } from "../../../handlers/refactor.js" 
import { generateToken } from "../../../../middleware/authToken.js";





//ADD parent
 const addParent = catchError(async (req, res, next) => {
    let parentData= req.body
    const exist = await parentModel.findOne({email:parentData.email});
    if (exist) {
      return res
        .status(404)
        .json({ success: false, message: "Parent email already exist" });
    }
    console.log(parentData);

    let result = new parentModel(parentData);
    try {
      await result.save();
      const token = generateToken({
        id: result._id,
        email: result.email,
        role: result.role,
      },process.env.JWT_SECRET)
      res
        .status(201)
        .json({ success: true, message: "parent Added", result });
        console.log(result);
    } catch (error) {
      console.error("Error saving to the database:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
    
  });
// Get parent
const getAllParents = catchError(async (req, res, next) => {
    let data = await parentModel.find().populate("student");
    res.status(201).json({ message: "parentModel", data }); 

});




//  Update parent 
const updateParent= catchError(async(req,res,next)=>{
    const{id}=req.params
    const parent=await parentModel.findByIdAndUpdate(
        id,
        req.body,
        {new:true}
    )
    !parent && next(new AppError('parent not found',404))

      parent &&   res.status(201).json({message:"Done",parent})
}
)




//  delete parent 

 const deleteparent= deleteOne(parentModel,"parent")




export {
 addParent,
 getAllParents,   
 updateParent,
 deleteparent
}
