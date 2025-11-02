import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, ArrowDownRight, Star } from "lucide-react";

const forexData = [
  { name: "Euro / US Dollar", symbol: "EUR/USD", price: "$1.16283", change: "+0.1%", changeValue: "+$0.00113", up: true },
  { name: "British Pound / US Dollar", symbol: "GBP/USD", price: "$1.33119", change: "-0.01%", changeValue: "-$0.00134", up: false },
  { name: "Euro / Japanese Yen", symbol: "EUR/JPY", price: "¥177.808", change: "+0.31%", changeValue: "+¥0.554", up: true },
  { name: "US Dollar / Japanese Yen", symbol: "USD/JPY", price: "¥152.902", change: "+0.21%", changeValue: "+¥0.321", up: true },
  { name: "Australian Dollar / US Dollar", symbol: "AUD/USD", price: "$0.65156", change: "+0.05%", changeValue: "+$0.00033", up: true },
  { name: "US Dollar / Swiss Franc", symbol: "USD/CHF", price: "CHF0.79669", change: "+0.23%", changeValue: "+CHF0.00181", up: true },
  { name: "British Pound / Japanese Yen", symbol: "GBP/JPY", price: "¥203.544", change: "+0.11%", changeValue: "+¥0.221", up: true },
  { name: "US Dollar / Canadian Dollar", symbol: "USD/CAD", price: "$1.40062", change: "+0.14%", changeValue: "+$0.00202", up: true },
  { name: "Euro / British Pound", symbol: "EUR/GBP", price: "£0.87373", change: "+0.24%", changeValue: "+£0.00211", up: true },
  { name: "NZ Dollar / US Dollar", symbol: "NZD/USD", price: "$0.60654", change: "-0.05%", changeValue: "-$0.00031", up: false },
];

const ForexMarketTable = () => {
  const navigate = useNavigate();

  const handleRowClick = (item) => {
    navigate(`/forex/${encodeURIComponent(item.symbol)}`, { state: item });
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow p-4 md:p-6 overflow-x-auto">
      <table className="w-full min-w-[700px] text-left">
        <thead>
          <tr className="text-gray-500 text-sm border-b">
            <th className="pb-3 font-semibold">Name</th>
            <th className="pb-3 font-semibold">Price</th>
            <th className="pb-3 font-semibold">24H %</th>
            <th className="pb-3 font-semibold">24H % Chart</th>
            <th className="pb-3 font-semibold text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {forexData.map((item, index) => (
            <tr key={index} className="border-b last:border-none hover:bg-gray-50 transition">
              <td
                onClick={() => handleRowClick(item)}
                className="py-3 flex items-center gap-3 cursor-pointer"
              >
                <Star size={18} className="text-gray-400" />
                <div>
                  <p className="font-semibold text-gray-800 hover:text-blue-600">{item.name}</p>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    {item.symbol}
                    <span className="bg-purple-100 text-purple-700 text-[10px] px-1.5 py-0.5 rounded">
                      Forex
                    </span>
                  </p>
                </div>
              </td>
              <td className="py-3 text-gray-800">{item.price}</td>
              <td
                className={`py-3 font-medium flex items-center gap-1 ${item.up ? "text-green-600" : "text-red-500"}`}
              >
                {item.up ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                <div className="flex flex-col">
                  <span>{item.change}</span>
                  <span className="text-gray-500 text-xs">{item.changeValue}</span>
                </div>
              </td>
              <td className="py-3">
                <div
                  className={`h-8 w-24 rounded overflow-hidden bg-gradient-to-r ${item.up ? "from-green-200 to-green-400" : "from-red-200 to-red-400"}`}
                ></div>
              </td>
              <td className="py-3 flex items-center justify-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/forex/${encodeURIComponent(item.symbol)}`, { state: item });
                  }}
                  className="bg-green-500 text-white px-4 py-1.5 rounded hover:bg-green-600 transition"
                >
                  Buy
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/forex/${encodeURIComponent(item.symbol)}`, { state: item });
                  }}
                  className="bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600 transition"
                >
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

export default ForexMarketTable;
