import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const QuizDetail = () => {
  const API_URL = import.meta.env.VITE_API_URL;

  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/quizzes/${id}`);
        setQuiz(response.data);
      } catch (error) {
        console.error("Error fetching quiz:", error);
      }
    };

    fetchQuiz();
  }, [id]);

  if (!quiz) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">{quiz.title}</h2>
      <p className="text-gray-600">{quiz.description}</p>
      <p className="text-gray-600">Total Marks: {quiz.totalMarks}</p>
      <p className="text-gray-600">Duration: {quiz.duration} minutes</p>
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Questions</h3>
        {quiz.questions.map((question, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg mt-4">
            <p className="font-medium">{question.question}</p>
            {question.type === "multiple" && (
              <ul className="list-disc list-inside mt-2">
                {question.options.map((option, optIndex) => (
                  <li key={optIndex}>{option}</li>
                ))}
              </ul>
            )}
            <p className="mt-2">Correct Answer: {question.answer}</p>
            <p className="mt-2">Marks: {question.marks}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizDetail;