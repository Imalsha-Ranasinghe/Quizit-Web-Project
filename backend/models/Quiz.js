const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  difficultyLevel: { type: String, required: true },
  quizType: { type: String, required: true },
  quizCategory: { type: String, required: true },
  duration: { type: Number, required: true },
  questions: [
    {
      type: { type: String, required: true },
      question: { type: String, required: true },
      options: [{ type: String }],
      answer: { type: String, required: true },
      marks: { type: Number, required: true },
    },
  ],
  totalMarks: { type: Number, required: true },
});

module.exports = mongoose.model("Quiz", quizSchema);