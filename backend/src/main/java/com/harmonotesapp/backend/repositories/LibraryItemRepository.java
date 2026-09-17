package com.harmonotesapp.backend.repositories;

import com.harmonotesapp.backend.models.LibraryItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LibraryItemRepository extends JpaRepository<LibraryItem, Long> {
}
