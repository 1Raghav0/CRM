import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TradePopup = ({ trader, onClose }) => {
  const [mode, setMode] = useState("smart"); // "smart" or "advanced"
  const navigate = useNavigate();
  const gotoDeposit = () => {
    navigate("/money/deposit")
  }
  const [multiplier, setMultiplier] = useState("x1");
  const [limitEnabled, setLimitEnabled] = useState(true);
  const [limitValue, setLimitValue] = useState("");
  const [fallbackEnabled, setFallbackEnabled] = useState(true);
  const [takeProfit, setTakeProfit] = useState("None");
  const [stopLoss, setStopLoss] = useState("None");

  if (!trader) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl w-[450px] max-h-[90vh] overflow-y-auto shadow-xl relative p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {/* HEADER */}
        <div className="flex items-center gap-3 mb-5">
          <img
            src={trader.avatar}
            alt={trader.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-lg flex items-center gap-1">
              {trader.flag && <span>{trader.flag}</span>} {trader.name}
            </h3>
            <p className="text-xs text-gray-500">{trader.copiers} copiers</p>
          </div>
        </div>

        {/* Trader Stats */}
        <div className="flex flex-col gap-3 mb-5">
          <div className="flex justify-between">
            <span className="text-gray-600 text-sm">Profit:</span>
            <span className="text-green-600 font-semibold">{trader.profit}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 text-sm">Win Rate:</span>
            <span className="font-semibold">{trader.winRate}</span>
          </div>
        </div>

        {/* Mode Toggle */}
        <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
          <button
            onClick={() => setMode("smart")}
            className={`flex-1 py-2 rounded-md text-sm font-semibold ${
              mode === "smart"
                ? "bg-white shadow text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Smart mode
          </button>
          <button
            onClick={() => setMode("advanced")}
            className={`flex-1 py-2 rounded-md text-sm font-semibold ${
              mode === "advanced"
                ? "bg-white shadow text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Advanced mode
          </button>
        </div>

        {/* SMART MODE */}
        {mode === "smart" ? (
          <>
            <h4 className="text-sm font-semibold mb-1">Investment multiplier</h4>
            <p className="text-xs text-gray-500 mb-4">
              Choose how much you would like to invest in each copied trade compared to the lead trader
            </p>

            {/* Multiplier Buttons */}
            <div className="flex gap-3 mb-6">
              {[
                { id: "x1", label: "Equal x1", desc: "x1 trade volume" },
                { id: "x2", label: "Double x2", desc: "x2 trade volume" },
                { id: "x3", label: "Triple x3", desc: "x3 trade volume" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setMultiplier(opt.id)}
                  className={`flex-1 text-center border rounded-lg py-3 text-xs font-semibold ${
                    multiplier === opt.id
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
                  }`}
                >
                  <p>{opt.label}</p>
                  <p
                    className={`text-[10px] mt-1 ${
                      multiplier === opt.id ? "text-blue-100" : "text-gray-400"
                    }`}
                  >
                    {opt.desc}
                  </p>
                </button>
              ))}
            </div>

            {/* Top-up notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-5">
              <p className="text-blue-700 text-sm font-semibold mb-2 flex items-center gap-1">
                ⚠️ Top up your balance to start copying
              </p>
              <p className="text-xs text-gray-600 mb-3">
                You need at least <b>50 USD</b> on your balance to start copying{" "}
                <b>{trader.name}</b>. Please top up your balance.
              </p>

              <div className="bg-blue-100 rounded-md px-3 py-2 text-sm font-medium text-gray-700 mb-3">
                Your balance <span className="text-orange-500 font-bold">0.00 $</span>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg text-sm font-semibold"
                onClick={gotoDeposit}>
                  + Deposit
                </button>
                <button className="flex-1 bg-gray-200 text-gray-400 py-2 rounded-lg text-sm font-semibold cursor-not-allowed">
                  Start copying
                </button>
              </div>
            </div>

            <div className="flex justify-center items-center gap-2 text-xs text-gray-400">
              <span className="flex items-center justify-center w-5 h-5 bg-blue-600 text-white rounded-full">
                1
              </span>
              <div className="w-16 h-[2px] bg-gray-200"></div>
              <span className="flex items-center justify-center w-5 h-5 bg-gray-200 text-gray-500 rounded-full">
                2
              </span>
            </div>
          </>
        ) : (
          /* ADVANCED MODE */
          <>
            <h4 className="text-sm font-semibold mb-1">Investment multiplier</h4>
            <p className="text-xs text-gray-500 mb-4">
              Choose how much you would like to invest in each copied trade compared to the lead trader
            </p>

            {/* Multiplier Buttons */}
            <div className="flex gap-3 mb-6">
              {[
                { id: "x1", label: "Equal x1", desc: "x1 trade volume" },
                { id: "x2", label: "Double x2", desc: "x2 trade volume" },
                { id: "x3", label: "Triple x3", desc: "x3 trade volume" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setMultiplier(opt.id)}
                  className={`flex-1 text-center border rounded-lg py-3 text-xs font-semibold ${
                    multiplier === opt.id
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
                  }`}
                >
                  <p>{opt.label}</p>
                  <p
                    className={`text-[10px] mt-1 ${
                      multiplier === opt.id ? "text-blue-100" : "text-gray-400"
                    }`}
                  >
                    {opt.desc}
                  </p>
                </button>
              ))}
            </div>
            <div className="space-y-6 mb-4">
            {/* Investment Limit */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-sm font-semibold">Investment limit</h4>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={limitEnabled}
                    onChange={() => setLimitEnabled(!limitEnabled)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:h-4 after:w-4 after:rounded-full after:transition-all peer-checked:after:translate-x-4"></div>
                </label>
              </div>
              <p className="text-xs text-gray-500 mb-3">
                Set up a limit per trade to adjust the investment size in case a lead trader opens large trades
              </p>

              <input
                type="number"
                disabled={!limitEnabled}
                value={limitValue}
                onChange={(e) => setLimitValue(e.target.value)}
                placeholder="Enter limit"
                className={`w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 ${
                  limitEnabled
                    ? "border-gray-300 focus:ring-blue-200"
                    : "bg-gray-100 cursor-not-allowed"
                }`}
              />

              <p className="text-xs text-blue-600 mt-2">ℹ️ Minimum limit is 20 $</p>
            </div>

            {/* Fallback Exit Strategy */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-sm font-semibold">Fallback exit strategy</h4>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={fallbackEnabled}
                    onChange={() => setFallbackEnabled(!fallbackEnabled)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:h-4 after:w-4 after:rounded-full after:transition-all peer-checked:after:translate-x-4"></div>
                </label>
              </div>

              <p className="text-xs text-gray-500 mb-4">
                Set up fallback take profit / stop loss settings in case a lead trader doesn’t use them. 
                It limits your exposure and potential profits/losses.
              </p>

              {/* Take Profit */}
              <p className="text-sm font-medium mb-2">Take profit</p>
              <div className="flex gap-2 mb-4">
                {["None", "+5%", "+10%", "+20%", "Custom"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setTakeProfit(opt)}
                    className={`flex-1 py-2 text-xs border rounded-md font-semibold ${
                      takeProfit === opt
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-gray-100 text-gray-700 border-gray-200 hover:border-blue-400"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              {/* Stop Loss */}
              <p className="text-sm font-medium mb-2">Stop loss</p>
              <div className="flex gap-2">
                {["None", "-10%", "-50%", "-100%", "Custom"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setStopLoss(opt)}
                    className={`flex-1 py-2 text-xs border rounded-md font-semibold ${
                      stopLoss === opt
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-gray-100 text-gray-700 border-gray-200 hover:border-blue-400"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>

            {/* Top-up notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-5">
              <p className="text-blue-700 text-sm font-semibold mb-2 flex items-center gap-1">
                ⚠️ Top up your balance to start copying
              </p>
              <p className="text-xs text-gray-600 mb-3">
                You need at least <b>50 USD</b> on your balance to start copying{" "}
                <b>{trader.name}</b>. Please top up your balance.
              </p>

              <div className="bg-blue-100 rounded-md px-3 py-2 text-sm font-medium text-gray-700 mb-3">
                Your balance <span className="text-orange-500 font-bold">0.00 $</span>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg text-sm font-semibold"
                onClick={gotoDeposit}>
                  + Deposit
                </button>
                <button className="flex-1 bg-gray-200 text-gray-400 py-2 rounded-lg text-sm font-semibold cursor-not-allowed">
                  Start copying
                </button>
              </div>
            </div>

            <div className="flex justify-center items-center gap-2 text-xs text-gray-400">
              <span className="flex items-center justify-center w-5 h-5 bg-blue-600 text-white rounded-full">
                1
              </span>
              <div className="w-16 h-[2px] bg-gray-200"></div>
              <span className="flex items-center justify-center w-5 h-5 bg-gray-200 text-gray-500 rounded-full">
                2
              </span>
            </div>
          </>
          
        )}
      </div>
    </div>
  );
};

export default TradePopup;
