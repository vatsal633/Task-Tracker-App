import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
const WarningModel = ({ isOpen, onClose, task }) => {
    const BASEURL = import.meta.env.VITE_BACKEND_URL
    const { name } = useParams()
    const { projectName } = useParams()


    const handleDelete = async () => {
        try {
            const auth = JSON.parse(localStorage.getItem("token"))
            const token = auth?.token
            const taskName = task.title
            let response = await axios.delete(`${BASEURL}/tasks/${name}/${projectName}/${taskName}/delete-task`, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                }
            })
            
            if(response.status===200){
                window.location.reload();
                onClose(true)
            }
            console.log(response.data)

        }
        catch (err) {
            console.log(err)
        }
    }

    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
                <h2 className="text-2xl font-semibold mb-4  text-center text-red-500">Warning !</h2>

                <span className='text-xl block text-center'>Are You Sure you want to delete task?</span>
                <div className="flex justify-end mt-4 flex-col gap-3">

                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                        Close
                    </button>


                    <button className='justify-center rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition' onClick={() => { handleDelete() }}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WarningModel