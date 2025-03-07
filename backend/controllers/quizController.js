const Quiz = require("../models/Quiz");

const createQuiz = async (req, res) => {
  try {
    const { title, description, difficultyLevel, quizType, quizCategory, duration, questions } = req.body;

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

const getQuizById = async (req, res) => {
  const { quizId } = req.params;
  try {
    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    return res.status(200).json(quiz);
  } catch (error) {
    console.error('Error fetching quiz:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createQuiz, getQuizzes, getQuizById };
