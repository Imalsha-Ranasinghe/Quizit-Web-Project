import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Home from "./components/Home";
import QuizCreation from "./pages/quiz_management/QuizCreation";
import QuizList from "./pages/quiz_management/QuizList";
import QuizDetail from "./components/QuizDetail";
import Profile from "./components/Profile";

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-quiz" element={<QuizCreation />} />
        <Route path="/quiz-list" element={<QuizList/>} />
        <Route path="/quiz/:id" element={<QuizDetail />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    
  );
}

export default App;
