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
      <div className="w-full max-w-5xl bg-white shadow rounded-lg p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={trader.avatar}
              alt={trader.name}
              className="w-12 h-12 rounded-full border"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                {trader.name}
              </h1>
              <div className="flex flex-wrap gap-2 mt-1">
                {trader.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
    {/* trader info */}
    <button
  onClick={(e) => {
    e.stopPropagation();
    setSelectedTrader(trader); // ✅ use the correct variable
  }}
  className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-1 rounded-lg"
>
  Copy
</button>
  </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 text-center">
          <div className="bg-green-50 p-4 rounded">
            <p className="text-sm text-gray-600">Profit</p>
            <p className="text-2xl font-bold text-green-600">{trader.profit}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-sm text-gray-600">Win rate</p>
            <p className="text-2xl font-bold text-gray-800">{trader.winRate}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-sm text-gray-600">Copiers</p>
            <p className="text-2xl font-bold text-gray-800">{trader.copiers}</p>
          </div>
        </div>
      </div>
      {selectedTrader && (
  <TradePopup
    trader={selectedTrader}
    onClose={() => setSelectedTrader(null)}
  />
)}


      {/* CHART SECTION */}
      <div className="w-full max-w-5xl bg-white shadow rounded-lg p-6 mt-6">
        <h3 className="text-gray-700 text-sm mb-2">
          Realized profit/loss chart
        </h3>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {trader.profit}
        </h1>
        <div className="w-full h-56">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#2563eb"
                strokeWidth={2}
                dot={false}
              />
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* TRADING ACTIVITY */}
      <div className="w-full max-w-5xl bg-white shadow rounded-lg p-6 mt-6 mb-10">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Trading activity
          </h3>
          <div className="flex border rounded-md text-sm font-medium">
            <button
              onClick={() => setActiveTab("open")}
              className={`px-4 py-1 border-r rounded-l-md ${
                activeTab === "open"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Open trades
            </button>
            <button
              onClick={() => setActiveTab("closed")}
              className={`px-4 py-1 rounded-r-md ${
                activeTab === "closed"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Closed trades
            </button>
          </div>
        </div>

        {activeTab === "open" && (
          <div className="flex flex-col items-center justify-center py-10 text-gray-500">
            <div className="text-4xl mb-2">📉</div>
            <p className="font-semibold">
              {trader.name} doesn’t have any open trades
            </p>
          </div>
        )}

        {activeTab === "closed" && (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead>
                <tr className="text-gray-500 border-b">
                  <th className="pb-3 px-2">Type</th>
                  <th className="pb-3 px-2">Asset</th>
                  <th className="pb-3 px-2">Invested</th>
                  <th className="pb-3 px-2">Leverage</th>
                  <th className="pb-3 px-2">Profit/Loss</th>
                  <th className="pb-3 px-2">Close time</th>
                </tr>
              </thead>
              <tbody>
                {closedTrades.map((t, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50">
                    <td className="px-2 py-2">
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold ${
                          t.type === "Buy"
                            ? "text-green-600 bg-green-100"
                            : "text-red-600 bg-red-100"
                        }`}
                      >
                        {t.type}
                      </span>
                    </td>
                    <td className="px-2 py-2">{t.asset}</td>
                    <td className="px-2 py-2">{t.invested}</td>
                    <td className="px-2 py-2">{t.leverage}</td>
                    <td
                      className={`px-2 py-2 font-semibold ${
                        t.profitPositive ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {t.profitLoss}
                    </td>
                    <td className="px-2 py-2 text-gray-500">{t.closeTime}</td>
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
