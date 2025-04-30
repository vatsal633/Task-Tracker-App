import React from "react";
import EditGif from "../../assets/edit.gif"
import DeleteGif from "../../assets/delete.gif"

const TaskList = () => {
    return (
        <div className="mt-6">
            <h2 className="text-lg font-bold mb-4">Tasks</h2>
            <table className="w-full bg-white rounded shadow overflow-hidden">
                <thead className="bg-gray-100 text-gray-700">
                    <tr>
                        <th className="p-3 text-left">Title</th>
                        <th className="p-3 text-left">Status</th>
                        <th className="p-3 text-left">Created</th>
                        <th className="p-3 text-left">Completed</th>
                        <th className="p-3 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t">
                        <td className="p-3">Fix API Bug</td>
                        <td className="p-3">In Progress</td>
                        <td className="p-3">2025-04-29</td>
                        <td className="p-3">-</td>
                        <td className="p-3 space-x-2">
                            <button className="text-blue-500 cursor-pointer" >
                                <img src={EditGif}  width={50} alt="" />
                            </button>
                            <button className="text-red-500">
                            <img src={DeleteGif}  width={50} alt="" />
                            </button>
                            <button className="text-green-500">
                            <img src={EditGif}  width={30} alt="" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TaskList;
