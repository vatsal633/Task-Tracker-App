import { useState } from "react";
import Sidebar from "../components/dashboardComponects/sidebar";
import TopNavBar from "../components/dashboardComponects/topNavbar";
import ProjectList from "../components/dashboardComponects/projectList";
import Searchbar from "../components/dashboardComponects/serchbar";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex`}
      >
        <Sidebar closeSidebar={() => setSidebarOpen(false)} />
      </div>


      {/* Main content */}
      <div className="flex-1 bg-gray-50 p-4 md:p-8 overflow-auto w-full">
        <TopNavBar onMenuClick={() => setSidebarOpen(true)} />
        <Searchbar />
        <ProjectList />
      </div>
    </div>
  );
};

export default Dashboard;
