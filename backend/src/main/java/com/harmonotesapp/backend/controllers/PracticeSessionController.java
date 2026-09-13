package com.harmonotesapp.backend.controllers;

import com.harmonotesapp.backend.models.PracticeSession;
import com.harmonotesapp.backend.repositories.PracticeSessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PracticeSessionController {
    @Autowired
    private PracticeSessionRepository practiceSessionRepository;

@GetMapping("/api/practice-sessions")
    public List<PracticeSession>getPracticeSessions() {
    return practiceSessionRepository.findAll();
}

@GetMapping("/api/practice-sessions/{id}")
    public PracticeSession getPracticeSessionsById(@PathVariable Long id) {
    return practiceSessionRepository.findById(id).orElse(null);

}

@PostMapping("/api/practice-sessions/")
    public PracticeSession createPracticeSession(@RequestBody PracticeSession practiceSession) {
    return practiceSessionRepository.save(practiceSession);
}

@PutMapping("api/practice-sessions/{id}")
    public PracticeSession updatePracticeSession(@PathVariable Long id, @RequestBody PracticeSession practiceSession) {
    practiceSession.setId(id);
    return practiceSessionRepository.save(practiceSession);
}

@DeleteMapping("/api/practice-sessions/{id}")
    public void deletePracticeSession(@PathVariable Long id) {
    practiceSessionRepository.deleteById(id);
}
}
