import React from "react";
import TransactionHistory from "./TransactionHistory";

const MoneyDashboard = () => {
  return (
    <>
    <div className="bg-gray-50 px-4 md:px-10 py-6 text-gray-800">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Money</h1>
        <p className="text-gray-500 text-sm">
          Check your balance, see your deposits and withdrawals, and manage your saved payment methods.
        </p>
      </div>

      {/* Net Deposit Progress */}
      <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col md:flex-row items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-md text-sm font-medium">
            Starter
          </div>
          <span className="text-gray-400 text-sm">→</span>
          <div className="px-2 py-1 bg-amber-100 text-amber-700 rounded-md text-sm font-medium">
            Bronze
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-3 md:mt-0">
          <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="absolute left-0 top-0 h-full bg-indigo-500 w-1/3"></div>
          </div>
          <p className="text-sm text-gray-500 mt-1">Deposit 250.00 to reach bronze level</p>
        </div>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <p className="text-gray-500 text-sm">Current balance</p>
              <h2 className="text-3xl font-bold text-gray-900">$0.00</h2>
            </div>
            <div className="flex space-x-3 mt-3 md:mt-0">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                + Deposit
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-medium">
                Withdraw
              </button>
            </div>
          </div>

          {/* Status Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
              Pending 0
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
              Credit 0
            </span>
            <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-medium">
              On hold 0
            </span>
          </div>

          {/* Bonus Banner */}
          <div className="bg-blue-50 border border-blue-100 rounded-md p-3 flex flex-col md:flex-row md:items-center md:justify-between text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-blue-600 font-semibold">💸 Deposit today to get a 50% bonus</span>
            </div>
            <a href="#" className="text-blue-600 font-medium mt-2 md:mt-0 hover:underline">
              Learn more →
            </a>
          </div>

          {/* Timeline Filter */}
          <div className="flex justify-center md:justify-start space-x-3 mt-6">
            {["1W", "MTD", "1M", "YTD", "1Y"].map((label, idx) => (
              <button
                key={idx}
                className={`px-3 py-1 text-sm font-medium rounded-md ${
                  label === "1M"
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center">
          <div className="text-5xl mb-3">👻</div>
          <h3 className="text-lg font-semibold mb-2">You have no payment methods</h3>
          <p className="text-sm text-gray-500 mb-4">
            Your saved payment methods will appear here
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
            + Deposit
          </button>
        </div>
      </div>
    </div>


    <div className="px-4 md:px-24 lg:px-36">
        <TransactionHistory />
    </div>
    
    </>
  );
};

export default MoneyDashboard;
