import mongoose from "mongoose";

const taskSchema  = mongoose.Schema({
    title:String,
    description:String,
    progressStatus:Number,
    creationDate:Date,
    completionDate:Date
})

const task = mongoose.model("tasks",taskSchema)
export default task