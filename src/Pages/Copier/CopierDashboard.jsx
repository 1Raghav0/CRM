import React from "react";

const CopierDashboard = () => {
  return (
    <>
    <div className="bg-gray-50 p-4 sm:p-6 lg:p-10">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Copier dashboard</h1>
          <p className="text-gray-500 mt-1">
            See the overview of your copy-trading activities and manage the traders you copy
          </p>
        </div>
        <button className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-md">
          Discover other traders
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {/* Floating profit/loss */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-5 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-700">Floating profit/loss</p>
            <p className="text-2xl font-bold text-green-600">0.00</p>
          </div>
          <div className="bg-green-500 text-white w-10 h-10 flex items-center justify-center rounded-full">
            ↑
          </div>
        </div>

        {/* Realized profit/loss */}
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <p className="text-sm font-medium text-gray-700">Realized profit/loss</p>
          <p className="text-2xl font-bold text-gray-900">0.00</p>
        </div>

        {/* Traders copying */}
        <div className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col justify-between">
          <div>
            <p className="text-sm font-medium text-gray-700">Traders copying</p>
            <p className="text-2xl font-bold text-orange-500">0/0</p>
          </div>
          <button className="mt-2 text-blue-600 text-sm font-medium hover:underline">
            ⚡ Level up to increase
          </button>
        </div>

        {/* Trades copied */}
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <p className="text-sm font-medium text-gray-700">Trades copied</p>
          <p className="text-2xl font-bold text-gray-900">0</p>
        </div>
      </div>

      {/* Graph + Activity feed */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Realized profit/loss chart placeholder */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Realized profit/loss</h2>
          <div className="h-48 flex items-center justify-center text-gray-400 border-t pt-4">
            $0 (Chart placeholder)
          </div>
          {/* Time range selector */}
          <div className="flex justify-center gap-3 mt-6">
            {["1W", "MTD", "1M", "YTD", "1Y"].map((item) => (
              <button
                key={item}
                className={`px-3 py-1 text-sm rounded-md ${
                  item === "1M"
                    ? "bg-blue-100 text-blue-600 font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Activity feed */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col justify-between">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Activity feed</h2>
          <div className="flex-grow flex items-center justify-center text-gray-400 border-t pt-4">
            No activity yet
          </div>
          <button className="mt-6 bg-gray-100 text-gray-700 font-medium py-2 rounded-md hover:bg-gray-200">
            View all
          </button>
        </div>
      </div>
    </div>
    <div className="bg-gray-50 p-4 sm:p-6 lg:p-10">
      {/* Traders Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Traders</h2>

        {/* Empty state */}
        <div className="flex flex-col items-center justify-center text-center py-12">
          {/* Icon placeholder */}
          <div className="text-4xl text-gray-300 mb-4">👻</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            You're not copying any leaders
          </h3>
          <p className="text-gray-500 mb-5 max-w-md">
            Start copying a leader to see the copy-trading statistics here
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-md">
            + Explore leaderboard
          </button>
        </div>
      </div>

      {/* Find leaders with AI Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 mb-4 sm:mb-0">
          <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-lg">
            ⚡
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Find leaders with AI</h3>
            <p className="text-gray-500 text-sm">
              Use nomo AI to match with the most suitable leaders
            </p>
          </div>
        </div>

        <button className="bg-blue-100 hover:bg-blue-200 text-blue-600 font-medium px-4 py-2 rounded-md w-full sm:w-auto">
          Start now
        </button>
      </div>
    </div>
    </>
    
  );
};

export default CopierDashboard;
