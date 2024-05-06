import express from 'express';
import {AddGrade,deleteGrade,updateGrade,getAllGrades} from './controller/grades.controller.js'
import { checkRole, verifyToken } from '../../middleware/authToken.js';

const router = express.Router()

router.post("/add-grade",verifyToken,checkRole(['teacher','admin']),AddGrade)
router.get("/getAllGrades",getAllGrades)
router.put("/update-grade",verifyToken,checkRole(['teacher','admin']),updateGrade)
router.delete("/delete-grade",verifyToken,checkRole(['teacher','admin']),deleteGrade)


export default router