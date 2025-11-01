import { useNavigate } from "react-router-dom";
import TrendingAssets from "../Pages/Marketing/TrendingAssets";

const StockDashboard = () => {
  const navigate = useNavigate();

  // Data for Top Gainers and Losers
  const gainers = [
    { name: "International Business Machines", symbol: "I", change: "+6.41%", price: "$308.05" },
    { name: "XRP (Ripple)", symbol: "X", change: "+5.54%", price: "$2.6287" },
    { name: "Natural gas", symbol: "N", change: "+2.11%", price: "$3.343" },
    { name: "Morgan Stanley", symbol: "M", change: "+2.01%", price: "$164.15" },
    { name: "Shopify", symbol: "S", change: "+1.88%", price: "$173.39" }
  ];

  const losers = [
    { name: "YPF S.A.", symbol: "Y", change: "-4.37%", price: "$27.29" },
    { name: "Tesla", symbol: "T", change: "-2.94%", price: "$434.59" },
    { name: "TRON", symbol: "T", change: "-2.75%", price: "$0.29812" },
    { name: "Netflix", symbol: "N", change: "-1.45%", price: "$1,097.97" },
    { name: "Walt Disney Company", symbol: "D", change: "-1.43%", price: "$111.72" }
  ];

  // Function to handle navigation
  const handleNavigate = (asset) => {
    navigate(`/stock/${encodeURIComponent(asset.symbol)}`, { state: asset });
  };

  return (
    <>
      <div className="container mx-auto p-4 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Top 24h Gainers */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Top 24h Gainers</h2>
            <div>
              {gainers.map((asset, index) => (
                <div
                  key={index}
                  onClick={() => handleNavigate(asset)}
                  className="flex items-start justify-between py-4 border-b last:border-b-0 cursor-pointer hover:bg-gray-50 transition"
                >
                  <div className="flex items-center space-x-6">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex justify-center items-center">
                      <span className="font-medium text-blue-600">{asset.symbol}</span>
                    </div>
                    <span className="font-semibold text-lg">{asset.name}</span>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <div className="text-green-600 font-medium">{asset.change}</div>
                    <div className="font-medium">{asset.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top 24h Losers */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Top 24h Losers</h2>
            <div>
              {losers.map((asset, index) => (
                <div
                  key={index}
                  onClick={() => handleNavigate(asset)}
                  className="flex items-start justify-between py-4 border-b last:border-b-0 cursor-pointer hover:bg-gray-50 transition"
                >
                  <div className="flex items-center space-x-6">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex justify-center items-center">
                      <span className="font-medium text-red-600">{asset.symbol}</span>
                    </div>
                    <span className="font-semibold text-lg">{asset.name}</span>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <div className="text-red-600 font-medium">{asset.change}</div>
                    <div className="font-medium">{asset.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <TrendingAssets />
    </>
  );
};

export default StockDashboard;
