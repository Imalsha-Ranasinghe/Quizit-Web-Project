const Quiz = require("../models/Quiz");

const createQuiz = async (req, res) => {
  try {
    const { title, description, difficultyLevel, quizType, quizCategory, duration, questions } = req.body;

    // Calculate total marks
    const totalMarks = questions.reduce((total, question) => total + question.marks, 0);

    const newQuiz = new Quiz({
      title,
      description,
      difficultyLevel,
      quizType,
      quizCategory,
      duration,
      questions,
      totalMarks,
    });

    await newQuiz.save();
    res.status(201).json(newQuiz);
  } catch (error) {
    res.status(500).json({ message: "Error saving quiz", error: error.message });
  }
};

const getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching quizzes", error: error.message });
  }
};



module.exports = { createQuiz, getQuizzes };
