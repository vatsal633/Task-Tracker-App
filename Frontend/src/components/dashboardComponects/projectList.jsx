import React from "react";
import Ctabutton from "../ctabutton";
import Button from "../button";

const ProjectList = () => {
    return (
      <div className="mt-4">
       <h2 className="text-3xl my-10 text-blue-600 ">My Projects</h2>
        {[1, 2, 3].map((project) => (
          <div key={project} className="p-4 bg-white rounded shadow my-2">
            <h3 className="text-xl font-bold mb-2">Project {project}</h3>
            <p className="text-sm text-gray-500 mb-2">3/5 Tasks Completed</p>
            <div className="flex justify-between mt-4">
              <Ctabutton link={'/'} name={'view task'}/>
              <Button link={'/'} name={'add task'} icon={"+"}/>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProjectList;
  