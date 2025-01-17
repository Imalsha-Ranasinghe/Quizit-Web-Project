import React from 'react';
import Header from './Header';
import bgImage from './../assets/bgImage.jpg';
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900 font-sans">
      {/* Header Section */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-extrabold text-blue-600">Quizit</div>
          <nav className="space-x-6 font-medium text-gray-700">
            <a href="/" className="text-lg hover:text-blue-500 transition">Home</a>
            <a href="/about" className="text-lg hover:text-blue-500 transition">About</a>
            <a href="/quiz" className="text-lg hover:text-blue-500 transition">Quiz</a>
            <a href="/contact" className="text-lg hover:text-blue-500 transition">Contact</a>
          </nav>
          <div>
            <a
              href="/login"
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full font-bold transition"
            >
              Login
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen bg-blue-50 px-6">
        <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto">
          {/* Text and Button */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-5xl font-extrabold text-blue-800">
              Welcome to <span className="text-teal-500">Quizit</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Test your knowledge across a wide range of topics and compete with others. Challenge yourself every day!
            </p>
            <div className="mt-8">
                <Link to="/login" className="inline-block bg-teal-500 text-white px-8 py-3 text-base sm:text-lg font-bold rounded-full shadow-md hover:bg-teal-400 transition">
                Get Started
              
              </Link>
            </div>
          </div>

          {/* Background Image */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src={bgImage} alt="Quiz Background" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-800">Why Choose Quizit?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600">Multiple Categories</h3>
              <p className="mt-4 text-gray-600">
                Explore quizzes on a variety of topics like science, history, sports, and more!
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600">Daily Challenges</h3>
              <p className="mt-4 text-gray-600">
                Participate in daily challenges and sharpen your knowledge every day!
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600">Leaderboard</h3>
              <p className="mt-4 text-gray-600">
                Compete with others and track your progress on the leaderboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-800 py-6 text-center text-white">
        <p>&copy; 2025 Quizit. All rights reserved.</p>
        <div className="mt-4 text-sm">
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a> |
          <a href="/terms" className="hover:underline"> Terms & Conditions</a>
        </div>
      </footer>
    </div>
  );
}
