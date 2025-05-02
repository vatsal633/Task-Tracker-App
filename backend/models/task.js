import mongoose from "mongoose";

const taskSchema  = mongoose.Schema({
    user:String,
    projectName:String,
    title:String,
    description:String,
    progressStatus:String,
    creationDate:Date,
    completionDate:Date
})

const task = mongoose.model("tasks",taskSchema)
export default task