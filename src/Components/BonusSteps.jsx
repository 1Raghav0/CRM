import React from "react";
import { useNavigate } from "react-router-dom";
import { FiDownload, FiSettings, FiCheck } from "react-icons/fi";

const BonusSteps = () => {
  const navigate = useNavigate();

  const handleDepositClick = () => navigate("/money/deposit");
  const handleTradeClick = () => navigate("/trading/marketing");
  const handleTermsClick = () => navigate("/bonus-terms");

  return (
    <div className="w-full bg-white rounded-xl shadow-sm p-5 sm:p-8 mt-6 md:p-20 lg:p-30">
      {/* Header */}
      <div className="flex md:flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
            Receive bonuses in 3 steps!
          </h2>
          <p className="text-gray-600 text-md mt-1">
            Make sure to perform all the steps below within the limited timeframe.
          </p>
        </div>

        {/* Bonus Icon */}
        <div className="mt-8 sm:mt-8">
          <img
            src="/50-percent-bonus.webp"
            alt="50% Bonus"
            className="w-36 h-36 sm:w-48 sm:h-48"
          />
        </div>
      </div>

      {/* Steps Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-stretch border-t border-gray-200 pt-6">
        {/* Step 1 */}
        <div className="flex-1 flex flex-col items-start text-left sm:items-center sm:text-center px-2 mb-6 sm:mb-0">
          <FiDownload className="w-7 h-7 text-blue-600 mb-2" />
          <h3 className="text-blue-600 font-semibold text-sm">Step 1</h3>
          <p className="text-gray-800 font-medium mt-1">
            Deposit and get coupons
          </p>
          <button
            onClick={handleDepositClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 mt-3 rounded-lg text-sm font-medium"
          >
            + Deposit
          </button>
        </div>

        {/* Step 2 */}
        <div className="flex-1 flex flex-col items-start text-left sm:items-center sm:text-center px-2 mb-6 sm:mb-0">
          <FiSettings className="w-7 h-7 text-blue-600 mb-2" />
          <h3 className="text-blue-600 font-semibold text-sm">Step 2</h3>
          <p className="text-gray-800 font-medium mt-1">
            Generate trading volume
          </p>
          <button
            onClick={handleTradeClick}
            className="bg-blue-100 hover:bg-blue-200 text-blue-600 px-4 py-2 mt-3 rounded-lg text-sm font-medium"
          >
            Trade
          </button>
        </div>

        {/* Step 3 */}
        <div className="flex-1 flex flex-col items-start text-left sm:items-center sm:text-center px-2">
          <FiCheck className="w-7 h-7 text-green-600 mb-2" />
          <h3 className="text-green-600 font-semibold text-sm">Step 3</h3>
          <p className="text-gray-800 font-medium mt-1">Receive payouts</p>
        </div>
      </div>

      {/* How it works */}
      <div className="mt-8">
        <h4 className="font-semibold text-gray-900 text-lg mb-2">
          How does it work?
        </h4>
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          During the promotion, when you make a deposit, you automatically receive a
          pending coupon of the value equal to <strong>50% of the deposit amount</strong> 
          (25.00 for every 50.00 of deposits) within the specified amount and time limits.
        </p>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          The total amount of deposits eligible for the promotion is{" "}
          <strong>10,000.00</strong>. All deposits must be made during the promotion
          period (until <strong>11/25/2025 12:38:03 PM UTC</strong>). Leftover deposit
          amounts that have not been used for coupons roll over to the next deposits.
        </p>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          In order to redeem the pending deposits, you must generate{" "}
          <strong>5 Volume units</strong>. Each Volume unit represents a generated
          trading volume of <strong>100,000$</strong>. The trading volume is calculated
          as (asset price * lot size). For your convenience, here are some approximate
          volumes:
        </p>

        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-4">
          <li>
            <span className="text-blue-600 font-medium cursor-pointer hover:underline">
              EUR/USD
            </span>{" "}
            - 1 lot,
            <span className="text-blue-600 font-medium cursor-pointer hover:underline ml-1">
              Bitcoin/USD
            </span>{" "}
            - 1.5 lots,
            <span className="text-blue-600 font-medium cursor-pointer hover:underline ml-1">
              S&P500/USD
            </span>{" "}
            - 2 lots,
            <span className="text-blue-600 font-medium cursor-pointer hover:underline ml-1">
              NVDA
            </span>{" "}
            - 1.2 lots,
            <span className="text-blue-600 font-medium cursor-pointer hover:underline ml-1">
              XAU/USD
            </span>{" "}
            - 0.5 lots
          </li>
        </ul>

        <p className="text-gray-700 text-sm leading-relaxed">
          For full Terms and Conditions of the Limited 50% deposit bonus promotion, please refer to{" "}
          <button
            onClick={handleTermsClick}
            className="text-blue-600 font-medium hover:underline"
          >
            nomo 50% Deposit Bonus Terms and Conditions
          </button>.
        </p>
      </div>
    </div>
  );
};

export default BonusSteps;
