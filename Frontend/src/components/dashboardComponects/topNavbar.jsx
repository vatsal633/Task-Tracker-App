import React from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
const Topbar = () => {
  const {name} = useParams()
  const navigate = useNavigate()

  const handleLogout =()=>{
    localStorage.removeItem("token");
    navigate('/')
  } 
  return (
    <div className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Welcome, {name}</span>
        <button className="px-3 py-1 bg-blue-600 text-white rounded cursor-pointer" onClick={()=>{handleLogout()}}>Logout</button>
      </div>
    </div>
  );
};

export default Topbar;
