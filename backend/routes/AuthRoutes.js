import express from "express"
import { LogIn,signin } from "../controller/authController.js"


const router = express.Router()

//end point for registering the user
router.post('/signin', signin)

//end point for login the user
router.post('/login', LogIn )

export default router