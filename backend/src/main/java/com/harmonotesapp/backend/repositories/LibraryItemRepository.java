package com.harmonotesapp.backend.repositories;

import com.harmonotesapp.backend.models.LibraryItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LibraryItemRepository extends JpaRepository<LibraryItem, Long> {
List<LibraryItem> findByInstrumentContaining(String instrument);
}
