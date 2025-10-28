import React from "react";

const LeaderHubDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        <span className="cursor-pointer hover:text-gray-700">Copy-trading</span> /{" "}
        <span className="font-medium text-gray-700">Leader's hub</span>
      </div>

      {/* Title & Subtitle */}
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Leader's hub</h1>
      <p className="text-gray-500 mb-6">
        View and manage your copy-trading leader profile and fee settings
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 border-b border-gray-200 mb-6">
        {["Dashboard", "Public profile", "Settings"].map((tab, idx) => (
          <button
            key={idx}
            className={`pb-2 text-sm font-medium ${
              tab === "Dashboard"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Copy-fees balance */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-gray-600 mb-4 font-medium">Copy-fees balance</h2>
          <div className="flex items-center justify-between mb-6">
            <p className="text-4xl font-bold text-gray-900">0.00</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
              Withdraw
            </button>
          </div>

          <h3 className="text-gray-600 font-medium mb-3">
            Copy-trading fee settings
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="text-gray-600 mb-1">Profit sharing</p>
              <p className="text-2xl font-bold text-gray-900">0%</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="text-gray-600 mb-1">Platform fee</p>
              <p className="text-2xl font-bold text-gray-900">0%</p>
            </div>
          </div>
        </div>

        {/* Right: Total fees earned */}
        <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-gray-600 mb-4 font-medium">
              Total copy-trading fees earned
            </h2>
            <p className="text-4xl font-bold text-gray-900">0.00</p>
          </div>
          <div className="w-full h-1 bg-gray-100 mt-6">
            <div className="w-0 h-1 bg-blue-600"></div>
          </div>
          <p className="text-right text-gray-500 text-sm mt-2">$0</p>
        </div>
      </div>
    </div>
  );
};

export default LeaderHubDashboard;
