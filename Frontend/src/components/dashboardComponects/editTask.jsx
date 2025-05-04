import React, { useState } from 'react';
import axios from 'axios'
import { useParams } from "react-router-dom"

const EditTask = ({ isOpen, onClose, task }) => {
  const BASEURL = import.meta.env.VITE_BACKEND_URL
  const [taskData, setTaskData] = useState({
    NewTitle: '',
    NewDescription: ''
  })
  const { name } = useParams()
  const { projectName } = useParams()

  const handleChange = (e) => {
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value
    })
  }
  const handleUpdate = async () => {
    try {
      const auth = JSON.parse(localStorage.getItem("token"))
      const token = auth?.token
      const taskName = task.title
      let response = await axios.put(`${BASEURL}/tasks/${name}/${projectName}/${taskName}/edit-task`, taskData, {
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
        }
      })

      if (response.status === 202) {
        window.location.reload();
        onClose()
      }

      console.log(response.data)
      console.log(taskData)
    } catch (err) {
      console.log(err)
    }
  }


  if (!isOpen || !task) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
        <h2 className="text-xl font-semibold mb-4">Task Details</h2>



        <div className="mb-4">
          <p className="text-sm text-gray-500 inline">Title: </p>
          <p className="text-lg font-medium inline">{task.title}</p>
          <input type="text" placeholder='enter new title' className='mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' name='NewTitle' value={taskData.NewTitle} onChange={handleChange} />
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-500 inline">Description:  </p>
          <p className="text-lg font-medium inline">{task.description}</p>
          <input type="text" placeholder='enter new description' className='mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' value={taskData.NewDescription} name='NewDescription' onChange={handleChange} />
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-500">Status:</p>
          <p className="text-gray-800">{task.progressStatus}</p>
        </div>

        <div className="mb-4 flex flex-col sm:flex-row sm:gap-4">
          <div>
            <p className="text-sm text-gray-500">Created On:</p>
            <p>{new Date(task.creationDate).toLocaleDateString()}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Completed On:</p>
            <p>{task.completionDate ? new Date(task.completionDate).toLocaleDateString() : 'N/A'}</p>
          </div>
        </div>

        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Close
          </button>


          <button className='justify-center rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition' onClick={() => { handleUpdate() }}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
