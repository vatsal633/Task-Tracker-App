import React from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
import { Menu } from "lucide-react"

const Topbar = ({onMenuClick}) => {
  const {name} = useParams()
  const navigate = useNavigate()

  const handleLogout =()=>{
    localStorage.removeItem("token");
    navigate('/')
  } 
  return (
    <div className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <button
        className="md:hidden text-gray-600"
        onClick={onMenuClick}
      >
        <Menu size={24} />
      </button>
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Welcome, {name}</span>
        <button className="px-3 py-1 bg-blue-600 text-white rounded cursor-pointer" onClick={()=>{handleLogout()}}>Logout</button>
      </div>
    </div>
  );
};

export default Topbar;
