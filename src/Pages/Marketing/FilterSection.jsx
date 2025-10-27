import React, { useState } from "react";
import StockDashboard from "../../CRM/StockDashboard"; // 
import MarketTable from "./MarketTable";
import CryptoMarketTable from "./CryptoMarketTable";
import ForexMarketTable from "./ForexMarketTable";
import IndicesTable from "./IndicesTable";
import StocksTable from "./StocksTable";
import SyntheticIndicesTable from "./SyntheticIndicesTable";

const FilterSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Trending"); // Default to "Trending"

  const handleCategoryChange = (category) => {
    setSelectedCategory(category); // Update the selected category when a button is clicked
  };

  return (
    <div className="container mx-auto p-4">
      {/* Category Buttons */}
      <div className="flex space-x-4 mb-6">
        {['Trending', 'Commodities', 'Crypto', 'Forex', 'Indices', 'Stocks', 'Synthetic Indices'].map((category) => (
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

      {/* Conditionally Render the Content Based on Selected Category */}
      {selectedCategory === "Trending" && <StockDashboard />}
      {selectedCategory === "Commodities" && <MarketTable />}
      {selectedCategory === "Crypto" && <CryptoMarketTable />}
      {selectedCategory === "Forex" && <ForexMarketTable />}
      {selectedCategory === "Indices" && <IndicesTable />}
      {selectedCategory === "Stocks" && <StocksTable />}
      {selectedCategory === "Synthetic Indices" && <SyntheticIndicesTable />}
    </div>
  );
};

export default FilterSection;
