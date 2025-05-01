import {React,useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios"
const CreateProjectModel = ({ isOpen, onClose }) => {
    
    const [title, setTitle] = useState("")
    
    const {name} = useParams()
    const BASEURL = import.meta.env.VITE_BACKEND_URL
    
    if (!isOpen) return null;
    
    // stroing project data in datbase
    const handleCreate = async()=>{
        try{
            const formData = {user:name,title:title}
            let res = await axios.post(`${BASEURL}/project/create-project`,formData,{
                headers: { "Content-Type": "application/json" },
            }) 

            console.log(res.data)
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
                <h2 className="text-xl font-semibold mb-4">Add New Project</h2>

                <input
                    type="text"
                    placeholder="Project name"
                    className="w-full p-2 border rounded mb-4"
                    required
                    onChange={(e)=>{setTitle(e.target.value)}}
                />

                <div className="flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        onClick={()=>{handleCreate()}}
                    >
                        Add Project
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateProjectModel;
