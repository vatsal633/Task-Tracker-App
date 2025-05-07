import express from "express"
import { authenticateJWT } from "../middleware/authMiddleware.js"
import { createTask ,getTaskByProject,editTaskByProject,deleteTask, updateStatus} from "../controller/taskController.js"
const router = express.Router()

router.post('/create-task',authenticateJWT,createTask)
router.get('/:name/:projectName/get-tasks',authenticateJWT,getTaskByProject)
router.put('/:name/:projectName/:taskName/edit-task',authenticateJWT,editTaskByProject)
router.delete('/:name/:projectName/:taskName/delete-task',authenticateJWT,deleteTask)
router.put('/:name/:projectName/:taskName/update-status',updateStatus)

export default router