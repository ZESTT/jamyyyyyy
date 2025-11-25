

import Joi from 'joi'

const userSignUpSchema = Joi.object({
        name:Joi.string().min(3).max(30).required(),
        email:Joi.string().email().required(),
        password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
})

const userSigninSchema = Joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
})


export{
userSignUpSchema,
userSigninSchema
}