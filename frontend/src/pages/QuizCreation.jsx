import React, { useState } from 'react';
import { FaPlus, FaTrash, FaCheckCircle, FaCheck } from 'react-icons/fa';
import Header from '../components/Header';


export default function QuizCreation() {
  const [questions, setQuestions] = useState([
    { type: 'multiple', question: '', options: ['', '', '', ''], answer: '' },
  ]);

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { type: 'multiple', question: '', options: ['', '', '', ''], answer: '' },
    ]);
  };

  const handleRemoveQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  const handleInputChange = (e, index, field) => {
    const updatedQuestions = [...questions];
    if (field === 'question') {
      updatedQuestions[index].question = e.target.value;
    } else if (field === 'answer') {
      updatedQuestions[index].answer = e.target.value;
    } else if (field === 'type') {
      updatedQuestions[index].type = e.target.value;
    } else {
      const optionIndex = parseInt(field.split('-')[1], 10);
      updatedQuestions[index].options[optionIndex] = e.target.value;
    }
    setQuestions(updatedQuestions);
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
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
        <form>
          {questions.map((question, index) => (
            <div
              key={index}
              className="mb-6 p-6 bg-gray-100 rounded-xl shadow-sm border border-gray-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold text-green-700">
                  Question {index + 1}
                </h3>
                <button
                  type="button"
                  onClick={() => handleRemoveQuestion(index)}
                  className="text-red-600 hover:text-red-700 text-lg flex items-center"
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
                  onChange={(e) => handleInputChange(e, index, 'type')}
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                >
                  <option value="multiple">Multiple Choice</option>
                  <option value="trueFalse">True/False</option>
                  <option value="shortAnswer">Short Answer</option>
                  <option value="matching">Matching Pairs</option>
                </select>
              </div>

              {/* Question Input */}
              <div className="mb-4">
                <label
                  htmlFor={`question-${index}`}
                  className="block text-sm font-medium text-gray-700"
                >
                  Question
                </label>
                <input
                  type="text"
                  placeholder="Enter your question"
                  value={question.question}
                  onChange={(e) => handleInputChange(e, index, 'question')}
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>

              {/* Options (Multiple Choice) */}
              {question.type === 'multiple' && (
                <div className="grid grid-cols-2 gap-4">
                  {question.options.map((option, optIndex) => (
                    <div key={optIndex} className="mb-3 flex items-center">
                      <input
                        type="text"
                        placeholder={`Option ${optIndex + 1}`}
                        value={option}
                        onChange={(e) => handleInputChange(e, index, `option-${optIndex}`)}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Answer Selection */}
              {question.type === 'multiple' && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Correct Answer
                  </label>
                  <select
                    value={question.answer}
                    onChange={(e) => handleInputChange(e, index, 'answer')}
                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Select correct answer</option>
                    {question.options.map((option, optIndex) => (
                      <option key={optIndex} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* True/False Answer */}
              {question.type === 'trueFalse' && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Correct Answer
                  </label>
                  <select
                    value={question.answer}
                    onChange={(e) => handleInputChange(e, index, 'answer')}
                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Select correct answer</option>
                    {question.type === 'multiple' &&
                      question.options.map((option, optIndex) => (
                        <option key={optIndex} value={option}>
                          {option}
                        </option>
                      ))}
                    {question.type === 'trueFalse' && (
                      <>
                        <option value="True">True</option>
                        <option value="False">False</option>
                      </>
                    )}
                  </select>
                </div>
              )}
            </div>
          ))}

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
            Submit Quiz
          </button>
        </form>
      </div>
    </div>
  );
}
