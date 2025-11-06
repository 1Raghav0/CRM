// import { useState } from "react";
// import { useLocation } from "react-router-dom";
// import TradePopup from "./TradePopup";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   ResponsiveContainer,
//   Tooltip,
// } from "recharts";

// const TraderDetailPage = () => {
//   const { state } = useLocation(); // <-- data from the clicked card
//   const [selectedTrader, setSelectedTrader] = useState(null);
//   const trader = state;

//   const [activeTab, setActiveTab] = useState("open");

//   const data = [
//     { name: "Day 1", value: 400 },
//     { name: "Day 5", value: 800 },
//     { name: "Day 10", value: 1500 },
//     { name: "Day 15", value: 2500 },
//     { name: "Day 20", value: 3200 },
//     { name: "Day 25", value: 4200 },
//     { name: "Day 30", value: 5000 },
//   ];

//   // You can keep this static for now or later make it trader-based
//   const closedTrades = [
//     {
//       type: "Buy",
//       asset: "Gold / US Dollar (spot)",
//       invested: "40.22 $",
//       leverage: "x100",
//       profitLoss: "+5.05 $",
//       profitPositive: true,
//       closeTime: "50 minutes ago",
//     },
//     {
//       type: "Buy",
//       asset: "Silver / US Dollar (spot)",
//       invested: "24.44 $",
//       leverage: "x100",
//       profitLoss: "+5.05 $",
//       profitPositive: true,
//       closeTime: "1 hour ago",
//     },
//     {
//       type: "Buy",
//       asset: "Gold / US Dollar (spot)",
//       invested: "40.11 $",
//       leverage: "x100",
//       profitLoss: "+5.03 $",
//       profitPositive: true,
//       closeTime: "3 hours ago",
//     },
//     {
//       type: "Buy",
//       asset: "Gold / US Dollar (spot)",
//       invested: "40.22 $",
//       leverage: "x100",
//       profitLoss: "+5.12 $",
//       profitPositive: true,
//       closeTime: "3 days ago",
//     },
//     {
//       type: "Buy",
//       asset: "Silver / US Dollar (spot)",
//       invested: "24.47 $",
//       leverage: "x100",
//       profitLoss: "+3.25 $",
//       profitPositive: true,
//       closeTime: "3 days ago",
//     },
//     {
//       type: "Buy",
//       asset: "Gold / US Dollar (spot)",
//       invested: "40.26 $",
//       leverage: "x100",
//       profitLoss: "+5.00 $",
//       profitPositive: true,
//       closeTime: "3 days ago",
//     },
//     {
//       type: "Buy",
//       asset: "Gold / US Dollar (spot)",
//       invested: "40.20 $",
//       leverage: "x100",
//       profitLoss: "+3.59 $",
//       profitPositive: true,
//       closeTime: "3 days ago",
//     },
//     {
//       type: "Buy",
//       asset: "Gold / US Dollar (spot)",
//       invested: "40.34 $",
//       leverage: "x100",
//       profitLoss: "+11.09 $",
//       profitPositive: true,
//       closeTime: "3 days ago",
//     },
//     {
//       type: "Buy",
//       asset: "Silver / US Dollar (spot)",
//       invested: "24.47 $",
//       leverage: "x100",
//       profitLoss: "+5.65 $",
//       profitPositive: true,
//       closeTime: "3 days ago",
//     },
//     {
//       type: "Sell",
//       asset: "Silver / US Dollar (spot)",
//       invested: "24.43 $",
//       leverage: "x100",
//       profitLoss: "-6.65 $",
//       profitPositive: false,
//       closeTime: "3 days ago",
//     },
//     {
//       type: "Buy",
//       asset: "Gold / US Dollar (spot)",
//       invested: "40.22 $",
//       leverage: "x100",
//       profitLoss: "+5.02 $",
//       profitPositive: true,
//       closeTime: "3 days ago",
//     },
//     {
//       type: "Buy",
//       asset: "Gold / US Dollar (spot)",
//       invested: "40.16 $",
//       leverage: "x100",
//       profitLoss: "+5.23 $",
//       profitPositive: true,
//       closeTime: "3 days ago",
//     },
//     {
//       type: "Buy",
//       asset: "Silver / US Dollar (spot)",
//       invested: "24.60 $",
//       leverage: "x100",
//       profitLoss: "+5.00 $",
//       profitPositive: true,
//       closeTime: "3 days ago",
//     },
//     {
//       type: "Buy",
//       asset: "Silver / US Dollar (spot)",
//       invested: "24.54 $",
//       leverage: "x100",
//       profitLoss: "+5.00 $",
//       profitPositive: true,
//       closeTime: "3 days ago",
//     },
//     {
//       type: "Sell",
//       asset: "Gold / US Dollar (spot)",
//       invested: "39.91 $",
//       leverage: "x100",
//       profitLoss: "+2.48 $",
//       profitPositive: true,
//       closeTime: "3 days ago",
//     },
//     {
//       type: "Buy",
//       asset: "Gold / US Dollar (spot)",
//       invested: "39.94 $",
//       leverage: "x100",
//       profitLoss: "+2.79 $",
//       profitPositive: true,
//       closeTime: "4 days ago",
//     },
//     {
//       type: "Buy",
//       asset: "Silver / US Dollar (spot)",
//       invested: "24.50 $",
//       leverage: "x100",
//       profitLoss: "+4.95 $",
//       profitPositive: true,
//       closeTime: "4 days ago",
//     },
//     {
//       type: "Buy",
//       asset: "Gold / US Dollar (spot)",
//       invested: "40.37 $",
//       leverage: "x100",
//       profitLoss: "+7.06 $",
//       profitPositive: true,
//       closeTime: "4 days ago",
//     },
//     {
//       type: "Sell",
//       asset: "Gold / US Dollar (spot)",
//       invested: "40.18 $",
//       leverage: "x100",
//       profitLoss: "+1.17 $",
//       profitPositive: true,
//       closeTime: "4 days ago",
//     },
//     {
//       type: "Sell",
//       asset: "GBP/USD",
//       invested: "262.75 $",
//       leverage: "x500",
//       profitLoss: "+300.00 $",
//       profitPositive: true,
//       closeTime: "1 hour ago",
//     },
//     {
//       type: "Sell",
//       asset: "GBP/USD",
//       invested: "262.73 $",
//       leverage: "x500",
//       profitLoss: "-172.00 $",
//       profitPositive: false,
//       closeTime: "5 hours ago",
//     },
//   ];

//   // Fallback if no data is passed (direct access)
//   if (!trader) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-600">
//         No trader data found.
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
//       {/* HEADER */}
//       <div className="w-full max-w-5xl bg-white shadow rounded-lg p-6">
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
//           <div className="flex items-center space-x-4">
//             <div
//   className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold text-lg"
// >
//   {trader.name.charAt(0).toUpperCase()}
// </div>
//             <div>
//               <h1 className="text-2xl font-bold text-gray-800">
//                 {trader.name}
//               </h1>
//               <div className="flex flex-wrap gap-2 mt-1">
//                 {trader.tags?.map((tag, i) => (
//                   <span
//                     key={i}
//                     className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-between items-center mb-4">
//     {/* trader info */}
//     <button
//   onClick={(e) => {
//     e.stopPropagation();
//     setSelectedTrader(trader); // ✅ use the correct variable
//   }}
//   className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-1 rounded-lg"
// >
//   Copy
// </button>
//   </div>
//         </div>

//         {/* STATS */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 text-center">
//           <div className="bg-green-50 p-4 rounded">
//             <p className="text-sm text-gray-600">Profit</p>
//             <p className="text-2xl font-bold text-green-600">{trader.profit}</p>
//           </div>
//           <div className="bg-gray-50 p-4 rounded">
//             <p className="text-sm text-gray-600">Win rate</p>
//             <p className="text-2xl font-bold text-gray-800">{trader.winRate}</p>
//           </div>
//           <div className="bg-gray-50 p-4 rounded">
//             <p className="text-sm text-gray-600">Copiers</p>
//             <p className="text-2xl font-bold text-gray-800">{trader.copiers}</p>
//           </div>
//         </div>
//       </div>
//       {selectedTrader && (
//   <TradePopup
//     trader={selectedTrader}
//     onClose={() => setSelectedTrader(null)}
//   />
// )}


//       {/* CHART SECTION */}
//       <div className="w-full max-w-5xl bg-white shadow rounded-lg p-6 mt-6">
//         <h3 className="text-gray-700 text-sm mb-2">
//           Realized profit/loss chart
//         </h3>
//         <h1 className="text-3xl font-bold text-gray-800 mb-4">
//           {trader.profit}
//         </h1>
//         <div className="w-full h-56">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={data}>
//               <Line
//                 type="monotone"
//                 dataKey="value"
//                 stroke="#2563eb"
//                 strokeWidth={2}
//                 dot={false}
//               />
//               <XAxis dataKey="name" hide />
//               <YAxis hide />
//               <Tooltip />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* TRADING ACTIVITY */}
//       <div className="w-full max-w-5xl bg-white shadow rounded-lg p-6 mt-6 mb-10">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-lg font-semibold text-gray-800">
//             Trading activity
//           </h3>
//           <div className="flex border rounded-md text-sm font-medium">
//             <button
//               onClick={() => setActiveTab("open")}
//               className={`px-4 py-1 border-r rounded-l-md ${
//                 activeTab === "open"
//                   ? "bg-blue-600 text-white"
//                   : "text-gray-600 hover:bg-gray-100"
//               }`}
//             >
//               Open trades
//             </button>
//             <button
//               onClick={() => setActiveTab("closed")}
//               className={`px-4 py-1 rounded-r-md ${
//                 activeTab === "closed"
//                   ? "bg-blue-600 text-white"
//                   : "text-gray-600 hover:bg-gray-100"
//               }`}
//             >
//               Closed trades
//             </button>
//           </div>
//         </div>

//         {activeTab === "open" && (
//           <div className="flex flex-col items-center justify-center py-10 text-gray-500">
//             <div className="text-4xl mb-2">📉</div>
//             <p className="font-semibold">
//               {trader.name} doesn’t have any open trades
//             </p>
//           </div>
//         )}

//         {activeTab === "closed" && (
//           <div className="overflow-x-auto">
//             <table className="min-w-full text-sm text-left">
//               <thead>
//                 <tr className="text-gray-500 border-b">
//                   <th className="pb-3 px-2">Type</th>
//                   <th className="pb-3 px-2">Asset</th>
//                   <th className="pb-3 px-2">Invested</th>
//                   <th className="pb-3 px-2">Leverage</th>
//                   <th className="pb-3 px-2">Profit/Loss</th>
//                   <th className="pb-3 px-2">Close time</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {closedTrades.map((t, idx) => (
//                   <tr key={idx} className="border-b hover:bg-gray-50">
//                     <td className="px-2 py-2">
//                       <span
//                         className={`px-2 py-1 rounded text-xs font-semibold ${
//                           t.type === "Buy"
//                             ? "text-green-600 bg-green-100"
//                             : "text-red-600 bg-red-100"
//                         }`}
//                       >
//                         {t.type}
//                       </span>
//                     </td>
//                     <td className="px-2 py-2">{t.asset}</td>
//                     <td className="px-2 py-2">{t.invested}</td>
//                     <td className="px-2 py-2">{t.leverage}</td>
//                     <td
//                       className={`px-2 py-2 font-semibold ${
//                         t.profitPositive ? "text-green-600" : "text-red-600"
//                       }`}
//                     >
//                       {t.profitLoss}
//                     </td>
//                     <td className="px-2 py-2 text-gray-500">{t.closeTime}</td>
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

// export default TraderDetailPage;


import { useState } from "react";
import { useLocation } from "react-router-dom";
import TradePopup from "./TradePopup";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const TraderDetailPage = () => {
  const { state } = useLocation(); // <-- data from the clicked card
  const [selectedTrader, setSelectedTrader] = useState(null);
  const trader = state;

  const [activeTab, setActiveTab] = useState("open");

  const data = [
    { name: "Day 1", value: 400 },
    { name: "Day 5", value: 800 },
    { name: "Day 10", value: 1500 },
    { name: "Day 15", value: 2500 },
    { name: "Day 20", value: 3200 },
    { name: "Day 25", value: 4200 },
    { name: "Day 30", value: 5000 },
  ];

  // You can keep this static for now or later make it trader-based
  const closedTrades = [
    {
      type: "Buy",
      asset: "Gold / US Dollar (spot)",
      invested: "40.22 $",
      leverage: "x100",
      profitLoss: "+5.05 $",
      profitPositive: true,
      closeTime: "50 minutes ago",
    },
    {
      type: "Buy",
      asset: "Silver / US Dollar (spot)",
      invested: "24.44 $",
      leverage: "x100",
      profitLoss: "+5.05 $",
      profitPositive: true,
      closeTime: "1 hour ago",
    },
    {
      type: "Buy",
      asset: "Gold / US Dollar (spot)",
      invested: "40.11 $",
      leverage: "x100",
      profitLoss: "+5.03 $",
      profitPositive: true,
      closeTime: "3 hours ago",
    },
    {
      type: "Buy",
      asset: "Gold / US Dollar (spot)",
      invested: "40.22 $",
      leverage: "x100",
      profitLoss: "+5.12 $",
      profitPositive: true,
      closeTime: "3 days ago",
    },
    {
      type: "Buy",
      asset: "Silver / US Dollar (spot)",
      invested: "24.47 $",
      leverage: "x100",
      profitLoss: "+3.25 $",
      profitPositive: true,
      closeTime: "3 days ago",
    },
    {
      type: "Buy",
      asset: "Gold / US Dollar (spot)",
      invested: "40.26 $",
      leverage: "x100",
      profitLoss: "+5.00 $",
      profitPositive: true,
      closeTime: "3 days ago",
    },
    {
      type: "Buy",
      asset: "Gold / US Dollar (spot)",
      invested: "40.20 $",
      leverage: "x100",
      profitLoss: "+3.59 $",
      profitPositive: true,
      closeTime: "3 days ago",
    },
    {
      type: "Buy",
      asset: "Gold / US Dollar (spot)",
      invested: "40.34 $",
      leverage: "x100",
      profitLoss: "+11.09 $",
      profitPositive: true,
      closeTime: "3 days ago",
    },
    {
      type: "Buy",
      asset: "Silver / US Dollar (spot)",
      invested: "24.47 $",
      leverage: "x100",
      profitLoss: "+5.65 $",
      profitPositive: true,
      closeTime: "3 days ago",
    },
    {
      type: "Sell",
      asset: "Silver / US Dollar (spot)",
      invested: "24.43 $",
      leverage: "x100",
      profitLoss: "-6.65 $",
      profitPositive: false,
      closeTime: "3 days ago",
    },
    {
      type: "Buy",
      asset: "Gold / US Dollar (spot)",
      invested: "40.22 $",
      leverage: "x100",
      profitLoss: "+5.02 $",
      profitPositive: true,
      closeTime: "3 days ago",
    },
    {
      type: "Buy",
      asset: "Gold / US Dollar (spot)",
      invested: "40.16 $",
      leverage: "x100",
      profitLoss: "+5.23 $",
      profitPositive: true,
      closeTime: "3 days ago",
    },
    {
      type: "Buy",
      asset: "Silver / US Dollar (spot)",
      invested: "24.60 $",
      leverage: "x100",
      profitLoss: "+5.00 $",
      profitPositive: true,
      closeTime: "3 days ago",
    },
    {
      type: "Buy",
      asset: "Silver / US Dollar (spot)",
      invested: "24.54 $",
      leverage: "x100",
      profitLoss: "+5.00 $",
      profitPositive: true,
      closeTime: "3 days ago",
    },
    {
      type: "Sell",
      asset: "Gold / US Dollar (spot)",
      invested: "39.91 $",
      leverage: "x100",
      profitLoss: "+2.48 $",
      profitPositive: true,
      closeTime: "3 days ago",
    },
    {
      type: "Buy",
      asset: "Gold / US Dollar (spot)",
      invested: "39.94 $",
      leverage: "x100",
      profitLoss: "+2.79 $",
      profitPositive: true,
      closeTime: "4 days ago",
    },
    {
      type: "Buy",
      asset: "Silver / US Dollar (spot)",
      invested: "24.50 $",
      leverage: "x100",
      profitLoss: "+4.95 $",
      profitPositive: true,
      closeTime: "4 days ago",
    },
    {
      type: "Buy",
      asset: "Gold / US Dollar (spot)",
      invested: "40.37 $",
      leverage: "x100",
      profitLoss: "+7.06 $",
      profitPositive: true,
      closeTime: "4 days ago",
    },
    {
      type: "Sell",
      asset: "Gold / US Dollar (spot)",
      invested: "40.18 $",
      leverage: "x100",
      profitLoss: "+1.17 $",
      profitPositive: true,
      closeTime: "4 days ago",
    },
    {
      type: "Sell",
      asset: "GBP/USD",
      invested: "262.75 $",
      leverage: "x500",
      profitLoss: "+300.00 $",
      profitPositive: true,
      closeTime: "1 hour ago",
    },
    {
      type: "Sell",
      asset: "GBP/USD",
      invested: "262.73 $",
      leverage: "x500",
      profitLoss: "-172.00 $",
      profitPositive: false,
      closeTime: "5 hours ago",
    },
  ];

  // Fallback if no data is passed (direct access)
  if (!trader) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        No trader data found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      {/* HEADER */}
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-2xl p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div
              className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-500 flex items-center justify-center text-white font-semibold text-2xl shadow-md"
            >
              {trader.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800">
                {trader.name}
              </h1>
              <div className="flex flex-wrap gap-2 mt-2">
                {trader.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <div className="text-right">
              <p className="text-xs text-gray-500">Since</p>
              <p className="text-sm font-medium text-gray-800">{trader.since || "—"}</p>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedTrader(trader); // ✅ use the correct variable
              }}
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm"
            >
              Copy
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-gradient-to-r from-green-50 to-white p-4 rounded-lg shadow-sm flex flex-col items-start">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12h4l3 8 7-16 4 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-sm text-gray-500">Profit</p>
            </div>
            <p className="mt-2 text-2xl font-bold text-green-700">{trader.profit}</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-start">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 21h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-sm text-gray-500">Win rate</p>
            </div>
            <p className="mt-2 text-2xl font-bold text-gray-800">{trader.winRate}</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-start">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-sm text-gray-500">Copiers</p>
            </div>
            <p className="mt-2 text-2xl font-bold text-gray-800">{trader.copiers}</p>
          </div>
        </div>
      </div>
      {selectedTrader && (
        <TradePopup trader={selectedTrader} onClose={() => setSelectedTrader(null)} />
      )}


      {/* CHART SECTION */}
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-2xl p-6 mt-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm text-gray-500">Realized profit / loss</h3>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">{trader.profit}</h1>
          </div>
          <div className="text-right text-sm text-gray-500">30 days</div>
        </div>

        <div className="w-full h-56 mt-4 rounded-lg overflow-hidden bg-gradient-to-b from-white to-blue-50">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity={0.18} />
                  <stop offset="100%" stopColor="#2563eb" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#2563eb"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4 }}
                fill="url(#lineGrad)"
              />
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* TRADING ACTIVITY */}
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-2xl p-6 mt-6 mb-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Trading activity</h3>

          <div className="flex rounded-md  p-1 gap-2">
            <button
              onClick={() => setActiveTab("open")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === "open" ? "bg-blue-600 text-white shadow" : "text-gray-600 bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Open trades
            </button>
            <button
              onClick={() => setActiveTab("closed")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === "closed" ? "bg-blue-600 text-white shadow" : "text-gray-600 bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Closed trades
            </button>
          </div>
        </div>

        {activeTab === "open" && (
          <div className="flex flex-col items-center justify-center py-12 text-gray-500">
            <div className="text-5xl mb-3">📉</div>
            <p className="font-semibold text-lg">{trader.name} doesn’t have any open trades</p>
          </div>
        )}

        {activeTab === "closed" && (
          <div className="overflow-auto">
            <table className="min-w-full text-sm text-left border-separate" style={{ borderSpacing: '0 8px' }}>
              <thead>
                <tr className="text-gray-500">
                  <th className="pb-3 px-3">Type</th>
                  <th className="pb-3 px-3">Asset</th>
                  <th className="pb-3 px-3">Invested</th>
                  <th className="pb-3 px-3">Leverage</th>
                  <th className="pb-3 px-3">Profit/Loss</th>
                  <th className="pb-3 px-3">Close time</th>
                </tr>
              </thead>
              <tbody>
                {closedTrades.map((t, idx) => (
                  <tr key={idx} className="bg-white rounded-lg shadow-sm mb-2 hover:shadow-md transition-shadow">
                    <td className="px-3 py-3 align-middle">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          t.type === "Buy" ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"
                        }`}
                      >
                        {t.type}
                      </span>
                    </td>
                    <td className="px-3 py-3 align-middle text-gray-700">{t.asset}</td>
                    <td className="px-3 py-3 align-middle">{t.invested}</td>
                    <td className="px-3 py-3 align-middle">
                      <span className="text-xs text-gray-600 px-2 py-1 border rounded">{t.leverage}</span>
                    </td>
                    <td className={`px-3 py-3 align-middle font-bold ${t.profitPositive ? 'text-green-600' : 'text-red-600'}`}>
                      {t.profitLoss}
                    </td>
                    <td className="px-3 py-3 align-middle text-gray-500">{t.closeTime}</td>
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

export default TraderDetailPage;
