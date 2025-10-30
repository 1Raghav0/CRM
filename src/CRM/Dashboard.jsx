import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const navigate = useNavigate();

  const gotoTrade = () => {
    navigate("/trading/marketing");
  };

  const gotoLeaderboard = () => {
    navigate("/copy-trading/leaderboard");
  };
  const gotoPortfolio = () => {
    navigate("/portfolio/open");
  };

  return (
    <div className="container mx-auto p-4">
      {/* Dashboard Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {/* Nomo Academy Card */}
        <div className="bg-black text-white p-6 rounded-lg shadow-lg flex items-center gap-8 ">
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-2">nomo academy</h3>
            <p className="mb-4">
              Learn more about trading with a course from our partners at nomo
              academy
            </p>
          </div>
          <img
            src="./academy.webp"
            alt="Nomo Academy"
            className="w-32 h-28 object-cover rounded-full"
          />
        </div>

        {/* Nomo Educational Hub Card */}
        <div className="bg-blue-800 text-white p-6 rounded-lg shadow-lg flex items-center gap-8">
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-2">nomo educational hub</h3>
            <p className="mb-4">
              Get access to free articles, videos, and trading educational
              content
            </p>
          </div>
          <img
            src="educational.webp"
            alt="Educational Hub"
            className="w-32 h-28 object-cover rounded-full"
          />
        </div>

        {/* Economic Calendar Card */}
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex items-center justify-between">
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Economic calendar</h3>
            <p className="mb-4">Check all of the latest economic events</p>
          </div>
          <img
            src="./economic.webp"
            alt="Economic Calendar"
            className="w-32 h-32 object-cover rounded-full"
          />
        </div>
      </div>

      {/* Portfolio Details Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
        {/* Portfolio Value */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col lg:flex-row justify-between lg:items-center">
          <div>
            <h4 className="text-xl font-semibold mb-2 text-gray-800">
              My portfolio value
            </h4>
            <p className="text-4xl font-bold text-gray-900 mb-4">0.00</p>
          </div>

          <button
            className="bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2.5 px-5 rounded-lg shadow-md 
               hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg 
               active:scale-95 transition-all duration-200 ease-in-out"
          onClick={gotoPortfolio}>
            Go to portfolio
          </button>
        </div>

        {/* Total Copied Trades */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col lg:flex-row justify-between lg:items-center">
          <div>
            <h4 className="text-xl font-semibold mb-2">Total copied trades</h4>
            <p className="text-4xl font-bold text-gray-800 mb-4">0</p>
          </div>

          <button
            className="bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2.5 px-5 rounded-lg shadow-md 
               hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg 
               active:scale-95 transition-all duration-200 ease-in-out"
          >
            Go to portfolio
          </button>
        </div>
      </div>

      {/* Activity Feed Section */}
      <div className="w-full px-4 py-8">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Open Trades Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center">
            <h3 className="w-full text-left text-sm font-semibold text-gray-800 mb-6">
              Open trades
            </h3>

            {/* Empty State Illustration */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/7486/7486795.png"
              alt="No Trades"
              className="w-12 h-12 opacity-70 mb-4"
            />

            {/* Text Content */}
            <h4 className="text-gray-900 font-semibold text-base mb-1">
              You have no open trades
            </h4>
            <p className="text-gray-500 text-sm mb-6">
              Currently you don’t have any open trades
            </p>

            {/* Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-md transition"
            onClick={gotoTrade}>
              Trade now
            </button>
          </div>

          {/* Activity Feed Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center">
            <h3 className="w-full text-left text-sm font-semibold text-gray-800 mb-6">
              Activity feed
            </h3>

            {/* Empty State Illustration */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/7486/7486795.png"
              alt="No Activity"
              className="w-12 h-12 opacity-70 mb-4"
            />

            {/* Text Content */}
            <h4 className="text-gray-900 font-semibold text-base mb-1">
              You don’t have any copy-trading activity
            </h4>
            <p className="text-gray-500 text-sm mb-6">
              Your copy-trading activity will appear here, find a trader to copy
              now
            </p>

            {/* Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-md transition"
            onClick={gotoLeaderboard}>
              Go to Leaderboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
