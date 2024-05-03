import express from 'express';
import *as subject from './subject.controller.js';
import validate from '../../../middleware/validate.js';
import { addSubjectsvalidation, updateSubjectValidation } from './subject.validation.js';

const subjectRouter=express.Router();



subjectRouter.route('/').get(subject.getAllSubjects)
subjectRouter.route('/add-subject').post(validate(addSubjectsvalidation), subject.addSubject)


subjectRouter.route('/:id')
.get(subject.getSubjectByID)
.put(validate(updateSubjectValidation), subject.updateSubject)
.delete(subject.deleteSubject)

export default subjectRouter