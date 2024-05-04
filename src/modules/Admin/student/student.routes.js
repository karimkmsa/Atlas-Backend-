import express from 'express';
import {addStudent,getAllStudent, getStudentDataByID, updateStudentData, deleteStudentData} from './controller/student.conroller.js'
import { checkRole, verifyToken } from '../../../middleware/authToken.js';
import { uploadSingleFile } from '../../../multer/fileUpload.js';
import { addStudentValidation, deleteStudentValidation, updateStudentValidation } from './student.validation.js';
import validate from '../../../middleware/validate.js';

const router = express.Router()

router.post("/addstudent",uploadSingleFile("student",'image'),validate(addStudentValidation),verifyToken,checkRole('admin'),addStudent)
router.get("/getallstudent",getAllStudent)
router.put("/update-student-data/:id",uploadSingleFile("student",'image'),validate(updateStudentValidation),updateStudentData)
router.delete("/delete-Student-Data/:id",validate(deleteStudentValidation),deleteStudentData)
router.post("/:id",getStudentDataByID)


export default router