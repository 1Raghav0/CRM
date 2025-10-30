// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   ResponsiveContainer,
//   Tooltip,
// } from "recharts";

// const data = [
//   { name: "Day 1", value: 400 },
//   { name: "Day 5", value: 800 },
//   { name: "Day 10", value: 1500 },
//   { name: "Day 15", value: 2500 },
//   { name: "Day 20", value: 3200 },
//   { name: "Day 25", value: 4200 },
//   { name: "Day 30", value: 5000 },
// ];

// const NatyProfileCard = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
//       {/* Header Section */}
//       <div className="w-full max-w-5xl bg-white shadow rounded-lg p-6">
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
//           {/* Profile Info */}
//           <div className="flex items-center space-x-4">
//             <div className="relative w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-xl">
//               N
//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/197/197564.png"
//                 alt="Flag"
//                 className="absolute bottom-0 right-0 w-4 h-4 rounded-full border"
//               />
//             </div>
//             <div>
//               <h1 className="text-2xl font-bold text-gray-800">Naty</h1>
//               <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">
//                 Starter
//               </span>
//             </div>
//           </div>

//           {/* Copy Button */}
//           <button className="mt-4 sm:mt-0 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
//             Copy
//           </button>
//         </div>

//         {/* Stats Section */}
//         <div className="mt-6">
//           <h2 className="text-gray-800 font-semibold text-lg mb-3">
//             Key stats (all-time)
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
//             <div className="bg-green-50 p-4 rounded">
//               <p className="text-sm text-gray-600">Profit for copiers</p>
//               <p className="text-2xl font-bold text-green-600">$10,967.56</p>
//             </div>
//             <div className="bg-gray-50 p-4 rounded">
//               <p className="text-sm text-gray-600">Profit sharing fee</p>
//               <p className="text-2xl font-bold text-gray-800">30%</p>
//             </div>
//             <div className="bg-gray-50 p-4 rounded">
//               <p className="text-sm text-gray-600">Win rate</p>
//               <p className="text-2xl font-bold text-green-600">82.09%</p>
//             </div>
//             <div className="bg-gray-50 p-4 rounded">
//               <p className="text-sm text-gray-600">Copiers</p>
//               <p className="text-2xl font-bold text-gray-800">
//                 32<span className="text-gray-400">/115</span>
//               </p>
//             </div>
//           </div>

//           {/* Balance & Risk */}
//           <div className="flex flex-wrap justify-center sm:justify-end gap-4 mt-4 text-sm">
//             <p>
//               <span className="text-gray-600">Balance:</span>{" "}
//               <span className="text-blue-600 font-semibold">899 $</span>
//             </p>
//             <p>
//               <span className="text-gray-600">Risk score:</span>{" "}
//               <span className="text-orange-500 font-semibold">8 📊</span>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* About Me Section */}
//       <div className="w-full max-w-5xl bg-white shadow rounded-lg p-6 mt-6">
//         <h3 className="text-lg font-semibold text-gray-800 mb-3">About me</h3>
//         <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
//           Soy conservadora, priorizo la seguridad y la preservación del capital.
//           Mi objetivo no es obtener beneficios inmediatos y altos, sino mantener
//           un crecimiento constante, controlado y sostenible en el tiempo.
//         </p>
//         <p className="text-gray-700 leading-relaxed text-sm sm:text-base mt-3">
//           Ideal para carteras con fondos mayor a USD$ 1,000.00
//         </p>
//       </div>

//       {/* Profit/Loss and Trading Activity Section */}
//       <div className="w-full max-w-5xl bg-white shadow rounded-lg p-6 mt-6">
//         {/* Profit/Loss Chart */}
//         <div className="mb-8">
//           <h3 className="text-gray-800 font-semibold text-lg mb-2">
//             Realized profit/loss chart
//           </h3>
//           <p className="text-3xl font-bold text-red-500 mb-4">-750.42 $</p>

//           {/* Recharts Line Chart */}
//           <div className="w-full h-64">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={data}>
//                 <XAxis dataKey="name" stroke="#8884d8" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line
//                   type="monotone"
//                   dataKey="value"
//                   stroke="#2563eb"
//                   strokeWidth={2}
//                   dot={false}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Time Filter */}
//           <div className="flex justify-center space-x-3 mt-3 text-sm font-medium">
//             <button className="px-3 py-1 rounded hover:bg-blue-100">1W</button>
//             <button className="px-3 py-1 rounded hover:bg-blue-100">MTD</button>
//             <button className="px-3 py-1 rounded bg-blue-600 text-white">
//               1M
//             </button>
//             <button className="px-3 py-1 rounded hover:bg-blue-100">YTD</button>
//             <button className="px-3 py-1 rounded hover:bg-blue-100">1Y</button>
//           </div>
//         </div>

//         {/* Trading Activity */}
//         <div>
//           <h3 className="text-gray-800 font-semibold text-lg mb-3">
//             Trading activity
//           </h3>

//           {/* Tabs */}
//           <div className="flex space-x-4 mb-4">
//             <button className="bg-blue-600 text-white px-4 py-2 rounded">
//               Open trades
//             </button>
//             <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200">
//               Closed trades
//             </button>
//           </div>

//           {/* Empty State */}
//           <div className="flex flex-col items-center justify-center py-10 text-gray-500">
//             <div className="text-4xl mb-2">👻</div>
//             <p className="font-semibold">Naty doesn’t have any open trades</p>
//             <p className="text-sm">
//               Once Naty opens new trades, they will appear here
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NatyProfileCard;


import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Day 1", value: 400 },
  { name: "Day 5", value: 800 },
  { name: "Day 10", value: 1500 },
  { name: "Day 15", value: 2500 },
  { name: "Day 20", value: 3200 },
  { name: "Day 25", value: 4200 },
  { name: "Day 30", value: 5000 },
];

// Closed trades data
const closedTrades = [
  { type: "Buy", asset: "Silver / US Dollar (spot)", invested: "24.34 $", leverage: "x100", profitLoss: "+3.40 $", profitPositive: true, time: "3 hours ago" },
  { type: "Buy", asset: "Gold / US Dollar (spot)", invested: "40.09 $", leverage: "x100", profitLoss: "+2.08 $", profitPositive: true, time: "3 hours ago" },
  { type: "Buy", asset: "Gold / US Dollar (spot)", invested: "40.04 $", leverage: "x100", profitLoss: "+5.65 $", profitPositive: true, time: "3 hours ago" },
  { type: "Buy", asset: "Silver / US Dollar (spot)", invested: "24.21 $", leverage: "x100", profitLoss: "+5.95 $", profitPositive: true, time: "3 hours ago" },
  { type: "Buy", asset: "Gold / US Dollar (spot)", invested: "39.94 $", leverage: "x100", profitLoss: "+10.32 $", profitPositive: true, time: "4 hours ago" },
  { type: "Buy", asset: "Gold / US Dollar (spot)", invested: "39.84 $", leverage: "x100", profitLoss: "+2.07 $", profitPositive: true, time: "5 hours ago" },
  { type: "Buy", asset: "Silver / US Dollar (spot)", invested: "24.10 $", leverage: "x100", profitLoss: "+4.45 $", profitPositive: true, time: "5 hours ago" },
  { type: "Buy", asset: "Silver / US Dollar (spot)", invested: "24.03 $", leverage: "x100", profitLoss: "+10.40 $", profitPositive: true, time: "7 hours ago" },
  { type: "Sell", asset: "Silver / US Dollar (spot)", invested: "23.82 $", leverage: "x100", profitLoss: "-13.90 $", profitPositive: false, time: "23 hours ago" },
  { type: "Buy", asset: "Silver / US Dollar (spot)", invested: "23.68 $", leverage: "x100", profitLoss: "-6.85 $", profitPositive: false, time: "23 hours ago" },
  { type: "Buy", asset: "Silver / US Dollar (spot)", invested: "23.73 $", leverage: "x100", profitLoss: "+7.40 $", profitPositive: true, time: "23 hours ago" },
  { type: "Buy", asset: "Silver / US Dollar (spot)", invested: "23.64 $", leverage: "x100", profitLoss: "-8.30 $", profitPositive: false, time: "23 hours ago" },
  { type: "Buy", asset: "Gold / US Dollar (spot)", invested: "40.28 $", leverage: "x100", profitLoss: "+9.31 $", profitPositive: true, time: "1 day ago" },
  { type: "Buy", asset: "Silver / US Dollar (spot)", invested: "23.90 $", leverage: "x100", profitLoss: "+10.15 $", profitPositive: true, time: "1 day ago" },
  { type: "Buy", asset: "Silver / US Dollar (spot)", invested: "23.76 $", leverage: "x100", profitLoss: "+5.15 $", profitPositive: true, time: "2 days ago" },
  { type: "Buy", asset: "Silver / US Dollar (spot)", invested: "23.68 $", leverage: "x100", profitLoss: "+6.40 $", profitPositive: true, time: "2 days ago" },
];

const NatyProfileCard = () => {
  const [activeTab, setActiveTab] = useState("open");
  const [filterType, setFilterType] = useState("All");
  const [filterProfit, setFilterProfit] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTrades = closedTrades.filter((trade) => {
    const matchesType = filterType === "All" || trade.type === filterType;
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
      {/* Header Section */}
      <div className="w-full max-w-5xl bg-white shadow rounded-lg p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-xl">
              N
              <img
                src="https://cdn-icons-png.flaticon.com/512/197/197564.png"
                alt="Flag"
                className="absolute bottom-0 right-0 w-4 h-4 rounded-full border"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Naty</h1>
              <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">
                Starter
              </span>
            </div>
          </div>

          <button className="mt-4 sm:mt-0 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Copy
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-6">
          <h2 className="text-gray-800 font-semibold text-lg mb-3">
            Key stats (all-time)
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="bg-green-50 p-4 rounded">
              <p className="text-sm text-gray-600">Profit for copiers</p>
              <p className="text-2xl font-bold text-green-600">$10,967.56</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="text-sm text-gray-600">Profit sharing fee</p>
              <p className="text-2xl font-bold text-gray-800">30%</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="text-sm text-gray-600">Win rate</p>
              <p className="text-2xl font-bold text-green-600">82.09%</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="text-sm text-gray-600">Copiers</p>
              <p className="text-2xl font-bold text-gray-800">
                32<span className="text-gray-400">/115</span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-end gap-4 mt-4 text-sm">
            <p>
              <span className="text-gray-600">Balance:</span>{" "}
              <span className="text-blue-600 font-semibold">899 $</span>
            </p>
            <p>
              <span className="text-gray-600">Risk score:</span>{" "}
              <span className="text-orange-500 font-semibold">8 📊</span>
            </p>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="w-full max-w-5xl bg-white shadow rounded-lg p-6 mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">About me</h3>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          Soy conservadora, priorizo la seguridad y la preservación del capital.
          Mi objetivo no es obtener beneficios inmediatos y altos, sino mantener
          un crecimiento constante, controlado y sostenible en el tiempo.
        </p>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base mt-3">
          Ideal para carteras con fondos mayor a USD$ 1,000.00
        </p>
      </div>

      {/* Profit/Loss and Trading Activity Section */}
      <div className="w-full max-w-5xl bg-white shadow rounded-lg p-6 mt-6">
        {/* Profit/Loss Chart */}
        <div className="mb-8">
          <h3 className="text-gray-800 font-semibold text-lg mb-2">
            Realized profit/loss chart
          </h3>
          <p className="text-3xl font-bold text-red-500 mb-4">-750.42 $</p>

          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis />
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

          <div className="flex justify-center space-x-3 mt-3 text-sm font-medium">
            <button className="px-3 py-1 rounded hover:bg-blue-100">1W</button>
            <button className="px-3 py-1 rounded hover:bg-blue-100">MTD</button>
            <button className="px-3 py-1 rounded bg-blue-600 text-white">
              1M
            </button>
            <button className="px-3 py-1 rounded hover:bg-blue-100">YTD</button>
            <button className="px-3 py-1 rounded hover:bg-blue-100">1Y</button>
          </div>
        </div>

        {/* Trading Activity */}
        <div>
          <h3 className="text-gray-800 font-semibold text-lg mb-3">
            Trading activity
          </h3>

          {/* Tabs */}
          <div className="flex space-x-4 mb-4">
            <button
              onClick={() => setActiveTab("open")}
              className={`px-4 py-2 rounded ${
                activeTab === "open"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Open trades
            </button>
            <button
              onClick={() => setActiveTab("closed")}
              className={`px-4 py-2 rounded ${
                activeTab === "closed"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Closed trades
            </button>
          </div>

          {/* Open Trades (Default empty state) */}
          {activeTab === "open" && (
            <div className="flex flex-col items-center justify-center py-10 text-gray-500">
              <div className="text-4xl mb-2">👻</div>
              <p className="font-semibold">Naty doesn’t have any open trades</p>
              <p className="text-sm">
                Once Naty opens new trades, they will appear here
              </p>
            </div>
          )}

          {/* Closed Trades (With filters + table) */}
          {activeTab === "closed" && (
            <div>
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
                        <td colSpan="6" className="text-center py-6 text-gray-500">
                          No trades match your filters.
                        </td>
                      </tr>
                    ) : (
                      filteredTrades.map((trade, i) => (
                        <tr key={i} className="border-t text-gray-700 hover:bg-gray-50">
                          <td className="px-4 py-3">
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-medium ${
                                trade.type === "Buy"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-red-100 text-red-700"
                              }`}
                            >
                              {trade.type}
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
          )}
        </div>
      </div>
    </div>
  );
};

export default NatyProfileCard;
