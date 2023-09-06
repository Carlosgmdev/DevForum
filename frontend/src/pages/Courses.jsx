import React, { useState, useEffect } from 'react'
import CoursesList from '../components/CoursesList'

const Courses = () => {

  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjbWFydGluZXoiLCJpc3MiOiJkZXZmb3J1bSIsImlkIjoyOCwiZXhwIjoxNjk0MDQ1NDIyfQ.zcbqmy4AYlPM02aVpWhHUJytr7EQiQpxkirRLYPNYJg';
    const headers = {
      Authorization: `Bearer ${token}`
    };
  
    fetch('http://localhost:8080/courses', {
      headers: headers
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setCourses(data);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, []);
  

  return (
    <div>
      <h1 className="text-3xl text-slate-700 mb-6">Courses</h1>
      <CoursesList />
    </div>
  )
}

export default Courses