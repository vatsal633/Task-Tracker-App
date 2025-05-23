import { React, useEffect, useState } from "react";
import Ctabutton from "../ctabutton";
import Button from "../button";
import CreateProjectModel from "./createProjectModel";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";

const ProjectList = () => {
  const [showModal, setShowModal] = useState(false);
  const [Projects, setProjects] = useState([]);

  const BASEURL = import.meta.env.VITE_BACKEND_URL;
  const { name } = useParams();
  const [isHover, setIsHover] = useState(false)

  const [showDropDown,setDropDown] = useState(false)

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await axios.get(`${BASEURL}/project/${name}/get-project`);
        // console.log("Fetched titles:", response.data.projects.map(p => p.title));

        if (response.status === 200) {
          setProjects(response.data.projects);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getProjects();
  }, [name]);

  const showdetails =(project)=>{
    setDropDown(true)
  }


  return (
    <div className="relative mt-4">
      <h2 className="text-3xl my-10 text-blue-600 inline mr-5">My Projects</h2>
      <button
        className="rounded-md border border-indigo-600 px-6 py-2 text-indigo-600 hover:bg-indigo-50"
      onClick={() => setShowModal(true)}
      >
        + add new Project
      </button>

      {Projects.length > 0 ? (
        Projects.map((project) => (
          <div key={project._id} className="p-4 relative bg-white rounded flex justify-between shadow my-2 " onMouseEnter={()=>{setIsHover(true)}} onMouseLeave={()=>{setIsHover(false)}}>
            <div className="">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-bold mb-2 ">{project.title}</h3>
                {isHover && (<BsThreeDots onClick={()=>{showdetails(project)}}/>)}
              </div>
              <p className="text-sm text-gray-500 mb-2">
                {project.tasks?.length || 0}/5 Tasks Completed
              </p>
            </div>
            <div className="flex justify-between mt-4">
              <Link to={`/${name}/${project.title}`}>
                <button className="rounded-md bg-indigo-600 px-6 py-2 text-white hover:bg-indigo-700">View Task</button>
              </Link>
            </div>
            <div className="absolute left-44">dsfsfs</div>
          </div>
        ))
      ) : (
        <div className="text-center text-gray-500">No Projects</div>
      )}

      <CreateProjectModel isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default ProjectList;
