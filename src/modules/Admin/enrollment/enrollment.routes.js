import express from 'express';
import * as enrollment from './controller/enrollment.controller.js';


const enrollmentRouter=express.Router();



enrollmentRouter.route('/')
.get(enrollment.getAllenrollments)


enrollmentRouter.route('/addenrollment')
.post(enrollment.addenrollment)


enrollmentRouter.route('/:id')
.put(enrollment.updateenrollment)

.delete( enrollment.deleteenrollment)

export default enrollmentRouter