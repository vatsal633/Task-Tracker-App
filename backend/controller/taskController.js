import taskModel from "../models/task.js"


//for creating tasks
export const createTask = async (req, res) => {
    try {
        const { user, projectName, title, description, progressStatus, creationDate, completionDate } = req.body

        const newTask = new taskModel({
            user,
            projectName,
            title,
            description,
            progressStatus,
            creationDate: creationDate || new Date(),
            completionDate
        });

        await newTask.save()
        res.status(201).json({ message: "Task created successfully", task: newTask })
    } catch (err) {
        res.status(500).json({ message: "Server error while creating task", error: err.message })
    }
}


export const getTaskByProject = async (req, res) => {
    try {
        const { name, projectName } = req.params

        const task = await taskModel.find({ user: name, projectName: projectName });

        if (!task) return res.status(404).json({ message: "Task not found" });

        //logic for their is no tasks (new user)
        if (!task || task.length === 0) {
            return res.status(404).json({ message: "No tasks found for this user and project" });
        }

        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({ message: "Server error while fetching task", error: err.message });
    }
};

export const editTaskByProject = async(req,res)=>{
    try{
        const {NewTitle,NewDescription} = req.body
        const {name,projectName,taskName} = req.params
        
        let originalTask = await taskModel.findOne({user:name,projectName:projectName,title:taskName})

        originalTask.title =  NewTitle
        originalTask.description = NewDescription

        await originalTask.save();
        res.status(202).json({message:"update success"})
    }catch(err){
        console.log(err)
        res.status(500).json({message:"server error while editing task",err:err.message})
    }
}


export const deleteTask = async(req,res)=>{
    try{
        const {name,projectName,taskName} = req.params

        let deletedTask  = await taskModel.findOneAndDelete({user:name,projectName:projectName,title:taskName})

        
        
        res.status(200).json({message:"task delete successfully!",deletedTask})
    }catch(err){
        console.log(err)
        return res.status(500).json({message:"server error while deleting task"})
    }
}