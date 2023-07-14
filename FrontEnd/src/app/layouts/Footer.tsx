import React from "react";

const Footer = () => {
  return (
    <footer
      className="h-16 w-full flex items-center justify-center bg-gray-100"
      style={{ position: "fixed", bottom: 0, zIndex: 50 }}
    >
      <p className="text-center">GTN Vietnam (c) 2023</p>
    </footer>
  );
};

export default Footer;
