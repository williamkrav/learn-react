import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-gray-100 border-b border-gray-700">
      <div className="container mx-auto">
        <ul className="flex gap-6">
          <li>
            <Link to="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link to="/css/responsive" className="hover:text-blue-400 transition-colors">
              Examples
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 