import React, { useState } from 'react';
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
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <Header />

      <header className="text-center mb-8 mt-6">
        <h1 className="text-4xl font-bold text-green-800">Create Your Quiz</h1>
        <p className="text-lg text-gray-600 mt-2">
          Fill out the form below to create a custom quiz.
        </p>
      </header>

      {/* Form */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <form>
          {questions.map((question, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                Question {index + 1}
              </h3>

              {/* Question Type Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Question Type</label>
                <select
                  value={question.type}
                  onChange={(e) => handleInputChange(e, index, 'type')}
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                >
                  <option value="multiple">Multiple Choice</option>
                  <option value="trueFalse">True/False</option>
                  <option value="shortAnswer">Short Answer</option>
                  <option value="matching">Matching Pairs</option>
                </select>
              </div>

              {/* Question Input */}
              <div className="mb-4">
                <label htmlFor={`question-${index}`} className="block text-sm font-medium text-gray-700">
                  Question
                </label>
                <input
                  type="text"
                  id={`question-${index}`}
                  placeholder="Enter your question"
                  value={question.question}
                  onChange={(e) => handleInputChange(e, index, 'question')}
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>

              {/* Options Input for Multiple Choice or Matching Pairs */}
              {question.type === 'multiple' && (
                <>
                  {question.options.map((option, optIndex) => (
                    <div key={optIndex} className="mb-4">
                      <label
                        htmlFor={`option-${optIndex}-${index}`}
                        className="block text-sm font-medium text-gray-700"
                      >
                        Option {optIndex + 1}
                      </label>
                      <input
                        type="text"
                        id={`option-${optIndex}-${index}`}
                        placeholder={`Option ${optIndex + 1}`}
                        value={option}
                        onChange={(e) => handleInputChange(e, index, `option-${optIndex}`)}
                        className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                  ))}
                </>
              )}

              {/* Answer Input for Multiple Choice, True/False, and Matching */}
              {question.type === 'multiple' && (
                <div className="mb-4">
                  <label
                    htmlFor={`answer-${index}`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Correct Answer
                  </label>
                  <select
                    id={`answer-${index}`}
                    value={question.answer}
                    onChange={(e) => handleInputChange(e, index, 'answer')}
                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
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

              {/* True/False Answer Input */}
              {question.type === 'trueFalse' && (
                <div className="mb-4">
                  <label
                    htmlFor={`answer-${index}`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Correct Answer
                  </label>
                  <select
                    id={`answer-${index}`}
                    value={question.answer}
                    onChange={(e) => handleInputChange(e, index, 'answer')}
                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Select correct answer</option>
                    <option value="True">True</option>
                    <option value="False">False</option>
                  </select>
                </div>
              )}

              {/* Short Answer Input */}
              {question.type === 'shortAnswer' && (
                <div className="mb-4">
                  <label
                    htmlFor={`answer-${index}`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Correct Answer
                  </label>
                  <input
                    type="text"
                    id={`answer-${index}`}
                    value={question.answer}
                    onChange={(e) => handleInputChange(e, index, 'answer')}
                    placeholder="Enter the correct answer"
                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              )}

              {/* Remove Question Button */}
              <button
                type="button"
                onClick={() => handleRemoveQuestion(index)}
                className="text-red-600 hover:text-red-700"
              >
                Remove Question
              </button>
            </div>
          ))}

          {/* Add New Question Button */}
          <button
            type="button"
            onClick={handleAddQuestion}
            className="w-full bg-green-600 text-white font-bold py-2 rounded-md hover:bg-green-500 mb-6"
          >
            Add New Question
          </button>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700"
          >
            Submit Quiz
          </button>
        </form>
      </div>
    </div>
  );
}
