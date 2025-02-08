import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-600 text-white p-4 flex justify-between items-center shadow-md">
      <div className="font-bold text-2xl tracking-wide">Chatbot</div>
      <div className="space-x-6 hidden md:flex">
        <button className="text-white hover:text-gray-300  transition-all">Home</button>
        <button className="text-white hover:text-gray-300  transition-all">About</button>
        <button className="text-white  hover:text-gray-300 transition-all">Contact Us</button>

      </div>
    </nav>
  );
};

export default Navbar;