import Joi from "joi";


const addTeacherValidation = Joi.object({
    firstName:Joi.string().min(2).max(20),
    lastName: Joi.string().min(2).max(20),
    phone: Joi.string().pattern(new RegExp('^01[0125][0-9]{8}$')),
    password: Joi.string(),
    email: Joi.string().email(),
    address: Joi.string(),
    image: Joi.string(),
    dateOfBirth: Joi.date(),
    placeOfBirth: Joi.string(),
    grade: Joi.string(),
    education:{
        univeristy :Joi.string(),
        degree: Joi.string(),
        startDate: Joi.string(),
        endDate: Joi.string(),
        city: Joi.string().required(),
    }
    
  }
  )

  const updateTeacherValidation = Joi.object({
    firstName:Joi.string().min(2).max(20),
    lastName: Joi.string().min(2).max(20),
    phone: Joi.string().pattern(new RegExp('^01[0125][0-9]{8}$')),
    password: Joi.string(),
    email: Joi.string().email(),
    address: Joi.string(),
    image: Joi.string(),
    dateOfBirth: Joi.date(),
    placeOfBirth: Joi.string(),
    grade: Joi.string(),
    id: Joi.string().hex().length(24),
    education:{
        univeristy :Joi.string(),
        degree: Joi.string(),
        startDate: Joi.string(),
        endDate: Joi.string(),
        city: Joi.string().required(),
    }
    
  }
  )
  const deleteTeacherValidation = Joi.object({
    id:Joi.string().hex().length(24).required()
})






export{
    addTeacherValidation,
    updateTeacherValidation,
    deleteTeacherValidation
}





