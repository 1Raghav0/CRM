export default function PopupModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white w-[90%] max-w-md md:max-w-lg lg:max-w-2xl rounded-2xl shadow-xl p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl font-bold"
        >
          &times;
        </button>

        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-10 h-10 border-4 border-lime-500 border-t-transparent rounded-full animate-spin"></div>
          <h2 className="text-lg md:text-xl font-semibold text-gray-700">
            Hello, it's nomo AI assistant! Answer a few questions and I will
            find the perfect leaders for you to copy
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-3 mt-6">
          <div className="flex-1 bg-blue-50 border border-blue-100 rounded-lg p-4 text-center">
            <span className="bg-blue-600 text-white text-sm font-semibold px-2 py-1 rounded-full">
              Step 1
            </span>
            <h3 className="mt-3 font-semibold text-gray-700">💭 Answer questions</h3>
            <p className="text-gray-500 text-sm mt-1">
              Help nomo AI learn about your risk tolerance and preferences
            </p>
          </div>

          <div className="flex-1 bg-indigo-50 border border-indigo-100 rounded-lg p-4 text-center">
            <span className="bg-indigo-600 text-white text-sm font-semibold px-2 py-1 rounded-full">
              Step 2
            </span>
            <h3 className="mt-3 font-semibold text-gray-700">📊 Data analysis</h3>
            <p className="text-gray-500 text-sm mt-1">
              nomo AI will analyze your data and all the leaders on nomo
            </p>
          </div>

          <div className="flex-1 bg-green-50 border border-green-100 rounded-lg p-4 text-center">
            <span className="bg-green-600 text-white text-sm font-semibold px-2 py-1 rounded-full">
              Step 3
            </span>
            <h3 className="mt-3 font-semibold text-gray-700">✨ Perfect match</h3>
            <p className="text-gray-500 text-sm mt-1">
              nomo AI will pick the best leaders for you
            </p>
          </div>
        </div>

        {/* Start Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => alert("Starting...")}
            className="bg-lime-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-lime-400 transition"
          >
            Start now!
          </button>
        </div>
      </div>
    </div>
  );
}
