import { useNavigate } from "react-router-dom"; 

const traders = [
  {
    name: "Emily Müller",
    country: "🇩🇪",
    tradesCopied: 304,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Nadar Siboh",
    country: "🇫🇷",
    tradesCopied: 86,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Ben Barclay",
    country: "🇺🇸",
    tradesCopied: 173,
    img: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    name: "Olivia Kim",
    country: "🇯🇵",
    tradesCopied: 50,
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Aiko Tanaka",
    country: "🇪🇸",
    tradesCopied: 392,
    img: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    name: "Lucas Patel",
    country: "🇵🇹",
    tradesCopied: 4,
    img: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];

const LeadTraderSection = () => {
    const navigate = useNavigate();

    const gotoBecomeLeadTrader = () => {
  navigate("/copy-trading/leader-onboarding/start");
}

  return (
    <section className="w-full px-4 py-16 md:px-8 lg:px-16 bg-white text-center">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-blue-600 leading-snug">
        Trade once, earn twice{" "}
        <span className="text-black">— become a lead trader</span>
      </h1>

      {/* Subtitle */}
      <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-sm md:text-base">
        Earn extra income when other traders copy your successful strategies.
        Set up your profile and start attracting copiers today.
      </p>

      {/* Requirements */}
      <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm md:text-base">
        <div className="flex items-center gap-2">
          <span className="text-blue-500">🏁</span> Bronze+ level
        </div>
        <div className="flex items-center gap-2">
          <span className="text-blue-500">✅</span> Level 1+ verification
        </div>
        <div className="flex items-center gap-2">
          <span className="text-blue-500">🔁</span> 20+ trades
        </div>
      </div>

      {/* Button */}
      <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
      onClick={gotoBecomeLeadTrader}>
        Become lead trader
      </button>

      {/* Traders Grid */}
      <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {traders.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 p-4 flex flex-col items-center"
          >
            <div className="relative w-44 h-48 mb-3">
              <img
                src={t.img}
                alt={t.name}
                className="w-full h-full object-cover rounded-xl"
              />
              <span className="absolute top-2 left-2 bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded">
                {t.tradesCopied} trades copied
              </span>
            </div>
            <p className="font-semibold text-gray-800">{t.name}</p>
            <span className="text-sm text-gray-500">{t.country}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadTraderSection;
