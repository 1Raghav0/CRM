import React, { useState } from "react";

const TransactionHistory = () => {
  const [activeTab, setActiveTab] = useState("All");

  // Example data (can be fetched dynamically)
  const transactions = {
    All: [],
    Deposits: [],
    Withdrawals: [],
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    const currentData = transactions[activeTab];

    if (currentData.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center text-center py-12">
          <div className="text-5xl mb-3">👻</div>
          <h3 className="text-lg font-semibold mb-1">You have no transactions</h3>
          <p className="text-sm text-gray-500 mb-4">
            All your deposits and withdrawals will be displayed here
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
            + Make a deposit
          </button>
        </div>
      );
    }

    return (
      <div className="divide-y divide-gray-100">
        {currentData.map((tx, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-3 px-2 hover:bg-gray-50 transition"
          >
            <div>
              <p className="font-medium text-gray-700">{tx.title}</p>
              <p className="text-xs text-gray-500">{tx.date}</p>
            </div>
            <p
              className={`font-semibold ${
                tx.type === "Deposit"
                  ? "text-green-600"
                  : tx.type === "Withdrawal"
                  ? "text-red-600"
                  : "text-gray-600"
              }`}
            >
              {tx.amount}
            </p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <h2 className="text-lg font-semibold mb-3 md:mb-0">Transactions history</h2>

        {/* Filter Tabs */}
        <div className="flex space-x-2 bg-gray-100 p-1 rounded-md w-fit">
          {["All", "Deposits", "Withdrawals"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`px-3 py-1 text-sm font-medium rounded-md transition ${
                activeTab === tab
                  ? "bg-white shadow-sm text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="border border-gray-100 rounded-lg">
        {renderContent()}
      </div>
    </div>
  );
};

export default TransactionHistory;
