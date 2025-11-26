

import Joi from 'joi'

const userSignUpSchema = Joi.object({
        name:Joi.string().min(3).max(30).required(),
        email:Joi.string().email().required(),
        password:Joi.string().min(8).max(50).required(),
})

const userSigninSchema = Joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().min(8).max(50).required(),
})


export{
userSignUpSchema,
userSigninSchema
}