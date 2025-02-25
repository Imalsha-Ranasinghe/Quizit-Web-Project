import React, { useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();  // Using navigate hook for redirection after successful signup

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password } = formData;

    // Check if all fields are filled out
    if (!username || !email || !password) {
      setErrorMessage("All fields are required");
      return;
    }

    try {
      // Send POST request to backend API
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Successfully registered, handle success
        console.log("User registered:", data.message);

        // Redirect to login page after successful registration
        navigate("/login");
      } else {
        // Handle error response
        setErrorMessage(data.error || "Registration failed");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error:", error);
      setErrorMessage("An error occurred while registering");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  flex flex-col">
      {/* Header Component */}
      <div className="w-full">
        <Header />
      </div>

      {/* Content Section */}
      <div className="flex-grow flex items-center justify-center">
        {/* Gradient Border Wrapper */}
        <div className="p-[2px] bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-lg shadow-lime-800 w-full max-w-lg">
          {/* Form Content */}
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-center text-green-800">
              Create an Account
            </h2>
            <p className="text-gray-600 text-center mt-2">
              Join us and start your journey today!
            </p>

            <form onSubmit={handleSubmit} className="mt-6">
              {/* Full Name Field */}
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>

              {/* Password Field */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>

              {/* Error Message */}
              {errorMessage && (
                <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md transition"
              >
                Create Account
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-4 text-gray-500">OR</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            {/* Social Login Buttons */}
            <div className="flex justify-center space-x-4">
              <button className="flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition">
                <img
                  src="https://img.icons8.com/color/24/google-logo.png"
                  alt="Google Logo"
                  className="w-5 h-5 mr-2"
                />
                Google
              </button>
              <button className="flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition">
                <img
                  src="https://img.icons8.com/color/24/facebook-new.png"
                  alt="Facebook Logo"
                  className="w-5 h-5 mr-2"
                />
                Facebook
              </button>
            </div>

            {/* Signup Link */}
            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-green-600 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
