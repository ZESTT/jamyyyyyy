import express from 'express'
import { dbConection } from './utils/db/dbConecction.js'
import { userRouter } from './src/user/userRouter.js'
import { blogRouter } from './src/blog/blogRouter.js'
const app = express()
const port = 3000

app.use(express.json())
app.use('/api',userRouter)
app.use('/blogs',blogRouter)

dbConection()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))