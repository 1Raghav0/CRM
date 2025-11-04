// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { FiSearch, FiPlus, FiMenu, FiX } from "react-icons/fi";
// import { FaWallet } from "react-icons/fa";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [openMenu, setOpenMenu] = useState(null); 
//   const [showPopup, setShowPopup] = useState(false);

//   // Handle which dropdown is open
//   const handleToggle = (menuName) => {
//     setOpenMenu((prev) => (prev === menuName ? null : menuName));
//   };

//   // Tailwind helper functions for dropdown & arrow transitions
//   const dropdownClass = (isOpen) =>
//     `overflow-hidden transition-all duration-300 ease-in-out ${
//       isOpen ? "max-h-48 opacity-100 mt-2" : "max-h-0 opacity-0"
//     }`;

//   const arrowClass = (isOpen) =>
//     `text-gray-400 text-sm transform transition-transform duration-300 ${
//       isOpen ? "rotate-180" : "rotate-0"
//     }`;

//   return (
//     <nav className="w-full bg-white border-b px-4 py-2 flex items-center justify-around">
//       {/* Left Section */}
//       <div className="flex items-center space-x-4">
//         {/* Logo */}
//         <div className="flex items-center mr-8">
//           <Link to="/">
//             <span className="text-black font-bold text-2xl">n</span>
//             <span className="text-blue-600 font-bold text-2xl">m</span>
//           </Link>
//         </div>

//         {/* Desktop Menu */}
//         {/* <ul className="hidden lg:flex items-center space-x-8 text-sm text-gray-600">
//           <li className="hover:text-blue-600 cursor-pointer">Trading ▾</li>
//           <li className="hover:text-blue-600 cursor-pointer">Copy-trading ▾</li>
//           <li className="hover:text-blue-600 cursor-pointer">Portfolio</li>
//           <li className="hover:text-blue-600 cursor-pointer">More ▾</li>
//         </ul> */}
//         <ul className="hidden lg:flex items-center space-x-8 text-sm text-gray-600">
//   {/* Trading */}
//   <li className="relative group cursor-pointer">
//     <div className="flex items-center space-x-1 hover:text-blue-600">
//       <span>Trading</span>
//       <span className="text-gray-400 text-xs transform transition-transform duration-300 group-hover:rotate-180">▾</span>
//     </div>
//     <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 z-50">
//       <li>
//         <Link
//           to="/trading/marketing"
//           className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//         >
//           Markets
//           <br />
//           <span className="text-sm text-gray-400">Select an asset to trade</span>
//         </Link>
//       </li>
//       <li>
//         <Link
//           to="/trading/platforms"
//           className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//         >
//           Platforms
//           <br />
//           <span className="text-sm text-gray-400">Trade on nomo or MT5</span>
//         </Link>
//       </li>
//     </ul>
//   </li>

//   {/* Copy-trading */}
//   <li className="relative group cursor-pointer">
//     <div className="flex items-center space-x-1 hover:text-blue-600">
//       <span>Copy-trading</span>
//       <span className="text-gray-400 text-xs transform transition-transform duration-300 group-hover:rotate-180">▾</span>
//     </div>
//     <ul className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 z-50">
//       <li>
//         <Link
//           to="/copy-trading/leaderboard"
//           className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//         >
//           Leaderboard
//           <br />
//           <span className="text-sm text-gray-400">Discover the best traders to copy</span>
//         </Link>
//       </li>
//       <li>
//         <Link
//           to="/copy-trading/copier-dashboard"
//           className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//         >
//           Your copier dashboard
//           <br />
//           <span className="text-sm text-gray-400">Manage the leaders you copy</span>
//         </Link>
//       </li>
//       <li>
//         <Link
//           to="/copy-trading/leaders-hub/dashboard"
//           className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//         >
//           Leader's hub
//           <br />
//           <span className="text-sm text-gray-400">Get copied, earn fees</span>
//         </Link>
//       </li>
//     </ul>
//   </li>

//   {/* Portfolio */}
//   <li>
//     <Link to="/portfolio/open" className="hover:text-blue-600">
//       Portfolio
//     </Link>
//   </li>

//   {/* More */}
//   <li className="relative group cursor-pointer">
//     <div className="flex items-center space-x-1 hover:text-blue-600">
//       <span>More</span>
//       <span className="text-gray-400 text-xs transform transition-transform duration-300 group-hover:rotate-180">▾</span>
//     </div>
//     <ul className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 z-50">
//       <li>
//         <Link
//           to="/nomo-gpt"
//           className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//         >
//           nomoGPT
//           <br />
//           <span className="text-sm text-gray-400">Research powered by AI</span>
//         </Link>
//       </li>
//       <li>
//         <Link
//           to="/copy-trading/nomo-ai-index"
//           className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//         >
//           nomo AI index
//           <br />
//           <span className="text-sm text-gray-400">Automated AI-portfolio</span>
//         </Link>
//       </li>
//     </ul>
//   </li>
// </ul>

//       </div>

//       {/* Search + Bonus */}
//       <div className="flex gap-4">
//         {/* Search Button */}
//         {/* <button className="p-4 rounded-lg bg-gray-100 hover:bg-gray-200">
//           <FiSearch className="w-5 h-5" />
//         </button> */}

//         <div className="relative">
//       {/* 🔍 Search Button */}
//       <button
//         className="p-4 rounded-lg bg-gray-100 hover:bg-gray-200"
//         onClick={() => setShowPopup(true)}
//       >
//         <FiSearch className="w-5 h-5" />
//       </button>

//       {/* 🌙 Popup Overlay */}
//       {showPopup && (
//         <div
//           className="fixed inset-0 backdrop-blur-xl flex items-center justify-center z-50"
//           onClick={() => setShowPopup(false)}
//         >
//           {/* 🧩 Popup Box */}
//           <div
//             className="relative bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center"
//             onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
//           >
            
//             <button
//               onClick={() => setShowPopup(false)}
//               className="absolute top-3 right-2 text-gray-500 hover:text-gray-800 transition"
//             >
//               <FiX className="w-5 h-5" />
//             </button>

//             {/* 🔍 Search Input */}
//             <div className="relative mb-6">
//               <input
//                 type="text"
//                 placeholder='Search by asset name or ticker, e.g. "Bitcoin" or "EUR/USD"'
//                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <div className="absolute right-3 top-3 text-gray-400">
//                 <FiSearch />
//               </div>
//             </div>

//             {/* 💰 Crypto Icons Preview */}
//             <div className="flex justify-center space-x-2 mb-3">
//               <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
//               <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
//               <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
//               <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
//               <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white text-xs">
//                 300+
//               </div>
//             </div>

//             {/* 🏷️ Text */}
//             <h2 className="text-lg font-semibold">Search for an asset</h2>
//             <p className="text-gray-500 text-sm">
//               Enter the asset name or ticker of the asset you're looking for
//             </p>
//           </div>
//         </div>
//       )}
//     </div>

//         {/* Deposit Bonus */}
//         <button className="hidden sm:flex items-center space-x-1 bg-blue-50 px-3 py-1.5 rounded-xl text-sm font-medium hover:bg-blue-100 transition">
//           <Link
//             to="/money/50-deposit-bonus"
//             className="text-black font-medium py-2 px-4 rounded transition"
//           >
//             50% Deposit <span className="text-blue-500">Bonus</span>
//           </Link>
//           <span className="text-white bg-blue-600 w-6 h-6 rounded-full">{">"}</span>
//         </button>
//       </div>

//       {/* Right Section */}
//       <div className="flex items-center space-x-3">
//         {/* Wallet */}
//         <Link to="/money">
//   <button className="flex items-center justify-center p-2 rounded-lg border border-gray-200 hover:bg-gray-100">
//     <FaWallet className="text-gray-700 w-5 h-5" />
//   </button>
// </Link>

//         {/* Add Button */}
//         <Link to="/money/deposit">
//         <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-2">
//           <FiPlus className="w-5 h-5" />
//         </button>
//         </Link>
        
//         {/* Menu Toggle (Mobile) */}
//         <button
//           className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 lg:hidden cursor-pointer"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="absolute top-1 right-0 w-full md:w-[50%] bg-white shadow-lg rounded-2xl z-50 p-5 transition-all duration-300">
//           {/* Header */}
//           <div className="flex justify-between items-center mb-5">
//             <div className="flex items-center space-x-2">
//               <div className="text-blue-700 font-bold text-xl">mm</div>
//               <span className="text-gray-900 font-semibold text-lg">nomo</span>
//             </div>
//             <button
//               onClick={() => setMenuOpen(false)}
//               className="p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition"
//             >
//               ✕
//             </button>
//           </div>

//           {/* Sign up / Log in */}
//           <div className="flex flex-col items-center border-b border-gray-100 pb-4">
//             <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md">
//               Sign up
//             </button>
//             <button className="text-blue-600 text-sm mt-2 hover:underline">
//               Log in
//             </button>
//           </div>

//           {/* Dropdown Menus */}
//           <ul className="flex flex-col gap-3 mt-4">
//             {/* Trading */}
//             <li className="flex flex-col px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer relative">
//               <div
//                 onClick={() => handleToggle("trading")}
//                 className="flex justify-between items-center"
//               >
//                 <div className="flex items-center space-x-3">
//                   <div className="bg-gray-50 p-2 rounded-md">↔️</div>
//                   <span className="text-gray-700 font-medium">Trading</span>
//                 </div>
//                 <span className={arrowClass(openMenu === "trading")}>▾</span>
//               </div>

//               <div className={dropdownClass(openMenu === "trading")}>
//                 <div className="flex flex-col bg-white ml-4">
//                   <Link to="/trading/marketing" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
//                     Markets 
//                     <br />
//                     <span className="text-sm text-gray-400">Select an asset to trade</span>
//                   </Link>
//                   <Link to="/trading/platforms" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
//                     Platforms 
//                     <br />
//                     <span className="text-sm text-gray-400">Trade on nomo or MT5</span>
//                   </Link>
//                 </div>
//               </div>
//             </li>

//             {/* Copy Trading */}
//             <li className="flex flex-col px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer relative">
//               <div
//                 onClick={() => handleToggle("copy")}
//                 className="flex justify-between items-center"
//               >
//                 <div className="flex items-center space-x-3">
//                   <div className="bg-gray-50 p-2 rounded-md">📋</div>
//                   <span className="text-gray-700 font-medium">Copy Trading</span>
//                 </div>
//                 <span className={arrowClass(openMenu === "copy")}>▾</span>
//               </div>

//               <div className={dropdownClass(openMenu === "copy")}>
//                 <div className="flex flex-col bg-white ml-4">
//                   <Link to="/copy-trading/leaderboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
//                     Leaderboard 
//                     <br />
//                     <span className="text-sm text-gray-400">Discover the best traders to copy</span>
//                   </Link>
//                   <Link to="/copy-trading/copier-dashboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
//                     Your copier dashboard 
//                     <br />
//                     <span className="text-sm text-gray-400">Manage the leaders you copy</span>
//                   </Link>
//                   <Link to="/copy-trading/leaders-hub/dashboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
//                     Leader's hub 
//                     <br />
//                     <span className="text-sm text-gray-400">Get copied, earn fees</span>
//                   </Link>
//                 </div>
//               </div>
//             </li>

//             {/* Portfolio */}
//             <li className="flex flex-col px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer relative">
//               <div
//                 className="flex justify-between items-center"
//               >
//                 <div className="flex items-center space-x-3">
//                   <div className="bg-gray-50 p-2 rounded-md">💼</div>
//                   <Link to="/page1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                     Portfolio
//                   </Link>
//                 </div>
//               </div>
//             </li>

//             {/* nomo AI */}
//             <li className="flex flex-col px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer relative">
//               <div
//                 onClick={() => handleToggle("ai")}
//                 className="flex justify-between items-center"
//               >
//                 <div className="flex items-center space-x-3">
//                   <div className="bg-gray-50 p-2 rounded-md">🤖</div>
//                   <span className="text-gray-700 font-medium">nomo AI</span>
//                 </div>
//                 <span className={arrowClass(openMenu === "ai")}>▾</span>
//               </div>

//               <div className={dropdownClass(openMenu === "ai")}>
//                 <div className="flex flex-col bg-white ml-4">
//                   <Link to="/copy-trading/nomo-ai-index" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
//                     nomo AI index 
//                     <br />
//                     <span className="text-sm text-gray-400">Automated AI-portfolio</span>
//                   </Link>
//                   <Link to="/nomo-gpt" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
//                     nomoGPT 
//                     <br />
//                     <span className="text-sm text-gray-400">Research powered by AI</span>
//                   </Link>
//                 </div>
//               </div>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState, useCallback } from "react";

const Link = ({ to, children, className }) => <a href={to} className={className}>{children}</a>;


import { Search, Plus, Menu, X, ChevronDown, Wallet } from "lucide-react";


const NavDropdownItem = ({ to, title, subtitle, onClick }) => (
    <Link
        to={to}
        onClick={onClick}
        className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 transition-colors duration-150 rounded-md"
    >
        <span className="font-medium text-sm text-gray-800">{title}</span>
        <br />
        <span className="text-xs text-gray-500">{subtitle}</span>
    </Link>
);

// 2. Search Modal/Popup
const SearchModal = ({ onClose }) => (
    <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-start justify-center p-4 sm:p-12 z-50 transition-opacity"
        onClick={onClose}
    >
        <div
            className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-lg w-full mt-10"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="flex justify-end mb-4">
                <button
                    onClick={onClose}
                    className="p-1 text-gray-500 hover:text-gray-800 transition"
                    aria-label="Close search modal"
                >
                    <X className="w-6 h-6" />
                </button>
            </div>

            <div className="relative mb-6">
                <input
                    type="text"
                    placeholder='Search by asset name or ticker, e.g. "Bitcoin" or "EUR/USD"'
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-2">Search for an asset</h2>
            <p className="text-gray-500 text-sm mb-6">
                Enter the asset name or ticker of the asset you're looking for.
            </p>

            {/* Crypto Icons Preview (Styled up) */}
            <div className="flex justify-center space-x-3">
                <div className="w-10 h-10 bg-orange-400 rounded-full shadow-md"></div>
                <div className="w-10 h-10 bg-blue-500 rounded-full shadow-md"></div>
                <div className="w-10 h-10 bg-yellow-400 rounded-full shadow-md"></div>
                <div className="w-10 h-10 bg-purple-500 rounded-full shadow-md"></div>
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white text-sm font-semibold shadow-md">
                    300+
                </div>
            </div>
        </div>
    </div>
);


const Navbar = () => {
    // State to control mobile menu drawer visibility
    const [menuOpen, setMenuOpen] = useState(false);
    // State to control which dropdown is open (used for both mobile and desktop hover simulation)
    const [openMenu, setOpenMenu] = useState(null);
    // State to control the Search popup/modal visibility
    const [showPopup, setShowPopup] = useState(false);

    // Handle toggling of mobile sub-menus
    const handleToggle = useCallback((menuName) => {
        setOpenMenu((prev) => (prev === menuName ? null : menuName));
    }, []);

    // Tailwind helper for smooth dropdown transition
    const dropdownClass = (isOpen) =>
        `overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 py-2" : "max-h-0 opacity-0"
        }`;
    
    // Tailwind helper for arrow rotation
    const arrowClass = (isOpen) =>
        `text-gray-400 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
        }`;

    // Desktop Dropdown component (uses local state for control)
    const DesktopDropdown = ({ title, menuName, children }) => {
        const isOpen = openMenu === menuName;
        return (
            <li className="relative" onMouseEnter={() => setOpenMenu(menuName)} onMouseLeave={() => setOpenMenu(null)}>
                <div className="flex items-center space-x-1 p-2 -m-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                    <span className="font-medium text-sm">{title}</span>
                    <ChevronDown className={arrowClass(isOpen)} size={16} />
                </div>
                {isOpen && (
                    <div className="absolute top-full left-0 mt-3 w-56 bg-white shadow-xl ring-1 ring-black/5 rounded-xl p-2 z-50 animate-fade-in">
                        {children}
                    </div>
                )}
            </li>
        );
    };

    return (
        <nav className="w-full bg-white border-b sticky top-0 z-40 px-4 md:px-8 py-3 flex items-center justify-between font-['Inter']">
            {/* Left Section: Logo & Desktop Menu */}
            <div className="flex items-center space-x-8">
                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/" className="flex items-baseline">
                        <span className="text-black font-extrabold text-2xl">n</span>
                        <span className="text-blue-600 font-extrabold text-2xl">m</span>
                    </Link>
                </div>

                {/* Desktop Menu (Hidden on mobile) */}
                <ul className="hidden lg:flex items-center space-x-6 text-sm">
                    <DesktopDropdown title="Trading" menuName="trading">
                        <NavDropdownItem
                            to="/trading/marketing"
                            title="Markets"
                            subtitle="Select an asset to trade"
                        />
                        <NavDropdownItem
                            to="/trading/platforms"
                            title="Platforms"
                            subtitle="Trade on nomo or MT5"
                        />
                    </DesktopDropdown>

                    <DesktopDropdown title="Copy-trading" menuName="copy">
                        <NavDropdownItem
                            to="/copy-trading/leaderboard"
                            title="Leaderboard"
                            subtitle="Discover the best traders to copy"
                        />
                        <NavDropdownItem
                            to="/copy-trading/copier-dashboard"
                            title="Your copier dashboard"
                            subtitle="Manage the leaders you copy"
                        />
                        <NavDropdownItem
                            to="/copy-trading/leader-onboarding"
                            title="Leader's hub"
                            subtitle="Get copied, earn fees"
                        />
                    </DesktopDropdown>

                    <li>
                        <Link to="/portfolio/open" className="p-2 -m-2 block font-medium text-gray-700 hover:text-blue-600 transition">
                            Portfolio
                        </Link>
                    </li>

                    <DesktopDropdown title="More" menuName="more">
                        <NavDropdownItem
                            to="/nomo-gpt"
                            title="nomoGPT"
                            subtitle="Research powered by AI"
                        />
                        <NavDropdownItem
                            to="/copy-trading/nomo-ai-index"
                            title="nomo AI index"
                            subtitle="Automated AI-portfolio"
                        />
                    </DesktopDropdown>
                </ul>
            </div>

            {/* Right Section: Search, Bonus, Wallet, Add, Menu Toggle */}
            <div className="flex items-center space-x-3">
                
                {/* Search Button (Opens Modal) */}
                <button
                    className="p-2 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
                    onClick={() => setShowPopup(true)}
                    aria-label="Open search"
                >
                    <Search className="w-5 h-5" />
                </button>

                {/* Deposit Bonus (Hidden on small mobile) */}
                <Link to="/money/50-deposit-bonus" className="hidden sm:flex items-center bg-blue-50 px-3 py-2 rounded-xl text-sm font-medium hover:bg-blue-100 transition shadow-sm">
                    <span className="text-black">50% Deposit </span>
                    <span className="text-blue-600 ml-1 font-semibold">Bonus</span>
                    <span className="ml-2 bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-xs">
                        <ChevronDown size={14} className="-rotate-90" />
                    </span>
                </Link>

                {/* Wallet Button */}
                <Link to="/money">
                    <button className="flex items-center justify-center p-2 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-100 transition shadow-sm">
                        {/* Replaced FaWallet with Lucide's Wallet icon */}
                        <Wallet className="w-5 h-5" />
                    </button>
                </Link>

                {/* Add/Deposit Button */}
                <Link to="/money/deposit">
                    <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-2 transition shadow-lg shadow-blue-500/30">
                        <Plus className="w-5 h-5" />
                    </button>
                </Link>

                {/* Mobile Menu Toggle (Hidden on desktop) */}
                <button
                    className="p-2 bg-gray-100 rounded-xl hover:bg-gray-200 lg:hidden cursor-pointer transition"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Search Modal */}
            {showPopup && <SearchModal onClose={() => setShowPopup(false)} />}


            {/* Mobile Menu Drawer */}
            {menuOpen && (
                <div className="fixed inset-0 top-[60px] lg:hidden bg-white z-30 shadow-2xl overflow-y-auto p-5 transition-transform duration-300">
                    
                    {/* Sign up / Log in Block */}
                    <div className="flex flex-col items-center border-b border-gray-100 pb-5 mb-5">
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition shadow-md">
                            Sign up
                        </button>
                        <button className="text-blue-600 text-sm mt-3 font-medium hover:text-blue-700 transition">
                            Log in
                        </button>
                    </div>

                    {/* Dropdown Menus */}
                    <ul className="flex flex-col gap-4">
                        
                        {/* Trading */}
                        <li className="border-b border-gray-100 pb-3">
                            <div
                                onClick={() => handleToggle("trading")}
                                className="flex justify-between items-center px-2 py-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="bg-gray-100 p-2 rounded-full">↔️</div>
                                    <span className="text-gray-900 font-semibold">Trading</span>
                                </div>
                                <ChevronDown className={arrowClass(openMenu === "trading")} size={20} />
                            </div>
                            <div className={dropdownClass(openMenu === "trading")}>
                                <div className="flex flex-col bg-white ml-6 space-y-1">
                                    <NavDropdownItem
                                        to="/trading/marketing"
                                        title="Markets"
                                        subtitle="Select an asset to trade"
                                        onClick={() => setMenuOpen(false)}
                                    />
                                    <NavDropdownItem
                                        to="/trading/platforms"
                                        title="Platforms"
                                        subtitle="Trade on nomo or MT5"
                                        onClick={() => setMenuOpen(false)}
                                    />
                                </div>
                            </div>
                        </li>

                        {/* Copy Trading */}
                        <li className="border-b border-gray-100 pb-3">
                            <div
                                onClick={() => handleToggle("copy")}
                                className="flex justify-between items-center px-2 py-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="bg-gray-100 p-2 rounded-full">📋</div>
                                    <span className="text-gray-900 font-semibold">Copy Trading</span>
                                </div>
                                <ChevronDown className={arrowClass(openMenu === "copy")} size={20} />
                            </div>
                            <div className={dropdownClass(openMenu === "copy")}>
                                <div className="flex flex-col bg-white ml-6 space-y-1">
                                    <NavDropdownItem
                                        to="/copy-trading/leaderboard"
                                        title="Leaderboard"
                                        subtitle="Discover the best traders to copy"
                                        onClick={() => setMenuOpen(false)}
                                    />
                                    <NavDropdownItem
                                        to="/copy-trading/copier-dashboard"
                                        title="Your copier dashboard"
                                        subtitle="Manage the leaders you copy"
                                        onClick={() => setMenuOpen(false)}
                                    />
                                    <NavDropdownItem
                                        to="/copy-trading/leader-onboarding"
                                        title="Leader's hub"
                                        subtitle="Get copied, earn fees"
                                        onClick={() => setMenuOpen(false)}
                                    />
                                </div>
                            </div>
                        </li>

                        {/* Portfolio (Direct Link) */}
                        <li className="border-b border-gray-100 pb-3">
                            <Link to="/portfolio/open" className="flex items-center space-x-4 px-2 py-2 rounded-lg hover:bg-gray-50 transition" onClick={() => setMenuOpen(false)}>
                                <div className="bg-gray-100 p-2 rounded-full">💼</div>
                                <span className="text-gray-900 font-semibold">Portfolio</span>
                            </Link>
                        </li>

                        {/* nomo AI */}
                        <li className="border-b border-gray-100 pb-3">
                            <div
                                onClick={() => handleToggle("ai")}
                                className="flex justify-between items-center px-2 py-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="bg-gray-100 p-2 rounded-full">🤖</div>
                                    <span className="text-gray-900 font-semibold">nomo AI</span>
                                </div>
                                <ChevronDown className={arrowClass(openMenu === "ai")} size={20} />
                            </div>
                            <div className={dropdownClass(openMenu === "ai")}>
                                <div className="flex flex-col bg-white ml-6 space-y-1">
                                    <NavDropdownItem
                                        to="/copy-trading/nomo-ai-index"
                                        title="nomo AI index"
                                        subtitle="Automated AI-portfolio"
                                        onClick={() => setMenuOpen(false)}
                                    />
                                    <NavDropdownItem
                                        to="/nomo-gpt"
                                        title="nomoGPT"
                                        subtitle="Research powered by AI"
                                        onClick={() => setMenuOpen(false)}
                                    />
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
