import React from "react";
import Navbar from "../components/navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 px-6 py-12 flex items-center justify-center">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-indigo-700 mb-4">About WorkSync</h1>
          <p className="text-gray-600 text-lg mb-6">
            WorkSync is a modern task tracking tool designed to help individuals and teams stay organized and
            productive. Whether you’re managing personal goals or coordinating group projects, WorkSync provides
            a seamless and intuitive experience.
          </p>
          <div className="text-left bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Why WorkSync?</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>✅ Simple task creation and status updates</li>
              <li>✅ Real-time collaboration</li>
              <li>✅ Secure login with Google and GitHub</li>
              <li>✅ Organized dashboards and clean UI</li>
              <li>✅ Built with performance and scalability in mind</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
