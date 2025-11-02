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
  const base = parseFloat(price.replace(/[^0-9.]/g, "")) || 1;
  return Array.from({ length: 35 }, (_, i) => ({
    time: `T${i}`,
    price: base + (Math.random() - 0.5) * base * 0.05,
  }));
};

const TrendingAssetsDetailPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const asset = state;

  const chartData = useMemo(() => generateChartData(asset.price), [asset.price]);
  const isPositive = asset.change.startsWith("+");

  // Trade state
  const [isBuy, setIsBuy] = useState(true);
  const [lots, setLots] = useState(0.01);
  const [advanced, setAdvanced] = useState(false);

  const investment = (lots * 432).toFixed(2); // Just mock calculation

  return (
    <div className="bg-gray-50 min-h-screen p-6 md:p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT SIDE - ASSET DETAILS + GRAPH */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <button
            onClick={() => navigate(-1)}
            className="text-blue-600 hover:underline mb-4 inline-flex items-center"
          >
            ← Back
          </button>

          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-1">
              {asset.name}{" "}
              <span className="text-gray-500 text-xl">({asset.symbol})</span>
            </h1>
            <div className="flex items-baseline space-x-3 mb-4">
              <p className="text-2xl font-semibold text-gray-800">
                {asset.price}
              </p>
              <p
                className={`font-medium text-sm ${
                  isPositive ? "text-green-600" : "text-red-600"
                }`}
              >
                {asset.change}
              </p>
            </div>

            {/* Chart */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <XAxis dataKey="time" hide />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #ddd",
                      fontSize: "0.85rem",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke={isPositive ? "#16a34a" : "#ef4444"}
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="text-gray-600 text-sm leading-relaxed">
              <p>
                {asset.name} is a major asset in the {asset.symbol} market. The
                chart above shows a simulated price trend. You can analyze and
                trade using the panel on the right.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - TRADE BOX */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm self-start">
          {/* Buy / Sell toggle */}
          <div className="flex mb-6 bg-gray-50 rounded-md p-1">
            <button
              onClick={() => setIsBuy(true)}
              className={`flex-1 py-2 font-semibold rounded-md transition ${
                isBuy
                  ? "bg-green-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Buy
            </button>
            <button
              onClick={() => setIsBuy(false)}
              className={`flex-1 py-2 font-semibold rounded-md transition ${
                !isBuy
                  ? "bg-gray-100 text-gray-600"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              Sell
            </button>
          </div>

          {/* Trade size */}
          <div className="mb-6 border rounded-lg p-4">
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>Trade size</span>
              <span>Available 0.00 $</span>
            </div>
            <div className="flex items-center justify-between mt-1">
              <div>
                <p className="text-xl font-semibold">{lots.toFixed(2)} lots</p>
                <p className="text-sm text-gray-500">
                  Investment ${investment}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setLots(Math.max(0.01, lots - 0.01))}
                  className="px-3 py-1 border rounded-md hover:bg-gray-100"
                >
                  -
                </button>
                <button
                  onClick={() => setLots(lots + 0.01)}
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

          {/* Top up section */}
          <div className="bg-blue-50 rounded-md p-4 text-center">
            <p className="text-sm text-gray-600 mb-3">
              Top up your balance to open a trade
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md w-full transition">
              + Top up
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              About Polkadot (DOT/USD)
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Polkadot is a decentralized blockchain platform that enables
              multiple blockchains to interoperate and share information. It
              aims to create a scalable and secure network for the future of the
              internet. Developed by the Web3 Foundation, Polkadot utilizes a
              unique sharding mechanism to enhance scalability and
              interoperability between different blockchains. The native
              cryptocurrency of the Polkadot network is DOT, which is used for
              governance, staking, and bonding.
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
              {[
                { name: "Binance Coin", change: "-3.14%" },
                { name: "Cardano", change: "-6.37%" },
                { name: "Chainlink", change: "-7.41%" },
                { name: "TRON", change: "-0.69%" },
                { name: "Shiba Inu", change: "-3.43%" },
                { name: "Dogecoin", change: "-4.90%" },
                { name: "Ethereum", change: "-2.09%" },
                { name: "Solana", change: "-4.81%" },
                { name: "PEPE", change: "-12.25%" },
                { name: "Avalanche", change: "-10.93%" },
              ].map((asset, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-3 hover:bg-gray-100 transition shadow-sm"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center font-semibold text-blue-600">
                      {asset.name.charAt(0)}
                    </div>
                    <span className="text-sm font-medium text-gray-800">
                      {asset.name}
                    </span>
                  </div>
                  <span className="text-sm text-red-500 font-semibold">
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

export default TrendingAssetsDetailPage;
