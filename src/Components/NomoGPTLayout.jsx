import React from "react";

const NomoGPTLayout = () => {
  return (
    <div className="min-h-screen bg-[#e4eaf9] p-4 md:p-8 flex flex-col space-y-6">
      {/* Top bar */}
      <header className="flex flex-col md:flex-row items-center justify-between bg-[#cde2ff] rounded-xl p-4 md:p-6 space-y-4 md:space-y-0 md:space-x-6">
        <div className="flex items-center space-x-4">
          <img
            src="/nomo-gpt-mascot.webp"
            alt="nomoGPT logo"
            className="w-12 h-12"
          />
          <div>
            <h1 className="font-semibold text-lg md:text-xl text-[#2447af]">Talk to nomoGPT</h1>
            <p className="text-sm md:text-base text-[#5871a9]">
              Instant market research powered by AI
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-2">
          {["Oil price drivers", "Market sentiment today?", "What to sell today?"].map((item, idx) => (
            <button
              key={idx}
              className={`text-[#3b71ff] bg-[#dbe5ff] px-4 py-1 rounded-full text-sm md:text-base ${
                idx === 0 ? "ring-1 ring-[#3b71ff]" : "opacity-80"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        <button className="bg-[#3b71ff] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#2c4fbb] whitespace-nowrap">
          + New chat
        </button>
      </header>

      {/* Main content */}
      <main className="flex flex-col md:flex-row gap-6 flex-1">
        {/* Left panel */}
        <aside className="w-full md:w-1/4 bg-white rounded-xl p-4 shadow-sm">
          <div className="text-sm text-[#3b71ff] font-medium cursor-pointer hover:underline">
            New chat
          </div>
        </aside>

        {/* Right panel */}
        <section className="flex-1 bg-white rounded-xl p-6 shadow-sm flex flex-col items-center justify-center gap-y-4">
          <img
            src="/empty-chat-plug.webp"
            alt="nomoGPT mascot"
            className="w-52 h-52 mb-4"
          />
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
            Welcome to nomoGPT! Ask me anything!
          </h2>

          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {["Forex market overview", "Crypto market overview", "Best strategy today?"].map((tag, i) => (
              <button
                key={i}
                className="text-[#3b71ff] bg-[#dbe5ff] text-sm md:text-base px-3 py-1 rounded-full"
              >
                {tag}
              </button>
            ))}
          </div>

          <form className="w-full max-w-xl relative">
            <input
              type="text"
              placeholder="Ask nomoGPT anything..."
              className="w-full rounded-xl border border-gray-300 px-5 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3b71ff]"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#3b71ff] hover:bg-[#2c4fbb] text-white p-3 rounded-full focus:outline-none"
              aria-label="Send"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>

          <div className="flex items-center space-x-2 mt-4 text-sm text-gray-500">
            <span>0/5 questions used</span>
            <span className="bg-[#3b71ff] text-white rounded-full px-2 py-0.5 flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                stroke="none"
                className="w-4 h-4"
              >
                <circle cx="12" cy="12" r="10" />
                <text x="12" y="16" fontSize="12" fill="#3b71ff" fontWeight="bold" textAnchor="middle">
                  m
                </text>
              </svg>
              <span>Starter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NomoGPTLayout;
