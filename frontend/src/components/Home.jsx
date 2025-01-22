import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen ">
      {/* Header */}
      <Header />

      {/* Main Section */}
      <main className="px-4 py-10 text-center">
        <h2 className="text-3xl font-semibold text-green-800 mb-6">
          Welcome to Quizit!
        </h2>
        <p className="text-lg text-green-600 mb-8">
          Test your knowledge in various topics and compete with others.
        </p>

        <div className="mb-8">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-xl hover:bg-green-700">
            Start Quiz
          </button>
        </div>

        {/* Categories */}
        <h3 className="text-2xl font-semibold text-green-800 mb-4">
          Browse Categories
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
          <div className="p-[2px] border-transparent bg-gradient-to-r from-blue-500 to-green-500 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold text-lg text-green-800">
                General Knowledge
              </h4>
            </div>
          </div>

          <div className="p-[2px] border-transparent bg-gradient-to-r from-blue-500 to-green-500 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold text-lg text-green-800">Science</h4>
            </div>
          </div>

          <div className="p-[2px] border-transparent bg-gradient-to-r from-blue-500 to-green-500 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold text-lg text-green-800">Sports</h4>
            </div>
          </div>

          <div className="p-[2px] border-transparent bg-gradient-to-r from-blue-500 to-green-500 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold text-lg text-green-800">
                General History
              </h4>
            </div>
          </div>
        </div>

        {/* Daily Challenge */}
        <div className="mt-10 bg-green-100 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-green-800">
            Today's Challenge
          </h3>
          <p className="mb-4 text-green-700">
            Test your knowledge with today's special quiz!
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700">
            Start Challenge
          </button>
        </div>

        {/* Create Quiz Button */}
        <div className="mt-10">
          <Link to="/create-quiz">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-xl hover:bg-green-700">
              Create Your Own Quiz
            </button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-6 mt-10">
        <div className="text-center">
          <p>&copy; 2025 QuizMaster. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>{" "}
            |
            <a href="#" className="text-gray-400 hover:text-white">
              {" "}
              Terms & Conditions
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
