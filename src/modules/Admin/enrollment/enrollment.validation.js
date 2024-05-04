import Joi from "joi";




const addEnrollmentValidation = Joi.object({
  student: Joi.string().hex().length(24),
  subject: Joi.string().hex().length(24),
  enrollmentDate: Joi.date(),
  }
  )

const updateEnrollmentValidation = Joi.object({
  student: Joi.string().hex().length(24),
  subject: Joi.string().hex().length(24),
  enrollmentDate: Joi.date(),
  id:Joi.string().hex().length(24).required()
}
  )
 
  
const deleteEnrollmentValidation = Joi.object({
    id:Joi.string().hex().length(24).required()
})

export { 
  addEnrollmentValidation,
  updateEnrollmentValidation,
  deleteEnrollmentValidation
};