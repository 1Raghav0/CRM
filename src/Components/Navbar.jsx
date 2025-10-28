// import React, { useState } from "react";
// import { FiSearch, FiPlus, FiMenu, FiX } from "react-icons/fi";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="w-full bg-white shadow-sm px-4 md:px-8 py-3 flex items-center justify-between">
//       {/* Left section */}
//       <div className="flex items-center space-x-8">
//         {/* Logo */}
//         <div className="flex items-center space-x-1">
//           <span className="font-semibold text-gray-800 text-lg">n<span className="text-blue-500">m</span> nomo</span>
//         </div>

//         {/* Desktop menu */}
//         <ul className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
//           <li className="hover:text-blue-600 cursor-pointer">Trading ▾</li>
//           <li className="hover:text-blue-600 cursor-pointer">Copy-trading ▾</li>
//           <li className="hover:text-blue-600 cursor-pointer">Portfolio</li>
//           <li className="hover:text-blue-600 cursor-pointer">More ▾</li>
//         </ul>
//       </div>

//       {/* Right section */}
//       <div className="flex items-center space-x-3">
//         {/* Search Icon */}
//         <button className="p-2 rounded-full hover:bg-gray-100">
//           <FiSearch className="text-gray-600 w-5 h-5" />
//         </button>

//         {/* Deposit bonus button */}
//         <button className="hidden sm:flex items-center space-x-1 bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-200">
//           <span>💰</span>
//           <span>Deposit bonus</span>
//         </button>

//         {/* Wallet icon (placeholder) */}
//         <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-100">
//           <img
//             src="https://dummyimage.com/20x20/000/fff&text=$"
//             alt="Wallet"
//             className="h-4"
//           />
//         </button>

//         {/* Add button */}
//         <button className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white">
//           <FiPlus className="w-5 h-5" />
//         </button>

//         {/* Mobile menu toggle */}
//         <button
//           className="md:hidden p-2 ml-2 rounded-full hover:bg-gray-100"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
//         </button>
//       </div>

//       {/* Mobile dropdown */}
//       {menuOpen && (
//         <div className="absolute top-14 left-0 w-full bg-white shadow-md md:hidden">
//           <ul className="flex flex-col text-gray-700 text-sm py-2">
//             <li className="px-4 py-2 hover:bg-gray-50">Trading</li>
//             <li className="px-4 py-2 hover:bg-gray-50">Copy-trading</li>
//             <li className="px-4 py-2 hover:bg-gray-50">Portfolio</li>
//             <li className="px-4 py-2 hover:bg-gray-50">More</li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiPlus, FiMenu, FiX } from "react-icons/fi";
import { FaWallet } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // tracks which dropdown is open

  // Handle which dropdown is open
  const handleToggle = (menuName) => {
    setOpenMenu((prev) => (prev === menuName ? null : menuName));
  };

  // Tailwind helper functions for dropdown & arrow transitions
  const dropdownClass = (isOpen) =>
    `overflow-hidden transition-all duration-300 ease-in-out ${
      isOpen ? "max-h-48 opacity-100 mt-2" : "max-h-0 opacity-0"
    }`;

  const arrowClass = (isOpen) =>
    `text-gray-400 text-sm transform transition-transform duration-300 ${
      isOpen ? "rotate-180" : "rotate-0"
    }`;

  return (
    <nav className="w-full bg-white border-b px-4 py-2 flex items-center justify-around">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <div className="flex items-center mr-8">
          <Link to="/">
            <span className="text-black font-bold text-2xl">n</span>
            <span className="text-blue-600 font-bold text-2xl">m</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        {/* <ul className="hidden lg:flex items-center space-x-8 text-sm text-gray-600">
          <li className="hover:text-blue-600 cursor-pointer">Trading ▾</li>
          <li className="hover:text-blue-600 cursor-pointer">Copy-trading ▾</li>
          <li className="hover:text-blue-600 cursor-pointer">Portfolio</li>
          <li className="hover:text-blue-600 cursor-pointer">More ▾</li>
        </ul> */}
        <ul className="hidden lg:flex items-center space-x-8 text-sm text-gray-600">
  {/* Trading */}
  <li className="relative group cursor-pointer">
    <div className="flex items-center space-x-1 hover:text-blue-600">
      <span>Trading</span>
      <span className="text-gray-400 text-xs transform transition-transform duration-300 group-hover:rotate-180">▾</span>
    </div>
    <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 z-50">
      <li>
        <Link
          to="/trading/marketing"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          Markets
          <br />
          <span className="text-sm text-gray-400">Select an asset to trade</span>
        </Link>
      </li>
      <li>
        <Link
          to="/trading/platforms"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          Platforms
          <br />
          <span className="text-sm text-gray-400">Trade on nomo or MT5</span>
        </Link>
      </li>
    </ul>
  </li>

  {/* Copy-trading */}
  <li className="relative group cursor-pointer">
    <div className="flex items-center space-x-1 hover:text-blue-600">
      <span>Copy-trading</span>
      <span className="text-gray-400 text-xs transform transition-transform duration-300 group-hover:rotate-180">▾</span>
    </div>
    <ul className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 z-50">
      <li>
        <Link
          to="/copy-trading/leaderboard"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          Leaderboard
          <br />
          <span className="text-sm text-gray-400">Discover the best traders to copy</span>
        </Link>
      </li>
      <li>
        <Link
          to="/copy-trading/copier-dashboard"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          Your copier dashboard
          <br />
          <span className="text-sm text-gray-400">Manage the leaders you copy</span>
        </Link>
      </li>
      <li>
        <Link
          to="/copy-trading/leaders-hub/dashboard"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          Leader's hub
          <br />
          <span className="text-sm text-gray-400">Get copied, earn fees</span>
        </Link>
      </li>
    </ul>
  </li>

  {/* Portfolio */}
  <li>
    <Link to="/page1" className="hover:text-blue-600">
      Portfolio
    </Link>
  </li>

  {/* More */}
  <li className="relative group cursor-pointer">
    <div className="flex items-center space-x-1 hover:text-blue-600">
      <span>More</span>
      <span className="text-gray-400 text-xs transform transition-transform duration-300 group-hover:rotate-180">▾</span>
    </div>
    <ul className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 z-50">
      <li>
        <Link
          to="/nomo-gpt"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          nomoGPT
          <br />
          <span className="text-sm text-gray-400">Research powered by AI</span>
        </Link>
      </li>
      <li>
        <Link
          to="/copy-trading/nomo-ai-index"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          nomo AI index
          <br />
          <span className="text-sm text-gray-400">Automated AI-portfolio</span>
        </Link>
      </li>
    </ul>
  </li>
</ul>

      </div>

      {/* Search + Bonus */}
      <div className="flex gap-4">
        {/* Search Button */}
        <button className="p-4 rounded-lg bg-gray-100 hover:bg-gray-200">
          <FiSearch className="w-5 h-5" />
        </button>

        {/* Deposit Bonus */}
        <button className="hidden sm:flex items-center space-x-1 bg-blue-50 px-3 py-1.5 rounded-xl text-sm font-medium hover:bg-blue-100 transition">
          <Link
            to="/money/50-deposit-bonus"
            className="text-black font-medium py-2 px-4 rounded transition"
          >
            50% Deposit <span className="text-blue-500">Bonus</span>
          </Link>
          <span className="text-white bg-blue-600 w-6 h-6 rounded-full">{">"}</span>
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-3">
        {/* Wallet */}
        <button className="flex items-center justify-center p-2 rounded-lg border border-gray-200 hover:bg-gray-100">
          <FaWallet className="text-gray-700 w-5 h-5" />
        </button>

        {/* Add Button */}
        <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-2">
          <FiPlus className="w-5 h-5" />
        </button>

        {/* Menu Toggle (Mobile) */}
        <button
          className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 lg:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-1 right-0 w-full md:w-[50%] bg-white shadow-lg rounded-2xl z-50 p-5 transition-all duration-300">
          {/* Header */}
          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center space-x-2">
              <div className="text-blue-700 font-bold text-xl">mm</div>
              <span className="text-gray-900 font-semibold text-lg">nomo</span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition"
            >
              ✕
            </button>
          </div>

          {/* Sign up / Log in */}
          <div className="flex flex-col items-center border-b border-gray-100 pb-4">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md">
              Sign up
            </button>
            <button className="text-blue-600 text-sm mt-2 hover:underline">
              Log in
            </button>
          </div>

          {/* Dropdown Menus */}
          <ul className="flex flex-col gap-3 mt-4">
            {/* Trading */}
            <li className="flex flex-col px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer relative">
              <div
                onClick={() => handleToggle("trading")}
                className="flex justify-between items-center"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-50 p-2 rounded-md">↔️</div>
                  <span className="text-gray-700 font-medium">Trading</span>
                </div>
                <span className={arrowClass(openMenu === "trading")}>▾</span>
              </div>

              <div className={dropdownClass(openMenu === "trading")}>
                <div className="flex flex-col bg-white ml-4">
                  <Link to="/trading/marketing" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Markets 
                    <br />
                    <span className="text-sm text-gray-400">Select an asset to trade</span>
                  </Link>
                  <Link to="/trading/platforms" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Platforms 
                    <br />
                    <span className="text-sm text-gray-400">Trade on nomo or MT5</span>
                  </Link>
                </div>
              </div>
            </li>

            {/* Copy Trading */}
            <li className="flex flex-col px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer relative">
              <div
                onClick={() => handleToggle("copy")}
                className="flex justify-between items-center"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-50 p-2 rounded-md">📋</div>
                  <span className="text-gray-700 font-medium">Copy Trading</span>
                </div>
                <span className={arrowClass(openMenu === "copy")}>▾</span>
              </div>

              <div className={dropdownClass(openMenu === "copy")}>
                <div className="flex flex-col bg-white ml-4">
                  <Link to="/copy-trading/leaderboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Leaderboard 
                    <br />
                    <span className="text-sm text-gray-400">Discover the best traders to copy</span>
                  </Link>
                  <Link to="/copy-trading/copier-dashboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Your copier dashboard 
                    <br />
                    <span className="text-sm text-gray-400">Manage the leaders you copy</span>
                  </Link>
                  <Link to="/copy-trading/leaders-hub/dashboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Leader's hub 
                    <br />
                    <span className="text-sm text-gray-400">Get copied, earn fees</span>
                  </Link>
                </div>
              </div>
            </li>

            {/* Portfolio */}
            <li className="flex flex-col px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer relative">
              <div
                className="flex justify-between items-center"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-50 p-2 rounded-md">💼</div>
                  <Link to="/page1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Portfolio
                  </Link>
                </div>
              </div>
            </li>

            {/* nomo AI */}
            <li className="flex flex-col px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer relative">
              <div
                onClick={() => handleToggle("ai")}
                className="flex justify-between items-center"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-50 p-2 rounded-md">🤖</div>
                  <span className="text-gray-700 font-medium">nomo AI</span>
                </div>
                <span className={arrowClass(openMenu === "ai")}>▾</span>
              </div>

              <div className={dropdownClass(openMenu === "ai")}>
                <div className="flex flex-col bg-white ml-4">
                  <Link to="/copy-trading/nomo-ai-index" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    nomo AI index 
                    <br />
                    <span className="text-sm text-gray-400">Automated AI-portfolio</span>
                  </Link>
                  <Link to="/nomo-gpt" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    nomoGPT 
                    <br />
                    <span className="text-sm text-gray-400">Research powered by AI</span>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
