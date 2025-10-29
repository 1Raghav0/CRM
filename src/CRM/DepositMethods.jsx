// import React from "react";

// const methods = [
//   { name: "UPI", img: "/images/upi.png", time: "0–2 hours" },
//   { name: "Tether TRC-20", img: "/images/tether-trc.png", time: "0–2 hours" },
//   { name: "Bitcoin", img: "/images/bitcoin.png", time: "0–2 hours" },
//   { name: "Ethereum", img: "/images/ethereum.png", time: "0–2 hours" },
//   { name: "Tether ERC-20", img: "/images/tether-erc.png", time: "0–2 hours" },
//   { name: "USD Coin SOL", img: "/images/usdc-sol.png", time: "0–2 hours" },
//   { name: "USD Coin ERC-20", img: "/images/usdc-erc.png", time: "0–2 hours" },
// ];

// const DepositMethods = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
//       <div className="bg-white rounded-xl shadow-md p-6 md:p-10 w-full max-w-3xl">
//         {/* Header */}
//         <div className="text-center mb-6">
//           <div className="flex justify-center mb-3">
//             <div className="bg-blue-100 p-3 rounded-full">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 text-blue-600"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zm0 0V4m0 12v4m0 0h4m-4 0H8"
//                 />
//               </svg>
//             </div>
//           </div>
//           <h2 className="text-2xl font-semibold text-gray-800 mb-2">
//             Select deposit method
//           </h2>
//           <p className="text-gray-500 text-sm">
//             Deposit methods depend on your country of residence. All deposits are secure
//           </p>
//         </div>

//         {/* Methods Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
//           {methods.map((m, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center justify-center border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200 cursor-pointer bg-white"
//             >
//               {/* Replace img src with your own icons */}
//               <img src={m.img} alt={m.name} className="h-8 mb-2" />
//               <p className="font-medium text-gray-800 text-sm">{m.name}</p>
//               <div className="flex items-center text-xs text-gray-500 mt-1">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-4 w-4 mr-1 text-gray-400"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//                 {m.time}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Footer badges */}
//         <div className="flex flex-wrap justify-center gap-3 text-xs font-medium">
//           <span className="px-3 py-1 rounded-full bg-green-100 text-green-700">
//             ✅ Secure payments
//           </span>
//           <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700">
//             🎁 Deposit bonuses
//           </span>
//           <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700">
//             💸 Fees from 0%
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DepositMethods;

import React from "react";
import {
  SiTether,
  SiBitcoin,
  SiEthereum,
  SiSolana,
} from "react-icons/si";
import { FaCreditCard, FaDollarSign, FaClock } from "react-icons/fa";

const methods = [
  { name: "UPI", icon: <FaCreditCard className="text-[#5c9e31] text-3xl" />, time: "0–2 hours" },
  { name: "Tether TRC-20", icon: <SiTether className="text-green-500 text-3xl" />, time: "0–2 hours" },
  { name: "Bitcoin", icon: <SiBitcoin className="text-orange-500 text-3xl" />, time: "0–2 hours" },
  { name: "Ethereum", icon: <SiEthereum className="text-indigo-500 text-3xl" />, time: "0–2 hours" },
  { name: "Tether ERC-20", icon: <SiTether className="text-green-600 text-3xl" />, time: "0–2 hours" },
  { name: "USD Coin SOL", icon: <SiSolana className="text-purple-500 text-3xl" />, time: "0–2 hours" },
  { name: "USD Coin ERC-20", icon: <FaDollarSign className="text-blue-600 text-3xl" />, time: "0–2 hours" },
];

const DepositMethods = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
      <div className="bg-white rounded-xl shadow-md p-6 md:p-10 w-full max-w-3xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-3">
            <div className="bg-blue-100 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zm0 0V4m0 12v4m0 0h4m-4 0H8"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Select deposit method
          </h2>
          <p className="text-gray-500 text-sm">
            Deposit methods depend on your country of residence. All deposits are secure.
          </p>
        </div>

        {/* Deposit Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {methods.map((method, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200 cursor-pointer bg-white"
            >
              <div className="mb-2">{method.icon}</div>
              <p className="font-medium text-gray-800 text-sm text-center">{method.name}</p>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <FaClock className="text-gray-400 mr-1" />
                {method.time}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Badges */}
        <div className="flex flex-wrap justify-center gap-3 text-xs font-medium">
          <span className="px-3 py-1 rounded-full bg-green-100 text-green-700">
            ✅ Secure payments
          </span>
          <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700">
            🎁 Deposit bonuses
          </span>
          <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700">
            💸 Fees from 0%
          </span>
        </div>
      </div>
    </div>
  );
};

export default DepositMethods;
