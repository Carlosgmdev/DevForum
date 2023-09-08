import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({setUser}) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    })
      .then(response => response.json())
      .then(data => {
        setUser(data)
        localStorage.setItem('user', JSON.stringify(data))
        navigate('/dashboard/home');
      })
      .catch(error => console.log(error))
  }


  return (
    <form className="flex flex-col gap-4 w-full">
      <input
        className="w-full px-3 py-2 border rounded-lg"
        type="text"
        placeholder="Username"
        onChange={e => setUsername(e.target.value)}
      />
      <input
        className="w-full px-3 py-2 border rounded-lg"
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />
      <button className="w-full px-3 py-2 border rounded-lg cursor-pointer bg-slate-700 transition-colors hover:bg-slate-800 text-white"
        onClick={e => handleLogin(e)}
      >
        Login
      </button>
      <p className="text-center mt-4">
        Don't have an account?{" "}
        <Link to="/signup" className="hover:underline">
          Signup
        </Link>
      </p>
    </form>
  );
};

export default Login;
