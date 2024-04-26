import express from 'express';
import *as teacher from './teacher.controller.js';

const teacherRouter=express.Router();



teacherRouter.route('/').get(teacher.getAllteachers)

teacherRouter.route("/addteacher").post(teacher.addTeacher)
teacherRouter.route('/:id')
.get(teacher.getTeacherByID)
.put( teacher.updateTeacher)
.delete(teacher.deleteTeacher)

export default teacherRouter