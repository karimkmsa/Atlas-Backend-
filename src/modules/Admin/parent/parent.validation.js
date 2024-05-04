import Joi from "joi";

const addParentValidation = Joi.object({
    firstName: Joi.string().min(2).max(20),
    lastName: Joi.string().min(2).max(20),
    password: Joi.string(),
    email: Joi.string().email(),
    phone: Joi.number(),
    address: Joi.string(),
    student: Joi.string().hex().length(24).required()
  }
  )

const updateParentValidation = Joi.object({
  firstName: Joi.string().min(2).max(20),
  lastName: Joi.string().min(2).max(20),
  password: Joi.string(),
  email: Joi.string().email(),
  phone: Joi.number(),
  address: Joi.string(),
  student: Joi.string().hex().length(24).required(),
  id: Joi.string().hex().length(24).required(), 
  }
  )
 
  
const deleteParentValidation = Joi.object({
    id:Joi.string().hex().length(24).required()
})

export { 
  addParentValidation,
  updateParentValidation,
  deleteParentValidation
};