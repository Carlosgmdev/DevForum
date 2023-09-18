import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";
import {toast } from "react-toastify";
import Form from "./Form";


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
        navigate('/dashboard/topics');
      })
      .catch(error => {
        toast.error("Invalid username or password!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
  }


  return (
    <Form>
      <Input type='text' placeholder="Username" set={setUsername} />
      <Input type='password' placeholder="Password" set={setPassword} />
      <Button action={(e) => handleLogin(e)}>Login</Button>
      <p className="text-center mt-4">
        Don't have an account?{" "}
        <Link to="/signup" className="font-bold hover:underline">
          Signup
        </Link>
      </p>
    </Form>
  );
};

export default Login;
