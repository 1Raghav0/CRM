import React from "react";
import { Star } from "lucide-react"; // <-- Make sure lucide-react is installed

const stocksData = [
  { name: "Home Depot", symbol: "HD", price: "$389.14", change: "+0.28%", changeValue: "+$1.09" },
  { name: "Meta Platforms", symbol: "META", price: "$739.96", change: "+0.39%", changeValue: "+$2.91" },
  { name: "Johnson & Johnson", symbol: "JNJ", price: "$190.85", change: "-0.33%", changeValue: "-$0.63" },
  { name: "JPMorgan Chase & Co", symbol: "JPM", price: "$300.89", change: "+1.57%", changeValue: "+$4.66" },
  { name: "Coca-Cola Company", symbol: "KO", price: "$69.84", change: "-0.07%", changeValue: "-$0.05" },
  { name: "Mastercard", symbol: "MA", price: "$574.80", change: "-0.36%", changeValue: "-$2.09" },
  { name: "International Business Machines", symbol: "IBM", price: "$308.05", change: "+6.84%", changeValue: "+$19.71" },
  { name: "Walt Disney Company", symbol: "DIS", price: "$111.72", change: "-1.47%", changeValue: "-$1.67" },
  { name: "Chevron Corporation", symbol: "CVX", price: "$156.03", change: "-0.48%", changeValue: "-$0.75" }
];

const StocksTable = () => {
  return (
    <div className="overflow-x-auto mt-4 w-full">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-50 text-gray-700 text-sm sm:text-base">
            <th className="px-4 py-3 text-left font-semibold">Name</th>
            <th className="px-4 py-3 text-left font-semibold">Price</th>
            <th className="px-4 py-3 text-left font-semibold">24h %</th>
            <th className="px-4 py-3 text-left font-semibold">24h Chart</th>
            <th className="px-4 py-3 font-semibold text-center">Actions</th>
          </tr>
        </thead>

        <tbody className="bg-white">
          {stocksData.map((stock, index) => {
            const isPositive = parseFloat(stock.change) > 0;

            return (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition-colors duration-200 text-sm sm:text-base"
              >
                {/* Name */}
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center space-x-3">
                    <Star className="w-4 h-4 text-gray-400 cursor-pointer hover:text-yellow-400" />
                    <div>
                      <div className="font-medium text-gray-800">{stock.name}</div>
                      <div className="text-gray-500 text-xs">{stock.symbol}</div>
                    </div>
                  </div>
                </td>

                {/* Price */}
                <td className="px-4 py-3 font-medium text-gray-800 whitespace-nowrap">
                  {stock.price}
                </td>

                {/* 24h % */}
                <td
                  className={`px-4 py-3 font-semibold ${
                    isPositive ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {stock.change}
                </td>

                {/* 24h Chart */}
                <td className="px-4 py-3">
                  <div
                    className={`h-6 w-24 sm:w-32 rounded-full ${
                      isPositive ? "bg-green-200" : "bg-red-200"
                    }`}
                  ></div>
                </td>

                {/* Actions */}
                <td className="px-4 py-3 text-center whitespace-nowrap">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-2 transition">
                    Buy
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition">
                    Sell
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StocksTable;
