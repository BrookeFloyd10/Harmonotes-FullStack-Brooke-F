package com.harmonotesapp.backend.repositories;

import com.harmonotesapp.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findUserByEmailAddress(String emailAddress);
}
