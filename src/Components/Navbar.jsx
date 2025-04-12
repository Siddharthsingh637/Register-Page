import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white w-full fixed top-0 z-50">
      <nav className="flex items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img
              className="h-13 w-32 p-2"
              src={Logo}
              alt="Logo"
            />
            {/* <span className="text-xl font-semibold text-blue-600">Cimage</span> */}
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex space-x-8 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Academics</a>
          <a href="#" className="hover:text-blue-600">Programme</a>
          <a href="#" className="hover:text-blue-600">Placements</a>
          <a href="#" className="hover:text-blue-600">Events</a>
          <a href="#" className="hover:text-blue-600">Pedagogy</a>


        </div>

        {/* Right Side Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/signin" className="text-sm font-medium text-gray-700 hover:text-blue-600">
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Get Started Today
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-6 pb-4 space-y-3 text-sm font-medium text-gray-700">
          <Link to="/" className="block hover:text-blue-600">Home</Link>
          <a href="#" className="block hover:text-blue-600">About</a>
          <a href="#" className="block hover:text-blue-600">Academics</a>
          <a href="#" className="block hover:text-blue-600">Programme</a>
          <Link to="/signin" className="text-sm font-medium text-gray-700 hover:text-blue-600">
            Sign In
          </Link>
          <Link
            to="/signup"
            className="block bg-blue-600 text-white text-center px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Get Started Today
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
