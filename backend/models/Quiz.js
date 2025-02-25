const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  difficulty: { type: String, required: true },
  categoty: { type: String, required: true },
  quizTye: { type: String, required: true },
  duration: { type: Number, required: true },
  questions: [
    {
      questionText: { type: String, required: true },
      options: [{ type: String, required: true }],
      correctAnswer: { type: String, required: true },
    },
  ],
  isPublic: { type: Boolean, default: false },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Quiz", QuizSchema);
