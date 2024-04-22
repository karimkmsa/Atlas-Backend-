import express from 'express';
import {AddMedicalRecord, showMedicalRecord, UpdateMedicalRecord, deleteMedicalRecord} from './controller/parent.controller.js'

const router = express.Router()

router.post("/add-medical-record",AddMedicalRecord)
router.get("/show-medical-record",showMedicalRecord)
router.put("/update-medical-record",UpdateMedicalRecord)
router.delete("/delete-medical-record",deleteMedicalRecord)


export default router