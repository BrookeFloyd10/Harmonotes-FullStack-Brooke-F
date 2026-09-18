package com.harmonotesapp.backend.config;

import com.harmonotesapp.backend.repositories.StudentRepository;
import com.harmonotesapp.backend.repositories.UserRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

// hardcoded credentials until I can implement real auth

@Component
public class DataInitializer {
    private final UserRepository userRepository;
    private final StudentRepository studentRepository;

    public DataInitializer(UserRepository userRepository, StudentRepository studentRepository) {
        this.userRepository = userRepository;
        this.studentRepository = studentRepository;
}

    @PostConstruct
    public void initialize() {
    }
}
