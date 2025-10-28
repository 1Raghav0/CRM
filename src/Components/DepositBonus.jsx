import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowUpRight, FiDownload, FiClock } from "react-icons/fi";
import BonusSteps from "./BonusSteps";

const DepositBonus = () => {
  const navigate = useNavigate();

  const handleDepositClick = () => {
    navigate("/deposit"); // Redirect to deposit page
  };

  const handleLearnMoreClick = () => {
    navigate("/learn-more"); // Redirect to learn more page
  };

  return (
    <>
    <div className="w-full bg-gray-50 p-4 sm:p-6 lg:p-10">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-2">
  <a href="/money" className="hover:text-blue-600">Money</a> /{' '}
  <a href="money/50-deposit-bonus" className="text-gray-700 font-medium hover:text-blue-600">
    50% deposit bonus
  </a>
</div>


      {/* Header Section */}
      <div className="bg-white rounded-xl shadow-sm p-5 sm:p-8 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Limited 50% deposit bonus
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Receive up to 5,000.00 USD in bonuses by making deposits and trading.
            </p>
          </div>

          <div className="flex space-x-2 mt-4 md:mt-0">
            <button
              onClick={handleDepositClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium text-sm flex items-center"
            >
              + Deposit
            </button>
            <button
              onClick={handleLearnMoreClick}
              className="bg-blue-50 hover:bg-blue-100 text-blue-600 px-5 py-2 rounded-lg font-medium text-sm"
            >
              Learn more
            </button>
          </div>
        </div>

        {/* Stats Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="flex items-center p-4 bg-green-50 rounded-lg">
            <div className="bg-green-500 text-white rounded-full p-2 mr-3">
              <FiArrowUpRight />
            </div>
            <div>
              <p className="text-xs text-gray-500">Received bonuses</p>
              <h3 className="font-semibold text-gray-900 text-lg">0.00</h3>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-500">Pending bonuses</p>
            <h3 className="font-semibold text-gray-900 text-lg">0.00</h3>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-500">Eligible deposits</p>
            <h3 className="font-semibold text-gray-900 text-lg">0/10,000</h3>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-500">Ending in</p>
            <h3 className="font-semibold text-gray-900 text-lg">
              27 days 14:49:34
            </h3>
          </div>
        </div>
      </div>

      {/* Bonus List Section */}
      <div className="bg-white rounded-xl shadow-sm p-5 sm:p-8">
        <div className="flex flex-wrap justify-between mb-6">
          <div className="flex flex-col items-center text-gray-800">
            <span className="font-medium">Available</span>
            <span className="text-gray-500 text-sm">200</span>
          </div>
          <div className="flex flex-col items-center text-gray-800">
            <span className="font-medium">Pending</span>
            <span className="text-gray-500 text-sm">0</span>
          </div>
          <div className="flex flex-col items-center text-gray-800">
            <span className="font-medium">Received</span>
            <span className="text-gray-500 text-sm">0</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Available bonuses */}
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
            <p className="font-semibold text-lg text-gray-800">25 Bonus</p>
            <p className="text-gray-600 text-sm mt-2">
              Get 50% of the deposit amount
            </p>
            <p className="text-gray-400 text-xs mt-2">0/50 USD</p>
            <div className="w-full bg-gray-200 h-1.5 rounded mt-2">
              <div className="bg-blue-600 h-1.5 w-1/5 rounded"></div>
            </div>
          </div>

          {/* Pending */}
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col justify-between">
            <div className="flex flex-col items-center text-center">
              <FiDownload className="text-gray-400 w-6 h-6 mb-2" />
              <p className="text-gray-600 text-sm">
                No pending coupons available
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Make a deposit and receive coupons
              </p>
            </div>
            <button
              onClick={handleDepositClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 mt-4 rounded-lg font-medium text-sm"
            >
              + Deposit
            </button>
          </div>

          {/* Received */}
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col justify-between">
            <div className="flex flex-col items-center text-center">
              <FiClock className="text-gray-400 w-6 h-6 mb-2" />
              <p className="text-gray-600 text-sm">No received coupons</p>
              <p className="text-gray-400 text-xs mt-1">
                Make a deposit and receive coupons
              </p>
            </div>
            <button
              onClick={handleDepositClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 mt-4 rounded-lg font-medium text-sm"
            >
              + Deposit
            </button>
          </div>
        </div>
      </div>
    </div>
    <BonusSteps />
    </>
  );
};

export default DepositBonus;
