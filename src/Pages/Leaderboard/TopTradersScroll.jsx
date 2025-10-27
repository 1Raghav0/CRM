import React from "react";

const profitTraders = [
  {
    name: "IngridMartingale",
    profit: "$22534.52",
    winRate: "100%",
    copiers: 349,
    tags: ["High-frequency", "Profit-generator"],
    // flag: "🇲🇽",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Naty",
    profit: "$9897.09",
    winRate: "90.68%",
    copiers: 33,
    tags: ["AI", "Automation"],
    // flag: "🇳🇱",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "StratosGoldwind",
    profit: "$5102.1",
    winRate: "78.38%",
    copiers: 67,
    tags: ["Profit-generator"],
    // flag: "🇪🇸",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "ScarlTrader",
    profit: "$3959.47",
    winRate: "76.2%",
    copiers: 66,
    tags: ["Veteran", "Day-trader"],
    // flag: "🇲🇽",
    avatar: "https://i.pravatar.cc/100?img=4",
  },
  {
    name: "StratosGoldwind",
    profit: "$5102.1",
    winRate: "78.38%",
    copiers: 67,
    tags: ["Profit-generator"],
    // flag: "🇪🇸",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "ScarlTrader",
    profit: "$3959.47",
    winRate: "76.2%",
    copiers: 66,
    tags: ["Veteran", "Day-trader"],
    // flag: "🇲🇽",
    avatar: "https://i.pravatar.cc/100?img=4",
  },
];

const roiTraders = [
  {
    name: "PesoHunter",
    profit: "167.5%",
    winRate: "100%",
    copiers: 39,
    tags: ["ROI", "7D"],
    flag: "🇨🇱",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "RajeshMehta",
    profit: "160.26%",
    winRate: "100%",
    copiers: 9,
    tags: ["ROI", "7D"],
    flag: "🇮🇳",
    avatar: "https://i.pravatar.cc/100?img=6",
  },
  {
    name: "Lautaro-Diaz",
    profit: "158.46%",
    winRate: "100%",
    copiers: 32,
    tags: ["ROI", "7D", "Veteran"],
    flag: "🇦🇷",
    avatar: "https://i.pravatar.cc/100?img=7",
  },
  {
    name: "MarcoTrader",
    profit: "153.75%",
    winRate: "100%",
    copiers: 70,
    tags: ["ROI", "7D"],
    flag: "🇮🇹",
    avatar: "https://i.pravatar.cc/100?img=8",
  },
  {
    name: "Lautaro-Diaz",
    profit: "158.46%",
    winRate: "100%",
    copiers: 32,
    tags: ["ROI", "7D", "Veteran"],
    flag: "🇦🇷",
    avatar: "https://i.pravatar.cc/100?img=7",
  },
  {
    name: "MarcoTrader",
    profit: "153.75%",
    winRate: "100%",
    copiers: 70,
    tags: ["ROI", "7D"],
    flag: "🇮🇹",
    avatar: "https://i.pravatar.cc/100?img=8",
  },
];

const activeTraders = [
  {
    name: "PesoHunter",
    profit: "167.5%",
    winRate: "100%",
    copiers: 39,
    tags: ["ROI", "7D"],
    // flag: "🇨🇱",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "RajeshMehta",
    profit: "160.26%",
    winRate: "100%",
    copiers: 9,
    tags: ["ROI", "7D"],
    // flag: "🇮🇳",
    avatar: "https://i.pravatar.cc/100?img=6",
  },
  {
    name: "Lautaro-Diaz",
    profit: "158.46%",
    winRate: "100%",
    copiers: 32,
    tags: ["ROI", "7D", "Veteran"],
    // flag: "🇦🇷",
    avatar: "https://i.pravatar.cc/100?img=7",
  },
  {
    name: "MarcoTrader",
    profit: "153.75%",
    winRate: "100%",
    copiers: 70,
    tags: ["ROI", "7D"],
    // flag: "🇮🇹",
    avatar: "https://i.pravatar.cc/100?img=8",
  },
  {
    name: "Lautaro-Diaz",
    profit: "158.46%",
    winRate: "100%",
    copiers: 32,
    tags: ["ROI", "7D", "Veteran"],
    // flag: "🇦🇷",
    avatar: "https://i.pravatar.cc/100?img=7",
  },
  {
    name: "MarcoTrader",
    profit: "153.75%",
    winRate: "100%",
    copiers: 70,
    tags: ["ROI", "7D"],
    // flag: "🇮🇹",
    avatar: "https://i.pravatar.cc/100?img=8",
  },
];

const Section = ({ title, subtitle, traders }) => (
  <div className="mb-12">
    {/* Header */}
    <div className="flex justify-between items-center mb-4">
      <div>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          {title}
        </h2>
        <p className="text-gray-500 text-sm md:text-base">{subtitle}</p>
      </div>
      <button className="text-blue-600 hover:underline text-sm font-medium">
        View more →
      </button>
    </div>

    {/* Scrollable cards */}
    <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-3">
      {traders.map((t, i) => (
        <div
          key={i}
          className="min-w-[270px] bg-white border border-gray-200 rounded-xl p-4 flex-shrink-0 hover:shadow-lg transition"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-800 flex items-center gap-1">
                  {t.flag} {t.name}
                </p>
                <p className="text-xs text-gray-500">{t.copiers} copiers</p>
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded">
              Copy
            </button>
          </div>

          {/* Stats */}
          <p className="text-green-600 font-bold text-lg">{t.profit}</p>
          <div className="flex justify-between text-sm text-gray-600 mb-4">
            <span>{t.winRate}</span>
            <span>Win rate</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-4 mt-2">
            {t.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md"
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

const TopTradersScroll = () => {
  return (
    <section className="w-full bg-white px-4 md:px-8 lg:px-16 py-10">
      <div className=" mx-auto">
        <Section
          title="Top traders by profit for copiers"
          subtitle="Traders who generated the highest profits for their copiers in the last 30 days"
          traders={profitTraders}
        />

        <Section
          title="Top traders by ROI"
          subtitle="Traders who earned the highest return on investments in the last 7 days"
          traders={roiTraders}
        />
        <Section
          title="Most active Traders"
          subtitle="Traders who opened the most trades in the last 7 days"
          traders={activeTraders}
        />
      </div>
    </section>
  );
};

export default TopTradersScroll;
