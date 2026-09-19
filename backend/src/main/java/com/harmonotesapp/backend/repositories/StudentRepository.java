package com.harmonotesapp.backend.repositories;

import com.harmonotesapp.backend.models.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student, Long> {
    Optional<Student>findByUserId(Long userId);
}
