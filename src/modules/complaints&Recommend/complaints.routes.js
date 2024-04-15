import express from 'express';
import {postComplaint,showComplaint} from './controller/complaints.controller.js'

const router = express.Router()

router.post("/postComplaint",postComplaint)

router.get('/',showComplaint)





export default router