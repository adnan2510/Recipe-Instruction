import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full bg-white p-10 rounded-2xl shadow-2xl text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 p-4 rounded-full shadow-inner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-5xl font-bold text-gray-800 mb-2">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! Page not found</p>

        <p className="text-gray-500 mb-8">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
