import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <button className="button" onClick={onClick}>
    {children}
  </button>
);


