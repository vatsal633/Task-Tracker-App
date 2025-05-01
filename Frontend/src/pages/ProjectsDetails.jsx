import { React, useEffect, useState } from "react";
import Sidebar from "../components/dashboardComponects/sidebar";
import TopNavBar from "../components/dashboardComponects/topNavbar";
import CreateTaskModel from "../components/dashboardComponects/creatTaskModel";
import { useParams } from "react-router-dom";
import axios from "axios";


const dummyTasks = [
  {
    title: "Design Login UI",
    description: "Create responsive login form with TailwindCSS.",
    status: "In Progress",
    creationDate: "2025-04-25",
    completionDate: null,
  },
  {
    title: "Setup JWT Middleware",
    description: "Protect API routes using middleware.",
    status: "Completed",
    creationDate: "2025-04-24",
    completionDate: "2025-04-26",
  },
  {
    title: "Create Dashboard Layout",
    description: "Sidebar + Topbar + Content Area structure.",
    status: "Completed",
    creationDate: "2025-04-22",
    completionDate: "2025-04-24",
  },
  {
    title: "Add Search Bar to Dashboard",
    description: "Searchbar with clear button functionality.",
    status: "Not Started",
    creationDate: "2025-04-30",
    completionDate: null,
  },
];

const statusColors = {
  "Not Complete": "bg-gray-200 text-gray-800",
  "In Progress": "bg-yellow-200 text-yellow-800",
  Completed: "bg-green-200 text-green-800",
};

const ProjectDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const { name } = useParams()
  const [task,setTask] = useState([])
  const BASEURL = import.meta.env.VITE_BACKEND_URL

  useEffect(() => {
    const getTasks = async () => {
      try {
        let response = await axios.get(`${BASEURL}/tasks/${name}/get-tasks`)
        console.log(response.data)

        if(response.status===200){
          setTask(response.data)
        }
      } catch (err) {
        console.log(err)
      }
    }
    getTasks()
  }, [name])
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-50 p-8 overflow-auto">
        <TopNavBar />
        <div className="flex justify-between items-center mb-6 mt-5">
          <h2 className="text-2xl font-bold">Project: Dashboard UI</h2>
          <button className="justify-center rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition" onClick={() => setShowModal(true)}>
            + Create New Task
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Title</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Description</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Created</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Completed</th>
                <th className="px-6 py-2 text-left text-sm font-medium text-gray-700">Completed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {task.map((task, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-2 py-4 text-sm">{task.title}</td>
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
                  <td><span className="text-center">df</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <CreateTaskModel isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default ProjectDetails;
