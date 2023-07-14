import React from "react";

const Header = () => {
  return (
    <header
      className="h-16 w-full flex items-center bg-gray-100"
      style={{ position: "absolute", zIndex: 50 }}
    >
      <img src="/logo.png" alt="Logo" className="pl-16" />
      <div className="text-black text-lg font-bold pl-6 py-auto">
        Attendance
      </div>
    </header>
  );
};

export default Header;
