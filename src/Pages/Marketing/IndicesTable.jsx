import React from "react";
import { ArrowUpRight, ArrowDownRight, Star } from "lucide-react";

const indicesData = [
  { name: "DAX 40 (Germany)", price: "€24,212.10", change: "-0.05%", changeValue: "-€12.2", up: false },
  { name: "CAC 40 (France)", price: "€8,217.90", change: "-0.57%", changeValue: "-€47", up: false },
  { name: "FTSE 100 Index (UK)", price: "€9,636.00", change: "+0.47%", changeValue: "+€45.5", up: true },
  { name: "EURO STOXX 50", price: "€5,670.50", change: "-0.35%", changeValue: "-€20", up: false },
  { name: "IBEX 35 (Spain)", price: "€15,853.80", change: "+0.11%", changeValue: "+€17.6", up: true },
  { name: "Dow Jones (US)", price: "$47,205.58", change: "+1.02%", changeValue: "+$475.94", up: true },
  { name: "S&P 500 (US)", price: "$6,792.16", change: "+0.7%", changeValue: "+$469.9", up: true },
  { name: "Nasdaq-100 (US)", price: "$25,377.46", change: "+0.96%", changeValue: "+$242.5", up: true },
  { name: "Nikkei 225 (Japan)", price: "¥49,509.50", change: "+1%", changeValue: "+¥400", up: true },
];

const IndicesTable = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-900 rounded-2xl shadow p-4 md:p-6 overflow-x-auto">
      <table className="w-full min-w-[700px] text-left">
        <thead>
          <tr className="text-gray-500 text-sm border-b">
            <th className="pb-3 font-semibold">Name</th>
            <th className="pb-3 font-semibold">Price</th>
            <th className="pb-3 font-semibold">24H %</th>
            <th className="pb-3 font-semibold">24H Chart</th>
            <th className="pb-3 font-semibold text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {indicesData.map((item, index) => (
            <tr
              key={index}
              className="border-b last:border-none hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              {/* Name */}
              <td className="py-3 flex items-center gap-3">
                <Star size={18} className="text-gray-400" />
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-100">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    <span className="bg-blue-100 text-blue-700 text-[10px] px-1.5 py-0.5 rounded">
                      Indices
                    </span>
                  </p>
                </div>
              </td>

              {/* Price */}
              <td className="py-3 text-gray-800 dark:text-gray-100">{item.price}</td>

              {/* Change */}
              <td
                className={`py-3 font-medium flex items-center gap-1 ${
                  item.up ? "text-green-600" : "text-red-500"
                }`}
              >
                {item.up ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                <span>{item.change}</span>
                <span className="text-gray-500 text-xs">{item.changeValue}</span>
              </td>

              {/* 24H Chart */}
              <td className="py-3">
                <div
                  className={`h-8 w-24 rounded overflow-hidden bg-gradient-to-r ${
                    item.up ? "from-green-200 to-green-400" : "from-red-200 to-red-400"
                  }`}
                ></div>
              </td>

              {/* Action Buttons */}
              <td className="py-3 flex items-center justify-center gap-2">
                <button className="bg-green-500 text-white px-4 py-1.5 rounded hover:bg-green-600 transition">
                  Buy
                </button>
                <button className="bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600 transition">
                  Sell
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IndicesTable;
