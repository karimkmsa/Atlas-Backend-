import express from 'express';
import *as ClassLevel from './class.controller.js';
import validate from '../../../middleware/validate.js';
import { addClassvalidation, updateteaherValidation } from './class.validation.js';

const ClassLevelRouter=express.Router();



ClassLevelRouter.route('/').get(ClassLevel.getAllClasslevels)

ClassLevelRouter.route('/addclass').post(validate(addClassvalidation), ClassLevel.addClassLevel)

ClassLevelRouter.route('/:id')
.get(ClassLevel.getClasslevelByID)
.put(validate(updateteaherValidation), ClassLevel.updateClasslevel )
.delete( ClassLevel.deleteClasslevel)

export default ClassLevelRouter