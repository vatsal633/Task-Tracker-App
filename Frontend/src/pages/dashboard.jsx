import Sidebar from "../components/dashboardComponects/sidebar";
import TopNavBar from "../components/dashboardComponects/topNavbar";
import ProjectList from "../components/dashboardComponects/projectList";
import TaskList from "../components/dashboardComponects/taskList";
import Searchbar from "../components/dashboardComponects/serchbar"

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-50 p-8 overflow-auto ">
        <TopNavBar />
        <Searchbar/>
        <ProjectList />
      </div>
    </div>
  );
};

export default Dashboard;
