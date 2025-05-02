import express from "express"
import { authenticateJWT } from "../middleware/authMiddleware.js"
import { createTask ,getTaskByProject} from "../controller/taskController.js"
const router = express.Router()

router.post('/create-task',authenticateJWT,createTask)
router.get('/:name/:projectName/get-tasks',authenticateJWT,getTaskByProject)

export default router