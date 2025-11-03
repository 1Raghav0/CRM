import { Line } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { FaArrowUp } from "react-icons/fa";
import FAQSection from "./FAQSection";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

const NomoAiIndex = () => {
  const navigate = useNavigate();

  const gotoDeposit = () =>{
    navigate("/money/deposit")
  }
  // Mock chart data (replicates the smooth upward trend)
  const data = {
    labels: ["", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "NMAI",
        data: [340, 345, 348, 351, 350, 354, 357, 355, 360, 372],
        borderColor: "#22c55e",
        backgroundColor: "rgba(34,197,94,0.1)",
        tension: 0.4,
        fill: true,
        pointRadius: 3,
        pointBackgroundColor: "#22c55e",
        pointHoverRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#fff",
        titleColor: "#000",
        bodyColor: "#000",
        borderColor: "#e5e7eb",
        borderWidth: 1,
      },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  return (
    <>
    <div className="bg-[#f9fafc] flex flex-col items-center p-4 sm:p-6">
      {/* Main container */}
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-md p-4 sm:p-6 flex flex-col lg:flex-row gap-6">
        
        {/* Left Section */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex flex-wrap justify-between items-start sm:items-center gap-3 border-b pb-3 mb-4">
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
                nomo AI index <span className="text-gray-500 text-sm">(NMAI)</span>
              </h1>
              <div className="text-lg text-gray-800 font-medium">$357.74</div>
              <div className="flex items-center text-sm text-green-600">
                <FaArrowUp className="mr-1" /> +0.32% <span className="ml-1 text-gray-600">($1.15)</span>
              </div>
            </div>
            <div className="bg-green-100 text-green-700 px-3 py-2 rounded-lg text-sm font-medium">
              <div>🎯 Target price, 7 days</div>
              <div className="text-lg font-semibold">372.31</div>
              <div className="text-xs text-green-600">+$14.57 | 4.07%</div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-md">Risk score: 1</span>
            <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
              Powered by 25+ top leaders
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "Ask nomoGPT",
              "What’s affecting NMAI price?",
              "Is NMAI a good buy?",
              "Will NMAI price increase?"
            ].map((text, i) => (
              <button
                key={i}
                className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg"
              >
                {text}
              </button>
            ))}
          </div>

          {/* Chart */}
          <div className="relative bg-gray-50 border rounded-lg p-4 mb-6 h-64 sm:h-72">
            <Line data={data} options={options} />
            <div className="absolute top-4 right-4 bg-green-100 text-green-700 text-sm px-2 py-1 rounded">
              372.31
            </div>
          </div>

          {/* Time filters */}
          <div className="flex justify-center gap-4 mt-3 text-gray-500 text-sm mb-6">
            {["1H", "1D", "1W", "1M", "1Y"].map((t, i) => (
              <button
                key={i}
                className={`${
                  t === "1M" ? "text-blue-600 font-semibold border-b-2 border-blue-600" : ""
                } hover:text-blue-600`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-sm text-gray-500">Monthly profitability</div>
              <div className="text-lg font-semibold text-gray-800">3.36%</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-sm text-gray-500">Daily profitability</div>
              <div className="text-lg font-semibold text-gray-800">1.16%</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-sm text-gray-500">Max drawdown</div>
              <div className="text-lg font-semibold text-gray-800">0.11%</div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-80 bg-gray-50 borderborder-gray-50 rounded-xl p-5 h-[400px]">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Invest</h2>
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">Lots</span>
            <div className="flex items-center border rounded-lg px-2 py-1">
              <button className="px-2 text-gray-600">-</button>
              <input
                type="text"
                value="1"
                readOnly
                className="w-10 text-center bg-transparent outline-none text-gray-800"
              />
              <button className="px-2 text-gray-600">+</button>
            </div>
          </div>

          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Investment</span>
            <span className="font-medium text-gray-800">71.54</span>
          </div>

          <div className="text-xs text-gray-500 mb-4">
            Recommended balance: <span className="font-semibold">360</span>
          </div>

          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-gray-700 font-medium">Required margin</span>
            <span className="font-semibold text-gray-800">71.54 / $0</span>
          </div>

          <div>
            <span>Advanced setting</span>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg mt-3"
          onClick={gotoDeposit}>
            + Deposit
          </button>

          <div className="text-center text-xs text-gray-500 mt-2">
            Best for new users • Joining fee <span className="line-through">$2.99</span> →{" "}
            <span className="text-green-600 font-semibold">Free first</span> • Profit sharing:{" "}
            <span className="text-blue-600 font-semibold">25%</span>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full bg-[#f9fafc] max-w-7xl mx-auto p-6 text-gray-800">
      {/* ---------- How It Works Section ---------- */}
      <section className="bg-white shadow-md rounded-lg p-6 mb-10">
        <h2 className="text-2xl font-semibold mb-6">How it works</h2>

        {/* Steps */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Step 1 */}
          <div className="flex-1 text-center">
            <div className="text-blue-500 text-sm font-semibold mb-2">Step 1</div>
            <div className="text-lg font-medium">💰 Invest</div>
            <p className="text-gray-600 text-sm">
              Choose an amount and click “Invest”
            </p>
          </div>

          {/* Connector */}
          <div className="hidden lg:block w-20 border-t-2 border-gray-300"></div>

          {/* Step 2 */}
          <div className="flex-1 text-center">
            <div className="text-blue-500 text-sm font-semibold mb-2">Step 2</div>
            <div className="text-lg font-medium">🤖 AI does the work</div>
            <p className="text-gray-600 text-sm">
              nomo AI automatically opens trades based on its data
            </p>
          </div>

          {/* Connector */}
          <div className="hidden lg:block w-20 border-t-2 border-gray-300"></div>

          {/* Step 3 */}
          <div className="flex-1 text-center">
            <div className="text-blue-500 text-sm font-semibold mb-2">Step 3</div>
            <div className="text-lg font-medium">📈 Track & collect</div>
            <p className="text-gray-600 text-sm">
              Watch your investment grow and withdraw profits anytime
            </p>
          </div>
        </div>

        {/* Users invested */}
        <div className="mt-8 border-t pt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="text-blue-600 font-semibold text-lg">
            2501 nomo users invested in nomo AI index
          </div>
          <div className="flex -space-x-2">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- About Section ---------- */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">About nomo AI index (NMAI)</h2>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          nomo AI index, a sophisticated investment feature on the nomo trading
          platform, represents an innovative approach to automated trading. This
          carefully designed index harnesses artificial intelligence to track and
          replicate a balanced portfolio comprising nomo’s top-performing leaders,
          effectively allowing users to invest in multiple expert traders
          simultaneously through a single, streamlined investment. With a modest
          entry price point, the nomo AI index offers accessibility to both novice and
          seasoned traders seeking diversification without the complexity of
          selecting individual leaders.
        </p>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          The index distinguishes itself through its consistent generation of small,
          steady returns on an almost daily basis, prioritizing stability and regular
          profit over high-risk, high-reward strategies that characterize many
          traditional trading approaches. The operational mechanism of the nomo AI
          index centers on dynamically tracking and balancing trade performance from
          the platform’s most successful leaders, automatically executing trades
          based on this collective intelligence.
        </p>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          As positions are opened and closed, users benefit from a diversified
          approach that mitigates risk while tracking the performance of the top
          leaders on the platform. The fee structure employs a high-water mark
          system, just like in copy-trading, ensuring that nomo AI only shares when
          users do, creating an alignment of interests between the platform and its
          users.
        </p>

        <p className="text-gray-700 text-sm leading-relaxed">
          This simplified investment approach eliminates the need for extensive
          market knowledge or constant monitoring, making it an ideal entry point for
          newcomers to trading while serving as a stable foundation for experienced
          users looking to complement their manual trading activities with an
          AI-driven component.
        </p>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div className="bg-gray-50 border rounded-md p-3 text-center">
            <div className="text-gray-500">Open trades</div>
            <div className="text-xl font-semibold">148</div>
          </div>
          <div className="bg-gray-50 border rounded-md p-3 text-center">
            <div className="text-gray-500">Today's range</div>
            <div className="text-xl font-semibold">353.69 – 359.00</div>
          </div>
          <div className="bg-gray-50 border rounded-md p-3 text-center">
            <div className="text-gray-500">Year's range</div>
            <div className="text-xl font-semibold">250.22 – 356.59</div>
          </div>
        </div>
      </section>
    </div>
    <FAQSection />
    </>
    
  );
};

export default NomoAiIndex;
