package com.harmonotesapp.backend.controllers;

import com.harmonotesapp.backend.models.User;
import com.harmonotesapp.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/login")
public class LoginController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public User getUser(String emailAddress){
        return userRepository.findUserByEmailAddress(emailAddress);
    }
}
