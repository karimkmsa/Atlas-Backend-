import express from 'express';
import {postComplaint} from './controller/student.controller.js'

const router = express.Router()


router.post("/postComplaint",postComplaint)





export default router