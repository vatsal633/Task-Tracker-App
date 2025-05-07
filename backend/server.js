import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./db.js";

import authRoutes from "./routes/AuthRoutes.js"
import projectRoutes from "./routes/projectRoutes.js"
import taskRoutes from "./routes/taskRoute.js"

dotenv.config()

const app = express()
connectDB()
const port = process.env.PORT || 3000

// middelwares
app.use(express.json())
app.use(cors({
    origin:"https://task-tracker-app-exng.onrender.com"
}))


//routes
app.use('/api/auth',authRoutes) //login and signin routes
app.use('/project',projectRoutes)//route for create and get project details routes
app.use('/tasks',taskRoutes)

app.get('/',(req,res)=>{
    res.send("hellow world")
})

app.listen(port,()=>{
    console.log(` Server running on port ${port}`);
})