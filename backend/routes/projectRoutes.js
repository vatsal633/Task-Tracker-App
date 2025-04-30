import express from 'express'
import { createProject,getProjects } from '../controller/projectController.js'
import { authenticateJWT } from '../middleware/authMiddleware.js'
const router = express()

router.post('/create-projet',authenticateJWT,createProject)

router.get('/get-project',authenticateJWT,getProjects)

export default router