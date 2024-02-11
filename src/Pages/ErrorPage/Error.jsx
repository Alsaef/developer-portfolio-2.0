/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Emoji from 'react-emoji-render';
const Error = () => {
    return (
        <div>
    <div className="min-h-screen flex items-center justify-center ">
      <div className="p-8 max-w-md mx-auto bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl text-red-500 font-bold">404 - Not Found <Emoji text="😔" /></h1>
        <p className="text-gray-700">The page you are looking for does not exist.</p>
        <Link to="/" className="text-blue-500 hover:underline">Go back to the homepage</Link>
      </div>
    </div> 
        </div>
    );
};

export default Error;