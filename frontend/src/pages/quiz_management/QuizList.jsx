import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Quiz from "../quiz_management/Quiz";
import Header from "../../components/Header";

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/quiz/quizzes");
        setQuizzes(response.data);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div>
       <Header />
   
    <div className="p-8">
     
       <Link className=" px-4 py-3 border rounded-lg font-bold bg-green-200 " to={"/create-quiz"}>+Create New Quiz</Link>
      <div className="mt-10 grid grid-cols-1 gap-6">
        {quizzes.map((quiz) => (
          <div key={quiz._id} className="bg-white p-6 rounded-lg shadow-md border-gray-100 border flex justify-between">
            <div>
            <h3 className="text-xl font-semibold">{quiz.title}</h3>
            <p className="text-gray-600">{quiz.description}</p>
            <p className="text-gray-600">Total Marks: {quiz.totalMarks}</p>
            <p className="text-gray-600">Duration: {quiz.duration} minutes</p>
              </div>

            <div>
              <Link to={`/quiz/${quiz._id}`} className="px-8 py-3 border rounded-lg font-bold bg-blue-200">
                Start
              </Link>
              </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default QuizList;