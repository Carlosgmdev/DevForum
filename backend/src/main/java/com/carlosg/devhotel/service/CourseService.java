package com.carlosg.devhotel.service;

import com.carlosg.devhotel.domain.courses.Course;
import com.carlosg.devhotel.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    public List<Course> getCourses() {
        return courseRepository.findAll();
    }


}
