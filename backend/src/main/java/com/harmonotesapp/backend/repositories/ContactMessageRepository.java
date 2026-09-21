package com.harmonotesapp.backend.repositories;

import com.harmonotesapp.backend.models.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactMessageRepository extends JpaRepository<ContactMessage, Long> {
}
