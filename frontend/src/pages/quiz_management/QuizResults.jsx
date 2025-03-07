import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaRedo, FaChartBar, FaCheckCircle, FaTimesCircle, FaHome } from 'react-icons/fa';
import Header from '../../components/Header';

export const QuizResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { quiz, selectedAnswers, score } = location.state;
  const [showReview, setShowReview] = useState(false);

  const handleTryAgain = () => {
    navigate(`/quiz/${quiz._id}`);
  };

  const handleReviewQuiz = () => {
    setShowReview(true);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  const percentage = Math.round((score / quiz.questions.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8 px-4">
       
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-emerald-700 mb-4 animate-bounce">
            Quiz Results 🎉
          </h1>
          
          <div className="relative w-48 h-48 mx-auto mb-6">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                className="text-gray-200"
                strokeWidth="8"
                stroke="currentColor"
                fill="transparent"
                r="44"
                cx="50"
                cy="50"
              />
              <circle
                className="text-emerald-500"
                strokeWidth="8"
                strokeDasharray={`${percentage} 100`}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="44"
                cx="50"
                cy="50"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-emerald-700">{percentage}%</span>
              <span className="text-sm text-gray-600">{score}/{quiz.questions.length}</span>
            </div>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={handleGoHome}
              className="flex items-center gap-2 px-4 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <FaHome />
              Back to Home
            </button>
          </div>
        </header>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          {showReview ? (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-emerald-700 mb-4 flex items-center gap-2">
                <FaChartBar /> Quiz Review
              </h3>
              
              {quiz.questions.map((question, index) => {
                const isCorrect = selectedAnswers[index] === question.answer;
                
                return (
                  <div key={index} className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm font-medium text-gray-500">Question {index + 1}</span>
                      {isCorrect ? (
                        <FaCheckCircle className="text-green-500" />
                      ) : (
                        <FaTimesCircle className="text-red-500" />
                      )}
                    </div>
                    
                    <p className="text-lg font-medium text-gray-800 mb-4">{question.question}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                        <p className="text-sm font-medium text-green-700 mb-1">Correct Answer</p>
                        <p className="text-green-800">{question.answer}</p>
                      </div>
                      
                      <div className={`p-3 rounded-lg ${
                        isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                      }`}>
                        <p className="text-sm font-medium text-gray-700 mb-1">Your Answer</p>
                        <p className={isCorrect ? 'text-green-800' : 'text-red-800'}>
                          {selectedAnswers[index] || "No answer provided"}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-700">
                  {percentage >= 70 ? "Great job! 🚀" : "Keep practicing! 💪"}
                </h3>
                <p className="text-gray-600">
                  {percentage >= 70 
                    ? "You've demonstrated a strong understanding of the material!"
                    : "You're getting there! Review the questions to improve next time."}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={handleTryAgain}
                  className="flex items-center justify-center gap-2 px-6 py-3 text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  <FaRedo />
                  Try Again
                </button>
                
                <button
                  onClick={handleReviewQuiz}
                  className="flex items-center justify-center gap-2 px-6 py-3 text-emerald-700 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors border border-emerald-200"
                >
                  <FaChartBar />
                  Review Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default QuizResults;