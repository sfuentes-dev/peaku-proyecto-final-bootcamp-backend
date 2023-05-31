import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import dbConnection from './db/dbConnection.js'

import todoRouter from './routes/todoRoute.js'
import discountsRouter from './routes/discountsRoutes.js'
import plansRouter from './routes/planRoutes.js'
import blogRoutes from './routes/blogRoutes.js'
import testimonialRoutes from './routes/testimonialRoutes.js'

const app = express()

dotenv.config()
app.use(express.json())
app.use(cors())

dbConnection()

const PORT = process.env.PORT || 4000

const apiPaths = {
  todos: '/api/todos',
  discounts: '/api/discounts',
  plans: '/api/plans',
  blog: '/api/blog',
  testimonials: '/api/testimonials',
}

app.use(apiPaths.todos, todoRouter)
app.use(apiPaths.discounts, discountsRouter)
app.use(apiPaths.plans, plansRouter)
app.use(apiPaths.blog, blogRoutes)
app.use(apiPaths.testimonials, testimonialRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
