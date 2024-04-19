import express from 'express';
import * as parent from './controller/parent.controller.js';


const parentRouter=express.Router();



parentRouter.route('/')
.get(parent.getAllParents)


parentRouter.route('/addparent')
.post(parent.addParent)


parentRouter.route('/:id')
.put(parent.updateParent)

.delete( parent.deleteparent)

export default parentRouter