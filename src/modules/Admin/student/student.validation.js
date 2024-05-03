import Joi from "joi";






const addStudentValidation = Joi.object({
  firstName: Joi.string().min(2).max(20),
  lastName: Joi.string().min(2).max(20),
  password: Joi.string(),
  email: Joi.string().email(),
  address: Joi.string(),
  image: Joi.string(),
  dateOfBirth: Joi.date(),
  placeOfBirth: Joi.string(),
  grade: Joi.string()
}
)

const updateStudentValidation = Joi.object({
    firstName: Joi.string().min(2).max(20),
    lastName: Joi.string().min(2).max(20),
    password: Joi.string(),
    email: Joi.string().email(),
    address: Joi.string(),
    image: Joi.string(),
    dateOfBirth: Joi.date(),
    placeOfBirth: Joi.string(),
    id: Joi.string().hex().length(24).required(),
    grade: Joi.string().required() 
  }
  )
 
  
const deleteStudentValidation = Joi.object({
    id:Joi.string().hex().length(24).required()
})


export { 
  addStudentValidation,
  updateStudentValidation,
  deleteStudentValidation
};