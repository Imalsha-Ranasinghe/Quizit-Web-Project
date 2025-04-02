import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;


  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/quiz/quizzes`);
        setQuizzes(response.data);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">All Quizzes</h2>
      <Link className=" px-4 py-3 border rounded-lg font-bold bg-green-200 " to={"/create-quiz"}>+Create New Quiz</Link>
      <div className="mt-10 grid grid-cols-1 gap-6">
        {quizzes.map((quiz) => (
          <div key={quiz._id} className="bg-white p-6 rounded-lg shadow-md border-gray-100 border">
            <h3 className="text-xl font-semibold">{quiz.title}</h3>
            <p className="text-gray-600">{quiz.description}</p>
            <p className="text-gray-600">Total Marks: {quiz.totalMarks}</p>
            <p className="text-gray-600">Duration: {quiz.duration} minutes</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizList;