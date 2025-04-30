import express from "express"
import { authenticateJWT } from "../middleware/authMiddleware.js"
import { createTask ,getTaskById} from "../controller/taskController.js"
const router = express.Router()

router.post('/create-task',authenticateJWT,createTask)
router.get('/get-tasks',authenticateJWT,getTaskById)

export default router