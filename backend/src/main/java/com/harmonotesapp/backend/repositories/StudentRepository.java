package com.harmonotesapp.backend.repositories;

import com.harmonotesapp.backend.models.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
