import React from 'react';

const Button = ({ 
  children,
  disabled = false,
  className = ' ',
  size = "medium",
  variant = "dark",
  onClick,
  ...props
}) => {
  const baseBtn = 'font-bold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500';

  const sizeClasses = {
    small: 'text-sm py-1 px-2 h-8',
    medium: 'text-nd py-2 px-4 h-12',
    large: 'text-lg py-3 px-6 h-16',
  }

  const variantClasses = {
    dark: 'bg-gray-800 hover:bg-gray-900 text-white',
    light: 'bg-gray-200 hover:bg-gray-300 text-black',
  };

  const btnClasses = `${baseBtn} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={btnClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;