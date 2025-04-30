const ProjectList = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {[1, 2, 3].map((project) => (
          <div key={project} className="p-4 bg-white rounded shadow">
            <h3 className="text-xl font-bold mb-2">Project {project}</h3>
            <p className="text-sm text-gray-500 mb-2">3/5 Tasks Completed</p>
            <div className="flex justify-between mt-4">
              <button className="bg-blue-500 text-white px-3 py-1 rounded">View Tasks</button>
              <button className="bg-green-500 text-white px-3 py-1 rounded">+ Add Task</button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProjectList;
  