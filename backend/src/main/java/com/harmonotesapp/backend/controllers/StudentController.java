package com.harmonotesapp.backend.controllers;

import com.harmonotesapp.backend.models.Student;
import com.harmonotesapp.backend.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/students")
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;

@GetMapping()
    public List<Student>getAllStudents() {
    return studentRepository.findAll();
}

@GetMapping("/{id}")
    public Student getStudentsById(@PathVariable Long id) {
    return studentRepository.findById(id).orElse(null);
    }

@GetMapping("/user/{userId}")
    public Student getStudentByUserId(@PathVariable Long userId) {
    return studentRepository.findByUserId(userId).orElse(null);
}

@PostMapping()
    public Student createStudent(@RequestBody Student student) {
    return studentRepository.save(student);
}

@PutMapping("/{id}")
    public Student updateStudent(@PathVariable Long id, @RequestBody Student student) {
    student.setId(id);
    return studentRepository.save(student);
}

@DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable Long id) {
    studentRepository.deleteById(id);
}
}
