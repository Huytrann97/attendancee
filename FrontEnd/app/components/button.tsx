import React from "react";

interface ButtonProps{
  onClick: () => void;
  children: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button 
    onClick={onClick}
    className="cursor-pointer border-2 border-solid mt-12 p-2 px-8 bg-lavender-200 rounded-lg hover:bg-violet-600 active:bg-violet-700 ">
      {children} 
  </button>
  
  );
};

export default Button;
