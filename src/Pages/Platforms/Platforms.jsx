import React from 'react';

const Platforms = () => {
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

            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
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

            <button className="w-full bg-gray-300 text-gray-600 py-2 rounded-md cursor-not-allowed">
              View details
            </button>
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
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              Notify me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platforms;
