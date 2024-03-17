import express from 'express';
import {postComplaint,show} from './controller/student.controller.js'

const router = express.Router()

router.post("/postComplaint",postComplaint)
router.get('/',show)





export default router