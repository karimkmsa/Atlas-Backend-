import express from 'express';
import {postComplaint,AddMedicalRecord, showMedicalRecord, UpdateMedicalRecord, deleteMedicalRecord} from './controller/parent.controller.js'

const router = express.Router()

router.post("/postComplaint",postComplaint)
router.post("/AddMedicalRecord",AddMedicalRecord)
router.get("/showMedicalRecord",showMedicalRecord)
router.put("/UpdateMedicalRecord",UpdateMedicalRecord)
router.delete("/deleteMedicalRecord",deleteMedicalRecord)


export default router