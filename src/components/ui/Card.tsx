import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

function Card({ title, children, className = '' }: CardProps) {
  return (
    <div className={`p-4 border rounded-lg shadow-lg ${className}`}>
      {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
      {children}
    </div>
  );
}

export default Card; 