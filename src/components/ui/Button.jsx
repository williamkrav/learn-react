import React from 'react';

function Button({ children, onClick, variant = 'primary' }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded transition-colors ${
        variant === 'primary' 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'bg-gray-700 text-gray-100 hover:bg-gray-600'
      }`}
    >
      {children}
    </button>
  );
}

export default Button; 