import React from "react";

const Profile = () => {
  return (
    <div className="flex gap-4">
      <div className="flex items-center gap-1">
        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        <p className="text-slate-700">cmartinez</p>
      </div>
      <button className="bg-slate-700 transition-colors hover:bg-slate-800 text-white px-2 py-1 rounded-md">
        Logout
      </button>
    </div>
  );
};

export default Profile;
