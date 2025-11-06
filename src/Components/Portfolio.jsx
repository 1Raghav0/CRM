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
  FaTimes,
  FaFilter,
} from "react-icons/fa";
import InterestedSection from "./InterestedSection";
import { useNavigate } from "react-router-dom";

// ----------------------
// Filter Modal Component
// ----------------------
export function FilterModal({ open, onClose, filters, setFilters, onApply }) {
  const [tempFilters, setTempFilters] = useState(filters);

  if (!open) return null;

  const handleReset = () => {
    setTempFilters({
      direction: "all",
      market: [],
      type: "all",
      leader: "",
    });
  };

  const handleApply = () => {
    setFilters(tempFilters);
    onApply();
  };

  const toggleMarket = (market) => {
    setTempFilters((prev) => {
      const exists = prev.market.includes(market);
      return {
        ...prev,
        market: exists
          ? prev.market.filter((m) => m !== market)
          : [...prev.market, market],
      };
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 scale-100 ease-out">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50">
          <h3 className="text-xl font-bold text-gray-800">Advanced Filters</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white text-gray-600 transition-colors"
            aria-label="Close filters"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="max-h-[70vh] overflow-y-auto p-6 space-y-8">
          {/* Direction */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Direction
            </label>
            <div className="inline-flex rounded-xl bg-gray-100 p-1 gap-1 w-full justify-around">
              {["all", "buy", "sell"].map((d) => (
                <button
                  key={d}
                  onClick={() =>
                    setTempFilters((prev) => ({ ...prev, direction: d }))
                  }
                  className={`flex-1 px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                    tempFilters.direction === d
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {d === "all"
                    ? "All types"
                    : d.charAt(0).toUpperCase() + d.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Market tags */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Market
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                "nomo AI",
                "Commodities",
                "Crypto",
                "Forex",
                "Indices",
                "Stocks",
                "Synthetic indices",
              ].map((m) => (
                <button
                  key={m}
                  onClick={() => toggleMarket(m)}
                  className={`flex items-center justify-center gap-2 px-4 py-2 border-2 rounded-xl text-sm font-medium transition-colors ${
                    tempFilters.market.includes(m)
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-200 text-gray-700 hover:border-blue-400 hover:bg-blue-50"
                  }`}
                >
                  <span className="text-blue-500">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <circle cx="12" cy="12" r="8" />
                    </svg>
                  </span>
                  <span>{m}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Type */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-semibold text-gray-700">
                Type
              </label>
              <button
                onClick={() =>
                  setTempFilters((prev) => ({ ...prev, type: "all" }))
                }
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear Selection
              </button>
            </div>
            <div className="inline-flex gap-2 rounded-xl bg-gray-100 p-1 w-full justify-around">
              {["all", "my", "copied"].map((t) => (
                <button
                  key={t}
                  onClick={() =>
                    setTempFilters((prev) => ({ ...prev, type: t }))
                  }
                  className={`flex-1 px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                    tempFilters.type === t
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {t === "all"
                    ? "All"
                    : t === "my"
                    ? "My trades"
                    : "Copied"}
                </button>
              ))}
            </div>
          </div>

          {/* Leader input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Leader Username
            </label>
            <input
              value={tempFilters.leader}
              onChange={(e) =>
                setTempFilters((prev) => ({
                  ...prev,
                  leader: e.target.value,
                }))
              }
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-shadow"
              placeholder="Enter leader's username"
            />
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between gap-3 px-6 py-4 border-t border-gray-100 bg-gray-50">
          <button
            onClick={handleReset}
            className="px-5 py-2 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
          >
            Reset All
          </button>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-sm font-medium text-gray-600 border border-gray-300 hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleApply}
              className="px-5 py-2 rounded-xl text-sm font-semibold bg-blue-600 text-white shadow-md hover:bg-blue-700 transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------
// Main Portfolio Page
// ----------------------
export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("open");
  const [filterOpen, setFilterOpen] = useState(false);
  const navigate = useNavigate();

  const gotoOpenTrade = () => navigate('/trading/marketing')

  const [filters, setFilters] = useState({
    direction: "all",
    market: [],
    type: "all",
    leader: "",
  });

  const handleApplyFilters = () => {
    console.log("Filters applied:", filters);
    setFilterOpen(false);
  };

  const stats = [
    {
      icon: FaWallet,
      label: "Portfolio value",
      value: "0.00 $",
      color: "blue",
      highlight: true,
    },
    {
      icon: FaBalanceScale,
      label: "Net profit/loss",
      value: "0.00 $",
      color: "emerald",
    },
    {
      icon: FaCreditCard,
      label: "Available balance",
      value: "0.00 $",
      color: "indigo",
    },
    {
      icon: FaChartLine,
      label: "Total invested",
      value: "0.00 $",
      color: "purple",
    },
    {
      icon: FaPercent,
      label: "Margin level",
      value: "0.00%",
      color: "red",
    },
  ];

  return (
    <>
      <div className="bg-gray-50 min-h-screen px-4 py-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-extrabold text-gray-900">
              My Portfolio 📈
            </h1>
            <p className="text-gray-500 text-base mt-2">
              View and manage your <b>open and pending trades</b>. Check your
              closed trades in the trading history.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-white border-2 p-5 rounded-2xl shadow-lg transition-all hover:shadow-xl ${
                  stat.highlight
                    ? "border-blue-500/50 bg-blue-50"
                    : "border-gray-200"
                }`}
              >
                <div className="flex items-center gap-3 mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
                  <stat.icon className={`w-5 h-5 text-${stat.color}-600`} />
                  <span>{stat.label}</span>
                </div>
                <p className="text-2xl font-extrabold text-gray-900 mt-1">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Tabs + Search + Filters */}
          <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 mb-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Tabs */}
              <div className="flex gap-1 p-1 rounded-xl bg-gray-100 mb-4 md:mb-0">
                <button
                  onClick={() => setActiveTab("open")}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl transition-all ${
                    activeTab === "open"
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-600 hover:bg-white"
                  }`}
                >
                  <FaClock />
                  Open Trades
                </button>
                <button
                  onClick={() => setActiveTab("history")}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl transition-all ${
                    activeTab === "history"
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-600 hover:bg-white"
                  }`}
                >
                  <FaHistory />
                  History
                </button>
              </div>

              {/* Search + Filters */}
              <div className="flex gap-3 w-full md:w-auto">
                <div className="relative flex-grow">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search trades..."
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-shadow"
                  />
                </div>
                <button
                  onClick={() => setFilterOpen(true)}
                  className="flex-shrink-0 px-4 py-2.5 rounded-xl bg-gray-100 text-gray-700 text-sm font-semibold hover:bg-gray-200 flex items-center gap-2 border border-gray-300"
                >
                  <FaFilter className="text-blue-600 w-4 h-4" />
                  Filters
                </button>
              </div>
            </div>
          </div>

          {/* Empty Content */}
          <div className="bg-white border border-gray-200 rounded-2xl p-12 flex flex-col items-center justify-center text-center min-h-[400px] shadow-lg">
            {activeTab === "open" ? (
              <>
                <div className="text-gray-300 text-7xl mb-4">👻</div>
                <h3 className="font-extrabold text-gray-800 text-2xl">
                  You have no open trades
                </h3>
                <p className="text-gray-500 text-base mt-2 mb-6 max-w-sm">
                  All currently open trades will be displayed here.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-md px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/50 transition-all flex items-center gap-2" 
                onClick={gotoOpenTrade}>
                  <FaPlus />
                  Open New Trade
                </button>
              </>
            ) : (
              <>
                <div className="text-gray-300 text-7xl mb-4">📜</div>
                <h3 className="font-extrabold text-gray-800 text-2xl">
                  No trade history available
                </h3>
                <p className="text-gray-500 text-base mt-2">
                  Your closed trades and their results will appear here.
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Optional footer */}
      <InterestedSection />

      {/* Filter Modal */}
      <FilterModal
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        filters={filters}
        setFilters={setFilters}
        onApply={handleApplyFilters}
      />
    </>
  );
}
