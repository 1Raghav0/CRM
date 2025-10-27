import React, { useState } from "react";
import TopTradersScroll from "./TopTradersScroll";
import Leaderboards from "./Leaderboards";
import NomoAiIndex from "./NomoAiIndex";
const FilterSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Trending traders"); // Default to "Trending"

  const handleCategoryChange = (category) => {
    setSelectedCategory(category); // Update the selected category when a button is clicked
  };

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

  return (
    <div className="container mx-1 md:mx-8 lg:mx-16 p-4">
      {/* Category Buttons */}
      <div className="flex space-x-4 mb-6">
        {['Trending traders', 'All traders', 'nomo AI'].map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
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

      {/* Conditionally Render the Content Based on Selected Category */}
      {selectedCategory === "Trending traders" && <TopTradersScroll />}
      {selectedCategory === "All traders" && <Leaderboards />}
      {selectedCategory === "nomo AI" && <NomoAiIndex />}
      
    </div>
  );
};

export default FilterSection;
