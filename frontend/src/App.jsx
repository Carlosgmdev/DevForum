import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Layout/Auth";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./Layout/Dashboard";
import Courses from "./pages/Courses";
import Topics from "./pages/Topics";
import Answers from "./pages/Answers";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <Auth>
              <Login />
            </Auth>
          }
        />
        <Route
          path="/signup"
          element={
            <Auth>
              <Signup />
            </Auth>
          }
        />
        <Route path="/dashboard/" element={<Dashboard />}>
          <Route path="home" element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="topics" element={<Topics />} />
          <Route path="answers" element={<Answers />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
