
# Chatbot Project

This project is a simple chatbot implementation with a React frontend and a Node.js + MySQL backend.

## Features
- Chat interface for sending and receiving messages.
- MySQL database to store chat history.
- Backend API for handling user messages and generating responses.

## How to Run

### Frontend
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Backend
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   ```

### Database
1. Set up a MySQL database with the following commands:
   ```sql
   CREATE DATABASE chatbot_db;

   USE chatbot_db;

   CREATE TABLE messages (
       id INT AUTO_INCREMENT PRIMARY KEY,
       sender VARCHAR(10),
       content TEXT,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

## Folder Structure
```
chatbot-project/
├── frontend/    # React frontend
│   ├── src/
│   ├── public/
│   ├── package.json
├── backend/     # Node.js backend
│   ├── server.js
│   ├── package.json
└── README.md    # Documentation
```

## License
This project is open-source and free to use.
# chatbot-project
# chatbot-project
