import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";
import { AiOutlineCheckCircle, AiOutlineFileText } from "react-icons/ai";
import { IoIosTrendingUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const LeaderRequirement = () => {

  const navigate = useNavigate();

  const gotoDeposit = () => {
    navigate("/money/deposit");
  };
  const gotoVerify = () => {
    navigate("/profile");
  };
  const gotoTradeNow = () => {
    navigate("/copy-trading/leaderboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg">
        {/* Top Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-blue-500 p-4 rounded-full shadow-md">
            <AiOutlineFileText className="text-white text-2xl" />
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Before we begin...
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            We maintain a trusted community of leaders. You must meet all the
            requirements below to become a leader.
          </p>
        </div>

        {/* Requirements List */}
        <div className="space-y-4">
          {/* Min Level */}
          <div className="flex items-center justify-between flex-wrap">
            <span className="font-medium text-gray-700 flex items-center">
              🏅 Min level
            </span>
            <div className="flex items-center">
              <button className="ml-4 text-sm text-white bg-blue-500 px-4 py-2 rounded-full flex items-center hover:bg-blue-600 transition"
              onClick={gotoDeposit}>
                <FaCoins className="mr-2" /> + Deposit
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-gray-700">Starter</span>
              <BsChevronRight className="mx-4 text-blue-500" />
              <span className="font-medium text-blue-500">Bronze</span>
          </div>
          
          <p className="text-sm text-gray-600">
            Deposit{" "}
            <span className="font-semibold text-blue-500">$250.00</span> to
            reach bronze level
          </p>

          {/* Verification Level */}
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-700 flex items-center">
              🔒 Min verification level
            </span>
            <button className="text-sm text-white bg-blue-500 px-4 py-2 rounded-full flex items-center hover:bg-blue-600 transition"
            onClick={gotoVerify}>
              <AiOutlineCheckCircle className="mr-2" /> Verify now
            </button>
          </div>
          <p className="text-sm text-gray-600">Level 1</p>

          {/* Open 20 Trades */}
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-700 flex items-center">
              📈 Open 20 trades
            </span>
            <button className="text-sm text-white bg-blue-500 px-4 py-2 rounded-full flex items-center hover:bg-blue-600 transition"
            onClick={gotoTradeNow}>
              <IoIosTrendingUp className="mr-2" /> Trade now
            </button>
          </div>
          <p className="text-sm text-gray-600">0/20</p>
        </div>

        {/* Continue Button */}
        <div className="mt-6">
          <button className="w-full bg-gray-200 text-gray-700 py-2 rounded-full cursor-not-allowed">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaderRequirement;
