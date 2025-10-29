import {useState} from "react";
import { FiArrowRight, FiUserCheck } from "react-icons/fi";
import { BsFillCreditCardFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import MyTasksPopup from "./MyTasksPopup";

const HeroSection = () => {

  const navigate = useNavigate();
  const goToNomoai = () => {
    navigate("/copy-trading/nomo-ai-index")
  }

  const goToDeposit = () => {
    navigate("/money/deposit")
  }

  const goToLearn = () => {
    navigate("/money/50-deposit-bonus")
  }
  const goToLeaderBoard = () => {
    navigate("/copy-trading/leaderboard")
  }
  const goToMoney = () => {
    navigate("/money")
  }
  const goToPortfolio = () => {
    navigate("/portfolio/open")
  }
  const goToOpenTrade = () => {
    navigate("/trading/marketing")
  }

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="w-full bg-gray-50 px-4 md:px-8 py-6">
      {/* Top promotional cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="bg-blue-100 rounded-xl p-5 flex flex-col justify-between hover:shadow-md transition">
          <img src="nomo-index-banner.webp" alt="" className="h-10 w-10"/>
          <div>
            <h3 className="text-blue-700 font-semibold text-lg">
              All-in-1 with nomo AI index
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Copy a balanced portfolio of all nomo leaders
            </p>
          </div>
          <div className="mt-4 flex space-x-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg"
            onClick={goToNomoai}>
              Trade &gt; 
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-blue-50 rounded-xl p-5 flex flex-col justify-between hover:shadow-md transition">
          <img src="50-percent-bonus.webp" alt="" className="h-10 w-10"/>
          <div>
            <h3 className="text-blue-700 font-semibold text-lg">
              Deposit today to get a <span className="text-blue-600">50% bonus</span>
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Participate in our limited promotion
            </p>
          </div>
          <div className="mt-4 flex space-x-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg"
            onClick={goToDeposit}>
              Deposit +
            </button>
            <button className="bg-white border border-blue-200 text-blue-600 text-sm px-4 py-2 rounded-lg hover:bg-blue-100"
            onClick={goToLearn}>
              Learn more
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-indigo-50 rounded-xl p-5 flex flex-col justify-between hover:shadow-md transition">
          <img src="copytrading-banner.webp" alt="" className="h-10 w-10"/>
          <div>
            <h3 className="text-indigo-700 font-semibold text-lg">
              Find successful traders to copy
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Find the biggest profit generators
            </p>
          </div>
          <div className="mt-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-lg"
            onClick={goToLeaderBoard}>
              Leaderboard +
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Left Column */}
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600 text-sm">Current balance</p>
              <h2 className="text-2xl font-bold mt-1">💰 $0.00</h2>
            </div>
            <div className="space-x-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg"
            onClick={goToDeposit}>
              Deposit +
            </button>
              <button className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-lg hover:bg-gray-200"
              onClick={goToMoney}>
                Go to money
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center space-x-2 text-xs text-gray-600">
            <span className="bg-gray-100 px-2 py-1 rounded-md">Credit: 0</span>
            <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-md">
              On hold: 0
            </span>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md">
              My level: Starter
            </span>
          </div>

          {/* Recent Transactions */}
          <div className="mt-6 border-t pt-4">
            <h3 className="text-gray-800 font-medium text-sm">Recent transactions</h3>
            <div className="flex flex-col items-center justify-center py-10 text-gray-500 text-sm">
              <BsFillCreditCardFill className="text-3xl text-gray-400 mb-2" />
              <p>No recent transactions</p>
              <span className="text-xs text-gray-400">No recent transactions</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-gray-800 font-semibold">
                Keep it up, you're doing great ✨
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                You'll be set up in no time
              </p>
            </div>
            <span className="text-sm text-gray-500">29% complete</span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 h-2 rounded-full mt-3 mb-4">
            <div className="bg-orange-400 h-2 rounded-full" style={{ width: "29%" }}></div>
          </div>

          <div className="text-sm text-gray-700 mb-2">5 tasks remaining</div>

          {/* Tasks */}
          <div className="flex flex-col space-y-3">
            <div className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 p-3 rounded-lg cursor-pointer">
              <div className="flex items-center space-x-3"
              onClick={goToOpenTrade}>
                <FiUserCheck className="text-blue-600 text-xl" />
                <div>
                  <p className="font-medium text-gray-800">Open your first trade</p>
                  <p className="text-xs text-gray-500">
                    Buy or sell the asset you prefer
                  </p>
                </div>
              </div>
              <FiArrowRight className="text-gray-400" />
            </div>

            <div className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 p-3 rounded-lg cursor-pointer">
              <div className="flex items-center space-x-3"
              onClick={goToPortfolio}>
                <BsFillCreditCardFill className="text-blue-600 text-xl" />
                <div>
                  <p className="font-medium text-gray-800">Close your first trade</p>
                  <p className="text-xs text-gray-500">
                    Close any trade you have opened
                  </p>
                </div>
              </div>
              <FiArrowRight className="text-gray-400" />
            </div>
          </div>

          {/* <div className="mt-4 text-blue-600 font-medium text-sm bg-gray-50 py-3 rounded-lg cursor-pointer hover:underline text-center w-full">
            View all
          </div> */}

          <div className="flex flex-col items-center justify-center bg-gray-100 p-4 ">
      {/* View All Button */}
      <div
        onClick={() => setIsPopupOpen(true)}
        className="mt-4 text-blue-600 font-medium text-sm bg-gray-50 py-3 rounded-lg cursor-pointer hover:underline text-center w-full  shadow-sm"
      >
        View all
      </div>

      {/* Popup */}
      <MyTasksPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
