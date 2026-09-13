package com.harmonotesapp.backend.models;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
        private Long id;
    @Column(name="first_name")
        private String firstName;
    @Column(name="last_name")
        private String lastName;
    @Column(name="email_address")
        private String emailAddress;
    @Column(name="password")
        private String password;
    @Column(name="role")
        private String role;
    @Column(name="created_at")
        private LocalDateTime createdAt;

    public User() {

    }

    // this annotation is called a lifecycle callback provided by JPA, putting it on the onCreate
    // method allows it to run automatically right before the entity is saved the very first time.

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
