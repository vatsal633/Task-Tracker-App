import express from 'express'
import { createProject,getProjects, updateProject } from '../controller/projectController.js'
import { authenticateJWT } from '../middleware/authMiddleware.js'
const router = express()

router.post('/create-project',createProject)

router.get('/:name/get-project',getProjects)

router.put('/:name/projectName/updateProject',authenticateJWT,updateProject)

export default router