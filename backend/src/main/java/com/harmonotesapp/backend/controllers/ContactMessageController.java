package com.harmonotesapp.backend.controllers;

import com.harmonotesapp.backend.models.ContactMessage;
import com.harmonotesapp.backend.repositories.ContactMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/contact-messages")
public class ContactMessageController {
    @Autowired
    private ContactMessageRepository contactMessageRepository;

    @PostMapping
    public ContactMessage createContactMessage(@RequestBody ContactMessage contactMessage) {
        return contactMessageRepository.save(contactMessage);
    }
}
