import adminModel from "../../../../databases/models/admin.models.js";
import { generateToken } from "../../../middleware/authToken.js";
import { catchError } from "../../../utils/catchError.js";
import bcrypt from 'bcrypt';


export const signUp = catchError(async (req, res, next) => {
  let { firstName, lastName, email, password } = req.body;
  console.log(req.body);
  const exist = await adminModel.findOne({ email });
  if (exist) {
    return res
      .status(404)
      .json({ success: false, message: "register email already exist" });
  }
  let result = new adminModel({ firstName, lastName, email, password });
  
  try {
    await result.save();
    const token = generateToken({
      id: result._id,
      email: result.email,
      role: result.role,
    },process.env.JWT_SECRET)
    res
      .status(201)
      .json({ success: true, message: "register done", result });
    console.log(result);
  } catch (error) {
    console.error("Error saving to the database:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
  
});
// Sign in controller
export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find admin by email
    const admin = await adminModel.findOne({ email });
    if (!admin) {
      return res.status(404).json({ success: false, message: 'Admin not found' });
    }

    // Check if password is correct
    const passwordMatch = await bcrypt.compare(password, admin.password);
    if (!passwordMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = generateToken({ id: admin._id, email: admin.email, role: admin.role });

    res.json({ success: true, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};