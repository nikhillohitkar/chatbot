
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "chatbot_db",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to the database.");
  }
});

app.post("/chat", (req, res) => {
  const userMessage = req.body.message;

  db.query("INSERT INTO messages (sender, content) VALUES (?, ?)", ["user", userMessage], (err) => {
    if (err) {
      console.error("Error saving user message:", err);
      return res.status(500).send("Error saving message.");
    }

    let botReply;
    if (userMessage.toLowerCase().includes("hello")) {
      botReply = "Hi there! How can I assist you?";
    } else {
      botReply = "Sorry, I didn't understand that. Can you rephrase?";
    }

    db.query("INSERT INTO messages (sender, content) VALUES (?, ?)", ["bot", botReply], (err) => {
      if (err) {
        console.error("Error saving bot reply:", err);
        return res.status(500).send("Error saving reply.");
      }

      res.json({ reply: botReply });
    });
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
