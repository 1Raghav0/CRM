// import React, { useState } from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const sampleData = [
//   { time: "09:00", value: 4120 },
//   { time: "10:00", value: 4110 },
//   { time: "11:00", value: 4135 },
//   { time: "12:00", value: 4140 },
//   { time: "13:00", value: 4130 },
//   { time: "14:00", value: 4145 },
//   { time: "15:00", value: 4138 },
// ];

// const CommodityDetailPage = () => {
//   const { ticker } = useParams();
//   const location = useLocation();
//   const asset = location.state; 
//   const navigate = useNavigate();

//   const gotoTopUp = () => navigate("/money/deposit", {state : {from: CommodityDetailPage.ticker} });

//   // fallback if someone visits directly
//   const assetData =
//     asset || {
//       name: "Gold / US Dollar (spot)",
//       ticker: ticker || "XAUUSD",
//       price: "$4,113.93",
//       change: "-0.13%",
//       amount: "-$5.34",
//       isPositive: false,
//       category: "Commodities",
//     };

//   // 🧩 Add missing state hooks
//   const [isBuy, setIsBuy] = useState(true);
//   const [lots, setLots] = useState(0.01);
//   const [investment, setInvestment] = useState(100); // example default
//   const [advanced, setAdvanced] = useState(false);

//   // optional: update investment dynamically when lots change
//   React.useEffect(() => {
//     setInvestment((lots * 10000).toFixed(2)); // example calc
//   }, [lots]);

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-8">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Left: Chart and Info */}
//         <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
//             <div>
//               <h1 className="text-2xl font-bold text-gray-800">
//                 {assetData.name}
//               </h1>
//               <p className="text-gray-500 text-sm">{assetData.ticker}</p>
//             </div>
//             <div className="text-right mt-4 sm:mt-0">
//               <div className="text-3xl font-semibold">{assetData.price}</div>
//               <div
//                 className={`font-medium ${
//                   assetData.isPositive ? "text-green-500" : "text-red-500"
//                 }`}
//               >
//                 {assetData.change} ({assetData.amount})
//               </div>
//             </div>
//           </div>

//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={sampleData}>
//               <XAxis dataKey="time" stroke="#ccc" />
//               <YAxis stroke="#ccc" />
//               <Tooltip />
//               <Line
//                 type="monotone"
//                 dataKey="value"
//                 stroke={assetData.isPositive ? "#22c55e" : "#ef4444"}
//                 strokeWidth={2}
//                 dot={false}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         {/* RIGHT SIDE - TRADE BOX */}
//         <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm self-start">
//           {/* Buy / Sell Toggle */}
//           <div className="flex mb-6 bg-gray-50 rounded-md p-1">
//             <button
//               onClick={() => setIsBuy(true)}
//               className={`flex-1 py-2 font-semibold rounded-md transition ${
//                 isBuy
//                   ? "bg-green-500 text-white"
//                   : "text-gray-600 hover:bg-gray-100"
//               }`}
//             >
//               Buy
//             </button>
//             <button
//               onClick={() => setIsBuy(false)}
//               className={`flex-1 py-2 font-semibold rounded-md transition ${
//                 !isBuy
//                   ? "bg-red-500 text-white"
//                   : "text-gray-500 hover:bg-gray-100"
//               }`}
//             >
//               Sell
//             </button>
//           </div>

//           {/* Trade Size */}
//           <div className="mb-6 border rounded-lg p-4">
//             <div className="flex justify-between text-sm text-gray-500 mb-1">
//               <span>Trade size</span>
//               <span>Available 0.00 $</span>
//             </div>
//             <div className="flex items-center justify-between mt-1">
//               <div>
//                 <p className="text-xl font-semibold">{lots.toFixed(2)} lots</p>
//                 <p className="text-sm text-gray-500">Investment ${investment}</p>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <button
//                   onClick={() => setLots(Math.max(0.01, lots - 0.01))}
//                   className="px-3 py-1 border rounded-md hover:bg-gray-100"
//                 >
//                   -
//                 </button>
//                 <button
//                   onClick={() => setLots(lots + 0.01)}
//                   className="px-3 py-1 border rounded-md hover:bg-gray-100"
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Leverage */}
//           <div className="mb-6">
//             <p className="text-sm text-gray-500 mb-1">Leverage</p>
//             <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-md font-semibold">
//               x25
//             </button>
//           </div>

//           {/* Advanced Settings */}
//           <div className="flex items-center justify-between mb-6">
//             <p className="text-sm text-gray-500">Advanced settings</p>
//             <label className="inline-flex items-center cursor-pointer">
//               <input
//                 type="checkbox"
//                 checked={advanced}
//                 onChange={() => setAdvanced(!advanced)}
//                 className="sr-only peer"
//               />
//               <div className="w-9 h-5 bg-gray-200 rounded-full peer-checked:bg-blue-500 relative transition">
//                 <div className="absolute top-[2px] left-[2px] h-4 w-4 bg-white rounded-full transition-all peer-checked:translate-x-4"></div>
//               </div>
//             </label>
//           </div>

//           {/* Top Up Section */}
//           <div className="bg-blue-50 rounded-md p-4 text-center">
//             <p className="text-sm text-gray-600 mb-3">
//               Top up your balance to open a trade
//             </p>
//             <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md w-full transition" 
//             onClick={gotoTopUp}>
//               + Top up
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* About Section */}
//           <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-2">
//               Gold /US Dollar (spot)
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
//           {/* Related Assets */}
// <div className="bg-white rounded-xl shadow-sm p-6">
//   <h3 className="text-lg font-semibold text-gray-800 mb-4">
//     Related assets
//   </h3>

//   <div className="grid grid-cols-1 gap-4">
//     {[
//       { ticker: "XPDUSD", name: "Palladium / US Dollar (spot)", change: "-1.92%" },
//       { ticker: "XCUUSD", name: "Copper / US Dollar (spot)", change: "0.09%" },
//       { ticker: "NGCUSD", name: "Natural gas", change: "1.54%" },
//       { ticker: "BRNUSD", name: "Brent Crude Oil", change: "0.96%" },
//       { ticker: "XAGUSD", name: "Silver / US Dollar (spot)", change: "-1.15%" },
//       { ticker: "WTIUSD", name: "US Crude Oil", change: "1.03%" },
//     ].map((asset, i) => (
//       <div
//         key={i}
//         className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-3 hover:bg-gray-100 transition shadow-sm"
//       >
//         <div className="flex items-center space-x-3">
//           <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center font-semibold text-blue-600">
//             {asset.ticker.slice(0, 1)}
//           </div>
//           <div className="flex flex-col">
//             <span className="text-sm font-medium text-gray-800">
//               {asset.name}
//             </span>
//             <span className="text-xs text-gray-500">{asset.ticker}</span>
//           </div>
//         </div>
//         <span
//           className={`text-sm font-semibold ${
//             asset.change.startsWith("-") ? "text-red-500" : "text-green-500"
//           }`}
//         >
//           {asset.change}
//         </span>
//       </div>
//     ))}
//   </div>
// </div>

//         </div>
//     </div>
//   );
// };

// export default CommodityDetailPage;




import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const sampleData = [
  { time: "09:00", value: 4120 },
  { time: "10:00", value: 4110 },
  { time: "11:00", value: 4135 },
  { time: "12:00", value: 4140 },
  { time: "13:00", value: 4130 },
  { time: "14:00", value: 4145 },
  { time: "15:00", value: 4138 },
];

const CommodityDetailPage = () => {
  const { ticker } = useParams();
  const location = useLocation();
  const asset = location.state;
  const navigate = useNavigate();

  const gotoTopUp = () =>
    navigate("/money/deposit", { state: { from: ticker || asset?.ticker } });

  // fallback if someone visits directly
  const assetData =
    asset || {
      name: "Gold / US Dollar (spot)",
      ticker: ticker || "XAUUSD",
      price: "$4,113.93",
      change: "-0.13%",
      amount: "-$5.34",
      isPositive: false,
      category: "Commodities",
    };

  // 🧩 Add missing state hooks
  const [isBuy, setIsBuy] = useState(true);
  const [lots, setLots] = useState(0.01);
  const [investment, setInvestment] = useState(100); // example default
  const [advanced, setAdvanced] = useState(false);

  // optional: update investment dynamically when lots change
  React.useEffect(() => {
    setInvestment((lots * 10000).toFixed(2)); // example calc
  }, [lots]);

  // handler to navigate to related asset detail
  const openRelatedAsset = (related) => {
    // navigate to a consistent route — adjust path if your app uses a different path
    navigate(`/commodity/${related.ticker}`, { state: related });
  };

  // keyboard support for related asset cards
  const onRelatedKey = (e, related) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openRelatedAsset(related);
    }
  };

  const relatedAssets = [
    { ticker: "XPDUSD", name: "Palladium / US Dollar (spot)", change: "-1.92%" },
    { ticker: "XCUUSD", name: "Copper / US Dollar (spot)", change: "0.09%" },
    { ticker: "NGCUSD", name: "Natural gas", change: "1.54%" },
    { ticker: "BRNUSD", name: "Brent Crude Oil", change: "0.96%" },
    { ticker: "XAGUSD", name: "Silver / US Dollar (spot)", change: "-1.15%" },
    { ticker: "WTIUSD", name: "US Crude Oil", change: "1.03%" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Chart and Info */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                {assetData.name}
              </h1>
              <p className="text-gray-500 text-sm">{assetData.ticker}</p>
            </div>
            <div className="text-right mt-4 sm:mt-0">
              <div className="text-3xl font-semibold">{assetData.price}</div>
              <div
                className={`font-medium ${
                  assetData.isPositive ? "text-green-500" : "text-red-500"
                }`}
              >
                {assetData.change} ({assetData.amount})
              </div>
            </div>
          </div>

          <div className="w-full h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sampleData}>
                <XAxis dataKey="time" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={assetData.isPositive ? "#22c55e" : "#ef4444"}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* RIGHT SIDE - TRADE BOX */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm self-start">
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
                  onClick={() => setLots((p) => Math.max(0.01, +(p - 0.01).toFixed(2)))}
                  className="px-3 py-1 border rounded-md hover:bg-gray-100"
                >
                  -
                </button>
                <button
                  onClick={() => setLots((p) => +(p + 0.01).toFixed(2))}
                  className="px-3 py-1 border rounded-md hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Leverage */}
          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-1">Leverage</p>
            <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-md font-semibold">
              x25
            </button>
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
            <p className="text-sm text-gray-600 mb-3">
              Top up your balance to open a trade
            </p>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md w-full transition"
              onClick={gotoTopUp}
            >
              + Top up
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Gold /US Dollar (spot)
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Polkadot is a decentralized blockchain platform that enables multiple blockchains to interoperate and share information. It aims to create a scalable and secure network for the future of the internet. Developed by the Web3 Foundation, Polkadot utilizes a unique sharding mechanism to enhance scalability and interoperability between different blockchains. The native cryptocurrency of the Polkadot network is DOT, which is used for governance, staking, and bonding.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600 border-t pt-4">
            <div>
              <p>
                <strong>Market cap:</strong> N/A
              </p>
              <p>
                <strong>Total employees:</strong> N/A
              </p>
            </div>
            <div>
              <p>
                <strong>Today's range:</strong> 2.60 - 2.92
              </p>
              <p>
                <strong>Year's range:</strong> 2.81 - 10.60
              </p>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mt-6">
            Polkadot News
          </h3>
          <div className="mt-3 space-y-3">
            {[
              "XRP, Solana, Dogecoin Among 72 Crypto-Related ETFs Awaiting SEC Approval",
              "Tic-Toc, Tic-Toc, We’re Going To Polkadot (DOT-USD)",
              "Bitcoin Dominance Decline Expected Next Month, Analyst Projects",
            ].map((title, i) => (
              <div
                key={i}
                className="border p-4 rounded-md hover:bg-gray-50 transition"
              >
                <p className="text-sm text-gray-700 font-medium">{title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Assets */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Related assets
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {relatedAssets.map((asset, i) => (
              <div
                key={i}
                onClick={() => openRelatedAsset(asset)}
                onKeyDown={(e) => onRelatedKey(e, asset)}
                role="button"
                tabIndex={0}
                aria-label={`Open ${asset.name}`}
                className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-3 hover:bg-gray-100 transition shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center font-semibold text-blue-600">
                    {asset.ticker.slice(0, 1)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-800">
                      {asset.name}
                    </span>
                    <span className="text-xs text-gray-500">{asset.ticker}</span>
                  </div>
                </div>
                <span
                  className={`text-sm font-semibold ${
                    asset.change.startsWith("-") ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {asset.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommodityDetailPage;
