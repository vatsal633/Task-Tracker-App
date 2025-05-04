import React from 'react';

const ViewTaskInfo = ({ isOpen, onClose, task }) => {
  if (!isOpen || !task) return null;

  return (
    <div className="fixed inset-0 bg-gray-500  bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
        <h2 className="text-xl font-semibold mb-4">Task Details</h2>

        <div className="mb-4">
          <p className="text-sm text-gray-500">Project:</p>
          <p className="text-lg font-medium">{task.projectName}</p>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-500">Title:</p>
          <p className="text-lg font-medium">{task.title}</p>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-500">Description:</p>
          <p className="text-gray-700">{task.description}</p>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-500">Status:</p>
          <p className="text-gray-800">{task.progressStatus}</p>
        </div>

        <div className="mb-4 flex flex-col sm:flex-row sm:gap-4">
          <div>
            <p className="text-sm text-gray-500">Created On:</p>
            <p>{new Date(task.creationDate).toLocaleDateString()}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Completed On:</p>
            <p>{task.completionDate ? new Date(task.completionDate).toLocaleDateString() : 'N/A'}</p>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewTaskInfo;
