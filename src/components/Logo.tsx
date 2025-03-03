
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        <path
          d="M8 8L24 8L24 24L8 24L8 8Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        />
        <path
          d="M12 12L20 12L20 20L12 20L12 12Z"
          fill="currentColor"
          className="text-primary"
        />
      </svg>
      <span className="text-xl font-bold text-primary">Vexar Dev</span>
    </div>
  );
};

export default Logo;
