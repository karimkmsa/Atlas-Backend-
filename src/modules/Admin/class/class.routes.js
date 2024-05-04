import express from 'express';
import *as ClassLevel from './class.controller.js';
import validate from '../../../middleware/validate.js';
import { addClassvalidation, deleteClassValidation, updateteaherValidation } from './class.validation.js';

const ClassLevelRouter=express.Router();



ClassLevelRouter.route('/').get(ClassLevel.getAllClasslevels)

ClassLevelRouter.route('/addclass').post(validate(addClassvalidation), ClassLevel.addClassLevel)

ClassLevelRouter.route('/:id').get(ClassLevel.getClasslevelByID)
ClassLevelRouter.route('/update-class/:id').put(validate(updateteaherValidation), ClassLevel.updateClasslevel )
ClassLevelRouter.route('/delete-class/:id').delete(validate(deleteClassValidation),ClassLevel.deleteClasslevel)

export default ClassLevelRouter