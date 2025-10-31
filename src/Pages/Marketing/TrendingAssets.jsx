// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const assetData = {
//   Trending: [
//     {
//       name: "nomo AI index",
//       symbol: "NMAI",
//       price: "$360.37",
//       change: "+0.37%",
//       positive: true,
//       tag: "AI powered",
//       bg: "from-blue-100 to-purple-100",
//     },
//     {
//       name: "McDonald's",
//       symbol: "MCD",
//       price: "$298.09",
//       change: "-1.09%",
//       positive: false,
//       bg: "from-red-50 to-pink-50",
//     },
//     {
//       name: "Binance Coin",
//       symbol: "BNB/USD",
//       price: "$1,077.51",
//       change: "-2.61%",
//       positive: false,
//       bg: "from-yellow-50 to-orange-50",
//     },
//     {
//       name: "Alphabet",
//       symbol: "GOOG",
//       price: "$280.17",
//       change: "-1.48%",
//       positive: false,
//       bg: "from-yellow-50 to-amber-50",
//     },
//     {
//       name: "Dogecoin",
//       symbol: "DOGE/USD",
//       price: "$0.18262",
//       change: "-1.75%",
//       positive: false,
//       bg: "from-yellow-50 to-amber-100",
//     },
//     {
//       name: "Ethereum",
//       symbol: "ETH/USD",
//       price: "$3,821.72",
//       change: "-1.87%",
//       positive: false,
//       bg: "from-indigo-50 to-blue-50",
//     },
//   ],
//   Stocks: [
//     { name: "Apple", symbol: "AAPL", price: "$175.23", change: "+0.55%", positive: true, bg: "from-green-50 to-emerald-50" },
//     { name: "Tesla", symbol: "TSLA", price: "$245.30", change: "-2.10%", positive: false, bg: "from-red-50 to-rose-50" },
//   ],
//   Crypto: [
//     { name: "Bitcoin", symbol: "BTC/USD", price: "$65,120", change: "+1.12%", positive: true, bg: "from-yellow-50 to-orange-100" },
//     { name: "Solana", symbol: "SOL/USD", price: "$142.32", change: "-0.89%", positive: false, bg: "from-blue-50 to-indigo-50" },
//   ],
//   Indices: [
//     { name: "S&P 500", symbol: "SPX", price: "$5,240.13", change: "+0.48%", positive: true, bg: "from-gray-50 to-gray-100" },
//   ],
//   Forex: [
//     { name: "EUR/USD", symbol: "EURUSD", price: "$1.0834", change: "-0.12%", positive: false, bg: "from-blue-50 to-cyan-50" },
//   ],
//   Commodities: [
//     { name: "Gold", symbol: "XAU/USD", price: "$2,030.25", change: "+0.32%", positive: true, bg: "from-yellow-50 to-amber-50" },
//   ],
//   "nomo AI": [
//     { name: "nomo AI index", symbol: "NMAI", price: "$360.37", change: "+0.37%", positive: true, tag: "AI powered", bg: "from-blue-100 to-purple-100" },
//   ],
// };

// const TrendingAssets = () => {
//   const [activeFilter, setActiveFilter] = useState("Trending");

//   const categories = [
//     "Trending",
//     "Stocks",
//     "Crypto",
//     "Indices",
//     "Forex",
//     "Commodities",
//     "nomo AI",
//   ];

//   return (
//     <div className="bg-white p-6 md:p-10">
//       <div className="max-w-7xl mx-auto">
//         {/* Title */}
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">
//           Trending assets
//         </h2>

//         {/* Filter Buttons */}
//         <div className="flex flex-wrap gap-3 mb-8 .">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveFilter(cat)}
//               className={`px-4 py-2 text-sm font-medium rounded-md border transition ${
//                 activeFilter === cat
//                   ? "bg-gray-800 text-white border-gray-800"
//                   : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Scrollable Cards */}
//         <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide h-[250px]">
//           {assetData[activeFilter].map((asset, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.02 }}
//               className={`relative min-w-[230px] sm:min-w-[260px] bg-gradient-to-br ${asset.bg} p-5 rounded-2xl shadow-sm border border-gray-200 transition group`}
//             >
//               {/* Top section */}
//               <div className="flex items-center justify-between mb-4 ">
//                 <div className="flex items-center space-x-2">
//                   <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-gray-700 font-semibold shadow-sm">
//                     {asset.name.charAt(0)}
//                   </div>
//                   <p className="font-semibold text-gray-800 text-sm leading-tight">
//                     {asset.name}
//                   </p>
//                 </div>
//                 {asset.tag && (
//                   <span className="text-xs bg-purple-100 text-purple-600 font-medium px-2 py-1 rounded-full">
//                     {asset.tag}
//                   </span>
//                 )}
//               </div>

//               {/* Symbol */}
//               <p className="text-xs text-gray-500 mb-2">{asset.symbol}</p>

//               {/* Price */}
//               <p className="text-2xl font-semibold text-gray-900">
//                 {asset.price}
//               </p>

//               {/* Change */}
//               <p
//                 className={`text-sm font-medium ${
//                   asset.positive ? "text-green-600" : "text-red-500"
//                 }`}
//               >
//                 {asset.change}
//               </p>

//               {/* Hover buttons */}
//               <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//                 <div className="flex gap-6">
//                   <button className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-6 py-1 rounded-md">
//                     Buy
//                   </button>
//                   <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-6 py-2 rounded-md">
//                     Sell
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrendingAssets;



import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const assetData = {
  Trending: [
    {
      name: "nomo AI index",
      symbol: "NMAI",
      price: "$360.37",
      change: "+0.37%",
      positive: true,
      tag: "AI powered",
      bg: "from-blue-100 to-purple-100",
    },
    {
      name: "McDonald's",
      symbol: "MCD",
      price: "$298.09",
      change: "-1.09%",
      positive: false,
      bg: "from-red-50 to-pink-50",
    },
    {
      name: "Binance Coin",
      symbol: "BNB",
      price: "$1,077.51",
      change: "-2.61%",
      positive: false,
      bg: "from-yellow-50 to-orange-50",
    },
    {
      name: "Alphabet",
      symbol: "GOOG",
      price: "$280.17",
      change: "-1.48%",
      positive: false,
      bg: "from-yellow-50 to-amber-50",
    },
    {
      name: "Dogecoin",
      symbol: "DOGE",
      price: "$0.18262",
      change: "-1.75%",
      positive: false,
      bg: "from-yellow-50 to-amber-100",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      price: "$3,821.72",
      change: "-1.87%",
      positive: false,
      bg: "from-indigo-50 to-blue-50",
    },
  ],
  Stocks: [
    { name: "Apple", symbol: "AAPL", price: "$175.23", change: "+0.55%", positive: true, bg: "from-green-50 to-emerald-50" },
    { name: "Tesla", symbol: "TSLA", price: "$245.30", change: "-2.10%", positive: false, bg: "from-red-50 to-rose-50" },
  ],
  Crypto: [
    { name: "Bitcoin", symbol: "BTC", price: "$65,120", change: "+1.12%", positive: true, bg: "from-yellow-50 to-orange-100" },
    { name: "Solana", symbol: "SOL", price: "$142.32", change: "-0.89%", positive: false, bg: "from-blue-50 to-indigo-50" },
  ],
  Indices: [
    { name: "S&P 500", symbol: "SPX", price: "$5,240.13", change: "+0.48%", positive: true, bg: "from-gray-50 to-gray-100" },
  ],
  Forex: [
    { name: "EUR/USD", symbol: "EURUSD", price: "$1.0834", change: "-0.12%", positive: false, bg: "from-blue-50 to-cyan-50" },
  ],
  Commodities: [
    { name: "Gold", symbol: "XAU", price: "$2,030.25", change: "+0.32%", positive: true, bg: "from-yellow-50 to-amber-50" },
  ],
  "nomo AI": [
    { name: "nomo AI index", symbol: "NMAI", price: "$360.37", change: "+0.37%", positive: true, tag: "AI powered", bg: "from-blue-100 to-purple-100" },
  ],
};

const TrendingAssets = () => {
  const [activeFilter, setActiveFilter] = useState("Trending");
  const navigate = useNavigate();

  const categories = [
    "Trending",
    "Stocks",
    "Crypto",
    "Indices",
    "Forex",
    "Commodities",
    "nomo AI",
  ];

  return (
    <div className="bg-white p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Trending assets
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-md border transition ${
                activeFilter === cat
                  ? "bg-gray-800 text-white border-gray-800"
                  : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Scrollable Cards */}
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide h-[250px]">
          {assetData[activeFilter].map((asset, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              onClick={() => navigate(`/asset/${asset.symbol}`, { state: asset })}
              className={`cursor-pointer relative min-w-[230px] sm:min-w-[260px] bg-gradient-to-br ${asset.bg} p-5 rounded-2xl shadow-sm border border-gray-200 transition group`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-gray-700 font-semibold shadow-sm">
                    {asset.name.charAt(0)}
                  </div>
                  <p className="font-semibold text-gray-800 text-sm leading-tight">
                    {asset.name}
                  </p>
                </div>
                {asset.tag && (
                  <span className="text-xs bg-purple-100 text-purple-600 font-medium px-2 py-1 rounded-full">
                    {asset.tag}
                  </span>
                )}
              </div>

              <p className="text-xs text-gray-500 mb-2">{asset.symbol}</p>
              <p className="text-2xl font-semibold text-gray-900">
                {asset.price}
              </p>
              <p
                className={`text-sm font-medium ${
                  asset.positive ? "text-green-600" : "text-red-500"
                }`}
              >
                {asset.change}
              </p>

              <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex gap-6">
                  <button className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-6 py-1 rounded-md">
                    Buy
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-6 py-2 rounded-md">
                    Sell
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingAssets;
