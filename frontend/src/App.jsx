import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Layout/Auth";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./Layout/Dashboard";
import Courses from "./pages/Courses";
import Topics from "./pages/Topics";
import Answers from "./pages/Answers";
import Home from "./pages/Home";
import Course from "./pages/Course";

const App = () => {

  const storedUser = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(storedUser || {});

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth/>}>
          <Route path="login" element={<Login setUser={setUser}/>}/>
          <Route path="signup" element={<Signup/>}/>
        </Route>
        <Route path="/dashboard/" element={<Dashboard user={user} setUser={setUser}/>}>
          <Route path="home" element={<Home user={user} />} />
          <Route path="courses" element={<Courses user={user} />} />
          <Route path="courses/:courseId" element={<Course user={user}/>} />
          <Route path="topics" element={<Topics user={user}/>} />
          <Route path="answers" element={<Answers user={user}/>} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
