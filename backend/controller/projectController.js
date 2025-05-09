import Project from '../models/project.js';


export const createProject = async (req, res) => {
    try {
        const { user, title } = req.body

        const newProject = await Project.create({
            user,
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
        let user = req.params.name

        const projects = await Project.find({ user })
        res.status(200).json({ projects });

    } catch (err) {
        console.error("Error fetching projects:", err);
        res.status(500).json({ message: "Server error" });
    }
};


export const updateProject = async(req,res)=>{
    try{
        const {name,projectName} = req.params;
        const {newTitle} = req.body
        const projectDetails = await Project.findOne({user:name,title:projectName})

        if(!projectDetails){
            return res.status(404).json({message:"project not found"})
        }

        projectDetails.title = newTitle
        await projectDetails.save();
        res.status(200).json({message:"project update successfully"})
    }catch(err){
        res.status(500).json({message:"error while updating the project"})
    }
}