import React, { useEffect, useState } from "react";
import Sidebar from "../components/dashboardComponects/sidebar";
import TopNavBar from "../components/dashboardComponects/topNavbar";

const Profile = () => {
  const storedUser = JSON.parse(localStorage.getItem("user")) || {
    name: "John Doe",
    email: "john@example.com",
    role: "Developer",
    joinedDate: "2024-05-10",
    avatar: null,
  };

  const [user, setUser] = useState(storedUser);
  const [isEditing, setIsEditing] = useState(false);
  const [previewAvatar, setPreviewAvatar] = useState(storedUser.avatar);

  // Handle field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image upload
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewAvatar(reader.result);
        setUser((prev) => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(user));
    setIsEditing(false);
    alert("✅ Profile updated!");
  };

  const handleCancel = () => {
    setUser(storedUser);
    setPreviewAvatar(storedUser.avatar);
    setIsEditing(false);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-50 p-6 overflow-auto">
        <TopNavBar />
        <div className="max-w-4xl mx-auto mt-10">
          <div className="bg-white shadow-md rounded-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">User Profile</h2>
              {!isEditing && (
                <button
                  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </button>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8 mb-6">
              <div className="w-32 h-32">
                <img
                  src={previewAvatar || "https://via.placeholder.com/150"}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full border border-gray-300"
                />
              </div>
              {isEditing && (
                <div>
                  <label className="block text-gray-600 font-medium mb-1">
                    Change Avatar
                  </label>
                  <input type="file" accept="image/*" onChange={handleAvatarChange} />
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`w-full border border-gray-300 rounded px-3 py-2 ${!isEditing ? "bg-gray-100 cursor-not-allowed" : ""}`}
                />
              </div>

              <div>
                <label className="block text-gray-600 text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`w-full border border-gray-300 rounded px-3 py-2 ${!isEditing ? "bg-gray-100 cursor-not-allowed" : ""}`}
                />
              </div>

              <div>
                <label className="block text-gray-600 text-sm font-medium mb-1">Role</label>
                <input
                  type="text"
                  name="role"
                  value={user.role}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`w-full border border-gray-300 rounded px-3 py-2 ${!isEditing ? "bg-gray-100 cursor-not-allowed" : ""}`}
                />
              </div>

              <div>
                <label className="block text-gray-600 text-sm font-medium mb-1">Joined Date</label>
                <input
                  type="text"
                  name="joinedDate"
                  value={user.joinedDate}
                  disabled
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 cursor-not-allowed"
                />
              </div>
            </div>

            {isEditing && (
              <div className="mt-8 flex justify-end space-x-4">
                <button
                  onClick={handleCancel}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
