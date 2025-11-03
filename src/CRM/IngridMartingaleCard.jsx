import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const IngridMartingaleCard = () => {
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

  // Closed trades (from your provided list)
  const closedTrades = [
    { type: "Sell", asset: "British Pound / US Dollar", invested: "262.75 $", leverage: "x500", profitLoss: "+300.00 $", profitPositive: true, closeTime: "1 hour ago" },
    { type: "Sell", asset: "British Pound / US Dollar", invested: "262.73 $", leverage: "x500", profitLoss: "-172.00 $", profitPositive: false, closeTime: "5 hours ago" },
    { type: "Sell", asset: "British Pound / US Dollar", invested: "263.18 $", leverage: "x500", profitLoss: "+293.00 $", profitPositive: true, closeTime: "5 hours ago" },
    { type: "Sell", asset: "British Pound / US Dollar", invested: "263.58 $", leverage: "x500", profitLoss: "+300.00 $", profitPositive: true, closeTime: "7 hours ago" },
    { type: "Sell", asset: "British Pound / US Dollar", invested: "263.25 $", leverage: "x500", profitLoss: "+231.00 $", profitPositive: true, closeTime: "23 hours ago" },
    { type: "Sell", asset: "British Pound / US Dollar", invested: "263.67 $", leverage: "x500", profitLoss: "+231.00 $", profitPositive: true, closeTime: "23 hours ago" },
    { type: "Sell", asset: "British Pound / US Dollar", invested: "264.08 $", leverage: "x500", profitLoss: "+300.00 $", profitPositive: true, closeTime: "23 hours ago" },
    { type: "Sell", asset: "British Pound / US Dollar", invested: "264.08 $", leverage: "x500", profitLoss: "+231.00 $", profitPositive: true, closeTime: "1 day ago" },
    { type: "Sell", asset: "British Pound / US Dollar", invested: "264.49 $", leverage: "x500", profitLoss: "+231.00 $", profitPositive: true, closeTime: "1 day ago" },
    { type: "Sell", asset: "British Pound / US Dollar", invested: "264.89 $", leverage: "x500", profitLoss: "+231.00 $", profitPositive: true, closeTime: "2 days ago" },
    { type: "Sell", asset: "British Pound / US Dollar", invested: "265.32 $", leverage: "x500", profitLoss: "+283.00 $", profitPositive: true, closeTime: "2 days ago" },
    { type: "Sell", asset: "British Pound / US Dollar", invested: "265.74 $", leverage: "x500", profitLoss: "+283.00 $", profitPositive: true, closeTime: "2 days ago" },
    { type: "Sell", asset: "British Pound / US Dollar", invested: "266.13 $", leverage: "x500", profitLoss: "+296.00 $", profitPositive: true, closeTime: "2 days ago" },
    { type: "Sell", asset: "British Pound / US Dollar", invested: "266.53 $", leverage: "x500", profitLoss: "+300.00 $", profitPositive: true, closeTime: "2 days ago" },
    { type: "Sell", asset: "British Pound / US Dollar", invested: "266.37 $", leverage: "x500", profitLoss: "+300.00 $", profitPositive: true, closeTime: "6 days ago" },
    { type: "Sell", asset: "British Pound / US Dollar", invested: "266.14 $", leverage: "x500", profitLoss: "+296.00 $", profitPositive: true, closeTime: "6 days ago" },
    { type: "Sell", asset: "British Pound / US Dollar", invested: "266.54 $", leverage: "x500", profitLoss: "+297.00 $", profitPositive: true, closeTime: "7 days ago" },
    { type: "Sell", asset: "British Pound / US Dollar", invested: "266.15 $", leverage: "x500", profitLoss: "+293.00 $", profitPositive: true, closeTime: "8 days ago" },
    { type: "Sell", asset: "British Pound / US Dollar", invested: "266.57 $", leverage: "x500", profitLoss: "+293.00 $", profitPositive: true, closeTime: "8 days ago" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      {/* HEADER */}
      <div className="w-full max-w-5xl bg-white shadow rounded-lg p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/197/197397.png"
              alt="Flag"
              className="w-10 h-10 rounded-full border"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                IngridMartingale
              </h1>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                  Diamond
                </span>
                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
                  High-frequency
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                  Profit-generator
                </span>
              </div>
            </div>
          </div>

          <button className="mt-4 sm:mt-0 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Copy
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 text-center">
          <div className="bg-green-50 p-4 rounded">
            <p className="text-sm text-gray-600">Profit for copiers</p>
            <p className="text-2xl font-bold text-green-600">$313,858.89</p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-sm text-gray-600">Profit sharing fee</p>
            <p className="text-2xl font-bold text-gray-800">25%</p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-sm text-gray-600">Win rate</p>
            <p className="text-2xl font-bold text-green-600">89.92%</p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-sm text-gray-600">Trades</p>
            <p className="text-2xl font-bold text-gray-800">1220</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 mt-4 text-sm">
          <p>
            <span className="text-gray-600">Balance:</span>{" "}
            <span className="text-blue-600 font-semibold">$30,856</span>
          </p>
          <p>
            <span className="text-gray-600">Risk score:</span>{" "}
            <span className="text-red-600 font-semibold">9 🔺</span>
          </p>
        </div>
      </div>

      {/* ABOUT */}
      <div className="w-full max-w-5xl bg-white shadow rounded-lg p-6 mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">About me</h2>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          Ingrid Martingale es un sistema de trading poderoso y rentable que
          opera con el par GBP/USD, generando ganancias reales con riesgos
          mínimos.
        </p>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base mt-3">
          Resultados: más del 80% de las operaciones son ganadoras, con una
          ganancia máxima por operación superior a los 2000 USD.
        </p>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base mt-3">
          Nuestro proyecto es la opción ideal para aquellos que buscan
          resultados reales sin riesgos innecesarios.
        </p>
      </div>

      {/* CHART SECTION */}
      <div className="w-full max-w-5xl bg-white shadow rounded-lg p-6 mt-6">
        <h3 className="text-gray-700 text-sm mb-2">
          Realized profit/loss chart
        </h3>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">$13,888.00</h1>

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

        <div className="flex justify-center mt-4 space-x-3 text-xs">
          {["1W", "MTD", "1M", "YTD", "1Y"].map((label, idx) => (
            <button
              key={idx}
              className={`px-3 py-1 rounded-md border text-gray-600 ${
                label === "1M"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "hover:bg-gray-100"
              }`}
            >
              {label}
            </button>
          ))}
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

        {/* OPEN TRADES (unchanged) */}
        {activeTab === "open" && (
          <div className="flex flex-col items-center justify-center py-10 text-gray-500">
            <div className="text-4xl mb-2">📉</div>
            <p className="font-semibold">
              IngridMartingale doesn’t have any open trades
            </p>
            <p className="text-sm">
              Once IngridMartingale opens new trades, they will appear here.
            </p>
          </div>
        )}

        {/* CLOSED TRADES TABLE */}
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
                      <span className="text-red-600 bg-red-100 px-2 py-1 rounded text-xs font-semibold">
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

export default IngridMartingaleCard;
