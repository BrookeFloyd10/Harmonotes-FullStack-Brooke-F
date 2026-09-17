package com.harmonotesapp.backend.models;

import jakarta.persistence.*;

@Entity
@Table(name="practice_sessions")
    public class PracticeSession {
        @Id
        @GeneratedValue(strategy=GenerationType.IDENTITY)
            private Long id;
            private String sessionFocus;
            private String sessionDuration;
            private String sessionTriumphsChallenges;

        public PracticeSession() {

        }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSessionFocus() {
        return sessionFocus;
    }

    public void setSessionFocus(String sessionFocus) {
        this.sessionFocus = sessionFocus;
    }

    public String getSessionDuration() {
        return sessionDuration;
    }

    public void setSessionDuration(String sessionDuration) {
        this.sessionDuration = sessionDuration;
    }

    public String getSessionTriumphsChallenges() {
        return sessionTriumphsChallenges;
    }

    public void setSessionTriumphsChallenges(String sessionTriumphsChallenges) {
        this.sessionTriumphsChallenges = sessionTriumphsChallenges;
    }
}
