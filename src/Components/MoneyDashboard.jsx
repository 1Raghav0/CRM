// import { useNavigate } from "react-router-dom";
// import TransactionHistory from "./TransactionHistory";

// const MoneyDashboard = () => {
//   const navigate = useNavigate();

//   const gotoDeposit = () => navigate('/money/deposit');
//   const gotoWithdrawal = () => navigate('/money/withdrawal');
//   const gotoLearnMore = () => navigate('/money/50-deposit-bonus');
//   return (
//     <>
//     <div className="bg-gray-50 px-4 md:px-10 py-6 text-gray-800">
//       {/* Header */}
//       <div className="mb-6">
//         <h1 className="text-3xl font-bold">Money</h1>
//         <p className="text-gray-500 text-sm">
//           Check your balance, see your deposits and withdrawals, and manage your saved payment methods.
//         </p>
//       </div>

//       {/* Net Deposit Progress */}
//       <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col md:flex-row items-center justify-between mb-6">
//         <div className="flex items-center space-x-2">
//           <div className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-md text-sm font-medium">
//             Starter
//           </div>
//           <span className="text-gray-400 text-sm">→</span>
//           <div className="px-2 py-1 bg-amber-100 text-amber-700 rounded-md text-sm font-medium">
//             Bronze
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 mt-3 md:mt-0">
//           <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
//             <div className="absolute left-0 top-0 h-full bg-indigo-500 w-1/3"></div>
//           </div>
//           <p className="text-sm text-gray-500 mt-1">Deposit 250.00 to reach bronze level</p>
//         </div>
//       </div>

//       {/* Main Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Left Section */}
//         <div className="col-span-2 bg-white p-6 rounded-lg shadow-sm">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
//             <div>
//               <p className="text-gray-500 text-sm">Current balance</p>
//               <h2 className="text-3xl font-bold text-gray-900">$0.00</h2>
//             </div>
//             <div className="flex space-x-3 mt-3 md:mt-0">
//               <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium" onClick={gotoDeposit}>
//                 + Deposit
//               </button>
//               <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-medium" onClick={gotoWithdrawal}>
//                 Withdraw
//               </button>
//             </div>
//           </div>

//           {/* Status Tags */}
//           <div className="flex flex-wrap gap-2 mb-4">
//             <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
//               Pending 0
//             </span>
//             <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
//               Credit 0
//             </span>
//             <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-medium">
//               On hold 0
//             </span>
//           </div>

//           {/* Bonus Banner */}
//           <div className="bg-blue-50 border border-blue-100 rounded-md p-3 flex flex-col md:flex-row md:items-center md:justify-between text-sm">
//             <div className="flex items-center space-x-2">
//               <span className="text-blue-600 font-semibold">💸 Deposit today to get a 50% bonus</span>
//             </div>
//             <button onClick={gotoLearnMore}>
//               <a className="text-blue-600 font-medium mt-2 md:mt-0 hover:underline">
//               Learn more →
//             </a>
//             </button>
            
//           </div>

//           {/* Timeline Filter */}
//           <div className="flex justify-center md:justify-start space-x-3 mt-6">
//             {["1W", "MTD", "1M", "YTD", "1Y"].map((label, idx) => (
//               <button
//                 key={idx}
//                 className={`px-3 py-1 text-sm font-medium rounded-md ${
//                   label === "1M"
//                     ? "bg-gray-800 text-white"
//                     : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                 }`}
//               >
//                 {label}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center">
//           <div className="text-5xl mb-3">👻</div>
//           <h3 className="text-lg font-semibold mb-2">You have no payment methods</h3>
//           <p className="text-sm text-gray-500 mb-4">
//             Your saved payment methods will appear here
//           </p>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium" onClick={gotoDeposit}>
//             + Deposit
//           </button>
//         </div>
//       </div>
//     </div>


//     <div className="px-4 md:px-24 lg:px-36">
//         <TransactionHistory />
//     </div>
    
//     </>
//   );
// };

// export default MoneyDashboard;



import { useNavigate } from "react-router-dom";
import TransactionHistory from "./TransactionHistory";

const MoneyDashboard = () => {
  const navigate = useNavigate();

  const gotoDeposit = () => navigate('/money/deposit');
  const gotoWithdrawal = () => navigate('/money/withdrawal');
  const gotoLearnMore = () => navigate('/money/50-deposit-bonus');

  return (
    <>
      <div className="bg-gray-50 px-4 md:px-10 py-8 text-gray-800 min-h-[70vh]">
        {/* Header */}
        <div className="mb-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
                Money
              </h1>
              <p className="text-gray-500 text-sm mt-1 max-w-2xl">
                Check your balance, see deposits & withdrawals, and manage saved payment methods.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-sm text-gray-500 text-right">
                <div className="text-xs uppercase tracking-wide">Account tier</div>
                <div className="mt-1 inline-flex items-center gap-2">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold">Starter</span>
                  <span className="text-gray-400 text-xs">→</span>
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">Bronze</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT - Main card */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6 ring-1 ring-gray-50">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-gray-500 text-sm">Current balance</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-1">$0.00</h2>
              </div>

              <div className="flex items-center gap-3">
                <button
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow-sm transition"
                  onClick={gotoDeposit}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Deposit
                </button>

                <button
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition"
                  onClick={gotoWithdrawal}
                >
                  Withdraw
                </button>
              </div>
            </div>

            {/* Status badges */}
            <div className="flex flex-wrap gap-2 mt-5">
              <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium shadow-sm">Pending 0</span>
              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium shadow-sm">Credit 0</span>
              <span className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-medium shadow-sm">On hold 0</span>
            </div>

            {/* Bonus Banner */}
            <div className="mt-6 bg-gradient-to-r from-blue-50/70 to-white border border-blue-100 rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700">
                  💸
                </div>
                <div>
                  <div className="text-sm font-semibold text-blue-700">Deposit today to get a 50% bonus</div>
                  <div className="text-xs text-gray-500 mt-0.5">Limited time offer — terms apply</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={gotoDeposit}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-semibold transition shadow"
                >
                  Deposit now
                </button>
                <button onClick={gotoLearnMore} className="text-blue-600 text-sm font-medium hover:underline">
                  Learn more →
                </button>
              </div>
            </div>

            {/* Timeline / filters */}
            <div className="mt-6 border-t pt-5 flex items-center justify-start gap-4">
              <div className="text-sm text-gray-500">Range</div>
              <div className="flex items-center gap-2">
                {["1W", "MTD", "1M", "YTD", "1Y"].map((label) => (
                  <button
                    key={label}
                    className={`px-3 py-1 text-sm rounded-md font-medium transition ${label === "1M" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT - Payment methods */}
          <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center gap-4 ring-1 ring-gray-50">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-gray-100 to-white shadow-sm">
              <div className="text-4xl">👻</div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">No payment methods yet</h3>
              <p className="text-sm text-gray-500 mt-2">Add a card or crypto wallet to make instant deposits and withdrawals.</p>
            </div>

            <button
              className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
              onClick={gotoDeposit}
            >
              + Add payment method
            </button>

            <div className="text-xs text-gray-400 mt-2">Saved methods show up here once added</div>
          </div>
        </div>
      </div>

      {/* Transactions area (keeps original placement but improved padding) */}
      <div className="px-4 md:px-10 lg:px-24 mt-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm p-6 ring-1 ring-gray-50">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Transaction history</h4>
            <TransactionHistory />
          </div>
        </div>
      </div>
    </>
  );
};

export default MoneyDashboard;
