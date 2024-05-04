import express from 'express';
import *as subject from './subject.controller.js';
import validate from '../../../middleware/validate.js';
import { addSubjectsvalidation, updateSubjectValidation } from './subject.validation.js';
import { checkRole, verifyToken } from '../../../middleware/authToken.js';

const subjectRouter=express.Router();



subjectRouter.route('/').get(subject.getAllSubjects)
subjectRouter.route('/add-subject').post(validate(addSubjectsvalidation),verifyToken,checkRole('admin'), subject.addSubject)


subjectRouter.route('/:id')
.get(subject.getSubjectByID)
.put(validate(updateSubjectValidation),verifyToken,checkRole('admin'), subject.updateSubject)
.delete(verifyToken,checkRole('admin'),subject.deleteSubject)

export default subjectRouter