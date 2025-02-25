import { React, useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();  // For navigation after successful login

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

    const { email, password } = formData;

    // Check if all fields are filled out
    if (!email || !password) {
      setErrorMessage("Both email and password are required.");
      return;
    }

    try {
      // Send POST request to backend API
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Successfully logged in, handle success
        console.log("User logged in:", data.message);

        // Store the token (you can also store it in localStorage/sessionStorage if needed)
        localStorage.setItem("token", data.token);

        // Redirect user to dashboard (or another page)
        navigate("/home"); // Or navigate("/user/dashboard") depending on your structure
      } else {
        // Handle error response
        setErrorMessage(data.error || "Login failed");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error:", error);
      setErrorMessage("An error occurred while logging in");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br flex flex-col">
      {/* Header Component */}
      <div className="w-full">
        <Header />
      </div>

      {/* Login Form */}
      <div className="flex-grow flex items-center justify-center pt-6">
        {/* Gradient Border Wrapper */}
        <div className="p-[2px] bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-lg shadow-lg w-full max-w-lg">
          {/* Form Content */}
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-center text-green-800">
              Welcome Back!
            </h2>
            <p className="text-gray-600 text-center mt-2">
              Please log in to continue
            </p>

            {/* Display error message if any */}
            {errorMessage && (
              <div className="bg-red-100 text-red-700 p-2 mt-4 rounded-md text-center">
                {errorMessage}
              </div>
            )}

            <form className="mt-6" onSubmit={handleSubmit}>
              {/* Email Field */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
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

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between mb-4">
                <label className="flex items-center text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="mr-2 rounded text-green-500"
                  />
                  Remember me
                </label>
                <a href="/forgot-password" className="text-sm text-green-600 hover:underline">
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md transition"
              >
                Log In
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-4 text-gray-500">OR</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            {/* Social Login */}
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
              Don't have an account?{" "}
              <Link to="/signup" className="text-green-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
