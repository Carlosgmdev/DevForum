package com.carlosg.devforum.controller;


import com.carlosg.devforum.domain.courses.Course;
import com.carlosg.devforum.service.CourseService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/courses")
@SecurityRequirement(name = "bearer-key")
public class CourseController {

    @Autowired
    private CourseService coursesService;

    @PostMapping
    public ResponseEntity<List<Course>> createCourses(@RequestBody @Valid List<Course> courses) {
        return ResponseEntity.ok(
                coursesService.createCourses(courses)
        );
    }


    @GetMapping
    public ResponseEntity<List<Course>> getCourses() {
        return ResponseEntity.ok(
                coursesService.getCourses()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Course> getCourse(@PathVariable Long id) {
        return ResponseEntity.ok(
                coursesService.getCourse(id)
        );
    }

}
