"use client"
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-600 text-white p-4 flex justify-between items-center shadow-md">
      <div className="font-bold text-2xl tracking-wide">Chatbot</div>
      
      {/* Desktop Navigation Links */}
      <div className="space-x-6 hidden md:flex">
        <button className="text-white hover:text-gray-400 transition-all">Home</button>
        <button className="text-white hover:text-gray-400 transition-all">About</button>
        <button className="text-white hover:text-gray-400 transition-all">Contact Us</button>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white  focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-700 p-4 space-y-4">
          <button className="text-white w-full text-center hover:text-gray-200 transition-all">
            Home
          </button>
          <button className="text-white w-full text-center hover:text-gray-300 transition-all">
            About
          </button>
          <button className="text-white w-full text-center hover:text-gray-300 transition-all">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
