// // // 📁 src/pages/ForexMarketTableDetailPage.jsx
// // import React from "react";
// // import { useLocation, useParams, useNavigate } from "react-router-dom";
// // import { ArrowLeft, ArrowUpRight, ArrowDownRight } from "lucide-react";
// // import {
// //   LineChart,
// //   Line,
// //   XAxis,
// //   YAxis,
// //   Tooltip,
// //   ResponsiveContainer,
// // } from "recharts";

// // const chartData = [
// //   { time: "Mon", value: 1.12 },
// //   { time: "Tue", value: 1.14 },
// //   { time: "Wed", value: 1.13 },
// //   { time: "Thu", value: 1.16 },
// //   { time: "Fri", value: 1.15 },
// // ];

// // const ForexMarketTableDetailPage = () => {
// //   const { symbol } = useParams();
// //   const { state } = useLocation();
// //   const navigate = useNavigate();

// //   const forex = state || {
// //     name: "Unknown Forex Pair",
// //     symbol: decodeURIComponent(symbol),
// //     price: "$0.00",
// //     change: "0%",
// //     changeValue: "$0.00",
// //     up: true,
// //   };

// //   return (
// //     <>
// //         <div className="p-4 md:p-8 bg-gray-50">
// //       <button
// //         onClick={() => navigate(-1)}
// //         className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
// //       >
// //         <ArrowLeft size={18} />
// //         Back
// //       </button>

// //       <div className="flex flex-col md:flex-row gap-8">
// //         {/* Left Side - Chart & Info */}
// //         <div className="flex-1 bg-white p-6 rounded-2xl shadow">
// //           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
// //             <div>
// //               <h1 className="text-2xl font-semibold">{forex.name}</h1>
// //               <p className="text-gray-500">{forex.symbol}</p>
// //             </div>
// //             <div className="text-right">
// //               <h2 className="text-3xl font-bold text-gray-800">{forex.price}</h2>
// //               <p
// //                 className={`flex items-center gap-1 justify-end text-sm ${
// //                   forex.up ? "text-green-600" : "text-red-500"
// //                 }`}
// //               >
// //                 {forex.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
// //                 {forex.change} ({forex.changeValue})
// //               </p>
// //             </div>
// //           </div>

// //           <div className="h-[300px] w-full">
// //             <ResponsiveContainer width="100%" height="100%">
// //               <LineChart data={chartData}>
// //                 <XAxis dataKey="time" stroke="#ccc" />
// //                 <YAxis stroke="#ccc" />
// //                 <Tooltip />
// //                 <Line
// //                   type="monotone"
// //                   dataKey="value"
// //                   stroke={forex.up ? "#22c55e" : "#ef4444"}
// //                   strokeWidth={2}
// //                   dot={false}
// //                 />
// //               </LineChart>
// //             </ResponsiveContainer>
// //           </div>
// //         </div>

// //         {/* Right Side - Buy/Sell Orders */}
// //         <div className="bg-white rounded-2xl shadow-sm p-4 w-full md:w-[300px]">
// //           <h2 className="text-lg font-semibold mb-4">Buy / Sell Orders</h2>
// //           <table className="w-full text-sm">
// //             <thead>
// //               <tr className="text-gray-500 border-b">
// //                 <th className="text-left py-2">Type</th>
// //                 <th className="text-left py-2">Amount</th>
// //                 <th className="text-left py-2">Price</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               <tr className="border-b">
// //                 <td className="py-2 text-green-600 font-medium">Buy</td>
// //                 <td className="py-2">€50,000</td>
// //                 <td className="py-2">$1.162</td>
// //               </tr>
// //               <tr className="border-b">
// //                 <td className="py-2 text-red-500 font-medium">Sell</td>
// //                 <td className="py-2">€30,000</td>
// //                 <td className="py-2">$1.164</td>
// //               </tr>
// //             </tbody>
// //           </table>

// //           <div className="mt-5 flex gap-2">
// //             <button className="flex-1 bg-green-500 hover:bg-green-600 text-white rounded-lg py-2 font-medium">
// //               Buy
// //             </button>
// //             <button className="flex-1 bg-red-500 hover:bg-red-600 text-white rounded-lg py-2 font-medium">
// //               Sell
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //         <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
// //           {/* About Section */}
// //           <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
// //             <h2 className="text-xl font-semibold text-gray-800 mb-2">
// //               Bitcoin
// //             </h2>
// //             <p className="text-sm text-gray-600 leading-relaxed mb-4">
// //               Bitcoin is a decentralized blockchain platform that enables
// //               multiple blockchains to interoperate and share information. It
// //               aims to create a scalable and secure network for the future of the
// //               internet. Developed by the Web3 Foundation, Polkadot utilizes a
// //               unique sharding mechanism to enhance scalability and
// //               interoperability between different blockchains. The native
// //               cryptocurrency of the Polkadot network is DOT, which is used for
// //               governance, staking, and bonding.
// //             </p>

// //             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600 border-t pt-4">
// //               <div>
// //                 <p>
// //                   <strong>Market cap:</strong> N/A
// //                 </p>
// //                 <p>
// //                   <strong>Total employees:</strong> N/A
// //                 </p>
// //               </div>
// //               <div>
// //                 <p>
// //                   <strong>Today's range:</strong> 2.60 - 2.92
// //                 </p>
// //                 <p>
// //                   <strong>Year's range:</strong> 2.81 - 10.60
// //                 </p>
// //               </div>
// //             </div>

// //             <h3 className="text-lg font-semibold text-gray-800 mt-6">
// //               Polkadot News
// //             </h3>
// //             <div className="mt-3 space-y-3">
// //               {[
// //                 "XRP, Solana, Dogecoin Among 72 Crypto-Related ETFs Awaiting SEC Approval",
// //                 "Tic-Toc, Tic-Toc, We’re Going To Polkadot (DOT-USD)",
// //                 "Bitcoin Dominance Decline Expected Next Month, Analyst Projects",
// //               ].map((title, i) => (
// //                 <div
// //                   key={i}
// //                   className="border p-4 rounded-md hover:bg-gray-50 transition"
// //                 >
// //                   <p className="text-sm text-gray-700 font-medium">{title}</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

  
// //           {/* Related Assets */}
// // <div className="bg-white rounded-xl shadow-sm p-6">
// //   <h3 className="text-lg font-semibold text-gray-800 mb-4">
// //     Related assets
// //   </h3>

// //   <div className="grid grid-cols-1 gap-4">
// //     {[
// //       { ticker: "AUDNZD", name: "Australian Dollar / New Zealand Dollar", change: "0.14%" },
// //       { ticker: "GBPNZD", name: "British Pound / New Zealand Dollar", change: "0.20%" },
// //       { ticker: "EURNZD", name: "Euro / New Zealand Dollar", change: "-0.01%" },
// //       { ticker: "CADCHF", name: "Canadian Dollar / Swiss Franc", change: "0.06%" },
// //       { ticker: "AUDJPY", name: "Australian Dollar / Japanese Yen", change: "-0.12%" },
// //       { ticker: "NZDCHF", name: "New Zealand Dollar / Swiss Franc", change: "-0.01%" },
// //       { ticker: "EURCAD", name: "Euro / Canadian Dollar", change: "-0.09%" },
// //       { ticker: "NZDUSD", name: "New Zealand Dollar / US Dollar", change: "-0.40%" },
// //       { ticker: "EURCHF", name: "Euro / Swiss Franc", change: "-0.02%" },
// //       { ticker: "AUDCAD", name: "Australian Dollar / Canadian Dollar", change: "0.07%" },
// //       { ticker: "GBPUSD", name: "British Pound / US Dollar", change: "-0.15%" },
// //     ].map((asset, i) => (
// //       <div
// //         key={i}
// //         className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-3 hover:bg-gray-100 transition shadow-sm"
// //       >
// //         <div className="flex items-center space-x-3">
// //           <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center font-semibold text-blue-600">
// //             {asset.ticker.slice(0, 1)}
// //           </div>
// //           <div className="flex flex-col">
// //             <span className="text-sm font-medium text-gray-800">
// //               {asset.name}
// //             </span>
// //             <span className="text-xs text-gray-500">{asset.ticker}</span>
// //           </div>
// //         </div>
// //         <span
// //           className={`text-sm font-semibold ${
// //             asset.change.startsWith("-") ? "text-red-500" : "text-green-500"
// //           }`}
// //         >
// //           {asset.change}
// //         </span>
// //       </div>
// //     ))}
// //   </div>
// // </div>


// //         </div>
// //     </>

// //   );
// // };

// // export default ForexMarketTableDetailPage;



// import React, { useState, useEffect } from "react";
// import { useLocation, useParams, useNavigate } from "react-router-dom";
// import { ArrowLeft, ArrowUpRight, ArrowDownRight } from "lucide-react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const chartData = [
//   { time: "Mon", value: 1.12 },
//   { time: "Tue", value: 1.14 },
//   { time: "Wed", value: 1.13 },
//   { time: "Thu", value: 1.16 },
//   { time: "Fri", value: 1.15 },
// ];

// const ForexMarketTableDetailPage = () => {
//   const { symbol } = useParams();
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   const forex = state || {
//     name: "Unknown Forex Pair",
//     symbol: decodeURIComponent(symbol),
//     price: "$0.00",
//     change: "0%",
//     changeValue: "$0.00",
//     up: true,
//   };

//   // 🧩 Interactive trade box states
//   const [isBuy, setIsBuy] = useState(true);
//   const [lots, setLots] = useState(0.01);
//   const [investment, setInvestment] = useState(100);
//   const [advanced, setAdvanced] = useState(false);

//   useEffect(() => {
//     setInvestment((lots * 10000).toFixed(2)); // example calculation
//   }, [lots]);

//   return (
//     <>
//       <div className="p-4 md:p-8 bg-gray-50">
//         <button
//           onClick={() => navigate(-1)}
//           className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
//         >
//           <ArrowLeft size={18} />
//           Back
//         </button>

//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Left Side - Chart & Info */}
//           <div className="flex-1 bg-white p-6 rounded-2xl shadow">
//             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
//               <div>
//                 <h1 className="text-2xl font-semibold">{forex.name}</h1>
//                 <p className="text-gray-500">{forex.symbol}</p>
//               </div>
//               <div className="text-right">
//                 <h2 className="text-3xl font-bold text-gray-800">
//                   {forex.price}
//                 </h2>
//                 <p
//                   className={`flex items-center gap-1 justify-end text-sm ${
//                     forex.up ? "text-green-600" : "text-red-500"
//                   }`}
//                 >
//                   {forex.up ? (
//                     <ArrowUpRight size={14} />
//                   ) : (
//                     <ArrowDownRight size={14} />
//                   )}
//                   {forex.change} ({forex.changeValue})
//                 </p>
//               </div>
//             </div>

//             <div className="h-[300px] w-full">
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart data={chartData}>
//                   <XAxis dataKey="time" stroke="#ccc" />
//                   <YAxis stroke="#ccc" />
//                   <Tooltip />
//                   <Line
//                     type="monotone"
//                     dataKey="value"
//                     stroke={forex.up ? "#22c55e" : "#ef4444"}
//                     strokeWidth={2}
//                     dot={false}
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Right Side - Interactive Trade Box */}
//           <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm w-full md:w-[320px] self-start">
//             {/* Buy / Sell Toggle */}
//             <div className="flex mb-6 bg-gray-50 rounded-md p-1">
//               <button
//                 onClick={() => setIsBuy(true)}
//                 className={`flex-1 py-2 font-semibold rounded-md transition ${
//                   isBuy
//                     ? "bg-green-500 text-white"
//                     : "text-gray-600 hover:bg-gray-100"
//                 }`}
//               >
//                 Buy
//               </button>
//               <button
//                 onClick={() => setIsBuy(false)}
//                 className={`flex-1 py-2 font-semibold rounded-md transition ${
//                   !isBuy
//                     ? "bg-red-500 text-white"
//                     : "text-gray-500 hover:bg-gray-100"
//                 }`}
//               >
//                 Sell
//               </button>
//             </div>

//             {/* Trade Size */}
//             <div className="mb-6 border rounded-lg p-4">
//               <div className="flex justify-between text-sm text-gray-500 mb-1">
//                 <span>Trade size</span>
//                 <span>Available 0.00 $</span>
//               </div>
//               <div className="flex items-center justify-between mt-1">
//                 <div>
//                   <p className="text-xl font-semibold">{lots.toFixed(2)} lots</p>
//                   <p className="text-sm text-gray-500">
//                     Investment ${investment}
//                   </p>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <button
//                     onClick={() => setLots(Math.max(0.01, lots - 0.01))}
//                     className="px-3 py-1 border rounded-md hover:bg-gray-100"
//                   >
//                     -
//                   </button>
//                   <button
//                     onClick={() => setLots(lots + 0.01)}
//                     className="px-3 py-1 border rounded-md hover:bg-gray-100"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Leverage */}
//             <div className="mb-6">
//               <p className="text-sm text-gray-500 mb-1">Leverage</p>
//               <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-md font-semibold">
//                 x25
//               </button>
//             </div>

//             {/* Advanced Settings */}
//             <div className="flex items-center justify-between mb-6">
//               <p className="text-sm text-gray-500">Advanced settings</p>
//               <label className="inline-flex items-center cursor-pointer">
//                 <input
//                   type="checkbox"
//                   checked={advanced}
//                   onChange={() => setAdvanced(!advanced)}
//                   className="sr-only peer"
//                 />
//                 <div className="w-9 h-5 bg-gray-200 rounded-full peer-checked:bg-blue-500 relative transition">
//                   <div className="absolute top-[2px] left-[2px] h-4 w-4 bg-white rounded-full transition-all peer-checked:translate-x-4"></div>
//                 </div>
//               </label>
//             </div>

//             {/* Top Up Section */}
//             <div className="bg-blue-50 rounded-md p-4 text-center">
//               <p className="text-sm text-gray-600 mb-3">
//                 Top up your balance to open a trade
//               </p>
//               <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md w-full transition">
//                 + Top up
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* About + Related Assets */}
//       <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* About Section */}
//         <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
//           <h2 className="text-xl font-semibold text-gray-800 mb-2">Bitcoin</h2>
//           <p className="text-sm text-gray-600 leading-relaxed mb-4">
//             Bitcoin is a decentralized blockchain platform that enables multiple
//             blockchains to interoperate and share information. It aims to create
//             a scalable and secure network for the future of the internet.
//           </p>

//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600 border-t pt-4">
//             <div>
//               <p>
//                 <strong>Market cap:</strong> N/A
//               </p>
//               <p>
//                 <strong>Total employees:</strong> N/A
//               </p>
//             </div>
//             <div>
//               <p>
//                 <strong>Today's range:</strong> 2.60 - 2.92
//               </p>
//               <p>
//                 <strong>Year's range:</strong> 2.81 - 10.60
//               </p>
//             </div>
//           </div>

//           <h3 className="text-lg font-semibold text-gray-800 mt-6">
//             Market News
//           </h3>
//           <div className="mt-3 space-y-3">
//             {[
//               "XRP, Solana, Dogecoin Among 72 Crypto-Related ETFs Awaiting SEC Approval",
//               "Tic-Toc, Tic-Toc, We’re Going To Polkadot (DOT-USD)",
//               "Bitcoin Dominance Decline Expected Next Month, Analyst Projects",
//             ].map((title, i) => (
//               <div
//                 key={i}
//                 className="border p-4 rounded-md hover:bg-gray-50 transition"
//               >
//                 <p className="text-sm text-gray-700 font-medium">{title}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Related Assets */}
//         <div className="bg-white rounded-xl shadow-sm p-6">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">
//             Related assets
//           </h3>

//           <div className="grid grid-cols-1 gap-4">
//             {[
//               { ticker: "AUDNZD", name: "Australian Dollar / New Zealand Dollar", change: "0.14%" },
//               { ticker: "GBPNZD", name: "British Pound / New Zealand Dollar", change: "0.20%" },
//               { ticker: "EURNZD", name: "Euro / New Zealand Dollar", change: "-0.01%" },
//               { ticker: "CADCHF", name: "Canadian Dollar / Swiss Franc", change: "0.06%" },
//               { ticker: "AUDJPY", name: "Australian Dollar / Japanese Yen", change: "-0.12%" },
//               { ticker: "NZDCHF", name: "New Zealand Dollar / Swiss Franc", change: "-0.01%" },
//               { ticker: "EURCAD", name: "Euro / Canadian Dollar", change: "-0.09%" },
//               { ticker: "NZDUSD", name: "New Zealand Dollar / US Dollar", change: "-0.40%" },
//               { ticker: "EURCHF", name: "Euro / Swiss Franc", change: "-0.02%" },
//               { ticker: "AUDCAD", name: "Australian Dollar / Canadian Dollar", change: "0.07%" },
//               { ticker: "GBPUSD", name: "British Pound / US Dollar", change: "-0.15%" },
//             ].map((asset, i) => (
//               <div
//                 key={i}
//                 className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-3 hover:bg-gray-100 transition shadow-sm"
//               >
//                 <div className="flex items-center space-x-3">
//                   <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center font-semibold text-blue-600">
//                     {asset.ticker.slice(0, 1)}
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-sm font-medium text-gray-800">
//                       {asset.name}
//                     </span>
//                     <span className="text-xs text-gray-500">{asset.ticker}</span>
//                   </div>
//                 </div>
//                 <span
//                   className={`text-sm font-semibold ${
//                     asset.change.startsWith("-")
//                       ? "text-red-500"
//                       : "text-green-500"
//                   }`}
//                 >
//                   {asset.change}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ForexMarketTableDetailPage;



// src/pages/ForexMarketTableDetailPage.jsx
import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ArrowDownRight } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { time: "Mon", value: 1.12 },
  { time: "Tue", value: 1.14 },
  { time: "Wed", value: 1.13 },
  { time: "Thu", value: 1.16 },
  { time: "Fri", value: 1.15 },
];

const ForexMarketTableDetailPage = () => {
  const { symbol } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const forex = state || {
    name: "Unknown Forex Pair",
    symbol: decodeURIComponent(symbol || ""),
    price: "$0.00",
    change: "0%",
    changeValue: "$0.00",
    up: true,
  };

  // 🧩 Interactive trade box states
  const [isBuy, setIsBuy] = useState(true);
  const [lots, setLots] = useState(0.01);
  const [investment, setInvestment] = useState(100);
  const [advanced, setAdvanced] = useState(false);

  useEffect(() => {
    setInvestment((lots * 10000).toFixed(2)); // example calculation
  }, [lots]);

  // Top up navigates and includes the current forex as origin
  const gotoTopUp = () =>
    navigate("/money/deposit", { state: { from: forex.name || forex.symbol } });

  // Related assets (example list) - adjust content as needed
  const relatedAssets = [
    { ticker: "AUDNZD", name: "Australian Dollar / New Zealand Dollar", change: "0.14%" },
    { ticker: "GBPNZD", name: "British Pound / New Zealand Dollar", change: "0.20%" },
    { ticker: "EURNZD", name: "Euro / New Zealand Dollar", change: "-0.01%" },
    { ticker: "CADCHF", name: "Canadian Dollar / Swiss Franc", change: "0.06%" },
    { ticker: "AUDJPY", name: "Australian Dollar / Japanese Yen", change: "-0.12%" },
    { ticker: "NZDCHF", name: "New Zealand Dollar / Swiss Franc", change: "-0.01%" },
    { ticker: "EURCAD", name: "Euro / Canadian Dollar", change: "-0.09%" },
    { ticker: "NZDUSD", name: "New Zealand Dollar / US Dollar", change: "-0.40%" },
    { ticker: "EURCHF", name: "Euro / Swiss Franc", change: "-0.02%" },
    { ticker: "AUDCAD", name: "Australian Dollar / Canadian Dollar", change: "0.07%" },
    { ticker: "GBPUSD", name: "British Pound / US Dollar", change: "-0.15%" },
  ];

  // Navigate to the related asset detail page and pass the asset as state.
  // Update the route if your app uses a different path (e.g. `/forex/:ticker`).
  const openRelatedAsset = (asset) => {
    navigate(`/forex/${encodeURIComponent(asset.ticker)}`, { state: asset });
  };

  // keyboard support for related asset cards
  const onRelatedKey = (e, asset) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openRelatedAsset(asset);
    }
  };

  return (
    <>
      <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side - Chart & Info */}
          <div className="flex-1 bg-white p-6 rounded-2xl shadow">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div>
                <h1 className="text-2xl font-semibold">{forex.name}</h1>
                <p className="text-gray-500">{forex.symbol}</p>
              </div>
              <div className="text-right">
                <h2 className="text-3xl font-bold text-gray-800">{forex.price}</h2>
                <p className={`flex items-center gap-1 justify-end text-sm ${forex.up ? "text-green-600" : "text-red-500"}`}>
                  {forex.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                  {forex.change} ({forex.changeValue})
                </p>
              </div>
            </div>

            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <XAxis dataKey="time" stroke="#ccc" />
                  <YAxis stroke="#ccc" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke={forex.up ? "#22c55e" : "#ef4444"}
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right Side - Interactive Trade Box */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm w-full md:w-[320px] self-start">
            {/* Buy / Sell Toggle */}
            <div className="flex mb-6 bg-gray-50 rounded-md p-1">
              <button
                onClick={() => setIsBuy(true)}
                className={`flex-1 py-2 font-semibold rounded-md transition ${isBuy ? "bg-green-500 text-white" : "text-gray-600 hover:bg-gray-100"}`}
              >
                Buy
              </button>
              <button
                onClick={() => setIsBuy(false)}
                className={`flex-1 py-2 font-semibold rounded-md transition ${!isBuy ? "bg-red-500 text-white" : "text-gray-500 hover:bg-gray-100"}`}
              >
                Sell
              </button>
            </div>

            {/* Trade Size */}
            <div className="mb-6 border rounded-lg p-4">
              <div className="flex justify-between text-sm text-gray-500 mb-1">
                <span>Trade size</span>
                <span>Available 0.00 $</span>
              </div>
              <div className="flex items-center justify-between mt-1">
                <div>
                  <p className="text-xl font-semibold">{lots.toFixed(2)} lots</p>
                  <p className="text-sm text-gray-500">Investment ${investment}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setLots((p) => Math.max(0.01, +(p - 0.01).toFixed(2)))}
                    className="px-3 py-1 border rounded-md hover:bg-gray-100"
                    aria-label="Decrease lots"
                  >
                    -
                  </button>
                  <button
                    onClick={() => setLots((p) => +(p + 0.01).toFixed(2))}
                    className="px-3 py-1 border rounded-md hover:bg-gray-100"
                    aria-label="Increase lots"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Leverage */}
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-1">Leverage</p>
              <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-md font-semibold">x25</button>
            </div>

            {/* Advanced Settings */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-500">Advanced settings</p>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={advanced} onChange={() => setAdvanced(!advanced)} className="sr-only peer" />
                <div className="w-9 h-5 bg-gray-200 rounded-full peer-checked:bg-blue-500 relative transition">
                  <div className="absolute top-[2px] left-[2px] h-4 w-4 bg-white rounded-full transition-all peer-checked:translate-x-4" />
                </div>
              </label>
            </div>

            {/* Top Up Section */}
            <div className="bg-blue-50 rounded-md p-4 text-center">
              <p className="text-sm text-gray-600 mb-3">Top up your balance to open a trade</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md w-full transition" onClick={gotoTopUp}>
                + Top up
              </button>
            </div>
          </div>
        </div>

        {/* About + Related Assets */}
        <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{forex.name}</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              {forex.description ||
                "This pair represents a currency pairing used in forex markets. Use the chart and trade panel to analyze short-term movements."}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600 border-t pt-4">
              <div>
                <p><strong>Market cap:</strong> N/A</p>
                <p><strong>Total employees:</strong> N/A</p>
              </div>
              <div>
                <p><strong>Today's range:</strong> 2.60 - 2.92</p>
                <p><strong>Year's range:</strong> 2.81 - 10.60</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mt-6">Market News</h3>
            <div className="mt-3 space-y-3">
              {[
                "XRP, Solana, Dogecoin Among 72 Crypto-Related ETFs Awaiting SEC Approval",
                "Tic-Toc, Tic-Toc, We’re Going To Polkadot (DOT-USD)",
                "Bitcoin Dominance Decline Expected Next Month, Analyst Projects",
              ].map((title, i) => (
                <div key={i} className="border p-4 rounded-md hover:bg-gray-50 transition">
                  <p className="text-sm text-gray-700 font-medium">{title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Assets */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Related assets</h3>

            <div className="grid grid-cols-1 gap-4">
              {relatedAssets.map((asset, i) => (
                <div
                  key={i}
                  role="button"
                  tabIndex={0}
                  onClick={() => openRelatedAsset(asset)}
                  onKeyDown={(e) => onRelatedKey(e, asset)}
                  aria-label={`Open ${asset.name}`}
                  className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-3 hover:bg-gray-100 transition shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center font-semibold text-blue-600">
                      {asset.ticker.slice(0, 1)}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-800">{asset.name}</span>
                      <span className="text-xs text-gray-500">{asset.ticker}</span>
                    </div>
                  </div>
                  <span className={`text-sm font-semibold ${asset.change.startsWith("-") ? "text-red-500" : "text-green-500"}`}>{asset.change}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForexMarketTableDetailPage;
