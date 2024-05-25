import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = ({ errorCode, errorMessage }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-red-600">{errorCode}</h1>
        <h2 className="text-4xl font-bold mt-4">Oops! Something went wrong.</h2>
        <p className="text-xl mt-2 mb-8">{errorMessage}</p>
        <Link to="/" className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-medium hover:bg-blue-700">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
