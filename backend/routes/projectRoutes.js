import express from 'express'
import { createProject,getProjects } from '../controller/projectController.js'
import { authenticateJWT } from '../middleware/authMiddleware.js'
const router = express()

router.post('/create-project',createProject)

router.get('/:name/get-project',getProjects)

export default router