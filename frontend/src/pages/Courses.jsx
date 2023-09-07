import React, { useState, useEffect } from 'react'
import CourseCard from '../components/CourseCard'

const Courses = ({user}) => {

  const [courses, setCourses] = useState([])
  const {id, username, email, token} = user;

  useEffect(() => {
    fetch('http://localhost:8080/courses', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setCourses(data);
      })
      .catch(error => console.log(error));
  }, []);
  

  return (
    <div>
      <h1 className="text-3xl text-slate-700 mb-8">Courses</h1>
      <div className='grid gap-6 grid-cols-3'>
      {
        courses.map(course => (
          <CourseCard
            course={course}
            key={course.id}
          />
        ))
      }
      </div>
    </div>
  )
}

export default Courses