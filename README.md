# Task Manager Application (MERN Stack)

This is a lightweight Task Manager application built as part of a technical assignment. It allows users to create, view, toggle completion status, and delete tasks.

## Setup Instructions

### 1. Backend Setup
1. Open a terminal and navigate to the backend folder: `cd backend`
2. Install dependencies: `npm install`
3. Start the server: `node server.js`
   - The server will run on `http://localhost:5000`

### 2. Frontend Setup
1. Open a second terminal and navigate to the frontend folder: `cd frontend`
2. Install dependencies: `npm install`
3. Start the application: `npm start`
   - The app will open in your browser at `http://localhost:3000`

## Technical Decisions & Trade-offs
- [cite_start]**In-Memory Storage**: As per the assignment guidelines to keep the solution small and focused on 1-2 hours of work, I used in-memory arrays for data storage instead of a persistent database[cite: 31, 33].
- [cite_start]**Clean Structure**: The project is organized into clear frontend and backend directories to demonstrate a separation of concerns[cite: 21, 35].
- [cite_start]**Functionality over Styling**: My priority was ensuring a robust, working API and reliable state handling in React[cite: 32].

## Core Features
- [cite_start]**GET /tasks**: Fetch all current tasks[cite: 23].
- [cite_start]**POST /tasks**: Add new tasks with title validation[cite: 23].
- [cite_start]**PATCH /tasks/:id**: Toggle completion status[cite: 23].
- [cite_start]**DELETE /tasks/:id**: Remove tasks from the list[cite: 23].
- [cite_start]**UI Feedback**: Includes loading and error states for a better user experience[cite: 16].
