package com.harmonotesapp.backend.controllers;

import com.harmonotesapp.backend.models.PracticeSession;
import com.harmonotesapp.backend.repositories.PracticeSessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/practice-sessions")
public class PracticeSessionController {
    @Autowired
    private PracticeSessionRepository practiceSessionRepository;

@GetMapping()
    public List<PracticeSession>getPracticeSessions() {
    return practiceSessionRepository.findAll();
}

@GetMapping("/{id}")
    public PracticeSession getPracticeSessionsById(@PathVariable Long id) {
    return practiceSessionRepository.findById(id).orElse(null);

}

@PostMapping()
    public PracticeSession createPracticeSession(@RequestBody PracticeSession practiceSession) {
    return practiceSessionRepository.save(practiceSession);
}

@PutMapping("/{id}")
    public PracticeSession updatePracticeSession(@PathVariable Long id, @RequestBody PracticeSession practiceSession) {
    practiceSession.setId(id);
    return practiceSessionRepository.save(practiceSession);
}

@DeleteMapping("/{id}")
    public void deletePracticeSession(@PathVariable Long id) {
    practiceSessionRepository.deleteById(id);
}
}
