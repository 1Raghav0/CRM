import { useNavigate } from "react-router-dom";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const marketData = [
  {
    name: "nomo AI Index",
    ticker: "NMAI",
    price: "$357.13",
    change: "-0.93%",
    amount: "-$3.38",
    isPositive: false,
    icon: "🔵",
    category: "nomoAI",
  },
];

const NomoAi = () => {
    const navigate = useNavigate();

    const gotoNomoAI = () => {
        navigate("/copy-trading/nomo-ai-index")
    }
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 w-full overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="text-gray-500 text-xs sm:text-sm border-b">
            <th className="text-left py-3 px-2 sm:px-4">NAME</th>
            <th className="text-left py-3 px-2 sm:px-4">PRICE</th>
            <th className="text-left py-3 px-2 sm:px-4">24H %</th>
            <th className="text-left py-3 px-2 sm:px-4">24H % CHART</th>
            <th className="text-right py-3 px-2 sm:px-4"></th>
          </tr>
        </thead>
        <tbody>
          {marketData.map((item, index) => (
            <tr
              key={index}
              className="border-b last:border-0 hover:bg-gray-50 transition"
            >
              {/* NAME */}
              <td className="py-4 px-2 sm:px-4 flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="font-medium text-gray-800 text-sm sm:text-base cursor-pointer"
                  onClick={gotoNomoAI}>
                    {item.name}
                  </div>
                  <div className="text-xs text-gray-500 flex items-center gap-1">
                    {item.ticker}
                    <span className="text-blue-500 bg-blue-50 px-1.5 py-0.5 rounded text-[11px]">
                      {item.category}
                    </span>
                  </div>
                </div>
              </td>

              {/* PRICE */}
              <td className="py-4 px-2 sm:px-4 text-gray-800 font-medium">
                {item.price}
              </td>

              {/* CHANGE */}
              <td
                className={`py-4 px-2 sm:px-4 font-medium flex items-center gap-1 ${
                  item.isPositive ? "text-green-500" : "text-red-500"
                }`}
              >
                {item.isPositive ? (
                  <ArrowUpRight size={14} />
                ) : (
                  <ArrowDownRight size={14} />
                )}
                <span>{item.change}</span>
                <span className="text-gray-400 text-xs">{item.amount}</span>
              </td>

              {/* CHART (placeholder line shape) */}
              <td className="py-4 px-2 sm:px-4">
                <div
                  className={`h-8 w-24 sm:w-32 rounded-md ${
                    item.isPositive ? "bg-green-100" : "bg-red-100"
                  } flex items-center justify-center text-xs text-gray-400`}
                >
                  Chart
                </div>
              </td>

              {/* BUTTONS */}
              <td className="py-4 px-2 sm:px-4 text-right flex sm:flex-row flex-col gap-2 sm:gap-3 justify-end">
                <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm px-3 py-1.5 rounded-md font-medium"
                onClick={gotoNomoAI}>
                  Invest
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NomoAi;
