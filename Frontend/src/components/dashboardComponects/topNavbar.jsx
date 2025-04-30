const TopNavBar = () => {
    return (
      <div className="w-full bg-white shadow-md p-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Welcome Back!</h2>
        <div className="flex gap-4 items-center">
          <span className="text-gray-600">User</span>
          <img src="https://via.placeholder.com/32" className="rounded-full" />
        </div>
      </div>
    );
  };
  
  export default TopNavBar;
  