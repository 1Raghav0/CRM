import { useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

const TrendingAssetsDetailPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const asset = state;

  // Guard: return early if asset missing
  if (!asset) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        No asset data found.
      </div>
    );
  }

  // Now it's safe to generate chart data
  const chartData = useMemo(() => generateChartData(asset.price || "1"), [asset.price]);
  const isPositive = String(asset.change || "").startsWith("+");

  // Trade state
  const [isBuy, setIsBuy] = useState(true);
  const [lots, setLots] = useState(0.01);
  const [advanced, setAdvanced] = useState(false);

  const gotoDeposit = () => {
    navigate("/money/deposit", { state: { from: asset.symbol } });
  };

  const investment = (lots * 432).toFixed(2); // Just mock calculation

  // --- Related assets list (mocked) ---
  const relatedAssets = [
    { name: "Binance Coin", symbol: "BNB", change: "-3.14%" },
    { name: "Cardano", symbol: "ADA", change: "-6.37%" },
    { name: "Chainlink", symbol: "LINK", change: "-7.41%" },
    { name: "TRON", symbol: "TRX", change: "-0.69%" },
    { name: "Shiba Inu", symbol: "SHIB", change: "-3.43%" },
    { name: "Dogecoin", symbol: "DOGE", change: "-4.90%" },
    { name: "Ethereum", symbol: "ETH", change: "-2.09%" },
    { name: "Solana", symbol: "SOL", change: "-4.81%" },
    { name: "PEPE", symbol: "PEPE", change: "-12.25%" },
    { name: "Avalanche", symbol: "AVAX", change: "-10.93%" },
  ];

  // Navigate when user opens a related asset
  const openRelatedAsset = (a) => {
    // adjust path if your app uses a different detail route
    navigate(`/asset/${encodeURIComponent(a.symbol)}`, { state: a });
  };

  const onRelatedKey = (e, a) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openRelatedAsset(a);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6 md:p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT SIDE - ASSET DETAILS + GRAPH */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6">
          <button
            onClick={() => navigate(-1)}
            className="text-blue-600 hover:underline mb-4 inline-flex items-center"
          >
            ← Back
          </button>

          <div>
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-extrabold text-gray-800 mb-1 flex items-center gap-3">
                  <span className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                    {asset.symbol}
                  </span>
                  <span>
                    {asset.name}
                    <span className="text-gray-500 text-lg font-medium"> ({asset.symbol})</span>
                  </span>
                </h1>
                <div className="flex items-baseline space-x-3">
                  <p className="text-2xl font-semibold text-gray-800">{asset.price}</p>
                  <p className={`font-medium text-sm ${isPositive ? "text-green-600" : "text-red-600"}`}>
                    {asset.change}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-xs text-gray-500">Market</p>
                <p className="text-sm font-medium text-gray-800">{asset.market || "Spot"}</p>
                <p className="text-xs text-gray-400 mt-1">Updated recently</p>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6 mt-4">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <XAxis dataKey="time" hide />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e6e6e6",
                      fontSize: "0.85rem",
                    }}
                  />
                  <defs>
                    <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor={isPositive ? "#16a34a" : "#ef4444"} stopOpacity={0.12} />
                      <stop offset="100%" stopColor={isPositive ? "#16a34a" : "#ef4444"} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke={isPositive ? "#16a34a" : "#ef4444"}
                    strokeWidth={2}
                    dot={false}
                    fill="url(#grad)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="text-gray-600 text-sm leading-relaxed">
              <p>
                {asset.name} is a major asset in the {asset.symbol} market. The chart above shows a simulated price trend. You can analyze and trade using the panel on the right.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - TRADE BOX */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm self-start">
          {/* Buy / Sell toggle */}
          <div className="flex mb-6 bg-gray-50 rounded-lg p-1 border border-gray-100">
            <button
              onClick={() => setIsBuy(true)}
              className={`flex-1 py-2 font-semibold rounded-md transition ${isBuy ? "bg-green-500 text-white shadow-sm" : "text-gray-600 hover:bg-gray-100"}`}
            >
              Buy
            </button>
            <button
              onClick={() => setIsBuy(false)}
              className={`flex-1 py-2 font-semibold rounded-md transition ${!isBuy ? "bg-red-500 text-white shadow-sm" : "text-gray-500 hover:bg-gray-100"}`}
            >
              Sell
            </button>
          </div>

          {/* Trade size */}
          <div className="mb-6 border rounded-lg p-4 bg-white">
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
                  onClick={() => setLots(Math.max(0.01, +(lots - 0.01).toFixed(2)))}
                  className="px-3 py-1 border rounded-md hover:bg-gray-100"
                >
                  -
                </button>
                <button
                  onClick={() => setLots(+(lots + 0.01).toFixed(2))}
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
            <div className="flex gap-2">
              <button className="bg-blue-100 text-blue-600 px-3 py-2 rounded-md font-semibold">x10</button>
              <button className="bg-blue-100 text-blue-600 px-3 py-2 rounded-md font-semibold">x25</button>
              <button className="bg-blue-100 text-blue-600 px-3 py-2 rounded-md font-semibold">x50</button>
            </div>
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
              <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-500 relative transition">
                <div className="absolute top-[2px] left-[2px] h-5 w-5 bg-white rounded-full transition-all peer-checked:translate-x-5 shadow-sm" />
              </div>
            </label>
          </div>

          {/* Top up section */}
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-600 mb-3">Top up your balance to open a trade</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md w-full transition" onClick={gotoDeposit}>+ Top up</button>
          </div>
        </div>
      </div>

      {/* About + Related Assets */}
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">About {asset.name} ({asset.symbol})</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">Polkadot is a decentralized blockchain platform that enables multiple blockchains to interoperate and share information. It aims to create a scalable and secure network for the future of the internet. Developed by the Web3 Foundation, Polkadot utilizes a unique sharding mechanism to enhance scalability and interoperability between different blockchains. The native cryptocurrency of the Polkadot network is DOT, which is used for governance, staking, and bonding.</p>

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

          <h3 className="text-lg font-semibold text-gray-800 mt-6">Polkadot News</h3>
          <div className="mt-3 space-y-3">
            {["XRP, Solana, Dogecoin Among 72 Crypto-Related ETFs Awaiting SEC Approval","Tic-Toc, Tic-Toc, We’re Going To Polkadot (DOT-USD)","Bitcoin Dominance Decline Expected Next Month, Analyst Projects"].map((title, i) => (
              <div key={i} className="border p-4 rounded-lg hover:bg-gray-50 transition">
                <p className="text-sm text-gray-700 font-medium">{title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Assets */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Related assets</h3>

          <div className="grid grid-cols-1 gap-4">
            {relatedAssets.map((a, i) => (
              <div
                key={i}
                role="button"
                tabIndex={0}
                onClick={() => openRelatedAsset(a)}
                onKeyDown={(e) => onRelatedKey(e, a)}
                aria-label={`Open ${a.name}`}
                className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-3 hover:bg-gray-100 transition shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center font-semibold text-blue-600">{a.symbol?.charAt(0)}</div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-800">{a.name}</span>
                    <span className="text-xs text-gray-500">{a.symbol}</span>
                  </div>
                </div>
                <span className={`text-sm font-semibold ${String(a.change).startsWith("-") ? "text-red-500" : "text-green-500"}`}>{a.change}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingAssetsDetailPage;
