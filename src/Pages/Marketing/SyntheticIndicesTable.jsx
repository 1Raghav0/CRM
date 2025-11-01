// import { useNavigate } from "react-router-dom";
// import { Star } from "lucide-react";

// const syntheticIndicesData = [
//   { name: "POP-400", symbol: "POP-400", price: "$97,124.52", change: "+0.39%", chart: "📈" },
//   { name: "DROP-400", symbol: "DROP-400", price: "$100,336.53", change: "+0.22%", chart: "📉" },
//   { name: "POP-600", symbol: "POP-600", price: "$103,886.38", change: "+0.33%", chart: "📈" },
//   { name: "DROP-600", symbol: "DROP-600", price: "$103,729.15", change: "+0.26%", chart: "📉" },
//   { name: "POP-800", symbol: "POP-800", price: "$100,262.69", change: "+0.18%", chart: "📈" },
//   { name: "DROP-800", symbol: "DROP-800", price: "$100,841.21", change: "+0.82%", chart: "📈" },
//   { name: "POP-1000", symbol: "POP-1000", price: "$103,388.32", change: "-0.31%", chart: "📉" },
//   { name: "DROP-1000", symbol: "DROP-1000", price: "$94,860.43", change: "-0.04%", chart: "📉" },
//   { name: "POP-1200", symbol: "POP-1200", price: "$101,045.21", change: "-0.44%", chart: "📉" },
// ];

// const SyntheticIndicesTable = () => {
//   const navigate = useNavigate();

//   const handleNavigate = (item) => {
//     navigate(`/synthetic/${encodeURIComponent(item.name)}`, { state: item });
//   };

//   return (
//     <div className="overflow-x-auto mt-4">
//       <table className="min-w-full table-auto text-sm sm:text-base">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="px-4 py-2 text-left font-semibold text-gray-700">Name</th>
//             <th className="px-4 py-2 text-left font-semibold text-gray-700">Price</th>
//             <th className="px-4 py-2 text-left font-semibold text-gray-700">24h %</th>
//             <th className="px-4 py-2 text-left font-semibold text-gray-700">24h Chart</th>
//             <th className="px-4 py-2 text-center font-semibold text-gray-700">Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {syntheticIndicesData.map((item, index) => {
//             const isPositive = parseFloat(item.change) > 0;
//             return (
//               <tr
//                 key={index}
//                 className="border-b hover:bg-gray-50 transition-colors duration-200"
//               >
//                 <td
//                   className="px-4 py-2 whitespace-nowrap cursor-pointer"
//                   onClick={() => handleNavigate(item)}
//                 >
//                   <div className="flex items-center gap-3">
//                     <Star className="w-4 h-4 text-gray-400 hover:text-yellow-400 transition" />
//                     <div>
//                       <p className="font-medium text-gray-800 hover:text-blue-600 transition">
//                         {item.name}
//                       </p>
//                       <p className="text-gray-500 text-xs">{item.symbol}</p>
//                     </div>
//                   </div>
//                 </td>

//                 <td className="px-4 py-2 text-gray-800 font-medium whitespace-nowrap">
//                   {item.price}
//                 </td>

//                 <td
//                   className={`px-4 py-2 font-semibold ${
//                     isPositive ? "text-green-500" : "text-red-500"
//                   }`}
//                 >
//                   {item.change}
//                 </td>

//                 <td className="px-4 py-2 text-gray-600 text-lg">{item.chart}</td>

//                 <td className="px-4 py-2 text-center whitespace-nowrap">
//                   <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-2 text-sm sm:text-base transition">
//                     Buy
//                   </button>
//                   <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm sm:text-base transition">
//                     Sell
//                   </button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SyntheticIndicesTable;


import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";

const syntheticIndicesData = [
  { name: "POP-400", symbol: "POP-400", price: "$97,124.52", change: "+0.39%", chart: "📈" },
  { name: "DROP-400", symbol: "DROP-400", price: "$100,336.53", change: "+0.22%", chart: "📉" },
  { name: "POP-600", symbol: "POP-600", price: "$103,886.38", change: "+0.33%", chart: "📈" },
  { name: "DROP-600", symbol: "DROP-600", price: "$103,729.15", change: "+0.26%", chart: "📉" },
  { name: "POP-800", symbol: "POP-800", price: "$100,262.69", change: "+0.18%", chart: "📈" },
  { name: "DROP-800", symbol: "DROP-800", price: "$100,841.21", change: "+0.82%", chart: "📈" },
  { name: "POP-1000", symbol: "POP-1000", price: "$103,388.32", change: "-0.31%", chart: "📉" },
  { name: "DROP-1000", symbol: "DROP-1000", price: "$94,860.43", change: "-0.04%", chart: "📉" },
  { name: "POP-1200", symbol: "POP-1200", price: "$101,045.21", change: "-0.44%", chart: "📉" },
];

const SyntheticIndicesTable = () => {
  const navigate = useNavigate();

  const handleNavigate = (item) => {
    navigate(`/synthetic/${encodeURIComponent(item.name)}`, { state: item });
  };

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full table-auto text-sm sm:text-base">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-semibold text-gray-700">Name</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">Price</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">24h %</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">24h Chart</th>
            <th className="px-4 py-2 text-center font-semibold text-gray-700">Actions</th>
          </tr>
        </thead>

        <tbody>
          {syntheticIndicesData.map((item, index) => {
            const isPositive = parseFloat(item.change) > 0;
            return (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition-colors duration-200"
              >
                <td
                  className="px-4 py-2 whitespace-nowrap cursor-pointer"
                  onClick={() => handleNavigate(item)}
                >
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-gray-400 hover:text-yellow-400 transition" />
                    <div>
                      <p className="font-medium text-gray-800 hover:text-blue-600 transition">
                        {item.name}
                      </p>
                      <p className="text-gray-500 text-xs">{item.symbol}</p>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-2 text-gray-800 font-medium whitespace-nowrap">
                  {item.price}
                </td>

                <td
                  className={`px-4 py-2 font-semibold ${
                    isPositive ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {item.change}
                </td>

                <td className="px-4 py-3">
                  <div
                    className={`h-6 w-24 sm:w-32 rounded-full ${
                      isPositive ? "bg-green-200" : "bg-red-200"
                    }`}
                  ></div>
                </td>

                <td className="px-4 py-2 text-center whitespace-nowrap">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/synthetic/${encodeURIComponent(item.name)}`, { state: item });
                    }}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-2 text-sm sm:text-base transition"
                  >
                    Buy
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/synthetic/${encodeURIComponent(item.name)}`, { state: item });
                    }}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm sm:text-base transition"
                  >
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

export default SyntheticIndicesTable;
