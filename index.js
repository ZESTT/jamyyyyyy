import express from 'express'
import { dbConection } from './utils/db/dbConecction.js'
import { userRouter } from './src/user/userRouter.js'
import { blogRouter } from './src/blog/blogRouter.js'
import cors from 'cors'; // 1. استيراد حزمة CORS
const app = express()
const port = 3000

app.use(express.json())

app.use(cors({
    origin: ['http://localhost:5173', 'https://jamyyyyyy-production.up.railway.app'], // يمكن أن تحدد المصادر المسموح بها لزيادة الأمان
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
app.use('/api',userRouter)
app.use('/blogs',blogRouter)

dbConection()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))