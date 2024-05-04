import express from 'express';
import {addStudent,getAllStudent, getStudentDataByID, updateStudentData, deleteStudentData} from './controller/student.conroller.js'
import { checkRole, verifyToken } from '../../../middleware/authToken.js';
import { uploadSingleFile } from '../../../multer/fileUpload.js';
import { addStudentValidation } from './student.validation.js';
import validate from '../../../middleware/validate.js';

const router = express.Router()

router.post("/addstudent",validate(addStudentValidation),uploadSingleFile("student",'image'),verifyToken,checkRole('admin'),addStudent)
router.get("/getallstudent",getAllStudent)
router.put("/update-student-data/:id",uploadSingleFile("student",'image'),updateStudentData)
router.delete("/deleteStudentData",deleteStudentData)
router.post("/:id",getStudentDataByID)


export default router