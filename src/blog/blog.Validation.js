import Joi from "joi";

export const blogSchema = Joi.object({
        title:Joi.string().min(3).max(80).required(),
        desc:Joi.string().min(3).max(80).required(),
        createdBy:Joi.string().hex().required()
})