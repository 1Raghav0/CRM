// import React, { useState } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
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

// const closedTrades = [
//   {
//     type: "Buy",
//     asset: "Gold / US Dollar (spot)",
//     invested: "200.61 $",
//     leverage: "x100",
//     profitLoss: "+25.55 $",
//     profitPositive: true,
//     time: "3 hours ago",
//   },
//   {
//     type: "Buy",
//     asset: "Gold / US Dollar (spot)",
//     invested: "199.56 $",
//     leverage: "x100",
//     profitLoss: "+22.10 $",
//     profitPositive: true,
//     time: "3 hours ago",
//   },
//   {
//     type: "Sell",
//     asset: "Gold / US Dollar (spot)",
//     invested: "196.03 $",
//     leverage: "x100",
//     profitLoss: "-20.70 $",
//     profitPositive: false,
//     time: "14 hours ago",
//   },
//   {
//     type: "Sell",
//     asset: "Gold / US Dollar (spot)",
//     invested: "196.13 $",
//     leverage: "x100",
//     profitLoss: "-5.50 $",
//     profitPositive: false,
//     time: "19 hours ago",
//   },
//   {
//     type: "Sell",
//     asset: "Gold / US Dollar (spot)",
//     invested: "197.35 $",
//     leverage: "x100",
//     profitLoss: "-27.90 $",
//     profitPositive: false,
//     time: "22 hours ago",
//   },
//   {
//     type: "Sell",
//     asset: "Gold / US Dollar (spot)",
//     invested: "197.62 $",
//     leverage: "x100",
//     profitLoss: "+16.05 $",
//     profitPositive: true,
//     time: "23 hours ago",
//   },
//   {
//     type: "Sell",
//     asset: "Gold / US Dollar (spot)",
//     invested: "198.37 $",
//     leverage: "x100",
//     profitLoss: "+33.75 $",
//     profitPositive: true,
//     time: "23 hours ago",
//   },
//   {
//     type: "Sell",
//     asset: "Gold / US Dollar (spot)",
//     invested: "199.70 $",
//     leverage: "x100",
//     profitLoss: "-22.20 $",
//     profitPositive: false,
//     time: "1 day ago",
//   },
// ];

// const ScalpingCard = () => {
//   const [activeTab, setActiveTab] = useState("open");

//   return (
//     <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//       {/* ---------- Header Section ---------- */}
//       <div className="flex items-center space-x-4">
//         <img
//           src="https://via.placeholder.com/50"
//           alt="Profile"
//           className="w-12 h-12 rounded-full"
//         />
//         <div>
//           <h2 className="text-2xl font-semibold text-gray-800">ScalpingXAU</h2>
//           <div className="flex space-x-2 text-sm text-gray-500 mt-1">
//             <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
//               Silver
//             </span>
//             <span className="bg-green-500 text-white px-2 py-1 rounded-full">
//               Veteran
//             </span>
//             <span className="bg-blue-500 text-white px-2 py-1 rounded-full">
//               Day-trader
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* ---------- Stats Section ---------- */}
//       <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
//         <div className="text-center">
//           <p className="text-sm text-gray-500">Profit for copiers</p>
//           <p className="text-2xl font-semibold text-green-600">$36,131.77</p>
//         </div>
//         <div className="text-center">
//           <p className="text-sm text-gray-500">Profit sharing fee</p>
//           <p className="text-2xl font-semibold text-gray-800">30%</p>
//         </div>
//         <div className="text-center">
//           <p className="text-sm text-gray-500">Win rate</p>
//           <p className="text-2xl font-semibold text-green-600">55.34%</p>
//         </div>
//         <div className="text-center">
//           <p className="text-sm text-gray-500">Copiers</p>
//           <p className="text-2xl font-semibold text-gray-800">64/169</p>
//         </div>
//       </div>

//       {/* ---------- Chart Section ---------- */}
//       <div className="mt-10">
//         <h3 className="text-gray-600 font-semibold mb-2">
//           Realized profit/loss chart
//         </h3>
//         <p className="text-3xl font-bold text-gray-900 mb-4">86.92 $</p>

//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={data}>
//             <Line
//               type="monotone"
//               dataKey="value"
//               stroke="#2563eb"
//               strokeWidth={3}
//             />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//           </LineChart>
//         </ResponsiveContainer>

//         <div className="flex justify-center gap-2 mt-4">
//           {["1W", "MTD", "1M", "YTD", "1Y"].map((label) => (
//             <button
//               key={label}
//               className={`px-4 py-2 text-sm rounded-md ${
//                 label === "1M"
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-100 hover:bg-gray-200"
//               }`}
//             >
//               {label}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* ---------- Trading Activity Section ---------- */}
//       <div className="mt-10">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-gray-600 font-semibold text-lg">
//             Trading activity
//           </h3>
//           <div className="flex bg-gray-100 rounded-md p-1">
//             <button
//               onClick={() => setActiveTab("open")}
//               className={`px-4 py-2 text-sm rounded-md ${
//                 activeTab === "open"
//                   ? "bg-white shadow font-semibold"
//                   : "text-gray-500"
//               }`}
//             >
//               Open trades
//             </button>
//             <button
//               onClick={() => setActiveTab("closed")}
//               className={`px-4 py-2 text-sm rounded-md ${
//                 activeTab === "closed"
//                   ? "bg-white shadow font-semibold"
//                   : "text-gray-500"
//               }`}
//             >
//               Closed trades
//             </button>
//           </div>
//         </div>

//         {/* ---------- Open Trades ---------- */}
//         {activeTab === "open" && (
//           <div className="text-center py-10 text-gray-500 border rounded-lg">
//             <p className="text-lg font-semibold">
//               ScalpingXAU doesn't have any open trades
//             </p>
//             <p className="text-sm mt-1">
//               Once ScalpingXAU opens new trades, they will appear here.
//             </p>
//           </div>
//         )}

//         {/* ---------- Closed Trades Table ---------- */}
//         {activeTab === "closed" && (
//           <div className="overflow-x-auto border rounded-lg">
//             <table className="w-full text-left">
//               <thead className="bg-gray-50 text-gray-500 text-sm">
//                 <tr>
//                   <th className="px-4 py-3">TYPE</th>
//                   <th className="px-4 py-3">ASSET</th>
//                   <th className="px-4 py-3">INVESTED</th>
//                   <th className="px-4 py-3">LEVERAGE</th>
//                   <th className="px-4 py-3">PROFIT/LOSS</th>
//                   <th className="px-4 py-3">CLOSE TIME</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {closedTrades.map((trade, index) => (
//                   <tr
//                     key={index}
//                     className="border-t text-gray-700 hover:bg-gray-50"
//                   >
//                     <td className="px-4 py-3">
//                       <span
//                         className={`px-3 py-1 rounded-full text-sm font-medium ${
//                           trade.type === "Buy"
//                             ? "bg-green-100 text-green-700"
//                             : "bg-red-100 text-red-700"
//                         }`}
//                       >
//                         {trade.type === "Buy" ? "Buy ↗" : "Sell ↘"}
//                       </span>
//                     </td>
//                     <td className="px-4 py-3">{trade.asset}</td>
//                     <td className="px-4 py-3">{trade.invested}</td>
//                     <td className="px-4 py-3">{trade.leverage}</td>
//                     <td
//                       className={`px-4 py-3 font-semibold ${
//                         trade.profitPositive
//                           ? "text-green-600"
//                           : "text-red-600"
//                       }`}
//                     >
//                       {trade.profitLoss}
//                     </td>
//                     <td className="px-4 py-3 text-gray-500">{trade.time}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ScalpingCard;



import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
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

const closedTrades = [
  {
    type: "Buy",
    asset: "Gold / US Dollar (spot)",
    invested: "200.61 $",
    leverage: "x100",
    profitLoss: "+25.55 $",
    profitPositive: true,
    time: "3 hours ago",
  },
  {
    type: "Buy",
    asset: "Gold / US Dollar (spot)",
    invested: "199.56 $",
    leverage: "x100",
    profitLoss: "+22.10 $",
    profitPositive: true,
    time: "3 hours ago",
  },
  {
    type: "Sell",
    asset: "Gold / US Dollar (spot)",
    invested: "196.03 $",
    leverage: "x100",
    profitLoss: "-20.70 $",
    profitPositive: false,
    time: "14 hours ago",
  },
  {
    type: "Sell",
    asset: "Gold / US Dollar (spot)",
    invested: "196.13 $",
    leverage: "x100",
    profitLoss: "-5.50 $",
    profitPositive: false,
    time: "19 hours ago",
  },
  {
    type: "Sell",
    asset: "Gold / US Dollar (spot)",
    invested: "197.35 $",
    leverage: "x100",
    profitLoss: "-27.90 $",
    profitPositive: false,
    time: "22 hours ago",
  },
  {
    type: "Sell",
    asset: "Gold / US Dollar (spot)",
    invested: "197.62 $",
    leverage: "x100",
    profitLoss: "+16.05 $",
    profitPositive: true,
    time: "23 hours ago",
  },
  {
    type: "Sell",
    asset: "Gold / US Dollar (spot)",
    invested: "198.37 $",
    leverage: "x100",
    profitLoss: "+33.75 $",
    profitPositive: true,
    time: "23 hours ago",
  },
  {
    type: "Sell",
    asset: "Gold / US Dollar (spot)",
    invested: "199.70 $",
    leverage: "x100",
    profitLoss: "-22.20 $",
    profitPositive: false,
    time: "1 day ago",
  },
];

const ScalpingCard = () => {
  const [activeTab, setActiveTab] = useState("open");

  return (
    <div className="max-w-6xl mx-auto my-4 p-6 md:p-10 bg-white">
      {/* ---------- Header Section ---------- */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="relative w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-xl">
              S
            </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              ScalpingXAU
            </h2>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                Silver
              </span>
              <span className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                Veteran
              </span>
              <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                Day-trader
              </span>
            </div>
          </div>
        </div>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition self-start sm:self-auto">
          Copy
        </button>
      </div>

      {/* ---------- Stats Section ---------- */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
        <div className="text-center bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-gray-500">Profit for copiers</p>
          <p className="text-2xl font-bold text-green-600">$36,131.77</p>
        </div>
        <div className="text-center bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-500">Profit sharing fee</p>
          <p className="text-2xl font-bold text-gray-800">30%</p>
        </div>
        <div className="text-center bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-500">Win rate</p>
          <p className="text-2xl font-bold text-green-600">55.34%</p>
        </div>
        <div className="text-center bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-500">Copiers</p>
          <p className="text-2xl font-bold text-gray-800">64/169</p>
        </div>
      </div>

      {/* ---------- Chart Section ---------- */}
      <div className="mt-10 shadow-md rounded-xl p-4">
        <h3 className="text-gray-700 font-semibold mb-1">
          Realized profit/loss chart
        </h3>
        <p className="text-3xl font-bold text-gray-900 mb-4">86.92 $</p>

        <div className="w-full h-64 sm:h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#2563eb"
                strokeWidth={3}
                dot={false}
              />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mt-5">
          {["1W", "MTD", "1M", "YTD", "1Y"].map((label) => (
            <button
              key={label}
              className={`px-4 py-2 text-sm rounded-md font-medium ${
                label === "1M"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ---------- Trading Activity Section ---------- */}
      <div className="mt-12">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
          <h3 className="text-gray-700 font-semibold text-lg">
            Trading activity
          </h3>
          <div className="flex bg-gray-100 rounded-md p-1">
            <button
              onClick={() => setActiveTab("open")}
              className={`px-4 py-2 text-sm rounded-md transition ${
                activeTab === "open"
                  ? "bg-white shadow text-gray-800 font-semibold"
                  : "text-gray-500"
              }`}
            >
              Open trades
            </button>
            <button
              onClick={() => setActiveTab("closed")}
              className={`px-4 py-2 text-sm rounded-md transition ${
                activeTab === "closed"
                  ? "bg-white shadow text-gray-800 font-semibold"
                  : "text-gray-500"
              }`}
            >
              Closed trades
            </button>
          </div>
        </div>

        {activeTab === "open" && (
          <div className="text-center py-10 text-gray-500 border rounded-lg">
            <p className="text-lg font-semibold">
              ScalpingXAU doesn't have any open trades
            </p>
            <p className="text-sm mt-1">
              Once ScalpingXAU opens new trades, they will appear here.
            </p>
          </div>
        )}

        {activeTab === "closed" && (
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
                {closedTrades.map((trade, index) => (
                  <tr
                    key={index}
                    className="border-t text-gray-700 hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
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
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScalpingCard;
