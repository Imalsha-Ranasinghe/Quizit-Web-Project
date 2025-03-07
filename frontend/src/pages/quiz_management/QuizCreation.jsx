import React, { useState } from "react";
import { FaPlus, FaTrash, FaCheck } from "react-icons/fa";
import Header from "../../components/Header";
import axios from "axios";

export default function QuizCreation() {
  // State declarations
  const [questions, setQuestions] = useState([
    {
      type: "multiple",
      question: "",
      options: ["", "", "", ""],
      answer: "",
      marks: 1,
    },
  ]);
  
  const [quizTitle, setQuizTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficultyLevel, setDifficultyLevel] = useState("beginner");
  const [quizType, setQuizType] = useState("private");
  const [quizCategory, setQuizCategory] = useState("knowledge");
  const [duration, setDuration] = useState(0);

  // Add Question Handler
  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        type: "multiple",
        question: "",
        options: ["", "", "", ""],
        answer: "",
        marks: 1,
      },
    ]);
  };

  // Remove Question Handler
  const handleRemoveQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  // Input Change Handler
  const handleInputChange = (e, index, field) => {
    const updatedQuestions = [...questions];
    
    if (field === "question") {
      updatedQuestions[index].question = e.target.value;
    } else if (field === "answer") {
      updatedQuestions[index].answer = e.target.value;
    } else if (field === "type") {
      updatedQuestions[index].type = e.target.value;
    } else if (field === "marks") {
      updatedQuestions[index].marks = parseInt(e.target.value, 10);
    } else {
      const optionIndex = parseInt(field.split("-")[1], 10);
      updatedQuestions[index].options[optionIndex] = e.target.value;
    }
    
    setQuestions(updatedQuestions);
  };

  // Calculate Total Marks
  const calculateFullMarks = () => {
    return questions.reduce((total, question) => total + question.marks, 0);
  };

  // Form Submission Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const quizData = {
      title: quizTitle,
      description,
      difficultyLevel,
      quizType,
      quizCategory,
      duration,
      questions,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/quiz/create",
        quizData
      );
      console.log("Quiz saved successfully:", response.data);
      alert("Quiz saved successfully!");
      
      // Reset form
      setQuizTitle("");
      setDescription("");
      setDifficultyLevel("beginner");
      setQuizType("private");
      setQuizCategory("knowledge");
      setDuration(0);
      setQuestions([
        {
          type: "multiple",
          question: "",
          options: ["", "", "", ""],
          answer: "",
          marks: 1,
        },
      ]);
      
    } catch (error) {
      console.error("Error saving quiz:", error);
      alert("Error saving quiz. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-green-100">
      <Header />
      <header className="text-center mb-8 mt-6">
        <h1 className="text-5xl font-extrabold text-green-700 drop-shadow-lg">
          Create Your Own Quiz
        </h1>
        <p className="text-lg text-gray-700 mt-2 font-medium">
          Design an engaging quiz in just a few steps!
        </p>
      </header>

      {/* Quiz Form */}
      <div className="max-w-full mx-12 bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
        <form onSubmit={handleSubmit}>
          {/* Quiz Meta Fields */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Quiz Title:
            </label>
            <input
              type="text"
              placeholder="Enter the quiz title"
              value={quizTitle}
              onChange={(e) => setQuizTitle(e.target.value)}
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              required
            />

            {/* Other meta fields (description, difficultyLevel, etc.) */}
            {/* ... */}
          </div>

          {/* Questions List */}
          {questions.map((question, index) => (
            <div key={index} className="mb-6 p-6 bg-gray-100 rounded-xl shadow-sm border border-gray-300">
              {/* Question Header */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-green-700">
                  Question {index + 1}
                </h3>
                <button
                  type="button"
                  onClick={() => handleRemoveQuestion(index)}
                  className="text-red-600 hover:text-red-700 text-base font-bold flex items-center"
                >
                  <FaTrash className="mr-1" />
                  Remove
                </button>
              </div>

              {/* Question Type */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Question Type
                </label>
                <select
                  value={question.type}
                  onChange={(e) => handleInputChange(e, index, "type")}
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                >
                  <option value="multiple">Multiple Choice</option>
                  <option value="trueFalse">True/False</option>
                  <option value="shortAnswer">Short Answer</option>
                </select>
              </div>

              {/* Question Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Question
                </label>
                <input
                  type="text"
                  placeholder="Enter your question"
                  value={question.question}
                  onChange={(e) => handleInputChange(e, index, "question")}
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              {/* Marks Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Marks
                </label>
                <input
                  type="number"
                  placeholder="Enter marks"
                  value={question.marks}
                  onChange={(e) => handleInputChange(e, index, "marks")}
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  min="1"
                  required
                />
              </div>

              {/* Options Rendering */}
              {question.type === "multiple" && (
                <div className="grid grid-cols-2 gap-4">
                  {question.options.map((option, optIndex) => (
                    <div key={optIndex} className="mb-3 flex items-center">
                      <input
                        type="text"
                        placeholder={`Option ${optIndex + 1}`}
                        value={option}
                        onChange={(e) =>
                          handleInputChange(e, index, `option-${optIndex}`)
                        }
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                        required
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Answer Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Correct Answer
                </label>
                {question.type === "multiple" ? (
                  <select
                    value={question.answer}
                    onChange={(e) => handleInputChange(e, index, "answer")}
                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                    required
                  >
                    <option value="">Select correct answer</option>
                    {question.options.map((option, optIndex) => (
                      <option key={optIndex} value={option}>
                        {option || `Option ${optIndex + 1}`}
                      </option>
                    ))}
                  </select>
                ) : question.type === "trueFalse" ? (
                  <select
                    value={question.answer}
                    onChange={(e) => handleInputChange(e, index, "answer")}
                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                    required
                  >
                    <option value="">Select correct answer</option>
                    <option value="True">True</option>
                    <option value="False">False</option>
                  </select>
                ) : (
                  <input
                    type="text"
                    value={question.answer}
                    onChange={(e) => handleInputChange(e, index, "answer")}
                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter correct answer"
                    required
                  />
                )}
              </div>
            </div>
          ))}

          {/* Total Marks Display */}
          <div className="mb-6 p-6 bg-gray-100 rounded-xl shadow-sm border border-gray-300">
            <h3 className="text-base font-semibold text-slate-700">
              Total Marks: {calculateFullMarks()}
            </h3>
          </div>

          {/* Add Question Button */}
          <button
            type="button"
            onClick={handleAddQuestion}
            className="w-full bg-green-800 text-white font-bold py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-green-500 shadow-md transition-all duration-300"
          >
            <FaPlus />
            Add New Question
          </button>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-blue-800 text-white font-bold py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-blue-500 shadow-md transition-all duration-300"
          >
            <FaCheck />
            Create Quiz
          </button>
        </form>
      </div>
    </div>
  );
}