import React, { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const sampleChartData = [
  { time: "Mon", value: 400 },
  { time: "Tue", value: 420 },
  { time: "Wed", value: 410 },
  { time: "Thu", value: 450 },
  { time: "Fri", value: 470 },
];

const relatedAssetsData = [
  { symbol: "TMUS", name: "T-Mobile US", changePercent: 0.37 },
  { symbol: "CRM", name: "Salesforce", changePercent: 1.97 },
  { symbol: "QCOM", name: "Qualcomm", changePercent: 1.73 },
  { symbol: "PM", name: "Philip Morris", changePercent: -0.12 },
  { symbol: "PEP", name: "Pepsico", changePercent: 0.10 },
  { symbol: "ORCL", name: "Oracle Corporation", changePercent: 1.37 },
  { symbol: "NKE", name: "Nike", changePercent: -0.79 },
  { symbol: "NFLX", name: "Netflix", changePercent: 0.74 },
  { symbol: "MCD", name: "McDonald's", changePercent: -0.43 },
  { symbol: "JPM", name: "JPMorgan Chase & Co", changePercent: 0.65 },
  { symbol: "KO", name: "Coca-Cola Company", changePercent: 1.13 },
];

const StocksTableDetailPage = () => {
  const { name } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const [isBuy, setIsBuy] = useState(true);
  const [lots, setLots] = useState(0.01);
  const [investment, setInvestment] = useState(100);
  const [advanced, setAdvanced] = useState(false);

  const stockData = state || {
    name: decodeURIComponent(name),
    symbol: "N/A",
    price: "$0.00",
    change: "0%",
    changeValue: "0",
  };

  const isPositive = parseFloat(stockData.change) > 0;

  return (
    <>
      <div className="p-4 md:p-8 bg-gray-50">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Stock Chart and Details */}
          <div className="flex-1 bg-white p-6 rounded-2xl shadow">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div>
                <h1 className="text-2xl font-semibold">{stockData.name}</h1>
                <p className="text-gray-500">{stockData.symbol}</p>
              </div>
              <div className="text-right">
                <h2 className="text-3xl font-bold text-gray-800">{stockData.price}</h2>
                <p
                  className={`flex items-center gap-1 justify-end text-sm ${
                    isPositive ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                  {stockData.change} ({stockData.changeValue})
                </p>
              </div>
            </div>

            {/* Chart */}
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sampleChartData}>
                  <XAxis dataKey="time" stroke="#ccc" />
                  <YAxis stroke="#ccc" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke={isPositive ? "#22c55e" : "#ef4444"}
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right: Buy/Sell Orders */}
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
                  <td className="py-2">$10,000</td>
                  <td className="py-2">{stockData.price}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-red-500 font-medium">Sell</td>
                  <td className="py-2">$8,000</td>
                  <td className="py-2">{stockData.price}</td>
                </tr>
              </tbody>
            </table>

            {/* UI Controls */}
            <div className="mt-5 space-y-4">
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    checked={isBuy}
                    onChange={() => setIsBuy(true)}
                    className="cursor-pointer"
                  />
                  <span>Buy</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    checked={!isBuy}
                    onChange={() => setIsBuy(false)}
                    className="cursor-pointer"
                  />
                  <span>Sell</span>
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Lots</label>
                <input
                  type="number"
                  min={0.01}
                  step={0.01}
                  value={lots}
                  onChange={(e) => setLots(parseFloat(e.target.value) || 0)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Investment (€)</label>
                <input
                  type="number"
                  min={0}
                  value={investment}
                  onChange={(e) => setInvestment(parseFloat(e.target.value) || 0)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="advanced"
                  checked={advanced}
                  onChange={(e) => setAdvanced(e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="advanced" className="text-sm font-medium text-gray-700">
                  Advanced Options
                </label>
              </div>

              <div className="flex gap-2">
                <button
                  className={`flex-1 rounded-lg py-2 font-medium text-white ${
                    isBuy ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!isBuy}
                >
                  Buy
                </button>
                <button
                  className={`flex-1 rounded-lg py-2 font-medium text-white ${
                    !isBuy ? "bg-red-500 hover:bg-red-600" : "bg-gray-400 cursor-not-allowed"
                  }`}
                  disabled={isBuy}
                >
                  Sell
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto my-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Bitcoin</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Bitcoin is a decentralized blockchain platform that enables multiple blockchains to interoperate and share information...
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

          <h3 className="text-lg font-semibold text-gray-800 mt-6">Polkadot News</h3>
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
            {relatedAssetsData.map((asset, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-3 hover:bg-gray-100 transition shadow-sm"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center font-semibold text-blue-600">
                    {asset.symbol.slice(0, 1)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-800">{asset.name}</span>
                    <span className="text-xs text-gray-500">{asset.symbol}</span>
                  </div>
                </div>
                <span
                  className={`text-sm font-semibold ${
                    asset.changePercent < 0 ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {asset.changePercent > 0 ? "+" : ""}
                  {asset.changePercent.toFixed(2)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StocksTableDetailPage;
