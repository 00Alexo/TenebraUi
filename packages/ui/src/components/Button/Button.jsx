import React from 'react';

const Button = ({ 
  children, 
  ...props 
}) => {
  return (
    <button
      {...props}
    >
      <span>Butonas cu tragas</span>
    </button>
  );
};

export default Button;