import express from 'express';
import *as teacher from './teacher.controller.js';
import { uploadSingleFile } from '../../../multer/fileUpload.js';
import validate from '../../../middleware/validate.js';
import { addTeacherValidation, deleteTeacherValidation, updateTeacherValidation } from './teacher.validation.js';

const teacherRouter=express.Router();



teacherRouter.route('/').get(teacher.getAllteachers)

teacherRouter.route("/addteacher").post(uploadSingleFile("teacher","image"),validate(addTeacherValidation),teacher.addTeacher)


teacherRouter.route('/:id').get(teacher.getTeacherByID)

teacherRouter.route("/update-teacher/:id").put(uploadSingleFile("teacher","image"),validate(updateTeacherValidation),teacher.updateTeacher)
teacherRouter.route('/delete-teacher/:id').delete(validate(deleteTeacherValidation),teacher.deleteTeacher)

export default teacherRouter