import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({username, setUser}) => {

  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault()
    setUser({})
    localStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <div className="flex gap-4">
      <div className="flex items-center gap-1">
        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        <p>{username}</p>
      </div>
      <img src="/src/assets/log-out-outline.svg" alt="Logout image"  className="w-6 cursor-pointer" onClick={e => handleLogout(e)}/>
    </div>
  );
};

export default Profile;