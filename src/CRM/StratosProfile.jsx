import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { name: "05/01", value: 200 },
  { name: "05/05", value: 500 },
  { name: "05/10", value: 1050 },
  { name: "05/15", value: 1477 },
  { name: "05/20", value: 1000 },
  { name: "05/25", value: 900 },
  { name: "05/30", value: 388 },
];

const tradesData = [
  { type: "Buy", asset: "Gold / US Dollar (spot)", invested: "39.97 $", leverage: "x100", profitLoss: "+1.44 $", profitPositive: true, time: "12 minutes ago" },
  { type: "Buy", asset: "Gold / US Dollar (spot)", invested: "40.03 $", leverage: "x100", profitLoss: "+2.18 $", profitPositive: true, time: "25 minutes ago" },
  { type: "Buy", asset: "Gold / US Dollar (spot)", invested: "40.03 $", leverage: "x100", profitLoss: "+0.89 $", profitPositive: true, time: "25 minutes ago" },
  { type: "Buy", asset: "Gold / US Dollar (spot)", invested: "39.97 $", leverage: "x100", profitLoss: "+1.67 $", profitPositive: true, time: "57 minutes ago" },
  { type: "Buy", asset: "Gold / US Dollar (spot)", invested: "39.96 $", leverage: "x100", profitLoss: "+1.53 $", profitPositive: true, time: "1 hour ago" },
  { type: "Sell", asset: "Gold / US Dollar (spot)", invested: "39.95 $", leverage: "x100", profitLoss: "+1.59 $", profitPositive: true, time: "1 hour ago" },
  { type: "Sell", asset: "Gold / US Dollar (spot)", invested: "40.00 $", leverage: "x100", profitLoss: "+4.52 $", profitPositive: true, time: "1 hour ago" },
  { type: "Sell", asset: "Gold / US Dollar (spot)", invested: "40.00 $", leverage: "x100", profitLoss: "-1.43 $", profitPositive: false, time: "1 hour ago" },
  { type: "Sell", asset: "Gold / US Dollar (spot)", invested: "39.98 $", leverage: "x100", profitLoss: "+1.60 $", profitPositive: true, time: "2 hours ago" },
  { type: "Sell", asset: "Gold / US Dollar (spot)", invested: "39.94 $", leverage: "x100", profitLoss: "+1.53 $", profitPositive: true, time: "2 hours ago" },
  { type: "Sell", asset: "Gold / US Dollar (spot)", invested: "39.91 $", leverage: "x100", profitLoss: "+1.71 $", profitPositive: true, time: "3 hours ago" },
  { type: "Sell", asset: "Gold / US Dollar (spot)", invested: "39.97 $", leverage: "x100", profitLoss: "+1.77 $", profitPositive: true, time: "3 hours ago" },
  { type: "Sell", asset: "Gold / US Dollar (spot)", invested: "79.92 $", leverage: "x100", profitLoss: "+29.30 $", profitPositive: true, time: "3 hours ago" },
  { type: "Sell", asset: "Gold / US Dollar (spot)", invested: "39.96 $", leverage: "x100", profitLoss: "-1.14 $", profitPositive: false, time: "3 hours ago" },
];

const StratosProfile = () => {
  const [filterType, setFilterType] = useState("All");
  const [filterProfit, setFilterProfit] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTrades = tradesData.filter((trade) => {
    const matchesType =
      filterType === "All" || trade.type === filterType;
    const matchesProfit =
      filterProfit === "All" ||
      (filterProfit === "Profitable" && trade.profitPositive) ||
      (filterProfit === "Losing" && !trade.profitPositive);
    const matchesSearch = trade.asset
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesType && matchesProfit && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      {/* Profile Header */}
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-sm p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
            <img
              src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
              alt="Avatar"
              className="w-16 h-16 object-cover"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/197/197593.png"
              alt="Flag"
              className="absolute bottom-0 right-0 w-5 h-5 rounded-full border border-white"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center flex-wrap gap-2">
              StratosGoldwind
              <span className="text-yellow-600 text-sm font-semibold bg-yellow-100 px-2 py-0.5 rounded">
                🪙 Gold
              </span>
              <span className="text-green-700 text-sm font-semibold bg-green-100 px-2 py-0.5 rounded">
                Profit-generator
              </span>
            </h1>
          </div>
        </div>

        <button className="mt-4 sm:mt-0 bg-blue-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Copy
        </button>
      </div>

      {/* Stats Section */}
      <div className="w-full max-w-6xl bg-white mt-6 rounded-xl shadow-sm p-6">
        <div className="flex flex-wrap justify-between items-start gap-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Key stats (all-time)
          </h2>

          <div className="flex items-center gap-3 text-sm">
            <span className="text-gray-600 font-medium">
              Balance{" "}
              <span className="text-blue-600 font-semibold">2,290 $</span>
            </span>
            <span className="text-gray-600 font-medium">
              Risk score{" "}
              <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded font-semibold">
                7 📊
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-4 text-center">
          <div className="bg-green-50 p-4 rounded">
            <p className="text-sm text-gray-600">Profit for copiers</p>
            <p className="text-2xl font-bold text-green-600">45,574.15 $</p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-sm text-gray-600">Profit sharing fee</p>
            <p className="text-2xl font-bold text-gray-800">20%</p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-sm text-gray-600">Win rate</p>
            <p className="text-2xl font-bold text-green-600">73.11%</p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-sm text-gray-600">Copiers</p>
            <p className="text-2xl font-bold text-gray-800">
              <span className="underline text-blue-600">64</span>
              <span className="text-gray-400">/277</span>
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-sm text-gray-600">Trades</p>
            <p className="text-2xl font-bold text-gray-800">9,207</p>
          </div>
        </div>
      </div>

      {/* Profit/Loss Chart */}
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-sm p-6 mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Realized profit/loss chart
        </h3>
        <p className="text-3xl font-bold text-gray-900 mb-4">388.57 $</p>

        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#2563eb"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Trading Activity with Filters */}
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-sm p-6 mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Trading activity (Closed trades)
        </h3>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <select
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="All">All types</option>
            <option value="Buy">Buy</option>
            <option value="Sell">Sell</option>
          </select>

          <select
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
            value={filterProfit}
            onChange={(e) => setFilterProfit(e.target.value)}
          >
            <option value="All">All results</option>
            <option value="Profitable">Profitable</option>
            <option value="Losing">Losing</option>
          </select>

          <input
            type="text"
            placeholder="Search asset..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm flex-1 min-w-[200px]"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto border rounded-lg">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-500 text-sm">
              <tr>
                <th className="px-4 py-3">TYPE</th>
                <th className="px-4 py-3">ASSET</th>
                <th className="px-4 py-3">INVESTED</th>
                <th className="px-4 py-3">LEVERAGE</th>
                <th className="px-4 py-3">PROFIT/LOSS</th>
                <th className="px-4 py-3">CLOSE TIME</th>
              </tr>
            </thead>
            <tbody>
              {filteredTrades.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center text-gray-500 py-6"
                  >
                    No trades match your filters.
                  </td>
                </tr>
              ) : (
                filteredTrades.map((trade, index) => (
                  <tr
                    key={index}
                    className="border-t text-gray-700 hover:bg-gray-50"
                  >
                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          trade.type === "Buy"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {trade.type === "Buy" ? "Buy ↗" : "Sell ↘"}
                      </span>
                    </td>
                    <td className="px-4 py-3">{trade.asset}</td>
                    <td className="px-4 py-3">{trade.invested}</td>
                    <td className="px-4 py-3">{trade.leverage}</td>
                    <td
                      className={`px-4 py-3 font-semibold ${
                        trade.profitPositive
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {trade.profitLoss}
                    </td>
                    <td className="px-4 py-3 text-gray-500">{trade.time}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StratosProfile;
