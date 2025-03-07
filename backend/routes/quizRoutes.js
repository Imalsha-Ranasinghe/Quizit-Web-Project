const express = require("express");
const { createQuiz } = require("../controllers/quizController");
const { getQuizzes } = require("../controllers/quizController");
const { getQuizById } = require("../controllers/quizController");
const { get } = require("mongoose");
const router = express.Router();

// Ensure user is authenticated before creating a quiz (you can implement authentication middleware)
router.post("/create", createQuiz);
router.get("/quizzes",getQuizzes);
router.get("/:quizId",getQuizById);

module.exports = router;
