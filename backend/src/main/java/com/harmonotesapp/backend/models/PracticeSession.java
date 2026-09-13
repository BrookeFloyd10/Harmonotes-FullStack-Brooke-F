package com.harmonotesapp.backend.models;

import jakarta.persistence.*;

@Entity
    public class PracticeSession {
        @Id
        @GeneratedValue(strategy=GenerationType.IDENTITY)
            private Long id;
        @Column(name="session_focus")
            private String sessionFocus;
        @Column(name="session_duration")
            private String sessionDuration;
        @Column(name="session_triumphs_challenges")
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
