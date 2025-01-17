import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">QuizMaster</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-yellow-400">Home</a></li>
              <li><a href="#" className="hover:text-yellow-400">Categories</a></li>
              <li><a href="#" className="hover:text-yellow-400">Leaderboard</a></li>
              <li><a href="#" className="hover:text-yellow-400">Profile</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <main className="px-4 py-10 text-center">
        <h2 className="text-3xl font-semibold mb-6">Welcome to QuizMaster!</h2>
        <p className="text-lg mb-8">Test your knowledge in various topics and compete with others.</p>

        <div className="mb-8">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-xl hover:bg-blue-700">Start Quiz</button>
        </div>

        {/* Categories */}
        <h3 className="text-2xl font-semibold mb-4">Browse Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h4 className="font-bold text-lg">General Knowledge</h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h4 className="font-bold text-lg">Science</h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h4 className="font-bold text-lg">Sports</h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h4 className="font-bold text-lg">History</h4>
          </div>
        </div>

        {/* Daily Challenge */}
        <div className="mt-10 bg-yellow-100 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold">Today's Challenge</h3>
          <p className="mb-4">Test your knowledge with today's special quiz!</p>
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-yellow-600">Start Challenge</button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-10">
        <div className="text-center">
          <p>&copy; 2025 QuizMaster. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a> | 
            <a href="#" className="text-gray-400 hover:text-white"> Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
