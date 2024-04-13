import express from 'express';
import {AddGrade,deleteGrade,updateGrade,getAllGrades} from './controller/grades.controller.js'

const router = express.Router()

router.post("/AddGrade",AddGrade)
router.get("/getAllGrades",getAllGrades)
router.put("/updateGrade",updateGrade)
router.delete("/deleteGrade",deleteGrade)


export default router