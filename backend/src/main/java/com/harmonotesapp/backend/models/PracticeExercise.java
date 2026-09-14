package com.harmonotesapp.backend.models;

import jakarta.persistence.*;

@Entity
@Table(name="practice_exercises")
public class PracticeExercise {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY )
    private Long id;
    private String title;
    private String difficulty;
    private int xpValue;
    private String url;
    private String instrument;

    public PracticeExercise() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }

    public int getXpValue() {
        return xpValue;
    }

    public void setXpValue(int xpValue) {
        this.xpValue = xpValue;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getInstrument() {
        return instrument;
    }

    public void setInstrument(String instrument) {
        this.instrument = instrument;
    }
}

