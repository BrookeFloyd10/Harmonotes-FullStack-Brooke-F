package com.harmonotesapp.backend.models;

import jakarta.persistence.*;

@Entity
@Table(name="students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int totalXp;
    private int dailyXp;

    @OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="user_id", unique=true)
    private User user;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getTotalXp() {
        return totalXp;
    }

    public void setTotalXp(int totalXp) {
        this.totalXp = totalXp;
    }

    public int getDailyXp() {
        return dailyXp;
    }

    public void setDailyXp(int dailyXp) {
        this.dailyXp = dailyXp;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
