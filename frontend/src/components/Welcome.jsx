import React from "react";
import Header from "./Header";
import bgImage from "./../assets/bgImage.jpg";
import { Link } from "react-router-dom";
import { FaRocket, FaBrain, FaTrophy, FaUsers, FaRegClock, FaChartLine } from "react-icons/fa";

export default function Welcome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-cyan-50 font-sans">
      {/* Enhanced Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-black bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent">
            Quizit
          </div>
          <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
            <Link to="/" className="group relative text-lg hover:text-green-600 transition">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/about" className="group relative text-lg hover:text-green-600 transition">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/quiz" className="group relative text-lg hover:text-green-600 transition">
              Quiz
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/contact" className="group relative text-lg hover:text-green-600 transition">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>
          <div>
            <Link
              to="/login"
              className="bg-gradient-to-r from-green-600 to-teal-500 text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Animated Hero Section */}
      <section className="relative h-[90vh] flex items-center px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-8 animate-slide-in-left">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
              Master Knowledge with{" "}
              <span className="bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent">
                Interactive Quizzes
              </span>
            </h1>
            <p className="text-xl text-gray-600 font-medium leading-relaxed">
              Join millions of learners worldwide in a dynamic quiz experience.
              <br className="hidden lg:block" /> Earn badges, climb leaderboards,
              and challenge friends in real-time!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                to="/login"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-teal-500 text-white px-8 py-4 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all"
              >
                <FaRocket className="text-xl animate-bounce" />
                Start Learning Now
              </Link>
            </div>
            <div className="flex gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">50K+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-500">100+</div>
                <div className="text-gray-600">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-500">1M+</div>
                <div className="text-gray-600">Questions</div>
              </div>
            </div>
          </div>
          
          {/* Image Container with Floating Animation */}
          <div className="md:w-1/2 relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-400 rounded-2xl blur-2xl opacity-20 -z-10"></div>
            <img
              src={bgImage}
              alt="Quiz Background"
              className="rounded-2xl shadow-2xl border-8 border-white/20 transform rotate-3 hover:rotate-0 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-16">
            Why Quizit Stands Out
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <FaBrain className="text-4xl" />, 
                title: "Adaptive Learning", 
                desc: "Smart algorithms adjust difficulty based on your performance" },
              { icon: <FaTrophy className="text-4xl" />, 
                title: "Live Leaderboards", 
                desc: "Compete in real-time with global ranking updates" },
              { icon: <FaUsers className="text-4xl" />, 
                title: "Community Challenges", 
                desc: "Team up for group quizzes and shared rewards" },
              { icon: <FaRegClock className="text-4xl" />, 
                title: "Daily Streaks", 
                desc: "Maintain learning momentum with daily bonuses" },
              { icon: <FaChartLine className="text-4xl" />, 
                title: "Progress Analytics", 
                desc: "Detailed insights into your learning journey" },
              { icon: <FaRocket className="text-4xl" />, 
                title: "Rapid Quizzing", 
                desc: "Quick-fire rounds for fast-paced learning" }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-white/20 hover:border-green-100"
              >
                <div className="text-green-500 mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-600 to-teal-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-black mb-6">
            Ready to Boost Your Knowledge?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our community of curious minds today and unlock premium features!
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/signup"
              className="bg-white text-green-700 px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all"
            >
              Start Free Trial
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
            >
              Take a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-4">Quizit</h3>
            <p className="text-gray-400">Empowering learners through interactive education</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-green-400 transition">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-green-400 transition">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-green-400 transition">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-green-400 transition">Privacy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-green-400 transition">Terms</Link></li>
              <li><Link to="/security" className="text-gray-400 hover:text-green-400 transition">Security</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition">Instagram</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 Quizit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}