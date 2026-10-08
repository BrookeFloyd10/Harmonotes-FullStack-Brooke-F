package com.harmonotesapp.backend.config;

import com.harmonotesapp.backend.models.LibraryItem;
import com.harmonotesapp.backend.models.PracticeExercise;
import com.harmonotesapp.backend.models.Student;
import com.harmonotesapp.backend.models.User;
import com.harmonotesapp.backend.repositories.LibraryItemRepository;
import com.harmonotesapp.backend.repositories.PracticeExerciseRepository;
import com.harmonotesapp.backend.repositories.StudentRepository;
import com.harmonotesapp.backend.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;
import tools.jackson.core.type.TypeReference;
import tools.jackson.databind.json.JsonMapper;

import java.util.List;

// hardcoded credentials until I can implement real auth

@Component
public class DataInitializer implements CommandLineRunner {
    private final UserRepository userRepository;
    private final StudentRepository studentRepository;
    private final LibraryItemRepository libraryItemRepository;
    private final PracticeExerciseRepository practiceExerciseRepository;
    private final JsonMapper jsonMapper;

    public DataInitializer(JsonMapper jsonMapper, UserRepository userRepository, StudentRepository studentRepository, LibraryItemRepository libraryItemRepository, PracticeExerciseRepository practiceExerciseRepository) {
        this.userRepository = userRepository;
        this.studentRepository = studentRepository;
        this.libraryItemRepository = libraryItemRepository;
        this.practiceExerciseRepository = practiceExerciseRepository;
        this.jsonMapper = jsonMapper;
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

// Seeds demo data for library and Practice Exercises
// so a fresh clone works with no manual setup.
// The count() == 0 check keeps restarts from inserting duplicates.

        if (libraryItemRepository.count() == 0) {
            ClassPathResource resource = new ClassPathResource("seed-data/library-items.json");
            List<LibraryItem> items = jsonMapper.readValue(resource.getInputStream(), new TypeReference<List<LibraryItem>>() {});
            libraryItemRepository.saveAll(items);
        }

        if (practiceExerciseRepository.count() == 0) {
            ClassPathResource resource= new ClassPathResource("seed-data/practice-exercises.json");
            List<PracticeExercise> exercises = jsonMapper.readValue(resource.getInputStream(), new TypeReference<List<PracticeExercise>>() {});
            practiceExerciseRepository.saveAll(exercises);
        }
    }
}
