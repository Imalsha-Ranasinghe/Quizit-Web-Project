import React from 'react';

export default function Header() {
  return (
    <header className=" text-blue-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold ">
          <span className="text-blue-900">Quizit</span>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6 font-semibold">
          <a href="/" className="text-lg hover:text-blue-400 transition">Home</a>
          <a href="/about" className="text-lg hover:text-blue-400 transition">About</a>
          <a href="/quiz" className="text-lg hover:text-blue-400 transition">Quiz</a>
          <a href="/contact" className="text-lg hover:text-blue-400 transition">Contact</a>
        </nav>

        {/* Call-to-Action Button */}
        <div>
          <a 
            href="/login" 
            className=" bg-blue-300 hover:bg-blue-200 text-blue-800 px-6 py-2 rounded-full font-bold transition">
            Login
          </a>
        </div>
      </div>
    </header>
  );
}
