<div align="center">

# 🎵 Harmonotes

### A Full-Stack Music Practice & Lesson Companion

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

[![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)](https://www.java.com/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white)](https://maven.apache.org/)
[![Hibernate](https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=hibernate&logoColor=white)](https://hibernate.org/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)

**[About](#-about-the-project) • [Features](#-features) • [Tech Stack](#%EF%B8%8F-tech-stack) • [Installation](#-installation) • [Database](#%EF%B8%8F-database-structure-erd) • [API](#%EF%B8%8F-api-endpoints) • [Future Features](#-future-features--known-issues)**

</div>

---

## 🌐 Live Demo

The front end is deployed on Netlify: **[harmonotesapp.netlify.app](https://harmonotesapp.netlify.app/)**

> ⚠️ The backend currently runs locally only, so live data (login, library, practice sessions) won't load until the backend is deployed as well. See [Installation](#-installation) to run the full app locally.

## 💡 About the Project

Harmonotes is a full-stack web application built for private music instructors and their students. The app is designed to give students one place to track their practice, log lessons, and pull sheet music or reference materials for the instruments they're learning. Students can log in, record practice sessions with notes on their focus and challenges, mark practice exercises complete and watch their daily XP grow, and browse a filterable library of songs, exercises, and theory guides organized by instrument. The front end is built with React and Vite, while all data is persisted through a Java Spring Boot REST API backed by a MySQL database.

This project was built as a solo capstone project, with an emphasis on a clean, hand-styled UI (no component libraries), full CRUD functionality across multiple entities, and getting real, hands-on practice with the full request lifecycle — from a button click in React, through a REST controller, down to the database and back.

---

## 🎨 Features

### Public-Facing Site
- **Home Page** with login for returning students
- **About Page** featuring the instructor's bio and a working **Contact Form**, which submits directly to the database
- **Responsive Design** with custom breakpoints for desktop, tablet, and mobile
- **Accessibility**: semantic HTML elements, descriptive `alt` text on all images, and a clear heading hierarchy

### Student Dashboard (Authenticated)
- **XP Tracker**: daily XP is calculated live from completed practice exercises
- **Practice Exercises**: students can view assigned exercises, toggle them complete, and watch a small confetti animation celebrate the win
- **Practice Log**: full CRUD — students can log a new practice session, edit or delete an existing one, and see their full practice history in a scrollable table
- **Custom Delete Confirmation**: a hand-built modal (no browser `confirm()`/`alert()`) confirms before any session is deleted

### Studio Library
- **Instrument Filtering**: a dropdown filters library materials by instrument, backed by a real database query (not client-side filtering)
- **Organized by Type**: results are grouped into Songs, Exercises, and Theory & Guides, each with its own empty-state message if nothing matches
- **Sheet Music & Audio Links**: each item links out to its PDF and, where available, a play-along audio track

---

## 🛠️ Tech Stack

### Front End

| Technology | Description |
|---|---|
| **React** | Component-based UI, built entirely with functional components and hooks |
| **Vite** | Fast dev server and build tooling |
| **React Router** | Client-side routing with protected routes based on login status |
| **CSS** | Hand-written external stylesheet — no Tailwind or component library, using Flexbox, media queries, and CSS animations |
| **Fetch API** | All HTTP requests to the backend, wrapped in shared helper functions |

### Back End & Database

| Technology | Description |
|---|---|
| **Java** | Core language for the backend application |
| **Spring Boot** | RESTful API framework |
| **Maven** | Dependency management and build tool |
| **Hibernate / Spring Data JPA** | ORM layer — repository interfaces auto-generate queries from method names |
| **MySQL** | Relational database for all persisted data |

---

## 🚀 Installation

### Prerequisites
- Node.js (LTS version) and npm
- Java Development Kit (JDK) 17+
- MySQL Server (8.0+)

### Back End Setup (Java / Spring Boot / MySQL)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/BrookeFloyd10/Harmonotes-FullStack-Brooke-F.git
   cd Harmonotes-FullStack-Brooke-F/backend
   ```

2. **Create a local MySQL database:**
   ```sql
   CREATE DATABASE harmonotes;
   ```

3. **Create a `.env` file** in the `backend` root directory with your local MySQL credentials:
   ```
   DB_USERNAME=your_mysql_username
   DB_PASSWORD=your_mysql_password
   ```
   `application.properties` is already configured to read these values in:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/harmonotes
   spring.datasource.username=${DB_USERNAME}
   spring.datasource.password=${DB_PASSWORD}
   spring.jpa.hibernate.ddl-auto=update
   ```

4. **Run the application:**
   ```bash
   mvn spring-boot:run
   ```
   🟢 The API will be running at `http://localhost:8080`.

   > **Note:** Login currently uses a small set of hardcoded credentials seeded on startup via `DataInitializer`, while full registration/authentication is still in progress (see [Future Features](#-future-features--known-issues) below). Check `DataInitializer.java` for the seeded test login.

### Front End Setup (React / Vite)

1. **Navigate to the front end directory:**
   ```bash
   cd ../frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   🟢 The app will be running at `http://localhost:5173`.

---

## 🗄️ Database Structure (ERD)

Harmonotes is built around **six core entities** managed by Hibernate: `User`, `Student`, `PracticeSession`, `PracticeExercise`, `LibraryItem`, and `ContactMessage`.

![Harmonotes Entity Relationship Diagram](docs/harmonotes-erd.png)

> 📌 The diagram above reflects the original project planning phase, including some tables (`Instructor`, `Parent`, `Student_Instrument`) scoped for future development. See [Future Features](#-future-features--known-issues) for the current state of those plans.

---

## ⚙️ API Endpoints

### Authentication 🔐

| Method | Endpoint | Description |
|---|---|---|
| 🟡 POST | `/api/login` | Authenticate with email + password |

### Library Items 🎼

| Method | Endpoint | Description |
|---|---|---|
| 🟢 GET | `/api/library-items` | Retrieve all library items, or filter with `?instrument=` |
| 🟢 GET | `/api/library-items/{id}` | Retrieve a single library item |

### Practice Exercises 🎹

| Method | Endpoint | Description |
|---|---|---|
| 🟢 GET | `/api/practice-exercises` | Retrieve all practice exercises |
| 🟢 GET | `/api/practice-exercises/{id}` | Retrieve a single exercise |
| 🟡 POST | `/api/practice-exercises` | Create a new exercise |
| 🔵 PUT | `/api/practice-exercises/{id}` | Update an exercise (e.g. toggle completion) |
| 🔴 DELETE | `/api/practice-exercises/{id}` | Delete an exercise |

### Practice Sessions 📝

| Method | Endpoint | Description |
|---|---|---|
| 🟢 GET | `/api/practice-sessions` | Retrieve a student's logged practice sessions |
| 🟡 POST | `/api/practice-sessions` | Log a new practice session |
| 🔵 PUT | `/api/practice-sessions/{id}` | Edit an existing session |
| 🔴 DELETE | `/api/practice-sessions/{id}` | Delete a session (behind a confirmation modal in the UI) |

### Contact Messages ✉️

| Method | Endpoint | Description |
|---|---|---|
| 🟡 POST | `/api/contact-messages` | Submit a message from the public Contact form |

---

## 🔮 Future Features & Known Issues

- **Real Authentication**: replace hardcoded login credentials with full registration, hashed passwords, and Spring Security
- **Multi-Instrument Support**: introduce a dedicated `Instrument` entity with a many-to-many relationship, so a single library item or student can be associated with more than one instrument
- **Dynamic Sheet Music/Audio Selection**: render the correct sheet music and audio track based on a student's selected instrument
- **Audio Playback Modal**: play audio tracks in an in-app modal player instead of opening a new tab
- **Instructor & Parent Views**: build out the `Instructor` and `Parent` roles planned in the original ERD
- **Deployment**: the app currently runs locally only; a hosted version is planned

---

## 🧑‍💻 Author

**Brooke Floyd**
[GitHub](https://github.com/BrookeFloyd10) · [Repository](https://github.com/BrookeFloyd10/Harmonotes-FullStack-Brooke-F)
