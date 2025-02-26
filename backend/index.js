require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");

const authRoutes = require("./routes/authRoutes.js");
const quizRoutes = require("./routes/quizRoutes.js");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/quiz", quizRoutes);

app.get("/", (req, res) => {
  res.send("Quiz API is running...");
});

if (process.env.NODE_ENV !== "test") {
  server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
const PORT = process.env.PORT || 5000;

// Store the server instance in a variable
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Export the app and server for testing
module.exports = { app, server };