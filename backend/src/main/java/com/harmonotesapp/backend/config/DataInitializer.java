package com.harmonotesapp.backend.config;

import com.harmonotesapp.backend.models.Student;
import com.harmonotesapp.backend.models.User;
import com.harmonotesapp.backend.repositories.StudentRepository;
import com.harmonotesapp.backend.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

// hardcoded credentials until I can implement real auth

@Component
public class DataInitializer implements CommandLineRunner {
    private final UserRepository userRepository;
    private final StudentRepository studentRepository;

    public DataInitializer(UserRepository userRepository, StudentRepository studentRepository) {
        this.userRepository = userRepository;
        this.studentRepository = studentRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        if (userRepository.count() == 0) {
            User user = new User();
            user.setFirstName("Gabriel");
            user.setLastName("Floyd");
            user.setEmailAddress("ChordRunner@gmail.com");
            user.setPassword("K3ys&Ch0rds");
            user.setRole("student");
            userRepository.save(user);

            Student student = new Student();
            student.setUser(user);
            studentRepository.save(student);
        }
    }
}
