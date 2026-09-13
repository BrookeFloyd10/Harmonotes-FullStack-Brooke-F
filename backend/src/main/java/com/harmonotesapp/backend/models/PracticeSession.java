package com.harmonotesapp.backend.models;

import jakarta.persistence.*;

@Entity
    public class PracticeSession {
        @Id
        @GeneratedValue(strategy=GenerationType.IDENTITY)
            private Long id;
        @Column(name="session_topic")
            private String sessionTopic;

        public PracticeSession() {

        }

    public String getsessionTopic() {
        return sessionTopic;
    }

    public void setSessionTopic(String sessionTopic) {
        this.sessionTopic = sessionTopic;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
