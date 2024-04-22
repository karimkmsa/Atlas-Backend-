import { AppError } from "../../../utils/AppError.js"
import { catchError } from "../../../utils/catchError.js"
import jwt from "jsonwebtoken"; 
import bcrypt from 'bcrypt';
import { selectModel } from "../../../middleware/validationRole.js";





// login(admin,teacher,student)
export const login = catchError(async (req, res, next) => {


    const { email, password,role} = req.body;
        // define userCollection
        const userCollection = selectModel(role)

    let user = await userCollection.findOne({ email });
    
    if (!user || !user.password ) 
        return next(new AppError("Invalid email or password or role", 401)); 
    
 

    let token = jwt.sign(
        { name: user.name, email: user.email, id: user._id, role: user.role},
        process.env.JWT_SECRET
    );
    console.log(role);
    
    // Success
    res.status(200).json({ succsess:true,message: "Login successful",role,token}); // Changed status code and message
});

















