import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Platforms = () => {
    const [isOpen, setIsOpen] = useState(false);
      const [showPopup, setShowPopup] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

    const handleClick = () => {
    if (subscribed) return; // prevent repeat clicks

    // Show popup immediately
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
      setSubscribed(true);
    }, 3000);
  };

  const navigate = useNavigate();

  const gotoTradeNow = () => {
    navigate("/trading/marketing");
  }
  return (
    <div className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl font-semibold mb-3 md:text-4xl lg:text-5xl">
          One account, multiple platforms
        </h2>
        <p className="text-gray-500 mb-10">
          Use your single nomo trading account to trade via the platform you
          prefer
        </p>

        {/* === GRID STRUCTURE === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ==== Top Left Card: nomo web ==== */}
          <div className="bg-gray-100 rounded-xl shadow p-8 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                  Most popular
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">nomo web</h3>
              <p className="text-gray-600 mb-6">
                Simple yet powerful platform for trading and copy-trading
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  Simple trading
                </span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  Copy-trading
                </span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  Deposits
                </span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  Withdrawals
                </span>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            onClick={gotoTradeNow}>
              Trade now
            </button>
          </div>

          {/* ==== Top Right Card: MT5 Terminal ==== */}
          <div className="bg-gray-100 rounded-xl shadow p-8 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
                  Professional
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">MT5 terminal</h3>
              <p className="text-gray-600 mb-6">
                Advanced trading interface for experienced traders
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  Advanced terminal
                </span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  Suitable for experienced users
                </span>
              </div>
            </div>

            {/* <button className="w-full bg-gray-300 text-gray-600 py-2 rounded-md">
              View details
            </button> */}
            <div className="flex flex-col">
      {/* Button to open modal */}
      <button
        className="w-full bg-gray-300 text-gray-600 py-2 rounded-md hover:bg-gray-400 transition "
        onClick={() => setIsOpen(true)}
      >
        View details
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md mx-auto relative p-6 sm:p-8">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            {/* Header Icon */}
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 p-3 rounded-full relative">
                <span className="text-green-600 text-2xl font-bold">5</span>
                <span className="absolute top-0 right-0 bg-orange-400 text-white text-xs rounded-full px-1.5">
                  6
                </span>
              </div>
            </div>

            {/* Title & Description */}
            <h2 className="text-lg sm:text-xl font-semibold text-center mb-2">
              Deposit to activate MT5
            </h2>
            <p className="text-gray-600 text-sm text-center mb-6">
              Make a deposit to your account to receive the MetaTrader5
              credentials
            </p>

            {/* Deposit Methods */}
            <div className="bg-gray-100 p-3 rounded-md text-center text-gray-700 text-sm mb-4">
              <span className="font-medium">7+ deposit methods</span>
              <div className="flex justify-center gap-2 mt-2">
                <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
                  ₿
                </div>
                <div className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                  UPI
                </div>
              </div>
            </div>

            {/* Bonus Info */}
            <div className="bg-blue-50 p-3 rounded-md text-center text-gray-700 text-sm mb-6">
              Deposit today to get a{" "}
              <span className="font-semibold text-blue-600">50% bonus</span>
              <br />
              <span className="text-gray-500 text-xs">
                Participate in our limited promotion
              </span>
            </div>

            {/* Deposit Now Button */}
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            onClick={gotoTradeNow}>
              Deposit now
            </button>

            {/* Close link */}
            <button
              onClick={() => setIsOpen(false)}
              className="block mx-auto mt-4 text-gray-500 text-sm hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
          </div>

          {/* ==== Bottom Left Small Card: Android ==== */}
          <div className="bg-gray-100 rounded-xl shadow p-6 flex flex-col justify-between">
            <div className="flex items-center gap-12 mb-4">
              <img
                src="/android.webp"
                alt="Google Play"
                className="h-36"
              />
              <div>
                <h3 className="text-lg font-semibold mb-4">nomo Android</h3>
            <p className="text-gray-600 text-sm mb-4">
              Download the app now
            </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="w-72"
              />
              </div>
            </div>
          </div>

          {/* ==== Bottom Right Small Card: iOS ==== */}
          <div className="bg-gray-100 rounded-xl shadow p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <img
                src="/android.webp"
                alt="Google Play"
                className="h-36"
              />
              <h3 className="text-xl font-semibold">nomo iOS</h3>
              <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                Coming soon
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-3">
              Subscribe for updates to be the first to get iOS nomo mobile app
            </p>
            {/* <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              Notify me
            </button> */}

            <div className="flex flex-col items-center justify-center">
      {/* Notify Button */}
      <button
        onClick={handleClick}
        disabled={subscribed}
        className={`w-full  py-2 rounded-md transition duration-300 ${
          subscribed
            ? "bg-green-500 text-white cursor-default"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        {subscribed ? "Subscribed" : "Notify me"}
      </button>

      {/* Toast Popup */}
      {showPopup && (
        <div className="fixed bottom-6 right-6 bg-white border border-gray-200 shadow-lg rounded-md px-4 py-3 text-gray-800 animate-slide-in">
          <p>✅ Thanks for the subscribe!</p>
        </div>
      )}
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platforms;
