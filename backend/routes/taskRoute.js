import express from "express"
import { authenticateJWT } from "../middleware/authMiddleware.js"
import { createTask ,getTaskById} from "../controller/taskController.js"
const router = express.Router()

router.post('/create-task',authenticateJWT,createTask)
router.get('/:name/get-tasks',getTaskById)

export default router