import { useNavigate } from "react-router-dom";
import { ArrowUpRight, ArrowDownRight, Star } from "lucide-react";

const cryptoData = [
  { name: "Bitcoin", symbol: "BTC/USD", price: "$113,712.03", change: "+2.48%", changeValue: "+$2750.92", up: true },
  { name: "Ethereum", symbol: "ETH/USD", price: "$4,060.66", change: "+3.31%", changeValue: "+$130", up: true },
  { name: "Litecoin", symbol: "LTC/USD", price: "$104.20", change: "+13.84%", changeValue: "+$12.67", up: true },
  { name: "XRP (Ripple)", symbol: "XRP/USD", price: "$2.62746", change: "+4.76%", changeValue: "+$0.11936", up: true },
  { name: "Binance Coin", symbol: "BNB/USD", price: "$1,127.463", change: "+1.83%", changeValue: "+$20.288", up: true },
  { name: "TRON", symbol: "TRX/USD", price: "$0.30123", change: "-0.02%", changeValue: "-$0.00007", up: false },
  { name: "Cardano", symbol: "ADA/USD", price: "$0.67729", change: "+3.63%", changeValue: "+$0.02374", up: true },
  { name: "Dogecoin", symbol: "DOGE/USD", price: "$0.20451", change: "+4.51%", changeValue: "+$0.00883", up: true },
  { name: "Solana", symbol: "SOL/USD", price: "$200.13", change: "+4.06%", changeValue: "+$7.81", up: true },
  { name: "Polkadot", symbol: "DOT/USD", price: "$8.54", change: "+2.73%", changeValue: "+$0.23", up: true },
  { name: "Avalanche", symbol: "AVAX/USD", price: "$48.91", change: "+1.92%", changeValue: "+$0.92", up: true },
  { name: "Shiba Inu", symbol: "SHIB/USD", price: "$0.000025", change: "-0.11%", changeValue: "-$0.000001", up: false },
  { name: "Chainlink", symbol: "LINK/USD", price: "$17.23", change: "+2.21%", changeValue: "+$0.37", up: true },
  { name: "Polygon", symbol: "MATIC/USD", price: "$0.921", change: "+3.45%", changeValue: "+$0.032", up: true },
  { name: "Uniswap", symbol: "UNI/USD", price: "$9.18", change: "-0.35%", changeValue: "-$0.03", up: false },
  { name: "Stellar", symbol: "XLM/USD", price: "$0.178", change: "+4.02%", changeValue: "+$0.006", up: true },
  { name: "Cosmos", symbol: "ATOM/USD", price: "$13.62", change: "+1.88%", changeValue: "+$0.25", up: true },
  { name: "VeChain", symbol: "VET/USD", price: "$0.038", change: "-0.12%", changeValue: "-$0.0004", up: false },
  { name: "Filecoin", symbol: "FIL/USD", price: "$6.92", change: "+2.65%", changeValue: "+$0.18", up: true },
  { name: "Near Protocol", symbol: "NEAR/USD", price: "$8.77", change: "+3.19%", changeValue: "+$0.27", up: true },
];

const CryptoMarketTable = () => {
  const navigate = useNavigate();

  // Unified handler for Buy and Sell buttons
  const handleActionClick = (e, item) => {
    e.stopPropagation(); // Prevent row click
    navigate(`/crypto/${encodeURIComponent(item.symbol)}`, { state: item });
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow p-4 md:p-6 overflow-x-auto">
      <table className="w-full min-w-[700px] text-left">
        <thead>
          <tr className="text-gray-500 text-sm border-b">
            <th className="pb-3 font-semibold">Name</th>
            <th className="pb-3 font-semibold">Price</th>
            <th className="pb-3 font-semibold">24H %</th>
            <th className="pb-3 font-semibold">24H % Chart</th>
            <th className="pb-3 font-semibold text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((item, index) => (
            <tr
              key={index}
              className="border-b last:border-none hover:bg-gray-50"
            >
              {/* Crypto name cell (clickable) */}
              <td
                className="py-3 flex items-center gap-3 cursor-pointer"
                onClick={() =>
                  navigate(`/crypto/${encodeURIComponent(item.symbol)}`, { state: item })
                }
              >
                <Star size={18} className="text-gray-400" />
                <div>
                  <p className="font-semibold text-gray-800 hover:text-blue-600 transition">{item.name}</p>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    {item.symbol}
                    <span className="bg-yellow-100 text-yellow-700 text-[10px] px-1.5 py-0.5 rounded">Crypto</span>
                  </p>
                </div>
              </td>

              <td className="py-3 text-gray-800">{item.price}</td>

              <td className={`py-3 font-medium flex items-center gap-1 ${item.up ? "text-green-600" : "text-red-500"}`}>
                {item.up ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                <div className="flex flex-col">
                  <span>{item.change}</span>
                  <span className="text-gray-500 text-xs">{item.changeValue}</span>
                </div>
              </td>

              <td className="py-3">
                <div className={`h-8 w-24 rounded overflow-hidden bg-gradient-to-r ${item.up ? "from-green-200 to-green-400" : "from-red-200 to-red-400"}`}></div>
              </td>

              {/* Unified Buy/Sell buttons */}
              <td className="py-3 flex items-center justify-center gap-2">
                <button
                  onClick={(e) => handleActionClick(e, item)}
                  className="bg-green-500 text-white px-4 py-1.5 rounded hover:bg-green-600 transition"
                >
                  Buy
                </button>
                <button
                  onClick={(e) => handleActionClick(e, item)}
                  className="bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600 transition"
                >
                  Sell
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoMarketTable;
