import express from 'express'
import setupRoutes from './routes'

const app = express()

app.use(express.json())

const router = express.Router()
setupRoutes(router)

app.use('/', router)

export default app
