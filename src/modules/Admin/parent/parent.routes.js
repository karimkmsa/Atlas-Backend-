import express from 'express';
import * as parent from './controller/parent.controller.js';
import validate from '../../../middleware/validate.js';
import { addParentValidation, deleteParentValidation, updateParentValidation } from './parent.validation.js';


const parentRouter=express.Router();



parentRouter.route('/')
.get(parent.getAllParents)


parentRouter.route('/addparent')
.post(validate(addParentValidation),parent.addParent)


parentRouter.route('/update-parent/:id').put(validate(updateParentValidation),parent.updateParent)
parentRouter.route('/delete-parent/:id').delete(validate(deleteParentValidation),parent.deleteparent)

export default parentRouter