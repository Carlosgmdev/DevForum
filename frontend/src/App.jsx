import React, {useState, useEffect} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Layout/Auth";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./Layout/Dashboard";
import Courses from "./pages/Courses";
import Topics from "./pages/Topics";
import Answers from "./pages/Answers";
import Course from "./pages/Course";
import NotFound from "./pages/NotFound";
import Topic from "./pages/Topic";

const App = () => {

  const storedUser = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(storedUser || {});

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth user={user}/>}>
          <Route path="login" element={<Login setUser={setUser}/>}/>
          <Route path="signup" element={<Signup/>}/>
        </Route>
        <Route path="/dashboard/" element={<Dashboard user={user} setUser={setUser}/>}>
          <Route path="courses" element={<Courses user={user}/>} />
          <Route path="courses/:courseId" element={<Course user={user}/>} />
          <Route path="topics" element={<Topics user={user} />}/>
          <Route path="topics/:topicId" element={<Topic user={user}/>} />
          <Route path="answers" element={<Answers user={user}/>} />
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
