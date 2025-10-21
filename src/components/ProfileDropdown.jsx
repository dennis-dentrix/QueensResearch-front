import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router';

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        // Standardized padding and gap
        className="flex items-center gap-2 rounded-full hover:bg-background p-1.5 pr-3"
      >
        <img
          src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true&name=Alex+Turner"
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
        {/* Consistent text-sm for smaller profile text */}
        <span className="hidden md:block text-sm font-medium text-text">
          Alex Turner
        </span>
        <ChevronDown size={16} className="text-text/60 hidden md:block" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-1 z-10">
          <Link
            to="/profile"
            className="block px-4 py-2 text-sm text-text hover:bg-background transition-colors duration-150"
          >
            My Profile
          </Link>
          <Link
            to="/settings"
            className="block px-4 py-2 text-sm text-text hover:bg-background transition-colors duration-150"
          >
            Settings
          </Link>
          <div className="border-t border-subtle/50 my-1"></div>
          <Link
            to="/logout"
            className="block px-4 py-2 text-sm text-accent hover:bg-accent/10 transition-colors duration-150"
          >
            Log Out
          </Link>
        </div>
      )}
    </div>
  );
}

