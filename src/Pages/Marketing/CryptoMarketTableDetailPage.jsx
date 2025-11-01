import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowDownRight,
  ArrowLeft,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const sampleChartData = [
  { time: "1D", price: 100 },
  { time: "1W", price: 120 },
  { time: "1M", price: 110 },
  { time: "3M", price: 140 },
  { time: "6M", price: 135 },
  { time: "1Y", price: 160 },
];

const BuySellTable = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 w-full md:w-[300px]">
      <h2 className="text-lg font-semibold mb-4">Buy / Sell Orders</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-500 border-b">
            <th className="text-left py-2">Type</th>
            <th className="text-left py-2">Amount</th>
            <th className="text-left py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2 text-green-600 font-medium">Buy</td>
            <td className="py-2">0.5 BTC</td>
            <td className="py-2">$56,200</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 text-green-600 font-medium">Buy</td>
            <td className="py-2">1.2 BTC</td>
            <td className="py-2">$56,100</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 text-red-500 font-medium">Sell</td>
            <td className="py-2">0.8 BTC</td>
            <td className="py-2">$56,300</td>
          </tr>
          <tr>
            <td className="py-2 text-red-500 font-medium">Sell</td>
            <td className="py-2">0.3 BTC</td>
            <td className="py-2">$56,350</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-5 flex gap-2">
        <button className="flex-1 bg-green-500 hover:bg-green-600 text-white rounded-lg py-2 font-medium">
          Buy
        </button>
        <button className="flex-1 bg-red-500 hover:bg-red-600 text-white rounded-lg py-2 font-medium">
          Sell
        </button>
      </div>
    </div>
  );
};

const CryptoMarketTableDetailPage = () => {
  const { symbol } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const crypto = state || {
    name: "Unknown",
    symbol,
    price: "$0.00",
    change: "0%",
    changeValue: "$0.00",
    up: true,
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
        {/* Left Section - Graph + Info */}
        <div className="flex-1 bg-white p-6 rounded-2xl shadow">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold">{crypto.name}</h1>
              <p className="text-gray-500">{crypto.symbol}</p>
            </div>
            <div className="text-right">
              <h2 className="text-3xl font-bold text-gray-800">
                {crypto.price}
              </h2>
              <p
                className={`flex items-center gap-1 justify-end text-sm ${
                  crypto.up ? "text-green-600" : "text-red-500"
                }`}
              >
                {crypto.up ? (
                  <ArrowUpRight size={14} />
                ) : (
                  <ArrowDownRight size={14} />
                )}
                {crypto.change} ({crypto.changeValue})
              </p>
            </div>
          </div>

          {/* Chart Section */}
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sampleChartData}>
                <XAxis dataKey="time" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke={crypto.up ? "#22c55e" : "#ef4444"}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Section - Buy/Sell Table */}
        <BuySellTable />
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Bitcoin
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Bitcoin is a decentralized blockchain platform that enables
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
          {/* Related Assets */}
<div className="bg-white rounded-xl shadow-sm p-6">
  <h3 className="text-lg font-semibold text-gray-800 mb-4">
    Related assets
  </h3>

  <div className="grid grid-cols-1 gap-4">
    {[
      { ticker: "XPDUSD", name: "Palladium / US Dollar (spot)", change: "-1.92%" },
      { ticker: "XCUUSD", name: "Copper / US Dollar (spot)", change: "0.09%" },
      { ticker: "NGCUSD", name: "Natural gas", change: "1.54%" },
      { ticker: "BRNUSD", name: "Brent Crude Oil", change: "0.96%" },
      { ticker: "XAGUSD", name: "Silver / US Dollar (spot)", change: "-1.15%" },
      { ticker: "WTIUSD", name: "US Crude Oil", change: "1.03%" },
    ].map((asset, i) => (
      <div
        key={i}
        className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-3 hover:bg-gray-100 transition shadow-sm"
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
    </>
    

  );
};

export default CryptoMarketTableDetailPage;
