import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TraderPopup from "../Pages/Leaderboard/TradePopup";

const TopTradersScroll = () => {
  const navigate = useNavigate();
  const [selectedTrader, setSelectedTrader] = useState(null);

  // ==== TRADER DATA ARRAYS ====
  const profitTraders = [
    {
      name: "IngridMartingale",
      profit: "$36347.97",
      winRate: "95.74%",
      copiers: 372,
      tags: ["High-frequency", "Profit-generator"],
      flag: "🇲🇽",
      avatar: "https://i.pravatar.cc/100?img=1",
    },
    {
      name: "Naty",
      profit: "$9897.09",
      winRate: "90.68%",
      copiers: 33,
      tags: ["AI", "Automation"],
      flag: "🇳🇱",
      avatar: "https://i.pravatar.cc/100?img=2",
    },
    {
      name: "StratosGoldwind",
      profit: "$5102.10",
      winRate: "78.38%",
      copiers: 67,
      tags: ["Profit-generator"],
      flag: "🇪🇸",
      avatar: "https://i.pravatar.cc/100?img=3",
    },
    {
      name: "ScarlTrader",
      profit: "$3959.47",
      winRate: "76.2%",
      copiers: 66,
      tags: ["Veteran", "Day-trader"],
      flag: "🇲🇽",
      avatar: "https://i.pravatar.cc/100?img=4",
    },
    {
      name: "StratosGoldwind",
      profit: "$5102.10",
      winRate: "78.38%",
      copiers: 67,
      tags: ["Profit-generator"],
      flag: "🇪🇸",
      avatar: "https://i.pravatar.cc/100?img=3",
    },
    {
      name: "ScarlTrader",
      profit: "$3959.47",
      winRate: "76.2%",
      copiers: 66,
      tags: ["Veteran", "Day-trader"],
      flag: "🇲🇽",
      avatar: "https://i.pravatar.cc/100?img=4",
    },
  ];

  // ==== UNIVERSAL SECTION RENDERER ====
const renderSection = (title, traders) => (
  <div className="mb-10">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>

    <div className="flex gap-4 overflow-x-auto pb-2">
      {traders.map((t, i) => (
        <div
          key={i}
          className="cursor-pointer min-w-[320px] bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition border border-gray-200"
          onClick={() => navigate(`/trader/${t.name}`, { state: t })}
        >
          {/* HEADER */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div
      className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold text-lg"
    >
      {t.name.charAt(0).toUpperCase()}
    </div>
              <div>
                <p className="font-semibold text-gray-800 flex items-center gap-1">
                  {t.flag && <span>{t.flag}</span>} {t.name}
                </p>
                <p className="text-xs text-gray-500">{t.copiers} copiers</p>
              </div>
            </div>

            {/* FIX: make Copy button open popup */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // prevent any outer click
                setSelectedTrader(t); // open popup
              }}
              className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-1 rounded-lg"
            >
              Copy
            </button>
          </div>

          {/* PROFIT / WIN RATE */}
          <div className="flex justify-between mb-3">
            <div>
              <p className="text-green-600 font-bold text-xl">{t.profit}</p>
              <p className="text-xs text-gray-500">Copiers profit</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700 text-lg">
                {t.winRate}
              </p>
              <p className="text-xs text-gray-500">Win rate</p>
            </div>
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mt-3">
            {t.tags.map((tag, idx) => (
              <span
                key={idx}
                className={`text-xs font-medium px-2 py-1 rounded-md ${
                  tag === "High-frequency"
                    ? "bg-blue-100 text-blue-700"
                    : tag === "Profit-generator"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-700"
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


  return (
    <section className="p-6 bg-gray-50">
    {renderSection("Top Traders by Profit", profitTraders)}
    {/* {renderSection("Top Traders by ROI", roiTraders)}
    {renderSection("Most Active Traders", activeTraders)} */}

    {selectedTrader && (
      <TraderPopup
        trader={selectedTrader}
        onClose={() => setSelectedTrader(null)}
      />
    )}
  </section>
  );
};

export default TopTradersScroll;
