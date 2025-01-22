import React from "react";
import Header from "./Header";
import bgImage from "./../assets/bgImage.jpg";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-300 text-gray-900 font-sans">
      {/* Header Section */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-extrabold text-green-700">Quizit</div>
          <nav className="space-x-6 font-medium text-gray-700">
            <Link to="/" className="text-lg hover:text-green-500 transition">
              Home
            </Link>
            <Link
              to="/about"
              className="text-lg hover:text-green-500 transition"
            >
              About
            </Link>
            <Link
              to="/quiz"
              className="text-lg hover:text-green-500 transition"
            >
              Quiz
            </Link>
            <Link
              to="/contact"
              className="text-lg hover:text-green-500 transition"
            >
              Contact
            </Link>
          </nav>
          <div>
            <Link
              to="/login"
              className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-full font-bold transition"
            >
              Login
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen px-6">
        <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto gap-10">
          {/* Text and Button */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-5xl font-extrabold text-green-800 text-center ">
              Welcome to <span className="text-teal-500">Quizit</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 text-center font-medium leading-relaxed">
              Discover the joy of learning with engaging quizzes across a wide
              range of topics! <br />
              Compete with others to test your knowledge, challenge yourself
              daily, and even create your own quizzes <br />
              to invite friends for a fun and personalized experience.
            </p>

            <div className="mt-8 text-center">
              <Link
                to="/login"
                className="inline-block bg-teal-500 text-white px-8 py-3 text-base sm:text-lg font-bold rounded-full shadow-md hover:bg-teal-400 transition"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Background Image */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={bgImage}
              alt="Quiz Background"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-green-50 to-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-800">
            Why Choose Quizit?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-green-600">
                Multiple Categories
              </h3>
              <p className="mt-4 text-gray-600">
                Explore quizzes on a variety of topics like science, history,
                sports, and more!
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-green-600">
                Daily Challenges
              </h3>
              <p className="mt-4 text-gray-600">
                Participate in daily challenges and sharpen your knowledge every
                day!
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-green-600">
                Leaderboard
              </h3>
              <p className="mt-4 text-gray-600">
                Compete with others and track your progress on the leaderboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Section for Engagement */}
      <section className="bg-gradient-to-b from-gray-100 to-green-50 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-800">
            Get Involved
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join our community of quiz enthusiasts! Share your scores, challenge
            friends, and climb the leaderboard.
          </p>
          <div className="mt-8">
            <Link
              to="/community"
              className="inline-block bg-green-600 text-white px-8 py-3 text-base sm:text-lg font-bold rounded-full shadow-md hover:bg-green-500 transition"
            >
              Join the Community
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-green-800 py-6 text-center text-white">
        <p>&copy; 2025 Quizit. All rights reserved.</p>
        <div className="mt-4 text-sm">
          <Link to="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>{" "}
          |
          <Link to="/terms" className="hover:underline">
            {" "}
            Terms & Conditions
          </Link>
        </div>
      </footer>
    </div>
  );
}
