package com.harmonotesapp.backend.controllers;

import com.harmonotesapp.backend.models.LibraryItem;
import com.harmonotesapp.backend.repositories.LibraryItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin
@RestController
@RequestMapping("/api/library-items")
public class LibraryItemController {
    @Autowired
    private LibraryItemRepository libraryItemRepository;

    // takes care of filtering by instrument by adding it to the URL and if all is selected it adds nothing and defaults to find all.
    @GetMapping()
    public List<LibraryItem> getAllLibraryItems(@RequestParam(required=false) String instrument) {
        if(instrument !=null && !instrument.isBlank()) {
            return libraryItemRepository.findByInstrumentContaining(instrument);
        }
        return libraryItemRepository.findAll();
    }

    @GetMapping("/{id}")
    public LibraryItem getLibraryItemById(@PathVariable Long id) {
        return libraryItemRepository.findById(id).orElse(null);
    }

    @PostMapping()
    public LibraryItem createNewLibraryItem(@RequestBody LibraryItem libraryItem) {
        return libraryItemRepository.save(libraryItem);
    }
    
    @PutMapping("/{id}")
    public LibraryItem updateLibraryItem(@PathVariable Long id, @RequestBody LibraryItem libraryItem) {
        libraryItem.setId(id);
        return libraryItemRepository.save(libraryItem);
    }
    
    @DeleteMapping("/{id}")
    public void deleteLibraryItem(@PathVariable Long id) {
        libraryItemRepository.deleteById(id);
    }

}
