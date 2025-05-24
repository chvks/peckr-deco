import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
}

