import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

// Generate fake chart data
const generateChartData = (price) => {
  const base = parseFloat(price.replace(/[^0-9.]/g, "")) || 1;
  return Array.from({ length: 20 }, (_, i) => ({
    time: `T${i}`,
    price: base + (Math.random() - 0.5) * base * 0.05,
  }));
};

const CryptoDashboard = ({ selectedCrypto }) => {
  const chartData = useMemo(
    () => generateChartData(selectedCrypto.price),
    [selectedCrypto]
  );

  const isPositive = selectedCrypto.change.startsWith("+");

  return (
    <div className="max-w-6xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-sm">
      <div className="flex flex-wrap items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {selectedCrypto.name} ({selectedCrypto.symbol})
          </h2>
          <p className="text-2xl font-semibold text-gray-800">
            {selectedCrypto.price}
          </p>
          <p
            className={`font-medium text-sm ${
              isPositive ? "text-green-600" : "text-red-600"
            }`}
          >
            {selectedCrypto.change}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <XAxis dataKey="time" hide />
            <YAxis hide />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #ddd",
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
    </div>
  );
};

export default CryptoDashboard;
