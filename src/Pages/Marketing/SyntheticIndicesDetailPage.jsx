import React, { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronDown, ChevronUp, Plus, Minus } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const syntheticIndicesList = [
  { name: "POP-400", price: "$93,613.79" },
  { name: "DROP-400", price: "$99,531.77" },
  { name: "POP-600", price: "$103,136.85" },
  { name: "DROP-600", price: "$104,632.82" },
  { name: "POP-800", price: "$98,062.92" },
  { name: "DROP-800", price: "$101,371.08" },
  { name: "POP-1000", price: "$102,108.73" },
  { name: "DROP-1000", price: "$95,570.99" },
];

const chartDataMap = {
  "POP-400": [
    { time: "11:35", value: 93655 },
    { time: "11:36", value: 93645 },
    { time: "11:37", value: 93635 },
    { time: "11:38", value: 93625 },
    { time: "11:39", value: 93618 },
  ],
  "DROP-400": [
    { time: "11:35", value: 99500 },
    { time: "11:36", value: 99520 },
    { time: "11:37", value: 99510 },
    { time: "11:38", value: 99530 },
    { time: "11:39", value: 99531 },
  ],
  "POP-600": [
    { time: "11:35", value: 103100 },
    { time: "11:36", value: 103120 },
    { time: "11:37", value: 103130 },
    { time: "11:38", value: 103140 },
    { time: "11:39", value: 103136 },
  ],
  "DROP-600": [
    { time: "11:35", value: 104600 },
    { time: "11:36", value: 104610 },
    { time: "11:37", value: 104620 },
    { time: "11:38", value: 104630 },
    { time: "11:39", value: 104632 },
  ],
};

const SyntheticIndicesDetailPage = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const { state } = useLocation();

  const defaultIndex =
    syntheticIndicesList.find((item) => item.name === name) ||
    syntheticIndicesList[0];

  const [selectedIndex, setSelectedIndex] = useState(state || defaultIndex);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [lots, setLots] = useState(0.1);
  const [takeProfit, setTakeProfit] = useState(false);
  const [stopLoss, setStopLoss] = useState(false);

  const chartData = chartDataMap[selectedIndex.name] || chartDataMap["POP-400"];
  const firstLetter = selectedIndex.name?.[0]?.toUpperCase() || "?";

  const handleSelect = (item) => {
    setSelectedIndex(item);
    setIsDropdownOpen(false);
  };

  return (
    <>
    <div className="bg-gray-50 p-6 md:p-10">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft size={18} /> Back
      </button>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left section: Chart */}
        <div className="flex-1 bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700 text-sm">
                {firstLetter}
              </div>
              <div>
                <h2 className="text-lg font-semibold">{selectedIndex.name}</h2>
                <p className="text-gray-500 text-sm">{selectedIndex.price}</p>
              </div>
            </div>
          </div>

          <div className="h-[300px] w-full mb-3">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <XAxis dataKey="time" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <defs>
                  <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#2563eb"
                  fillOpacity={1}
                  fill="url(#colorBlue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-between text-gray-600 text-sm">
            <span>Simple</span>
            <span>Pro</span>
          </div>
        </div>

        {/* Right section: Trade Controls */}
        <div className="relative bg-white rounded-2xl shadow-md p-6 w-full lg:w-[350px]">
          {/* Top selector */}
          <div className="flex items-center justify-between mb-4 relative">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-700">
                {firstLetter}
              </div>
              <div>
                <h2 className="font-semibold">{selectedIndex.name}</h2>
                <p className="text-gray-500 text-sm">{selectedIndex.price}</p>
              </div>
            </div>

            {/* Dropdown toggle */}
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="p-2 rounded hover:bg-gray-100"
            >
              {isDropdownOpen ? (
                <ChevronUp size={18} className="text-gray-600" />
              ) : (
                <ChevronDown size={18} className="text-gray-600" />
              )}
            </button>

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 top-12 bg-white border rounded-xl shadow-lg w-full max-h-[300px] overflow-y-auto z-50">
                {syntheticIndicesList.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => handleSelect(item)}
                    className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-700">
                      {item.name[0]}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{item.name}</p>
                      <p className="text-gray-500 text-xs">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Trade settings */}
          <div className="border-t pt-4">
            <p className="text-sm text-gray-500 mb-1">Trade size</p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLots(Math.max(0.1, lots - 0.1))}
                  className="p-1 bg-gray-100 rounded hover:bg-gray-200"
                >
                  <Minus size={16} />
                </button>
                <span className="text-lg font-semibold">{lots.toFixed(1)} lots</span>
                <button
                  onClick={() => setLots(lots + 0.1)}
                  className="p-1 bg-gray-100 rounded hover:bg-gray-200"
                >
                  <Plus size={16} />
                </button>
              </div>
              <span className="text-gray-500 text-sm">Available: 0.00 $</span>
            </div>

            <p className="text-sm text-gray-600 mb-4">Investment: <b>$5.00</b></p>

            <div className="flex flex-col gap-2 mb-5">
              <label className="flex items-center gap-2 text-gray-700 text-sm">
                <input
                  type="checkbox"
                  checked={takeProfit}
                  onChange={() => setTakeProfit(!takeProfit)}
                />
                Take profit
              </label>
              <label className="flex items-center gap-2 text-gray-700 text-sm">
                <input
                  type="checkbox"
                  checked={stopLoss}
                  onChange={() => setStopLoss(!stopLoss)}
                />
                Stop loss
              </label>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-700 mb-2">
                Top up your balance to open a trade
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold">
                + Deposit
              </button>
              <p className="text-xs text-gray-500 mt-2">
                {selectedIndex.name} open: 0.00 / 30
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

        <div className="lg:max-w-6xl mx-auto my-10 px-4 md:px-12 lg:px-24 ">
          {/* About Section */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Bitcoin
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Bitcoin is a decentralized blockchain platform that enables
              multiple blockchains to interoperate and share information. It
              aims to create a scalable and secure network for the future of the
              internet. Developed by the Web3 Foundation, Polkadot utilizes a
              unique sharding mechanism to enhance scalability and
              interoperability between different blockchains. The native
              cryptocurrency of the Polkadot network is DOT, which is used for
              governance, staking, and bonding.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600 border-t pt-4">
              <div>
                <p>
                  <strong>Market cap:</strong> N/A
                </p>
                <p>
                  <strong>Total employees:</strong> N/A
                </p>
              </div>
              <div>
                <p>
                  <strong>Today's range:</strong> 2.60 - 2.92
                </p>
                <p>
                  <strong>Year's range:</strong> 2.81 - 10.60
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mt-6">
              Polkadot News
            </h3>
            <div className="mt-3 space-y-3">
              {[
                "XRP, Solana, Dogecoin Among 72 Crypto-Related ETFs Awaiting SEC Approval",
                "Tic-Toc, Tic-Toc, We’re Going To Polkadot (DOT-USD)",
                "Bitcoin Dominance Decline Expected Next Month, Analyst Projects",
              ].map((title, i) => (
                <div
                  key={i}
                  className="border p-4 rounded-md hover:bg-gray-50 transition"
                >
                  <p className="text-sm text-gray-700 font-medium">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
    </>
    
  );
};

export default SyntheticIndicesDetailPage;


