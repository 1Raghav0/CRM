import React, { useState } from "react";
import {
  FaWallet,
  FaBalanceScale,
  FaCreditCard,
  FaChartLine,
  FaPercent,
  FaSearch,
  FaClock,
  FaHistory,
  FaPlus,
} from "react-icons/fa";
import InterestedSection from "./InterestedSection";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("open");

  return (
    <>
    <div className="bg-gray-50 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">My portfolio</h1>
          <p className="text-gray-500 text-sm mt-1">
            View and manage your open and pending trades. Check your closed trades in
            the trading history.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg flex flex-col">
            <div className="flex items-center gap-2 text-blue-600 mb-1">
              <FaWallet />
              <span className="font-medium text-sm">Portfolio value</span>
            </div>
            <p className="text-gray-900 font-bold text-lg">0.00 $</p>
          </div>
          <div className="bg-white border border-gray-200 p-4 rounded-lg flex flex-col">
            <div className="flex items-center gap-2 text-gray-600 mb-1">
              <FaBalanceScale />
              <span className="font-medium text-sm">Net profit/loss</span>
            </div>
            <p className="text-gray-900 font-bold text-lg">0.00 $</p>
          </div>
          <div className="bg-white border border-gray-200 p-4 rounded-lg flex flex-col">
            <div className="flex items-center gap-2 text-gray-600 mb-1">
              <FaCreditCard />
              <span className="font-medium text-sm">Available balance</span>
            </div>
            <p className="text-gray-900 font-bold text-lg">0.00 $</p>
          </div>
          <div className="bg-white border border-gray-200 p-4 rounded-lg flex flex-col">
            <div className="flex items-center gap-2 text-gray-600 mb-1">
              <FaChartLine />
              <span className="font-medium text-sm">Total invested</span>
            </div>
            <p className="text-gray-900 font-bold text-lg">0.00 $</p>
          </div>
          <div className="bg-white border border-gray-200 p-4 rounded-lg flex flex-col">
            <div className="flex items-center gap-2 text-gray-600 mb-1">
              <FaPercent />
              <span className="font-medium text-sm">Margin level</span>
            </div>
            <p className="text-gray-900 font-bold text-lg">0.00%</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 border-b border-gray-200">
          <div className="flex gap-4 mb-3 md:mb-0">
            <button
              onClick={() => setActiveTab("open")}
              className={`flex items-center gap-2 px-3 py-2 border-b-2 text-sm font-medium transition-all ${
                activeTab === "open"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <FaClock />
              Open trades
            </button>
            <button
              onClick={() => setActiveTab("history")}
              className={`flex items-center gap-2 px-3 py-2 border-b-2 text-sm font-medium transition-all ${
                activeTab === "history"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <FaHistory />
              History
            </button>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-64">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
            />
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button className="px-3 py-1.5 rounded-md bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200">
            All
          </button>
          <button className="px-3 py-1.5 rounded-md bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200">
            My trades
          </button>
          <button className="px-3 py-1.5 rounded-md bg-blue-100 text-blue-700 text-sm font-medium">
            Copied
          </button>
          <button className="px-3 py-1.5 rounded-md bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 flex items-center gap-1">
            <FaBalanceScale /> Filters
          </button>
        </div>

        {/* Content area */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
          {activeTab === "open" ? (
            <>
              <div className="text-gray-400 text-5xl mb-4">👻</div>
              <h3 className="font-semibold text-gray-800 text-lg">
                You have no open trades
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                All currently open trades will be displayed here
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg flex items-center gap-2">
                <FaPlus />
                Open trade
              </button>
            </>
          ) : (
            <>
              <div className="text-gray-400 text-5xl mb-4">📜</div>
              <h3 className="font-semibold text-gray-800 text-lg">
                No trade history available
              </h3>
              <p className="text-gray-500 text-sm">
                Your closed trades will appear here.
              </p>
            </>
          )}
        </div>
      </div>
    </div>

    <InterestedSection />
    </>
    
  );
};

export default Portfolio;
