import express from 'express';
import * as enrollment from './controller/enrollment.controller.js';
import validate from '../../../middleware/validate.js';
import { addEnrollmentValidation, deleteEnrollmentValidation, updateEnrollmentValidation } from './enrollment.validation.js';


const enrollmentRouter=express.Router();



enrollmentRouter.route('/')
.get(enrollment.getAllenrollments)


enrollmentRouter.route('/addenrollment')
.post(validate(addEnrollmentValidation),enrollment.addenrollment)


enrollmentRouter.route('/update-enrollment/:id')
.put(validate(updateEnrollmentValidation),enrollment.updateenrollment)
enrollmentRouter.route('/delete-enrollment/:id')
.delete(validate(deleteEnrollmentValidation),enrollment.deleteenrollment)

export default enrollmentRouter