package com.harmonotesapp.backend.controllers;

import com.harmonotesapp.backend.dto.LoginRequestDTO;
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

    @PostMapping
    public User getUser(@RequestBody LoginRequestDTO loginRequestDTO) {
        return userRepository.findUserByEmailAddress(loginRequestDTO.getEmailAddress());
    }
}
