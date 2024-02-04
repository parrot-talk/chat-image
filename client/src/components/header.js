import React, { useState } from 'react';
import logo from '../image/cocc.png';

  
  const Navbar = ({ theme, toggleTheme }) => {

  return (
    <nav className="bprimary text-white mx-auto max-w-7xl">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div>
          <img
            className="w-8 h-8"
            src={logo}
            alt="Company Logo"
          />
        </div>

        {/* Dark Mode Toggle */}
        <div>
          <button
            className="flex items-center justify-center px-3 py-2 rounded-md btertiary"
            onClick={toggleTheme}
          >
            <span className="text-sm text-white">
              {theme === 'light' ? 'Oppenhiemer' : 'Barbie'}  
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
