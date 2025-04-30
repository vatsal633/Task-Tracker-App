import taskModel from "../models/task.js"


//for creating tasks
export const createTask = async (req, res) => {
    try {
        const { title, description, progressStatus, creationDate, completionDate } = req.body

        const newTask = new taskModel({
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

export const getTaskById = async (req, res) => {
    try {
        const email = req.params
        const task = await taskModel.findOne({email});

        if (!task) return res.status(404).json({ message: "Task not found" });

        //logic for their is no tasks (new user)

        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({ message: "Server error while fetching task", error: err.message });
    }
};
