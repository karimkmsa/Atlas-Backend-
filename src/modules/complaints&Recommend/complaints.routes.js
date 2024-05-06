import express from 'express';
import {postComplaint,showComplaint} from './controller/complaints.controller.js'
import { checkRole, verifyToken } from '../../middleware/authToken.js';

const router = express.Router()

router.post("/postComplaint",verifyToken,checkRole(['student','parent']),postComplaint)

router.get('/',showComplaint)





export default router