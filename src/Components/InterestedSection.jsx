// import React from "react";
// import {
//   SiBinance,
//   SiGoogle,
//   SiDogecoin,
// } from "react-icons/si";
// import { FaStar, FaRobot } from "react-icons/fa";
// import { GiFrenchFries } from "react-icons/gi"; // Used for McDonald's

// const data = [
//   {
//     name: "nomo AI index",
//     ticker: "NMAI",
//     price: "$358.42",
//     change: "+0.91%",
//     positive: true,
//     badge: "AI powered",
//     icon: <FaRobot className="text-blue-500 text-3xl" />,
//     bg: "from-blue-50 to-white",
//   },
//   {
//     name: "McDonald's",
//     ticker: "MCD",
//     price: "$302.92",
//     change: "-1.79%",
//     positive: false,
//     buySell: true,
//     icon: <GiFrenchFries className="text-red-500 text-3xl" />,
//     bg: "from-red-50 to-white",
//   },
//   {
//     name: "Binance Coin",
//     ticker: "BNB/USD",
//     price: "$1,110.251",
//     change: "-2.49%",
//     positive: false,
//     icon: <SiBinance className="text-yellow-500 text-3xl" />,
//     bg: "from-yellow-50 to-white",
//   },
//   {
//     name: "Alphabet",
//     ticker: "GOOG",
//     price: "$273.45",
//     change: "+1.61%",
//     positive: true,
//     icon: <SiGoogle className="text-red-400 text-3xl" />,
//     bg: "from-yellow-50 to-white",
//   },
//   {
//     name: "Dogecoin",
//     ticker: "DOGE/USD",
//     price: "$0.19737",
//     change: "-0.5%",
//     positive: false,
//     icon: <SiDogecoin className="text-yellow-400 text-3xl" />,
//     bg: "from-yellow-50 to-white",
//   },
// ];

// const InterestedSection = () => {
//   return (
//     <div className="px-4 py-8 bg-white">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
//           You may be interested
//         </h2>

//         {/* Horizontal Scroll Container */}
//         <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-thin scrollbar-thumb-gray-300">
//           {data.map((item, index) => (
//             <div
//               key={index}
//               className={`shrink-0 w-64 h-72 sm:w-72 rounded-xl border border-gray-200 bg-linear-to-b ${item.bg} p-5 hover:shadow-md transition-shadow duration-200`}
//             >
//               {/* Top section */}
//               <div className="flex justify-between items-start mb-6">
//                 <div className="flex items-center gap-2">
//                   {item.icon}
//                   <div>
//                     <p className="font-semibold text-gray-800 text-sm md:text-base">
//                       {item.name}
//                     </p>
//                     <p className="text-xs text-gray-500">{item.ticker}</p>
//                   </div>
//                 </div>
//                 <FaStar className="text-gray-300 text-lg" />
//               </div>

//               {/* Badge */}
//               {item.badge && (
//                 <div className="inline-flex items-center text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full mb-6 font-medium">
//                   <FaRobot className="mr-1 text-purple-500" /> {item.badge}
//                 </div>
//               )}

//               {/* Price */}
//               <p className="text-2xl font-bold text-gray-900">{item.price}</p>
//               <p
//                 className={`text-sm font-medium ${
//                   item.positive ? "text-green-600" : "text-red-600"
//                 }`}
//               >
//                 {item.change}
//               </p>

//               {/* Buy/Sell buttons */}
//               {item.buySell && (
//                 <div className="flex gap-2 mt-8">
//                   <button className="flex-1 bg-green-500 text-white rounded-md py-1.5 text-sm font-medium hover:bg-green-600">
//                     Buy
//                   </button>
//                   <button className="flex-1 bg-red-500 text-white rounded-md py-1.5 text-sm font-medium hover:bg-red-600">
//                     Sell
//                   </button>
//                 </div>
//               )}

//               {/* Mock chart line */}
//               <div className="mt-4 h-10 w-full overflow-hidden">
//                 <svg
//                   viewBox="0 0 100 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-full h-full opacity-60 text-gray-400"
//                 >
//                   <path
//                     d="M0 15 Q10 10, 20 15 T40 15 T60 10 T80 14 T100 12"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     fill="none"
//                   />
//                 </svg>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InterestedSection;


import React from "react";
import { SiBinance, SiGoogle, SiDogecoin } from "react-icons/si";
import { FaStar, FaRobot } from "react-icons/fa";
import { GiFrenchFries } from "react-icons/gi"; // Used for McDonald's

const data = [
  {
    name: "nomo AI index",
    ticker: "NMAI",
    price: "$358.42",
    change: "+0.91%",
    positive: true,
    badge: "AI powered",
    icon: <FaRobot className="text-blue-500 text-3xl" />,
    bg: "from-blue-50 to-white",
  },
  {
    name: "McDonald's",
    ticker: "MCD",
    price: "$302.92",
    change: "-1.79%",
    positive: false,
    icon: <GiFrenchFries className="text-red-500 text-3xl" />,
    bg: "from-red-50 to-white",
  },
  {
    name: "Binance Coin",
    ticker: "BNB/USD",
    price: "$1,110.251",
    change: "-2.49%",
    positive: false,
    icon: <SiBinance className="text-yellow-500 text-3xl" />,
    bg: "from-yellow-50 to-white",
  },
  {
    name: "Alphabet",
    ticker: "GOOG",
    price: "$273.45",
    change: "+1.61%",
    positive: true,
    icon: <SiGoogle className="text-red-400 text-3xl" />,
    bg: "from-yellow-50 to-white",
  },
  {
    name: "Dogecoin",
    ticker: "DOGE/USD",
    price: "$0.19737",
    change: "-0.5%",
    positive: false,
    icon: <SiDogecoin className="text-yellow-400 text-3xl" />,
    bg: "from-yellow-50 to-white",
  },
];

const InterestedSection = () => {
  return (
    <div className="px-4 py-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          You may be interested
        </h2>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-thin scrollbar-thumb-gray-300 hide-scrollbar">
          {data.map((item, index) => (
            <div
              key={index}
              className={`group shrink-0 w-64 h-72 sm:w-72 rounded-xl border border-gray-200 bg-linear-to-b ${item.bg} p-5 hover:shadow-md transition-shadow duration-200`}
            >
              {/* Top section */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-2">
                  {item.icon}
                  <div>
                    <p className="font-semibold text-gray-800 text-sm md:text-base">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500">{item.ticker}</p>
                  </div>
                </div>
                <FaStar className="text-gray-300 text-lg" />
              </div>

              {/* Badge */}
              {item.badge && (
                <div className="inline-flex items-center text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full mb-6 font-medium">
                  <FaRobot className="mr-1 text-purple-500" /> {item.badge}
                </div>
              )}

              {/* Price */}
              <p className="text-2xl font-bold text-gray-900">{item.price}</p>
              <p
                className={`text-sm font-medium ${
                  item.positive ? "text-green-600" : "text-red-600"
                }`}
              >
                {item.change}
              </p>

              {/* Buy/Sell buttons (hidden until hover) */}
              {item.name !== "nomo AI index" && (
                <div className="flex gap-2 mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="flex-1 bg-green-500 text-white rounded-md py-1.5 text-sm font-medium hover:bg-green-600">
                    Buy
                  </button>
                  <button className="flex-1 bg-red-500 text-white rounded-md py-1.5 text-sm font-medium hover:bg-red-600">
                    Sell
                  </button>
                </div>
              )}

              {/* Mock chart line */}
              <div className="mt-4 h-10 w-full overflow-hidden">
                <svg
                  viewBox="0 0 100 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full opacity-60 text-gray-400"
                >
                  <path
                    d="M0 15 Q10 10, 20 15 T40 15 T60 10 T80 14 T100 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InterestedSection;
