import React from "react";

const traders = [
  {
    name: "IngridMartingale",
    tag1: "High-frequency",
    tag2: "Profit-generator",
    profit: "22534.52",
    winRate: "100%",
    color: "bg-blue-900",
  },
  {
    name: "StratosGoldwind",
    tag2: "Profit-generator",
    profit: "5102.1",
    winRate: "78.38%",
    color: "bg-purple-700",
  },
  {
    name: "Ubuntu-Waves",
    profit: "73.22",
    winRate: "78.38%",
    color: "bg-sky-700",
  },
];



const HeroSection = () => {
  return (
    <>
      <section className="w-full bg-white text-gray-800 px-4 md:px-8 lg:px-16 py-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Choose your trader
          </h1>
          <p className="text-gray-500 mb-8">
            Explore the best lead traders you can copy
          </p>

          {/* Traders cards */}
          <div className="flex flex-col sm:flex-row justify-center flex-wrap gap-4 w-full mb-6">
            {traders.map((t, i) => (
              <div
                key={i}
                className={`${t.color} text-white rounded-lg p-5 flex-1 flex justify-between shadow-md max-w-md`}
              >
                <div>
                  <h2 className="text-lg text-left font-semibold mb-2">
                    {t.name}
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {t.tag1 && (
                      <span className="bg-blue-500 text-xs px-2 py-1 rounded">
                        {t.tag1}
                      </span>
                    )}
                    {t.tag2 && (
                      <span className="bg-green-500 text-xs px-2 py-1 rounded">
                        {t.tag2}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <p>
                    <strong>{t.profit}</strong> <br />
                    <span className="text-gray-200 text-xs">
                      30D copiers profit
                    </span>
                  </p>
                  <p className="text-right">
                    <strong>{t.winRate}</strong> <br />
                    <span className="text-gray-200 text-xs">Win rate</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
