import React, { useState } from "react";
import { FiSearch, FiPlus, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm px-4 md:px-8 py-3 flex items-center justify-between">
      {/* Left section */}
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <div className="flex items-center space-x-1">
          <span className="font-semibold text-gray-800 text-lg">n<span className="text-blue-500">m</span> nomo</span>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
          <li className="hover:text-blue-600 cursor-pointer">Trading ▾</li>
          <li className="hover:text-blue-600 cursor-pointer">Copy-trading ▾</li>
          <li className="hover:text-blue-600 cursor-pointer">Portfolio</li>
          <li className="hover:text-blue-600 cursor-pointer">More ▾</li>
        </ul>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-3">
        {/* Search Icon */}
        <button className="p-2 rounded-full hover:bg-gray-100">
          <FiSearch className="text-gray-600 w-5 h-5" />
        </button>

        {/* Deposit bonus button */}
        <button className="hidden sm:flex items-center space-x-1 bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-200">
          <span>💰</span>
          <span>Deposit bonus</span>
        </button>

        {/* Wallet icon (placeholder) */}
        <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-100">
          <img
            src="https://dummyimage.com/20x20/000/fff&text=$"
            alt="Wallet"
            className="h-4"
          />
        </button>

        {/* Add button */}
        <button className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white">
          <FiPlus className="w-5 h-5" />
        </button>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 ml-2 rounded-full hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col text-gray-700 text-sm py-2">
            <li className="px-4 py-2 hover:bg-gray-50">Trading</li>
            <li className="px-4 py-2 hover:bg-gray-50">Copy-trading</li>
            <li className="px-4 py-2 hover:bg-gray-50">Portfolio</li>
            <li className="px-4 py-2 hover:bg-gray-50">More</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
