package com.harmonotesapp.backend.repositories;

import com.harmonotesapp.backend.models.PracticeSession;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PracticeSessionRepository extends JpaRepository<PracticeSession, Long> {
}
