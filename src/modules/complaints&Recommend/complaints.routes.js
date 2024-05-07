import express from 'express';
import {deleteComplaint, postComplaint,showComplaint} from './controller/complaints.controller.js'
import { checkRole, verifyToken } from '../../middleware/authToken.js';

const router = express.Router()

router.post("/post-complaint",verifyToken,checkRole(['student','parent']),postComplaint)

router.get('/',showComplaint)
router.delete("/delete-complaint/id:*",deleteComplaint)





export default router