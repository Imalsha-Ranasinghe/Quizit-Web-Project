import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Quiz = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  useEffect(() => {
    if (quizId) {
      fetchQuiz(quizId);
    }
  }, [quizId]);

  const fetchQuiz = async (quizId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/quiz/${quizId}`);
      setQuiz(response.data);
    } catch (error) {
      console.error('Error fetching quiz:', error);
      alert('An error occurred while fetching the quiz.');
    }
  };

  const handleAnswerSelection = (questionIndex, option) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: option,
    }));
  };

  const calculateScore = () => {
    let score = 0;
    quiz.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer) {
        score += 1;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    const score = calculateScore();
    navigate('/quiz-results', {
      state: {
        quiz,
        selectedAnswers,
        score,
      },
    });
  };

  if (!quiz) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-green-100">
        <div className="text-2xl font-bold text-gray-700">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-green-100">
      <header className="text-center mb-8 mt-6">
        <h1 className="text-5xl font-extrabold text-green-700 drop-shadow-lg">
          {quiz.title}
        </h1>
        <p className="text-lg text-gray-700 mt-2 font-medium">{quiz.description}</p>
      </header>

      {/* Quiz Information */}
      <div className="max-w-full mx-12 bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
        <div className="mt-4">
          <p className="text-lg">Duration: {quiz.duration} minutes</p>
          
        </div>

        {/* Quiz Questions */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-green-700">Questions</h3>
          {quiz.questions?.map((question, index) => (
            <div key={index} className="bg-gray-100 rounded-xl shadow-sm p-4 my-4 border border-gray-300">
              <h4 className="text-xl font-semibold text-slate-700">Question {index + 1}</h4>
              <p className="text-lg mt-2">{question.question}</p>

              {/* Display question options */}
              {question.options?.map((option, i) => (
                <div key={i} className="flex items-center mt-2">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    className="mr-2"
                    onChange={() => setSelectedAnswers((prevAnswers) => ({
                      ...prevAnswers,
                      [index]: option,
                    }))}
                    checked={selectedAnswers[index] === option}
                  />
                  <label className="text-lg">{option}</label>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Footer with Start Quiz Button */}
        <div className="mt-8 text-center">
          <button
            className="bg-blue-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-500"
            onClick={handleSubmit}
          >
            Submit Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;