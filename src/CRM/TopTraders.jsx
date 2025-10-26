import React from "react";

const traders = [
  {
    name: "IngridMartingale",
    copiers: 339,
    profit: "$22534.52",
    winRate: "100%",
    tags: ["High-frequency", "Profit-generator"],
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Naty",
    copiers: 37,
    profit: "$16518.64",
    winRate: "93.53%",
    tags: ["Scalper"],
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "StratosGoldwind",
    copiers: 84,
    profit: "$4628.63",
    winRate: "78.28%",
    tags: ["Profit-generator"],
    img: "https://randomuser.me/api/portraits/men/72.jpg",
  },
  {
    name: "CryptoKing",
    copiers: 120,
    profit: "$8712.45",
    winRate: "89.41%",
    tags: ["High-frequency", "Profit-generator"],
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "FXQueen",
    copiers: 250,
    profit: "$19542.27",
    winRate: "95.87%",
    tags: ["High-frequency", "Scalper"],
    img: "https://randomuser.me/api/portraits/women/21.jpg",
  },
];

const TopTraders = () => {
  return (
    <div className="w-full px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Top traders just for you
          </h2>
          <p className="text-gray-500 text-sm">
            Check out these recommended lead traders chosen by our algorithm
          </p>
        </div>
        <button className="text-blue-600 font-medium text-sm hover:underline">
          View more →
        </button>
      </div>

      {/* Scrollable Cards */}
      <div className="flex space-x-4 overflow-x-auto hide-scrollbar pb-3">
        {traders.map((trader, index) => (
          <div
            key={index}
            className="min-w-[300px] bg-white shadow-sm border border-gray-100 rounded-xl p-4"
          >
            {/* Header Row */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-2">
                <img
                  src={trader.img}
                  alt={trader.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">
                    {trader.name}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {trader.copiers} copiers
                  </p>
                </div>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-3 py-1.5 rounded-md transition">
                Copy
              </button>
            </div>

            {/* Profit Section */}
            <div className="mb-8 flex justify-between">
                <div>
                    <p className="text-green-600 font-semibold text-lg">
                {trader.profit}
              </p>
              <div className=" text-xs text-gray-500">
                <span>Copiers profit</span>
              </div>
                </div>
                <div className="flex flex-col justify-between text-sm">
                <span className=" font-medium text-gray-800">{trader.winRate}</span>
                <span className="text-gray-500">Win rate</span>
              </div>
              
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {trader.tags.map((tag, i) => (
                <span
                  key={i}
                  className={`text-xs px-2 py-1 rounded-md ${
                    tag === "High-frequency"
                      ? "bg-blue-50 text-blue-600"
                      : "bg-green-50 text-green-600"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTraders;
