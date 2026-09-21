

![Harmonotes](docs/screenshots/hero.png)

# 🎵 Harmonotes

### Where practice meets progress.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

**[About](#-about) · [App Preview](#-app-preview) · [Features](#-features) · [Tech Stack](#%EF%B8%8F-tech-stack) · [Structure](#%EF%B8%8F-project-structure) · [Planning & Design](#-planning--design) · [Installation](#-installation) · [API](#%EF%B8%8F-api-reference) · [Roadmap**](#-roadmap-to-future-development)



---



## 🌐 Live Demo

Frontend deployed on Netlify: **[harmonotesapp.netlify.app](https://harmonotesapp.netlify.app/)**

> Backend currently runs locally only — see [Installation](#-installation) to run the full app.



## 💡 About

Just one hour after a music lesson, students forget over half of what they learned, and within 24 hours that number climbs to 70%. That gap between in-person lessons and at-home practice is where students lose momentum, get discouraged, and often quit. ***Harmonotes*** was built to close that gap, giving students one place to log practice sessions, complete assigned exercises and earn XP, and browse a filterable library of songs, exercises, and theory guides by instrument. Built solo as a full-stack capstone: React/Vite frontend, Spring Boot REST API, MySQL database, full CRUD across six entities.

**Database entities:** `users` · `students` · `practice_sessions` · `practice_exercises` · `library_item` · `contact_messages`

## 📸 App Preview


|                                                 |                                                           |                                                                   |                                              |                                                             |
| ----------------------------------------------- | --------------------------------------------------------- | ----------------------------------------------------------------- | -------------------------------------------- | ----------------------------------------------------------- |
| ![](docs/screenshots/dashboard.png)*Dashboard* | ![](docs/screenshots/library-songs.png)*Library — Songs* | ![](docs/screenshots/library-exercises.png)*Library — Exercises* | ![](docs/screenshots/about-page.png)*About* | ![](docs/screenshots/navbar-closeup.png)*Staff-styled nav* |


**Forms & error handling**


|                                                               |                                                          |                                                            |                                                         |                                                                        |                                                                  |
| ------------------------------------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------- |
| ![](docs/screenshots/login-validation.png)*Login validation* | ![](docs/screenshots/log-session-form.png)*Log session* | ![](docs/screenshots/edit-session-form.png)*Edit session* | ![](docs/screenshots/delete-modal.png)*Delete confirm* | ![](docs/screenshots/contact-form-validation.png)*Contact validation* | ![](docs/screenshots/contact-form-success.png)*Contact success* |




## 🎨 Features

- Login with inline validation; nav bar changes based on login status
- XP tracker, practice exercises with completion + confetti, full CRUD practice log
- Custom-built delete confirmation modal (no browser `alert()`/`confirm()` anywhere)
- Library filtering by instrument via a real backend query, grouped into Songs / Exercises / Theory & Guides
- Contact form with real backend POST and full validation



## 🛠️ Tech Stack

**Frontend:** React 19, Vite, React Router, hand-written CSS — no component library
**Backend:** Java 21, Spring Boot 4, Spring Data JPA / Hibernate
**Database:** MySQL · **Deployment:** Netlify (frontend)

## 🗂️ Project Structure

```
Harmonotes-FullStack-Brooke-F/
├── backend/src/main/java/com/harmonotesapp/backend/
│   ├── config/          # DataInitializer (hardcoded seed data)
│   ├── controllers/     # REST controllers, one per entity
│   ├── dto/             # LoginRequestDTO
│   ├── models/          # JPA entities
│   ├── repositories/    # Spring Data JPA repositories
│   └── services/        # PracticeSessionService
│
└── frontend/src/
    ├── components/
    │   ├── APIs/         # globalGet / globalPost / globalPut / globalDelete
    │   ├── layout/        # Header, NavBar, Footer
    │   ├── practice/       # PracticeCard, PracticeLog, PracticeTable, XPTracker
    │   └── shared/         # Button, DeleteModal, FormField, ContactForm, etc.
    ├── pages/            # Home, Dashboard, Library, About
    └── utils/            # validators.js
```



## 🧭 Planning & Design

Wireframes and an ERD were completed before writing any code — including screens scoped for future development.


|                                                              |                                                                     |                                                    |                                                  |                                                                                |
| ------------------------------------------------------------ | ------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------ |
| ![](docs/wireframes/wireframe-home-login.png)*Home / Login* | ![](docs/wireframes/wireframe-student-views.png)*Desktop & tablet* | ![](docs/wireframes/wireframe-mobile.png)*Mobile* | ![](docs/wireframes/wireframe-about.png)*About* | ![](docs/wireframes/wireframe-future-instructor.png)*Future: Instructor view* |


![Harmonotes ERD](docs/erd/harmonotes-erd.png)

*Entity Relationship Diagram — grayed-out tables are scoped for future development.*

[Full wireframe set](https://excalidraw.com/#json=1teDsRSkcFqFfXRubluT0,oJ2m0l_5cmiyJk7do5sKvw) · [Full ERD](https://docs.google.com/document/d/1IrQWKFfS0T1dQtSAWwm2re9g-4PRUHArJcGMzZ8DLfs/edit?usp=sharing)

## 🚀 Installation

**Backend** (`/backend`)

```bash
git clone https://github.com/BrookeFloyd10/Harmonotes-FullStack-Brooke-F.git
cd Harmonotes-FullStack-Brooke-F/backend
```

Create database `harmonotes` in MySQL, then add a `.env` file in `/backend`:

```
DB_USERNAME=your_mysql_username
DB_PASSWORD=your_mysql_password
```

Run:

```bash
./mvnw spring-boot:run
```

🟢 API at `http://localhost:8080`. Login uses hardcoded seed credentials (see `DataInitializer`) until real auth is built.

**Frontend** (`/frontend`)

```bash
cd ../frontend
npm install
npm run dev
```

🟢 App at `http://localhost:5173`.

## ⚙️ API Reference


| Method   | Endpoint                         | Description                                                                                                                          |
| -------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 🟡 POST  | `/api/login`                     | Authenticate with email + password                                                                                                   |
| 🟢 GET   | `/api/library-items`             | All library items, or filter with `?instrument=`                                                                                     |
| 🟢🟡🔵🔴 | `/api/practice-exercises[/{id}]` | Full CRUD endpoints (create/edit/delete via Postman only — student UI only toggles completion until the instructor dashboard exists) |
| 🟢🟡🔵🔴 | `/api/practice-sessions[/{id}]`  | Full CRUD, all exposed in the student UI                                                                                             |
| 🟡 POST  | `/api/contact-messages`          | Submit a message from the Contact form                                                                                               |




## 🎼 Roadmap to future development

- Real authentication (registration, hashed passwords, Spring Security)
- Instructor dashboard (student & library management)
- Multi-instrument support via a dedicated `Instrument` entity
- Interactive parent portal with secure messaging and payment features
- In-app audio playback and backend deployment



## 🧑‍💻 Author

**Brooke Floyd** — [GitHub](https://github.com/BrookeFloyd10) · [Repository](https://github.com/BrookeFloyd10/Harmonotes-FullStack-Brooke-F)