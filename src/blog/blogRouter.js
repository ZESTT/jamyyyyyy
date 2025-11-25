
import express from'express'
import * as blogController from './blogController.js'
import { auth } from '../../utils/middleware/auth.js'
import { validation } from '../../utils/middleware/validation.js'
import { blogSchema } from './blog.Validation.js'
export const blogRouter = express.Router()
 
blogRouter.post('',validation(blogSchema),auth,blogController.addblog)
blogRouter.get('',auth,blogController.getAllBlogs)
blogRouter.get('/:id',auth,blogController.getuserBlogs)
blogRouter.put('',auth,blogController.updateblog)
blogRouter.delete('',auth,blogController.deleteblog)

