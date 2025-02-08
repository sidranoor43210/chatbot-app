import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white text-center py-3">
      <p>&copy; {new Date().getFullYear()} Your Website. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
