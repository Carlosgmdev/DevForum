import React, { useState, useEffect } from 'react'
import CourseCard from '../components/CourseCard'
import Title from '../components/Title';
import Input from '../components/Input';
import Search from '../components/Search';

const Courses = ({user}) => {

  const {id, username, email, token} = user;
  const [courses, setCourses] = useState([])
  const [filteredCourses, setFilteredCourses] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => { 
    setFilteredCourses(
      courses.filter(course => {
        return course.name.toLowerCase().includes(query)
      })
    )
  }, [query, courses])

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
    <div className='flex flex-col gap-4 h-full'>
      <Title>Courses</Title>
      <div className='flex justify-center'>
      <Search placeholder={'Courses'} set={setQuery} />
      </div>
      <div className='grid gap-4 grid-cols-3 overflow-y-scroll pr-2 pb-3'>
      {
        filteredCourses.map(course => (
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