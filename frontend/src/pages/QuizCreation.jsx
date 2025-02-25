import React, { useState } from 'react';
import { FaPlus, FaTrash, FaCheckCircle } from 'react-icons/fa';
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
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-green-50">
      {/* Header */}
      <Header />

      <header className="text-center mt-10 mb-6">
        <h1 className="text-5xl font-extrabold text-green-700 tracking-wide">Create Your Quiz.</h1>
        <p className="text-lg text-gray-600 mt-3">Design an interactive quiz with custom questions.</p>
      </header>

      {/* Form Container */}
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-xl">  
        <form>
          {questions.map((question, index) => (
            <div key={index} className="mb-8 p-6 bg-gray-50 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-2xl font-semibold text-green-700 mb-5 flex items-center gap-2">
                <FaCheckCircle className="text-green-600" />
                Question {index + 1}
              </h3>

              {/* Question Type */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Question Type</label>
                <select
                  value={question.type}
                  onChange={(e) => handleInputChange(e, index, 'type')}
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition ease-in-out duration-200"
                >
                  <option value="multiple">Multiple Choice</option>
                  <option value="trueFalse">True/False</option>
                  <option value="shortAnswer">Short Answer</option>
                  <option value="matching">Matching Pairs</option>
                </select>
              </div>

              {/* Question Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Question</label>
                <input
                  type="text"
                  placeholder="Enter your question"
                  value={question.question}
                  onChange={(e) => handleInputChange(e, index, 'question')}
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition duration-200"
                />
              </div>

              {/* Options Input for Multiple Choice */}
              {question.type === 'multiple' && (
                <div className="grid grid-cols-2 gap-4">
                  {question.options.map((option, optIndex) => (
                    <div key={optIndex} className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Option {optIndex + 1}
                      </label>
                      <input
                        type="text"
                        placeholder={`Option ${optIndex + 1}`}
                        value={option}
                        onChange={(e) => handleInputChange(e, index, `option-${optIndex}`)}
                        className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition duration-200"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Answer Selection */}
              {question.type !== 'shortAnswer' && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Correct Answer</label>
                  <select
                    value={question.answer}
                    onChange={(e) => handleInputChange(e, index, 'answer')}
                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition duration-200"
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

              {/* Short Answer Input */}
              {question.type === 'shortAnswer' && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Correct Answer</label>
                  <input
                    type="text"
                    placeholder="Enter the correct answer"
                    value={question.answer}
                    onChange={(e) => handleInputChange(e, index, 'answer')}
                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition duration-200"
                  />
                </div>
              )}

              {/* Remove Question Button */}
              <button
                type="button"
                onClick={() => handleRemoveQuestion(index)}
                className="text-red-600 flex items-center gap-2 hover:text-red-700 transition duration-200 mt-2"
              >
                <FaTrash />
                Remove Question
              </button>
            </div>
          ))}

          {/* Add New Question Button */}
          <button
            type="button"
            onClick={handleAddQuestion}
            className="w-full flex justify-center items-center gap-2 bg-green-600 text-white font-bold py-3 rounded-md hover:bg-green-500 transition duration-200"
          >
            <FaPlus />
            Add New Question
          </button>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-6 bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Submit Quiz
          </button>
        </form>
      </div>
    </div>
  );
}
