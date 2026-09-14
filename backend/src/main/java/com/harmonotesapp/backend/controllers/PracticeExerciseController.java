package com.harmonotesapp.backend.controllers;

import com.harmonotesapp.backend.models.PracticeExercise;
import com.harmonotesapp.backend.repositories.PracticeExerciseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/practice-exercises")
public class PracticeExerciseController {
    @Autowired
    private PracticeExerciseRepository practiceExerciseRepository;


    @GetMapping()
    public List<PracticeExercise> getAllPracticeExercises(){
        return practiceExerciseRepository.findAll();
    }


    @GetMapping("/{id}")
    public PracticeExercise getPracticeExerciseById(@PathVariable Long id) {
        return practiceExerciseRepository.findById(id).orElse(null);
    }


    @PostMapping()
    public PracticeExercise createPracticeExercise(@RequestBody PracticeExercise practiceExercise) {
        return practiceExerciseRepository.save(practiceExercise);
    }


    @PutMapping("/{id}")
    public PracticeExercise updatePracticeExercise(@PathVariable Long id, @RequestBody PracticeExercise practiceExercise) {
        practiceExercise.setId(id);
        return practiceExerciseRepository.save(practiceExercise);
    }


    @DeleteMapping("/{id}")
    public void deletePracticeExercise(@PathVariable Long id) {
        practiceExerciseRepository.deleteById(id);
    }

}
