package com.harmonotesapp.backend.controllers;

import com.harmonotesapp.backend.dto.LoginRequestDTO;
import com.harmonotesapp.backend.models.User;
import com.harmonotesapp.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@CrossOrigin
@RestController
@RequestMapping("/api/login")
public class LoginController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public User getUser(@RequestBody LoginRequestDTO loginRequestDTO) {
        User user = userRepository.findUserByEmailAddress(loginRequestDTO.getEmailAddress());
            if (user != null && user.getPassword().equals(loginRequestDTO.getPassword())) {
                return user;
            } else {
                throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid email or password");
            }
        }
    }
