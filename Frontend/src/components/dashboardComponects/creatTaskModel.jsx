import { React, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios"
const CreateTaskModel = ({ isOpen, onClose }) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState('')

    const { name } = useParams()
    const BASEURL = import.meta.env.VITE_BACKEND_URL

    if (!isOpen) return null;

    // stroing task data in datbase
    const handleCreateTask = async () => {
        try {
            const auth = JSON.parse(localStorage.getItem("token"));
            const token = auth?.token;


            if (!token) {
                console.log("No token found, please login.")
                return;
            }

            const creationDate = new Date().toISOString().split("T")[0]

            const formData = { user: name, title, description, progressStatus: "Not Complete", creationDate, completionDate: null }

            let res = await axios.post(`${BASEURL}/tasks/create-task`, formData, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            })
            // console.log(formData)
            console.log(res.data)
            console.log("Task created:", res.data);
            onClose()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
                <h2 className="text-xl font-semibold mb-4">Add New Task</h2>

                <input
                    type="text"
                    placeholder="Task name"
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm my-3"
                    required
                    onChange={(e) => { setTitle(e.target.value) }}
                />

                <input
                    type="text"
                    name="description"
                    required
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm my-5"
                    placeholder="Description"
                    onChange={(e) => { setDescription(e.target.value) }}
                />

                <div className="flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        className=" justify-center rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => { handleCreateTask() }}
                    >
                        Add Task
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateTaskModel;
