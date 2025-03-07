import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { FaRocket, FaFlask, FaFutbol, FaHistory, FaMedal, FaPlusCircle } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* Header */}
      <Header />

      {/* Main Section */}
      <main className="px-4 py-12 text-center max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
            Welcome to <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">QuizMaster</span>
          </h2>
          <p className="text-xl text-green-700 mb-8 max-w-2xl mx-auto">
            Challenge your knowledge, compete with friends, and climb the leaderboards!
          </p>
          <div className="mb-12">
            <Link 
              to="/quiz-list" 
              className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              <FaRocket className="mr-3 animate-bounce" />
              Start Quiz Now
            </Link>
          </div>
        </div>

        {/* Categories Grid */}
        <section className="mb-20 animate-slide-up">
          <h3 className="text-3xl font-bold text-green-900 mb-8">
            Explore Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {[
              { icon: <FaFlask />, title: "Science", color: "from-blue-400 to-green-400" },
              { icon: <FaFutbol />, title: "Sports", color: "from-green-400 to-yellow-400" },
              { icon: <FaHistory />, title: "History", color: "from-yellow-400 to-orange-400" },
              { icon: <FaMedal />, title: "General Knowledge", color: "from-orange-400 to-red-400" },
            ].map((category, index) => (
              <div 
                key={index}
                className={`group bg-gradient-to-br ${category.color} p-1 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="bg-white p-6 rounded-xl h-full flex flex-col items-center">
                  <div className="text-4xl mb-4 text-green-600 group-hover:text-blue-600 transition-colors">
                    {category.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">{category.title}</h4>
                  <p className="text-gray-600 mt-2 text-sm">100+ Questions</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Daily Challenge */}
        <section className="mb-20 animate-fade-in">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-1 shadow-2xl">
            <div className="bg-white rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-left mb-6 md:mb-0 md:mr-8">
                  <h3 className="text-3xl font-bold text-green-900 mb-4">
                    Daily Challenge
                  </h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Test your skills with today's special quiz and earn bonus points!
                  </p>
                  <div className="flex items-center text-yellow-600 mb-4">
                    <span className="mr-2">🔥 24h Time Limit</span>
                  </div>
                  <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                    Join Challenge
                  </button>
                </div>
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse opacity-20"></div>
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-center">
                      <span className="text-6xl font-bold text-green-700">50</span>
                      <p className="text-gray-700">Active Players</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Create Quiz CTA */}
        <section className="animate-fade-in">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-1 shadow-xl">
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Become a Quiz Creator
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Design your own interactive quizzes with multiple question types and share them with the community!
              </p>
              <Link 
                to="/create-quiz" 
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 transition-transform"
              >
                <FaPlusCircle className="mr-2" />
                Create Your Quiz
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-2xl font-bold mb-2">QuizMaster</h4>
              <p className="text-gray-300">Learning Through Play</p>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="hover:text-green-400 transition-colors">About</a>
              <a href="#" className="hover:text-green-400 transition-colors">Leaderboards</a>
              <a href="#" className="hover:text-green-400 transition-colors">Blog</a>
            </div>
          </div>
          <div className="border-t border-green-800 mt-8 pt-6 text-center text-gray-400">
            <p>© 2025 QuizMaster. All rights reserved.</p>
            <div className="mt-2">
              <a href="#" className="hover:text-white transition-colors mx-2">Privacy</a>
              <a href="#" className="hover:text-white transition-colors mx-2">Terms</a>
              <a href="#" className="hover:text-white transition-colors mx-2">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}