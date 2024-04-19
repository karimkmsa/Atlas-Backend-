import express from 'express';
import *as teacher from './teacher.controller.js';
import validate from '../../../middleware/validate.js';
import { addteachervalidation, deleteteacherValidation, updateteaherValidation } from './teacher.validation.js';

const teacherRouter=express.Router();



teacherRouter.route('/').get(teacher.getAllteachers)

teacherRouter.route("/addteacher").post(teacher.addTeacher)
teacherRouter.route('/:id')
.get(teacher.getTeacherByID)
.put(validate(updateteaherValidation), teacher.updateTeacher)
.delete(validate(deleteteacherValidation),teacher.deleteTeacher)

export default teacherRouter