import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Home from "./components/Home";
import QuizCreation from "./pages/quiz_management/QuizCreation";
import MyQuizzes from "./pages/quiz_management/MyQuizzes";

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-quiz" element={<QuizCreation />} />
        <Route path="/my-quizzes" element={<MyQuizzes />} />
      </Routes>
    
  );
}

export default App;
