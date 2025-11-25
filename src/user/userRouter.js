
import express from 'express'
import * as controllers from'./userController.js'
import { validation } from '../../utils/middleware/validation.js'
import { userSigninSchema, userSignUpSchema } from './userValidation.js'
export const userRouter=express.Router()

userRouter.post('/signup',validation(userSignUpSchema),controllers.signup)
userRouter.post('/login',validation(userSigninSchema),controllers.login)
