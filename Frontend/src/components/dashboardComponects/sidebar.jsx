import React from 'react';
import TaskImg from "../../assets/task.svg"
const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-6">TaskTracker</h1>
      <nav className="flex flex-col gap-4">
        <a href="#" className="hover:text-blue-300">Dashboard</a>
        <a href="#" className="hover:text-blue-300">Projects</a>
        <a href="#" className="hover:text-blue-300">
          <img src={TaskImg} alt="" />
          Tasks
        </a>
        <a href="#" className="hover:text-blue-300">
          <img src="https://cdn-icons-png.flaticon.com/128/9069/9069049.png" alt="" srcset="" className='w-8 inline mr-2' />
          <span>Profile</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
