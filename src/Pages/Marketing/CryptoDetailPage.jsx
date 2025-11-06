// import React, { useMemo } from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const generateChartData = (price) => {
//   const base = parseFloat(price.replace(/[^0-9.]/g, "")) || 1;
//   return Array.from({ length: 35 }, (_, i) => ({
//     time: `T${i}`,
//     price: base + (Math.random() - 0.5) * base * 0.05,
//   }));
// };

// const CryptoDetailPage = () => {
//   const { name } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();

//   const crypto = location.state;

//   if (!crypto) {
//     navigate("/");
//     return null;
//   }

//   const isPositive = crypto.change.startsWith("+");
//   const chartData = useMemo(() => generateChartData(crypto.price), [crypto.price]);

//   return (
//     <>
//       <div className="bg-gray-50 min-h-screen p-6 md:p-10">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* LEFT SIDE - CHART & DETAILS */}
//           <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
//             <button
//               onClick={() => navigate(-1)}
//               className="text-blue-600 hover:underline mb-4 inline-flex items-center"
//             >
//               ← Back
//             </button>

//             <div>
//               <h1 className="text-3xl font-bold text-gray-800 mb-1">
//                 {crypto.name}{" "}
//                 <span className="text-gray-500 text-xl">
//                   ({crypto.symbol})
//                 </span>
//               </h1>
//               <div className="flex items-baseline space-x-3 mb-4">
//                 <p className="text-2xl font-semibold text-gray-800">
//                   {crypto.price}
//                 </p>
//                 <p
//                   className={`font-medium text-sm ${
//                     isPositive ? "text-green-600" : "text-red-600"
//                   }`}
//                 >
//                   {crypto.change}
//                 </p>
//               </div>

//               {/* Chart */}
//               <div className="bg-gray-50 rounded-lg p-4 mb-6">
//                 <ResponsiveContainer width="100%" height={300}>
//                   <LineChart data={chartData}>
//                     <XAxis dataKey="time" hide />
//                     <YAxis hide />
//                     <Tooltip
//                       contentStyle={{
//                         backgroundColor: "#fff",
//                         border: "1px solid #ddd",
//                         fontSize: "0.85rem",
//                       }}
//                     />
//                     <Line
//                       type="monotone"
//                       dataKey="price"
//                       stroke={isPositive ? "#16a34a" : "#ef4444"}
//                       strokeWidth={2}
//                       dot={false}
//                     />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>

//               {/* Info */}
//               <div className="text-gray-600 text-sm leading-relaxed">
//                 <p>
//                   {crypto.name} is a leading cryptocurrency known for its
//                   decentralized network and blockchain innovations. The chart
//                   above displays simulated market trends for {crypto.symbol}.
//                   You can trade {crypto.name} using the trade panel on the
//                   right.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SIDE - TRADE BOX */}
//           <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm self-start">
//             <div className="flex mb-6">
//               <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-md font-semibold transition">
//                 Buy
//               </button>
//               <button className="flex-1 bg-gray-100 text-gray-600 hover:bg-gray-200 py-2 rounded-md font-semibold ml-2 transition">
//                 Sell
//               </button>
//             </div>

//             {/* Trade size */}
//             <div className="mb-6">
//               <p className="text-sm text-gray-500">Trade size</p>
//               <div className="flex items-center justify-between mt-2">
//                 <div>
//                   <p className="text-xl font-semibold">0.01 lots</p>
//                   <p className="text-sm text-gray-500">Investment $0.12</p>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <button className="px-3 py-1 border rounded-md hover:bg-gray-100">-</button>
//                   <button className="px-3 py-1 border rounded-md hover:bg-gray-100">+</button>
//                 </div>
//               </div>
//               <p className="text-xs text-gray-400 mt-1">Available 0.00 $</p>
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
//                 <input type="checkbox" className="sr-only peer" />
//                 <div className="w-9 h-5 bg-gray-200 rounded-full peer-checked:bg-blue-500 relative transition">
//                   <div className="absolute top-[2px] left-[2px] h-4 w-4 bg-white rounded-full transition-all peer-checked:translate-x-4"></div>
//                 </div>
//               </label>
//             </div>

//             {/* Top up */}
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

//         {/* ADDITIONAL SECTION: About & Related Assets */}
//         <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* About Section */}
//           <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-2">
//               About Polkadot (DOT/USD)
//             </h2>
//             <p className="text-sm text-gray-600 leading-relaxed mb-4">
//               Polkadot is a decentralized blockchain platform that enables
//               multiple blockchains to interoperate and share information. It
//               aims to create a scalable and secure network for the future of the
//               internet. Developed by the Web3 Foundation, Polkadot utilizes a
//               unique sharding mechanism to enhance scalability and
//               interoperability between different blockchains. The native
//               cryptocurrency of the Polkadot network is DOT, which is used for
//               governance, staking, and bonding.
//             </p>

//             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600 border-t pt-4">
//               <div>
//                 <p>
//                   <strong>Market cap:</strong> N/A
//                 </p>
//                 <p>
//                   <strong>Total employees:</strong> N/A
//                 </p>
//               </div>
//               <div>
//                 <p>
//                   <strong>Today's range:</strong> 2.60 - 2.92
//                 </p>
//                 <p>
//                   <strong>Year's range:</strong> 2.81 - 10.60
//                 </p>
//               </div>
//             </div>

//             <h3 className="text-lg font-semibold text-gray-800 mt-6">
//               Polkadot News
//             </h3>
//             <div className="mt-3 space-y-3">
//               {[
//                 "XRP, Solana, Dogecoin Among 72 Crypto-Related ETFs Awaiting SEC Approval",
//                 "Tic-Toc, Tic-Toc, We’re Going To Polkadot (DOT-USD)",
//                 "Bitcoin Dominance Decline Expected Next Month, Analyst Projects",
//               ].map((title, i) => (
//                 <div
//                   key={i}
//                   className="border p-4 rounded-md hover:bg-gray-50 transition"
//                 >
//                   <p className="text-sm text-gray-700 font-medium">{title}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Related Assets */}
//           <div className="bg-white rounded-xl shadow-sm p-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">
//               Related assets
//             </h3>

//             <div className="grid grid-cols-1 gap-4">
//               {[
//                 { name: "Binance Coin", change: "-3.14%" },
//                 { name: "Cardano", change: "-6.37%" },
//                 { name: "Chainlink", change: "-7.41%" },
//                 { name: "TRON", change: "-0.69%" },
//                 { name: "Shiba Inu", change: "-3.43%" },
//                 { name: "Dogecoin", change: "-4.90%" },
//                 { name: "Ethereum", change: "-2.09%" },
//                 { name: "Solana", change: "-4.81%" },
//                 { name: "PEPE", change: "-12.25%" },
//                 { name: "Avalanche", change: "-10.93%" },
//               ].map((asset, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-3 hover:bg-gray-100 transition shadow-sm"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center font-semibold text-blue-600">
//                       {asset.name.charAt(0)}
//                     </div>
//                     <span className="text-sm font-medium text-gray-800">
//                       {asset.name}
//                     </span>
//                   </div>
//                   <span className="text-sm text-red-500 font-semibold">
//                     {asset.change}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CryptoDetailPage;



// import React, { useMemo, useState } from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const generateChartData = (price) => {
//   const base = parseFloat(String(price).replace(/[^0-9.]/g, "")) || 1;
//   return Array.from({ length: 35 }, (_, i) => ({
//     time: `T${i}`,
//     price: base + (Math.random() - 0.5) * base * 0.05,
//   }));
// };

// const CryptoDetailPage = () => {
//   const { name } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();

//   const gotoTopUp = () => navigate('/money/deposit',{ state: { from: crypto.name } });

//   const crypto = location.state;
//   const [isBuy, setIsBuy] = useState(true);
//   const [lots, setLots] = useState(0.01);

//   if (!crypto) {
//     navigate("/");
//     return null;
//   }

//   const isPositive = String(crypto.change || "").startsWith("+");
//   const chartData = useMemo(() => generateChartData(crypto.price), [crypto.price]);

//   // Parse numeric price (fallback to 1 if not parseable)
//   const numericPrice = parseFloat(String(crypto.price).replace(/[^0-9.]/g, "")) || 1;
//   const investment = (lots * numericPrice).toFixed(2);

//   const increaseLots = () => {
//     // increase by 0.01, keep two decimals
//     setLots((prev) => {
//       const next = +(prev + 0.01).toFixed(2);
//       return next;
//     });
//   };

//   const decreaseLots = () => {
//     setLots((prev) => {
//       const next = +(prev - 0.01).toFixed(2);
//       // enforce minimum 0.01
//       return next < 0.01 ? 0.01 : next;
//     });
//   };

//   const setLotsQuick = (value) => {
//     // utility to set lots from other UI later (keeps two decimals and min)
//     const v = Math.max(0.01, +(Number(value) || 0).toFixed(2));
//     setLots(v);
//   };

//   return (
//     <>
//       <div className="bg-gray-50 min-h-screen p-6 md:p-10">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* LEFT SIDE - CHART & DETAILS */}
//           <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6 ring-1 ring-gray-100">
//             <div className="flex items-center justify-between mb-4">
//               <button
//                 onClick={() => navigate(-1)}
//                 className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
//               >
//                 <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
//                   <path
//                     d="M15 18l-6-6 6-6"
//                     stroke="currentColor"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//                 Back
//               </button>

//               <div className="text-sm text-gray-500">
//                 Updated a few moments ago
//               </div>
//             </div>

//             <div className="mb-2">
//               <div className="flex items-start gap-4">
//                 <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow">
//                   {crypto.symbol}
//                 </div>

//                 <div className="flex-1">
//                   <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
//                     {crypto.name}{" "}
//                     <span className="text-gray-500 font-medium text-base">
//                       ({crypto.symbol})
//                     </span>
//                   </h1>
//                   <div className="flex items-baseline gap-3 mt-1">
//                     <div className="text-2xl md:text-3xl font-semibold text-gray-900">
//                       {crypto.price}
//                     </div>
//                     <div
//                       className={`text-sm font-medium rounded-md px-2 py-1 ${
//                         isPositive
//                           ? "bg-green-50 text-green-700"
//                           : "bg-red-50 text-red-700"
//                       }`}
//                     >
//                       {crypto.change}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Chart */}
//             <div className="mt-4 bg-gradient-to-b from-white to-blue-50 rounded-xl p-4 shadow-sm border border-transparent">
//               <div className="w-full h-64 md:h-72 rounded-lg overflow-hidden">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <LineChart
//                     data={chartData}
//                     margin={{ top: 6, right: 16, left: 0, bottom: 6 }}
//                   >
//                     <XAxis dataKey="time" hide />
//                     <YAxis hide />
//                     <Tooltip
//                       contentStyle={{
//                         backgroundColor: "#fff",
//                         border: "1px solid #e6e6e6",
//                         fontSize: "0.85rem",
//                         borderRadius: 8,
//                         boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
//                       }}
//                     />
//                     <defs>
//                       <linearGradient id="grad-crypto" x1="0" x2="0" y1="0" y2="1">
//                         <stop
//                           offset="0%"
//                           stopColor={isPositive ? "#16a34a" : "#ef4444"}
//                           stopOpacity={0.16}
//                         />
//                         <stop
//                           offset="100%"
//                           stopColor={isPositive ? "#16a34a" : "#ef4444"}
//                           stopOpacity={0}
//                         />
//                       </linearGradient>
//                     </defs>
//                     <Line
//                       type="monotone"
//                       dataKey="price"
//                       stroke={isPositive ? "#16a34a" : "#ef4444"}
//                       strokeWidth={2.25}
//                       dot={false}
//                       activeDot={{ r: 4 }}
//                       fill="url(#grad-crypto)"
//                     />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>

//             {/* Info */}
//             <div className="text-gray-600 text-sm leading-relaxed mt-5">
//               <p>
//                 {crypto.name} is a leading cryptocurrency known for its
//                 decentralized network and blockchain innovations. The chart
//                 above displays simulated market trends for {crypto.symbol}. Use
//                 the trade panel on the right to place orders, adjust leverage or
//                 top up your balance.
//               </p>
//             </div>
//           </div>

//           {/* RIGHT SIDE - TRADE BOX */}
//           <aside className="bg-white rounded-2xl p-6 shadow-lg ring-1 ring-gray-100 self-start">
//             {/* Buy / Sell toggle */}
//             <div className="flex gap-3 mb-5">
//               <button
//                 onClick={() => setIsBuy(true)}
//                 className={`flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-lg font-semibold transition-all shadow-sm ${
//                   isBuy
//                     ? "bg-green-600 text-white hover:bg-green-700"
//                     : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
//                 }`}
//               >
//                 Buy
//               </button>
//               <button
//                 onClick={() => setIsBuy(false)}
//                 className={`flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-lg font-semibold transition-all shadow-sm ${
//                   !isBuy
//                     ? "bg-red-600 text-white hover:bg-red-700"
//                     : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
//                 }`}
//               >
//                 Sell
//               </button>
//             </div>

//             {/* Trade size */}
//             <div className="mb-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-lg font-semibold text-gray-900">{lots.toFixed(2)} lots</p>
//                   <p className="text-sm text-gray-500">Investment ${investment}</p>
//                 </div>

//                 <div className="flex items-center space-x-2">
//                   <button
//                     onClick={decreaseLots}
//                     className="px-3 py-1 border border-gray-200 rounded-md bg-white hover:bg-gray-100"
//                     aria-label="Decrease lots"
//                   >
//                     -
//                   </button>
//                   <button
//                     onClick={increaseLots}
//                     className="px-3 py-1 border border-gray-200 rounded-md bg-white hover:bg-gray-100"
//                     aria-label="Increase lots"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//               <p className="text-xs text-gray-400 mt-2">Available 0.00 $</p>
//             </div>

//             {/* Leverage */}
//             <div className="mb-6">
//               <p className="text-sm text-gray-500 mb-2">Leverage</p>
//               <div className="flex gap-2">
//                 <button className="px-3 py-2 bg-blue-50 text-blue-700 rounded-md text-sm font-semibold border border-transparent">x10</button>
//                 <button className="px-3 py-2 bg-blue-100 text-blue-700 rounded-md text-sm font-semibold border border-blue-100">x25</button>
//                 <button className="px-3 py-2 bg-blue-50 text-blue-700 rounded-md text-sm font-semibold border border-transparent">x50</button>
//               </div>
//             </div>

//             {/* Advanced Settings */}
//             <div className="flex items-center justify-between mb-6">
//               <p className="text-sm text-gray-500">Advanced settings</p>
//               <label className="inline-flex items-center cursor-pointer">
//                 <input type="checkbox" className="sr-only peer" />
//                 <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-500 relative transition">
//                   <div className="absolute top-[2px] left-[2px] h-5 w-5 bg-white rounded-full transition-all peer-checked:translate-x-5 shadow-sm" />
//                 </div>
//               </label>
//             </div>

//             {/* Top up */}
//             <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-100">
//               <p className="text-sm text-gray-600 mb-3">Top up your balance to open a trade</p>
//               <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md w-full transition-shadow shadow" onClick={gotoTopUp}>
//                 + Top up
//               </button>
//             </div>
//           </aside>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CryptoDetailPage;




import React, { useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const generateChartData = (price) => {
  const base = parseFloat(String(price).replace(/[^0-9.]/g, "")) || 1;
  return Array.from({ length: 35 }, (_, i) => ({
    time: `T${i}`,
    price: base + (Math.random() - 0.5) * base * 0.05,
  }));
};

const CryptoDetailPage = () => {
  const { name } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const crypto = location.state;
  const [isBuy, setIsBuy] = useState(true);
  const [lots, setLots] = useState(0.01);

  if (!crypto) {
    navigate("/");
    return null;
  }

  // gotoTopUp needs crypto available — define after crypto
  const gotoTopUp = () =>
    navigate("/money/deposit", { state: { from: crypto.name || crypto.symbol } });

  const isPositive = String(crypto.change || "").startsWith("+");
  const chartData = useMemo(() => generateChartData(crypto.price), [crypto.price]);

  // Parse numeric price (fallback to 1 if not parseable)
  const numericPrice = parseFloat(String(crypto.price).replace(/[^0-9.]/g, "")) || 1;
  const investment = (lots * numericPrice).toFixed(2);

  const increaseLots = () =>
    setLots((prev) => {
      const next = +(prev + 0.01).toFixed(2);
      return next;
    });

  const decreaseLots = () =>
    setLots((prev) => {
      const next = +(prev - 0.01).toFixed(2);
      return next < 0.01 ? 0.01 : next;
    });

  const setLotsQuick = (value) => {
    const v = Math.max(0.01, +(Number(value) || 0).toFixed(2));
    setLots(v);
  };

  // Related assets data (show percent like screenshot)
  const relatedAssets = [
    { symbol: "BNB", name: "Binance Coin", change: "2.50%" },
    { symbol: "ADA", name: "Cardano", change: "4.24%" },
    { symbol: "LINK", name: "Chainlink", change: "3.41%" },
    { symbol: "DOT", name: "Polkadot", change: "6.63%" },
    { symbol: "TRX", name: "TRON", change: "1.24%" },
    { symbol: "SHIB", name: "Shiba Inu", change: "4.53%" },
    { symbol: "DOGE", name: "Dogecoin", change: "2.65%" },
    { symbol: "ETH", name: "Ethereum", change: "5.04%" },
    { symbol: "SOL", name: "Solana", change: "4.60%" },
    { symbol: "PEPE", name: "PEPE", change: "3.02%" },
    { symbol: "AVAX", name: "Avalanche", change: "4.94%" },
  ];

  // open related asset detail page (adjust path if needed)
  const openRelatedAsset = (asset) => {
    navigate(`/crypto/${asset.symbol}`, { state: asset });
  };
  const onRelatedKey = (e, asset) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openRelatedAsset(asset);
    }
  };

  // sample news (you can replace with dynamic source later)
  const newsItems = [
    { title: "Galaxy’s Alex Thorn cuts year-end bitcoin price target to $120K", source: "seekingalpha.com", time: "13 hours ago" },
    { title: "US Stock Market Navigates Mixed Premarket Amid AI Valuation Concerns", source: "thestockmarketwatch.com", time: "16 hours ago" },
    { title: "What Does Mamdani’s NYC Win Mean For Wall Street?", source: "seekingalpha.com", time: "18 hours ago" },
  ];

  return (
    <>
      <div className="bg-gray-50 min-h-screen p-6 md:p-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT SIDE - CHART & DETAILS */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6 ring-1 ring-gray-100">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back
              </button>

              <div className="text-sm text-gray-500">Updated a few moments ago</div>
            </div>

            <div className="mb-2">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow">
                  {crypto.symbol}
                </div>

                <div className="flex-1">
                  <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                    {crypto.name} <span className="text-gray-500 font-medium text-base">({crypto.symbol})</span>
                  </h1>
                  <div className="flex items-baseline gap-3 mt-1">
                    <div className="text-2xl md:text-3xl font-semibold text-gray-900">{crypto.price}</div>
                    <div className={`text-sm font-medium rounded-md px-2 py-1 ${isPositive ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                      {crypto.change}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="mt-4 bg-gradient-to-b from-white to-blue-50 rounded-xl p-4 shadow-sm border border-transparent">
              <div className="w-full h-64 md:h-72 rounded-lg overflow-hidden">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData} margin={{ top: 6, right: 16, left: 0, bottom: 6 }}>
                    <XAxis dataKey="time" hide />
                    <YAxis hide />
                    <Tooltip contentStyle={{ backgroundColor: "#fff", border: "1px solid #e6e6e6", fontSize: "0.85rem", borderRadius: 8, boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }} />
                    <defs>
                      <linearGradient id="grad-crypto" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor={isPositive ? "#16a34a" : "#ef4444"} stopOpacity={0.16} />
                        <stop offset="100%" stopColor={isPositive ? "#16a34a" : "#ef4444"} stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Line type="monotone" dataKey="price" stroke={isPositive ? "#16a34a" : "#ef4444"} strokeWidth={2.25} dot={false} activeDot={{ r: 4 }} fill="url(#grad-crypto)" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Info */}
            <div className="text-gray-600 text-sm leading-relaxed mt-5">
              <p>
                {crypto.name} is a leading cryptocurrency known for its decentralized network and blockchain innovations. The chart above displays simulated market trends for {crypto.symbol}. Use the trade panel on the right to place orders, adjust leverage or top up your balance.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - TRADE BOX */}
          <aside className="bg-white rounded-2xl p-6 shadow-lg ring-1 ring-gray-100 self-start">
            {/* Buy / Sell toggle */}
            <div className="flex gap-3 mb-5">
              <button
                onClick={() => setIsBuy(true)}
                className={`flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-lg font-semibold transition-all shadow-sm ${isBuy ? "bg-green-600 text-white hover:bg-green-700" : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"}`}
              >
                Buy
              </button>
              <button
                onClick={() => setIsBuy(false)}
                className={`flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-lg font-semibold transition-all shadow-sm ${!isBuy ? "bg-red-600 text-white hover:bg-red-700" : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"}`}
              >
                Sell
              </button>
            </div>

            {/* Trade size */}
            <div className="mb-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold text-gray-900">{lots.toFixed(2)} lots</p>
                  <p className="text-sm text-gray-500">Investment ${investment}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <button onClick={decreaseLots} className="px-3 py-1 border border-gray-200 rounded-md bg-white hover:bg-gray-100" aria-label="Decrease lots">-</button>
                  <button onClick={increaseLots} className="px-3 py-1 border border-gray-200 rounded-md bg-white hover:bg-gray-100" aria-label="Increase lots">+</button>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-2">Available 0.00 $</p>
            </div>

            {/* Leverage */}
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-2">Leverage</p>
              <div className="flex gap-2">
                <button className="px-3 py-2 bg-blue-50 text-blue-700 rounded-md text-sm font-semibold border border-transparent">x10</button>
                <button className="px-3 py-2 bg-blue-100 text-blue-700 rounded-md text-sm font-semibold border border-blue-100">x25</button>
                <button className="px-3 py-2 bg-blue-50 text-blue-700 rounded-md text-sm font-semibold border border-transparent">x50</button>
              </div>
            </div>

            {/* Advanced Settings */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-500">Advanced settings</p>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-500 relative transition">
                  <div className="absolute top-[2px] left-[2px] h-5 w-5 bg-white rounded-full transition-all peer-checked:translate-x-5 shadow-sm" />
                </div>
              </label>
            </div>

            {/* Top up */}
            <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-100">
              <p className="text-sm text-gray-600 mb-3">Top up your balance to open a trade</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md w-full transition-shadow shadow" onClick={gotoTopUp}>+ Top up</button>
            </div>
          </aside>
        </div>

        {/* BELOW: About / News (left 2 cols) + Related assets (right) */}
        <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* About + News */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6 ring-1 ring-gray-100">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">About {crypto.name} ({crypto.symbol})</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              {crypto.description ||
                `${crypto.name} is a decentralized digital asset and a major cryptocurrency used for peer-to-peer transfers and as a speculative asset. Market characteristics include volatility, liquidity, and network effects.`}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
              <div>
                <p><strong>Market cap:</strong> {crypto.marketCap || "N/A"}</p>
                <p><strong>Total employees:</strong> {crypto.employees || "N/A"}</p>
              </div>
              <div>
                <p><strong>Today's range:</strong> {crypto.todaysRange || "N/A"}</p>
                <p><strong>Year's range:</strong> {crypto.yearsRange || "N/A"}</p>
              </div>
            </div>

            <h3 className="text-md font-semibold text-gray-800 mb-3">Bitcoin News</h3>
            <div className="space-y-3">
              {newsItems.map((n, i) => (
                <div key={i} className="flex items-start gap-4 border rounded-lg p-4 hover:bg-gray-50 transition">
                  <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 font-semibold">฿</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-800">{n.title}</div>
                    <div className="text-xs text-gray-400 mt-1">{n.source} · {n.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related assets sidebar */}
          <aside className="bg-white rounded-2xl shadow-lg p-4 ring-1 ring-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-semibold text-gray-800">Related assets</h4>
              <div className="text-xs text-gray-400">24h</div>
            </div>

            <div className="space-y-3">
              {relatedAssets.map((a) => {
                const positive = !String(a.change).startsWith("-");
                return (
                  <button
                    key={a.symbol}
                    onClick={() => openRelatedAsset(a)}
                    onKeyDown={(e) => onRelatedKey(e, a)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Open ${a.name}`}
                    className="w-full flex items-center justify-between gap-3 bg-white hover:bg-gray-50 rounded-lg p-3 border border-gray-100 transition-shadow shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 font-semibold">
                        {a.symbol.charAt(0)}
                      </div>
                      <div className="text-sm text-gray-800">{a.name}</div>
                    </div>
                    <div className={`text-xs font-semibold px-3 py-1 rounded-full ${positive ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                      {a.change}
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default CryptoDetailPage;
