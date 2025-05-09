import React from "react";
import { Link, useParams } from "react-router-dom";
import { X } from "lucide-react";

const Sidebar = ({ closeSidebar }) => {
  const { name } = useParams();

  return (
    <div className="w-64 bg-white border-r border-gray-300 p-6 space-y-6 h-full shadow-lg relative md:static md:shadow-none">
      
      <button
        className="absolute top-4 right-4 block md:hidden text-gray-600"
        onClick={closeSidebar}
      >
        <X size={24} />
      </button>

      <h2 className="text-2xl font-bold text-blue-600">WorkSync</h2>
      <nav className="space-y-3">
        <Link to={`/${name}/dashboard`} className="block text-gray-700 hover:text-blue-600">Home</Link>
        <Link to={`/${name}/profile`} className="block text-gray-700 hover:text-blue-600">Profile</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
