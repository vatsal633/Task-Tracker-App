import Project from '../models/project.js';


export const createProject = async (req, res) => {
    try {
        const { title } = req.body;
        const email = req.user.email;+++

        const newProject = await Project.create({
            user: email,
            title,
            tasks: [],
        });

        res.status(201).json({ success: true, project: newProject });
    } catch (error) {
        console.error('Error creating project:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};


export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find({ user: req.user.email }).populate("tasks");

        res.status(200).json({ projects });
    } catch (err) {
        console.error("Error fetching projects:", err);
        res.status(500).json({ message: "Server error" });
    }
};