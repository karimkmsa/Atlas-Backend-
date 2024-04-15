import express from 'express';
import {addStudent,getAllSubjects, getStudentDataByID, updateStudentData, deleteStudentData} from './controller/student.conroller.js'

const router = express.Router()

router.post("/addStudent",addStudent)
router.get("/getAllSubjects",getAllSubjects)
router.put("/updateStudentData",updateStudentData)
router.delete("/deleteStudentData",deleteStudentData)
router.post("/:id",getStudentDataByID)


export default router