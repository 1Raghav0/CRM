import { useState, useEffect } from "react";
import TopTradersScroll from "./TopTradersScroll";
import Leaderboards from "./Leaderboards";
import NomoAiIndex from "./NomoAiIndex";
import PopupModal from "./PopupModal";

const FilterSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All traders");
  const [selectedPop, setSelectedPop] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const texts = [
    "Trading on autopilot",
    "Smart investing made easy",
    "Grow your portfolio effortlessly",
    "Copy expert traders instantly",
    "Trade with confidence",
  ];

  const trades = [
    "Wall-Street-Latino sell USDCAD",
    "ElefantInvest buy USDJPY",
    "VR-Zver buy GBPUSD",
    "El_Camino_de_la_Tortuga sell GBPUSD",
    "IgnacioFernandez buy EURUSD",
    "Wall-Street-Latino sell USDCAD",
    "ElefantInvest buy USDJPY",
    "VR-Zver buy GBPUSD",
    "El_Camino_de_la_Tortuga sell GBPUSD",
    "IgnacioFernandez buy EURUSD",
  ];

  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      let nextText;
      do {
        nextText = texts[Math.floor(Math.random() * texts.length)];
      } while (nextText === currentText);
      setCurrentText(nextText);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentText]);

  return (
    <div className="flex items-center justify-center">
      <div className="container px-4 md:px-8 lg:px-20">
        {/* Category Buttons */}
        <div className="flex space-x-4 mb-6">
          {["Trending traders", "All traders", "nomo AI"].map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Scrolling trade badges */}
        <div className="relative w-full overflow-hidden my-10">
          <div className="flex animate-marquee whitespace-nowrap">
            {trades.concat(trades).map((trade, index) => (
              <span
                key={index}
                className="bg-gray-100 border border-gray-200 text-sm px-3 py-1 mx-2 rounded-full text-gray-600 inline-block"
              >
                {trade}
              </span>
            ))}
          </div>
        </div>

        {/* Nomo AI Card */}
        <div className="flex items-center justify-center px-4 md:px-8 lg:px-14">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 flex flex-col sm:flex-row justify-between items-center w-full shadow-lg rounded-2xl">
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <p className="font-semibold text-lg">Find perfect leaders</p>
              <p className="text-sm text-gray-200 transition-all duration-500">
                {currentText}
              </p>
            </div>

            <button
              onClick={() => setSelectedPop(true)}
              className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-1 rounded-lg"
            >
              Start now
            </button>
          </div>

          {/* Popup Modal */}
          <PopupModal isOpen={selectedPop} onClose={() => setSelectedPop(false)} />
        </div>

        {/* Conditionally Render the Content Based on Selected Category */}
        {selectedCategory === "Trending traders" && <TopTradersScroll />}
        {selectedCategory === "All traders" && <Leaderboards />}
        {selectedCategory === "nomo AI" && <NomoAiIndex />}
      </div>
    </div>
  );
};

export default FilterSection;
