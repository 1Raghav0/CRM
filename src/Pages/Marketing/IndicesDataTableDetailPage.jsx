// // 📁 src/pages/IndicesDataTableDetailPage.jsx
// import React, { useState } from "react";
// import { useLocation, useParams, useNavigate } from "react-router-dom";
// import { ArrowLeft, ArrowUpRight, ArrowDownRight, Ghost } from "lucide-react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const sampleChartData = [
//   { time: "Mon", value: 24000 },
//   { time: "Tue", value: 24300 },
//   { time: "Wed", value: 24250 },
//   { time: "Thu", value: 24500 },
//   { time: "Fri", value: 24400 },
// ];

// const IndicesDataTableDetailPage = () => {
//   const { name } = useParams();
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   const [isBuy, setIsBuy] = useState(true);
//   const [lots, setLots] = useState(0.01);
//   const [investment, setInvestment] = useState(100);
//   const [advanced, setAdvanced] = useState(false);

//   const indexData = state || {
//     name: decodeURIComponent(name),
//     price: "24,300.00",
//     change: "0%",
//     changeValue: "0",
//     up: true,
//   };

//   return (
//     <>
//       <div className="p-4 md:p-8 bg-gray-50">
//         {/* Back Button */}
//         <button
//           onClick={() => navigate(-1)}
//           className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
//         >
//           <ArrowLeft size={18} />
//           Back
//         </button>

//         <div className="flex flex-col md:flex-row gap-8">
//           {/* LEFT SIDE - Chart & Info */}
//           <div className="flex-1 bg-white p-6 rounded-2xl shadow">
//             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
//               <div>
//                 <h1 className="text-2xl font-semibold">{indexData.name}</h1>
//                 <p className="text-gray-500">Indices Market</p>
//               </div>
//               <div className="text-right">
//                 <h2 className="text-3xl font-bold text-gray-800">
//                   {indexData.price}
//                 </h2>
//                 <p
//                   className={`flex items-center gap-1 justify-end text-sm ${
//                     indexData.up ? "text-green-600" : "text-red-500"
//                   }`}
//                 >
//                   {indexData.up ? (
//                     <ArrowUpRight size={14} />
//                   ) : (
//                     <ArrowDownRight size={14} />
//                   )}
//                   {indexData.change} ({indexData.changeValue})
//                 </p>
//               </div>
//             </div>

//             {/* Line Chart */}
//             <div className="h-[300px] w-full">
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart data={sampleChartData}>
//                   <XAxis dataKey="time" stroke="#ccc" />
//                   <YAxis stroke="#ccc" />
//                   <Tooltip />
//                   <Line
//                     type="monotone"
//                     dataKey="value"
//                     stroke={indexData.up ? "#22c55e" : "#ef4444"}
//                     strokeWidth={2}
//                     dot={false}
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* RIGHT SIDE - Interactive Trade Box */}
//           <div className="bg-white rounded-2xl shadow-sm p-6 w-full md:w-[340px] self-start">
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
//       <div className="max-w-7xl mx-auto my-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* About Section */}
//         <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
//           <h2 className="text-xl font-semibold text-gray-800 mb-2">
//             {indexData.name}
//           </h2>
//           <p className="text-sm text-gray-600 leading-relaxed mb-4">
//             Bitcoin is a decentralized blockchain platform that enables multiple
//             blockchains to interoperate and share information. It aims to create
//             a scalable and secure network for the future of the internet.
//             Developed by the Web3 Foundation, Polkadot utilizes a unique
//             sharding mechanism to enhance scalability and interoperability
//             between different blockchains.
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
//             {indexData.name} News
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

//           {/* Empty News Placeholder */}
//           <div className="bg-white rounded-xl shadow-sm p-6 text-center mt-6">
//             <h2 className="text-lg font-semibold text-gray-800 mb-8">
//               {indexData.name} News
//             </h2>

//             <div className="flex flex-col items-center justify-center h-64">
//               <Ghost className="w-10 h-10 text-gray-400 mb-3" />
//               <p className="text-lg font-semibold text-gray-700 mb-1">
//                 No recent news for {indexData.name}
//               </p>
//               <p className="text-sm text-gray-500">
//                 Come check again later to not miss the news
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Related Assets */}
//         <div className="bg-white rounded-xl shadow-sm p-6">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">
//             Related assets
//           </h3>

//           <div className="grid grid-cols-1 gap-4">
//             {[
//               { ticker: "FTSGBP", name: "FTSE 100 Index (UK)", change: "-0.28%" },
//               { ticker: "F40EUR", name: "CAC 40 (France)", change: "-0.14%" },
//               { ticker: "IBXEUR", name: "IBEX 35 (Spain)", change: "-0.06%" },
//               { ticker: "NDXUSD", name: "Nasdaq-100 (US)", change: "-0.67%" },
//               { ticker: "DJIUSD", name: "Dow Jones (US)", change: "-0.04%" },
//               { ticker: "NIKJPY", name: "Nikkei 225 (Japan)", change: "1.00%" },
//               { ticker: "V", name: "CBOE Volatility Index (VIX)", change: "7.29%" },
//               { ticker: "SPXUSD", name: "S&P 500 (US)", change: "-0.37%" },
//               { ticker: "SX5EEUR", name: "EURO STOXX 50", change: "-0.39%" },
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

// export default IndicesDataTableDetailPage;



// 📁 src/pages/IndicesDataTableDetailPage.jsx
import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ArrowDownRight, Ghost } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const sampleChartData = [
  { time: "Mon", value: 24000 },
  { time: "Tue", value: 24300 },
  { time: "Wed", value: 24250 },
  { time: "Thu", value: 24500 },
  { time: "Fri", value: 24400 },
];

const IndicesDataTableDetailPage = () => {
  const { name } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const [isBuy, setIsBuy] = useState(true);
  const [lots, setLots] = useState(0.01);
  const [investment, setInvestment] = useState(100);
  const [advanced, setAdvanced] = useState(false);

  // indexData fallback (if opened directly)
  const indexData = state || {
    name: decodeURIComponent(name || "Unknown Index"),
    price: "24,300.00",
    change: "0%",
    changeValue: "0",
    up: true,
  };

  // example calc: investment updates when lots change
  useEffect(() => {
    // adjust multiplier to your app logic; this is a placeholder
    setInvestment((lots * 10000).toFixed(2));
  }, [lots]);

  // Top up navigation (passes current index as origin)
  const gotoTopUp = () =>
    navigate("/money/deposit", { state: { from: indexData.name || indexData.symbol } });

  // Related assets list for indices (example)
  const relatedAssets = [
    { ticker: "FTSGBP", name: "FTSE 100 (UK)", change: "-0.28%" },
    { ticker: "F40EUR", name: "CAC 40 (France)", change: "-0.14%" },
    { ticker: "IBXEUR", name: "IBEX 35 (Spain)", change: "-0.06%" },
    { ticker: "NDXUSD", name: "Nasdaq-100 (US)", change: "-0.67%" },
    { ticker: "DJIUSD", name: "Dow Jones (US)", change: "-0.04%" },
    { ticker: "NIKJPY", name: "Nikkei 225 (Japan)", change: "1.00%" },
    { ticker: "VIX", name: "CBOE Volatility Index (VIX)", change: "7.29%" },
    { ticker: "SPXUSD", name: "S&P 500 (US)", change: "-0.37%" },
    { ticker: "SX5EEUR", name: "EURO STOXX 50", change: "-0.39%" },
  ];

  // navigate to related index detail — adjust route if your app expects different path
  const openRelatedAsset = (asset) => {
    navigate(`/indices/${encodeURIComponent(asset.ticker)}`, { state: asset });
  };

  const onRelatedKey = (e, asset) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openRelatedAsset(asset);
    }
  };

  // lots handlers (two decimals, min 0.01)
  const increaseLots = () => setLots((p) => +(p + 0.01).toFixed(2));
  const decreaseLots = () => setLots((p) => +(Math.max(0.01, p - 0.01)).toFixed(2));

  return (
    <>
      <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          {/* LEFT SIDE - Chart & Info */}
          <div className="flex-1 bg-white p-6 rounded-2xl shadow">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div>
                <h1 className="text-2xl font-semibold">{indexData.name}</h1>
                <p className="text-gray-500">Indices Market</p>
              </div>
              <div className="text-right">
                <h2 className="text-3xl font-bold text-gray-800">{indexData.price}</h2>
                <p
                  className={`flex items-center gap-1 justify-end text-sm ${
                    indexData.up ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {indexData.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                  {indexData.change} ({indexData.changeValue})
                </p>
              </div>
            </div>

            {/* Line Chart */}
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sampleChartData}>
                  <XAxis dataKey="time" stroke="#ccc" />
                  <YAxis stroke="#ccc" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke={indexData.up ? "#22c55e" : "#ef4444"}
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* RIGHT SIDE - Interactive Trade Box */}
          <div className="bg-white rounded-2xl shadow-sm p-6 w-full md:w-[340px] self-start">
            {/* Buy / Sell Toggle */}
            <div className="flex mb-6 bg-gray-50 rounded-md p-1">
              <button
                onClick={() => setIsBuy(true)}
                className={`flex-1 py-2 font-semibold rounded-md transition ${
                  isBuy ? "bg-green-500 text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Buy
              </button>
              <button
                onClick={() => setIsBuy(false)}
                className={`flex-1 py-2 font-semibold rounded-md transition ${
                  !isBuy ? "bg-red-500 text-white" : "text-gray-500 hover:bg-gray-100"
                }`}
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
                    onClick={decreaseLots}
                    className="px-3 py-1 border rounded-md hover:bg-gray-100"
                    aria-label="Decrease lots"
                  >
                    -
                  </button>
                  <button
                    onClick={increaseLots}
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
                <input
                  type="checkbox"
                  checked={advanced}
                  onChange={() => setAdvanced(!advanced)}
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-gray-200 rounded-full peer-checked:bg-blue-500 relative transition">
                  <div className="absolute top-[2px] left-[2px] h-4 w-4 bg-white rounded-full transition-all peer-checked:translate-x-4"></div>
                </div>
              </label>
            </div>

            {/* Top Up Section */}
            <div className="bg-blue-50 rounded-md p-4 text-center">
              <p className="text-sm text-gray-600 mb-3">Top up your balance to open a trade</p>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md w-full transition"
                onClick={gotoTopUp}
              >
                + Top up
              </button>
            </div>
          </div>
        </div>

        {/* About + Related Assets */}
        <div className="max-w-7xl mx-auto my-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{indexData.name}</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              {indexData.description ||
                "This index represents a basket of stocks and is widely followed by investors. Use the chart and trade panel above to analyze short-term movement."}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600 border-t pt-4">
              <div>
                <p><strong>Market cap:</strong> N/A</p>
                <p><strong>Total constituents:</strong> N/A</p>
              </div>
              <div>
                <p><strong>Today's range:</strong> 2.60 - 2.92</p>
                <p><strong>Year's range:</strong> 2.81 - 10.60</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mt-6">{indexData.name} News</h3>
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

            {/* Empty News Placeholder */}
            <div className="bg-white rounded-xl shadow-sm p-6 text-center mt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-8">{indexData.name} News</h2>
              <div className="flex flex-col items-center justify-center h-64">
                <Ghost className="w-10 h-10 text-gray-400 mb-3" />
                <p className="text-lg font-semibold text-gray-700 mb-1">No recent news for {indexData.name}</p>
                <p className="text-sm text-gray-500">Come check again later to not miss the news</p>
              </div>
            </div>
          </div>

          {/* Related Assets */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Related assets</h3>

            <div className="grid grid-cols-1 gap-4">
              {relatedAssets.map((asset, i) => (
                <div
                  key={asset.ticker}
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
                  <span className={`text-sm font-semibold ${asset.change.startsWith("-") ? "text-red-500" : "text-green-500"}`}>
                    {asset.change}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndicesDataTableDetailPage;
