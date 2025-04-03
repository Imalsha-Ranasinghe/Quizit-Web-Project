require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");
const client = require("prom-client");

const authRoutes = require("./routes/authRoutes.js");
const quizRoutes = require("./routes/quizRoutes.js");

const app = express();

const register = new client.Registry();
client.collectDefaultMetrics({ register });

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

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}, metrics at /metrics`));
