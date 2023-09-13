import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";
import {toast } from "react-toastify";
import Form from "./Form";

const Signup = () => {

  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    fetch(`http://localhost:8080/auth/validate-username?username=${username}`)
      .then(response => {
        if(response.status != 200) {
          toast.error(`Username ${username} is not available`, {
            position: "bottom-left",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      })
  }, [username])

  useEffect(() => {
    fetch(`http://localhost:8080/auth/validate-email?email=${email}`)
      .then(response => {
        if(response.status != 200) {
          toast.error(`Email ${email} is already used`, {
            position: "bottom-left",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      })
  }, [email])

  const handleSignup = (e) => {
    e.preventDefault()
    fetch('http://localhost:8080/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, email, password})
    }) 
      .then(response => response.json())
      .then(data => {
        if(data.id) {
          toast.success(`Welcome! ${data.username}, please login`, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        } else {
          data.map(error => {
            toast.error(error.error, {
              position: "bottom-left",
              autoClose: 20000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          })
        }
      })
  }

  return (
    <Form>
      <Input type='text' placeholder="Username" set={setUsername} />
      <Input type='email' placeholder="Email" set={setEmail} />
      <Input type='password' placeholder="Password" set={setPassword} />
      <Button action={(e) => handleSignup(e)}>Signup</Button>
      <p className="text-center mt-4">
        Already have an account?{" "}
        <Link to="/login" className="font-bold hover:underline">
          Login
        </Link>
      </p>

    </Form>
    
  );
};

export default Signup;
