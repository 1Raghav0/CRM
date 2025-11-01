// import React from "react";
// import { ArrowUpRight, ArrowDownRight } from "lucide-react";

// const marketData = [
//   {
//     name: "Gold / US Dollar (spot)",
//     ticker: "XAUUSD",
//     price: "$4,113.93",
//     change: "-0.13%",
//     amount: "-$5.34",
//     isPositive: false,
//     icon: "🟡",
//     category: "Commodities",
//   },
//   {
//     name: "Silver / US Dollar (spot)",
//     ticker: "XAGUSD",
//     price: "$48.747",
//     change: "-0.04%",
//     amount: "-$0.02",
//     isPositive: false,
//     icon: "⚪",
//     category: "Commodities",
//   },
//   {
//     name: "Palladium / US Dollar (spot)",
//     ticker: "XPDUSD",
//     price: "$1,435.90",
//     change: "+0.25%",
//     amount: "+$3.59",
//     isPositive: true,
//     icon: "🔵",
//     category: "Commodities",
//   },
//   {
//     name: "US Crude Oil",
//     ticker: "WTIUSD",
//     price: "$61.841",
//     change: "-0.15%",
//     amount: "-$0.095",
//     isPositive: false,
//     icon: "🛢️",
//     category: "Commodities",
//   },
//   {
//     name: "Brent Crude Oil",
//     ticker: "BRNUSD",
//     price: "$65.968",
//     change: "+0.21%",
//     amount: "+$0.141",
//     isPositive: true,
//     icon: "🛢️",
//     category: "Commodities",
//   },
//   {
//     name: "Copper / US Dollar (spot)",
//     ticker: "XCUUSD",
//     price: "$5.09718",
//     change: "+0.56%",
//     amount: "+$0.02826",
//     isPositive: true,
//     icon: "🧱",
//     category: "Commodities",
//   },
//   {
//     name: "Natural gas",
//     ticker: "NGCUSD",
//     price: "$3.343",
//     change: "+3.69%",
//     amount: "+$0.119",
//     isPositive: true,
//     icon: "💨",
//     category: "Commodities",
//   },
// ];

// const MarketTable = () => {
//   return (
//     <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 w-full overflow-x-auto">
//       <table className="min-w-full">
//         <thead>
//           <tr className="text-gray-500 text-xs sm:text-sm border-b">
//             <th className="text-left py-3 px-2 sm:px-4">NAME</th>
//             <th className="text-left py-3 px-2 sm:px-4">PRICE</th>
//             <th className="text-left py-3 px-2 sm:px-4">24H %</th>
//             <th className="text-left py-3 px-2 sm:px-4">24H % CHART</th>
//             <th className="text-right py-3 px-2 sm:px-4"></th>
//           </tr>
//         </thead>
//         <tbody>
//           {marketData.map((item, index) => (
//             <tr
//               key={index}
//               className="border-b last:border-0 hover:bg-gray-50 transition"
//             >
//               {/* NAME */}
//               <td className="py-4 px-2 sm:px-4 flex items-center gap-3">
//                 <span className="text-2xl">{item.icon}</span>
//                 <div>
//                   <div className="font-medium text-gray-800 text-sm sm:text-base">
//                     {item.name}
//                   </div>
//                   <div className="text-xs text-gray-500 flex items-center gap-1">
//                     {item.ticker}
//                     <span className="text-blue-500 bg-blue-50 px-1.5 py-0.5 rounded text-[11px]">
//                       {item.category}
//                     </span>
//                   </div>
//                 </div>
//               </td>

//               {/* PRICE */}
//               <td className="py-4 px-2 sm:px-4 text-gray-800 font-medium">
//                 {item.price}
//               </td>

//               {/* CHANGE */}
//               <td
//                 className={`py-4 px-2 sm:px-4 font-medium flex items-center gap-1 ${
//                   item.isPositive ? "text-green-500" : "text-red-500"
//                 }`}
//               >
//                 {item.isPositive ? (
//                   <ArrowUpRight size={14} />
//                 ) : (
//                   <ArrowDownRight size={14} />
//                 )}
//                 <span>{item.change}</span>
//                 <span className="text-gray-400 text-xs">{item.amount}</span>
//               </td>

//               {/* CHART (placeholder line shape) */}
//               <td className="py-4 px-2 sm:px-4">
//                 <div
//                   className={`h-8 w-24 sm:w-32 rounded-md ${
//                     item.isPositive ? "bg-green-100" : "bg-red-100"
//                   } flex items-center justify-center text-xs text-gray-400`}
//                 >
//                   Chart
//                 </div>
//               </td>

//               {/* BUTTONS */}
//               <td className="py-4 px-2 sm:px-4 text-right flex sm:flex-row flex-col gap-2 sm:gap-3 justify-end">
//                 <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-md font-medium">
//                   Buy
//                 </button>
//                 <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-md font-medium">
//                   Sell
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MarketTable;


import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const marketData = [
  {
    name: "Gold / US Dollar (spot)",
    ticker: "XAUUSD",
    price: "$4,113.93",
    change: "-0.13%",
    amount: "-$5.34",
    isPositive: false,
    icon: "🟡",
    category: "Commodities",
  },
  {
    name: "Silver / US Dollar (spot)",
    ticker: "XAGUSD",
    price: "$48.747",
    change: "-0.04%",
    amount: "-$0.02",
    isPositive: false,
    icon: "⚪",
    category: "Commodities",
  },
  {
    name: "Palladium / US Dollar (spot)",
    ticker: "XPDUSD",
    price: "$1,435.90",
    change: "+0.25%",
    amount: "+$3.59",
    isPositive: true,
    icon: "🔵",
    category: "Commodities",
  },
  {
    name: "US Crude Oil",
    ticker: "WTIUSD",
    price: "$61.841",
    change: "-0.15%",
    amount: "-$0.095",
    isPositive: false,
    icon: "🛢️",
    category: "Commodities",
  },
  {
    name: "Brent Crude Oil",
    ticker: "BRNUSD",
    price: "$65.968",
    change: "+0.21%",
    amount: "+$0.141",
    isPositive: true,
    icon: "🛢️",
    category: "Commodities",
  },
  {
    name: "Copper / US Dollar (spot)",
    ticker: "XCUUSD",
    price: "$5.09718",
    change: "+0.56%",
    amount: "+$0.02826",
    isPositive: true,
    icon: "🧱",
    category: "Commodities",
  },
  {
    name: "Natural gas",
    ticker: "NGCUSD",
    price: "$3.343",
    change: "+3.69%",
    amount: "+$0.119",
    isPositive: true,
    icon: "💨",
    category: "Commodities",
  },
];

const MarketTable = () => {
  const navigate = useNavigate();

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
              onClick={() =>
                navigate(`/commodity/${encodeURIComponent(item.ticker)}`, {
                  state: item,
                })
              }
              className="border-b last:border-0 hover:bg-gray-50 transition cursor-pointer"
            >
              {/* NAME */}
              <td className="py-4 px-2 sm:px-4 flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="font-medium text-gray-800 text-sm sm:text-base">
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

              {/* CHART (placeholder) */}
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
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-md font-medium">
                  Buy
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-md font-medium">
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

export default MarketTable;
