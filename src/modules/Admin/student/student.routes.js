import express from 'express';
import {addStudent,getAllStudent, getStudentDataByID, updateStudentData, deleteStudentData} from './controller/student.conroller.js'
import { checkRole, verifyToken } from '../../../middleware/authToken.js';
import { uploadSingleFile } from '../../../multer/fileUpload.js';

const router = express.Router()

router.post("/addstudent",uploadSingleFile("student",'image'),verifyToken,checkRole('admin'),addStudent)
router.get("/getallstudent",getAllStudent)
router.put("/updateStudentData",updateStudentData)
router.delete("/deleteStudentData",deleteStudentData)
router.post("/:id",getStudentDataByID)


export default router