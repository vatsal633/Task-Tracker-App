import { React, useEffect, useRef, useState } from "react";
import Sidebar from "../components/dashboardComponects/sidebar";
import TopNavBar from "../components/dashboardComponects/topNavbar";
import CreateTaskModel from "../components/dashboardComponects/creatTaskModel";
import { UNSAFE_DataRouterStateContext, useParams } from "react-router-dom";
import axios from "axios";
import { MdOutlinePreview, MdSettingsApplications } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import ViewTaskInfo from "../components/dashboardComponects/viewTaskInfo";
import Loader from "../components/loader";
import EditTask from "../components/dashboardComponects/editTask";
import WarningModel from "../components/dashboardComponects/warningModel";
import CheckImg from "../assets/checked.png"
import UnCheckedImg from "../assets/unchecked.png"
//for tasting
// const dummyTasks = [

//   {
//     title: "Design Login UI",
//     description: "Create responsive login form with TailwindCSS.",
//     status: "In Progress",
//     creationDate: "2025-04-25",
//     completionDate: null,
//   },
//   {
//     title: "Setup JWT Middleware",
//     description: "Protect API routes using middleware.",
//     status: "Completed",
//     creationDate: "2025-04-24",
//     completionDate: "2025-04-26",
//   },
//   {
//     title: "Create Dashboard Layout",
//     description: "Sidebar + Topbar + Content Area structure.",
//     status: "Completed",
//     creationDate: "2025-04-22",
//     completionDate: "2025-04-24",
//   },
//   {
//     title: "Add Search Bar to Dashboard",
//     description: "Searchbar with clear button functionality.",
//     status: "Not Started",
//     creationDate: "2025-04-30",
//     completionDate: null,
//   },
// ];



const statusColors = {
  "Not Complete": "bg-gray-200 text-gray-800",
  "In Progress": "bg-yellow-200 text-yellow-800",
  "Completed": "bg-green-200 text-green-800",
};

const ProjectDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false)//for toggling details of task
  const [selectedTask, setSelectedTask] = useState(null); //


  const [editModel, setEditModel] = useState(false)
  const [showEditModel, setshowEditModel] = useState(false)
  const [editTask, setEditTask] = useState(null)

  const [warningModel, setWarningModel] = useState(false)
  const [showWarningModel, setShowWarningModel] = useState(false)
  const [deleteTask, setDeleteTask] = useState(null)


  const [isChecked, setIsChecked] = useState(false)

  const { name } = useParams()
  const { projectName } = useParams()
  const [task, setTask] = useState([])
  const [showLoader, setShowLoader] = useState(false)
  const BASEURL = import.meta.env.VITE_BACKEND_URL

  const taskref = useRef()

  //fetching tasks
  useEffect(() => {
    const getTasksByProject = async () => {
      try {
        setShowLoader(true)
        const auth = JSON.parse(localStorage.getItem("token"));
        const token = auth?.token; // chenking token

        let response = await axios.get(`${BASEURL}/tasks/${name}/${projectName}/get-tasks`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        if (response.status === 200) {
          setTask(response.data)
          setShowLoader(false)
        }
      } catch (err) {
        setShowLoader(false)
        if (err.response && err.response.status === 404) {
          setTask([])
        }
        console.log(err)
      }
    }
    getTasksByProject()
  }, [name])



  const handleTaskComplete = async (taskName) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"))?.token

      let response = await axios.put(`${BASEURL}/tasks/${name}/${projectName}/${taskName}/update-status`, {}, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })

      if (response.status === 200) {
        console.log(response.data)
        setIsChecked(!isChecked)

      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (e) => {
    console.log(e.target)
  }

  const classname = (e) => {
    console.log(e.target.className)
  }

  const openModal = (task) => {
    setSelectedTask(task);
    setShowTaskModal(true);
  };

  const openEditModel = async (task) => {
    setEditTask(task)
    setshowEditModel(true)
  }

  const openWarningModel = (task) => {
    setDeleteTask(task)
    setShowWarningModel(true)
  }

  return (
    <div className="flex  h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-50 p-8 overflow-auto">
        <TopNavBar />
        <div className="flex justify-between items-center mb-6 mt-5">
          <h2 className="text-2xl font-bold">Project: {projectName}</h2>
          <button className="justify-center rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition" onClick={() => setShowModal(true)}>
            + Create New Task
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-x-auto">
          {task.length > 0 ? (<table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Title</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Description</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Created On</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Completed On</th>
                <th className="px-6 py-2 text-left text-sm font-medium text-gray-700"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">

              {task.map((task, index) => (

                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-2 py-4 text-sm flex" onChange={handleChange}>

                    <img
                      src={(isChecked || task.progressStatus === "Completed") ? CheckImg : UnCheckedImg}
                      width={20}
                      alt={task.progressStatus === "Completed" ? "Completed" : "Not Completed"}
                      className="cursor-pointer"
                      onClick={() => handleTaskComplete(task.title)}
                    />

                    {task.title}
                  </td>
                  <td className="px-2 py-4 text-sm">{task.description}</td>
                  <td className="px-2 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColors[task.progressStatus]}`}>
                      {task.progressStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">{task.creationDate}</td>
                  <td className="px-6 py-4 text-sm">
                    {task.completionDate || (
                      <span className="text-gray-400 italic">Pending</span>
                    )}
                  </td>
                  <td><div className="text-center  justify-center flex gap-2">
                    <MdOutlinePreview size={20} onClick={() => openModal(task)} />
                    <CiEdit size={20} onClick={() => { openEditModel(task) }} />
                    <MdDelete size={20} onClick={() => { (openWarningModel(task)) }} /></div></td>
                </tr>
              ))}
            </tbody>
          </table>) : (<div className="text-center py-4">No Active Tasks</div>)}

        </div>
        {showLoader && (<Loader />)}

      </div>
      <CreateTaskModel isOpen={showModal} onClose={() => setShowModal(false)} />

      <ViewTaskInfo
        isOpen={showTaskModal}
        onClose={() => setShowTaskModal(false)}
        task={selectedTask} />

      <EditTask isOpen={showEditModel} onClose={() => { setshowEditModel(false) }} task={editTask} />

      <WarningModel isOpen={showWarningModel} onClose={() => { setShowWarningModel(false) }} task={deleteTask} />
    </div>
  );
};

export default ProjectDetails;
