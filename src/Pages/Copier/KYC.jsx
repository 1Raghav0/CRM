import { FaCheckCircle } from "react-icons/fa";
import { BsCreditCard2Front, BsWallet2 } from "react-icons/bs";
import {useNavigate} from 'react-router-dom'; 

const KycLevelComparison = () => {
  const navigate = useNavigate();
  const gotoVerify = () => {
    navigate('/kyc/documents');
  };
  const features = [
    "Total deposit limit",
    "Total withdrawal limit",
    "Crypto payment methods",
    "Fiat payment methods",
    "Trading",
    "Copy-trading",
  ];

  const levels = [
    {
      title: "Basic",
      status: "Completed",
      limit: "8000 $",
      withdraw: "N/A",
      crypto: "Available",
      fiat: ["Cards", "eWallets"],
      trading: "Available",
      copy: "Available",
      req: ["Phone verification"],
      btn: null,
      highlight: false,
      image:
        "https://cdn-icons-png.flaticon.com/512/463/463574.png", // placeholder
    },
    {
      title: "Level 1",
      status: "Unlimited",
      limit: "20000 $",
      withdraw: "Unlimited",
      crypto: "Available",
      fiat: ["Cards", "eWallets"],
      trading: "Available",
      copy: "Available",
      req: ["Basic questionnaire", "Proof of identity", "Liveness check"],
      btn: "Verify now",
      highlight: true,
      image:
        "https://cdn-icons-png.flaticon.com/512/4178/4178713.png", // placeholder
    },
    {
      title: "Level 2",
      status: "Unlimited",
      limit: "Unlimited",
      withdraw: "Unlimited",
      crypto: "Available",
      fiat: ["Cards", "Bank transfer", "eWallets"],
      trading: "Available",
      copy: "Available",
      req: ["Proof of address"],
      btn: null,
      highlight: false,
      image:
        "https://cdn-icons-png.flaticon.com/512/4178/4178706.png", // placeholder
    },
  ];

  return (
    <section className="bg-[#f9fafc] py-8 px-4 sm:py-12 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center sm:text-left">
          KYC Verification Levels 🚀
        </h2>

        {/* Changed grid breakpoints: tablet (md) now shows 2 columns, large (lg) shows 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Left Feature Labels */}
          <div className="bg-white border rounded-lg p-4 sm:p-6 text-gray-700 font-medium flex flex-col justify-between">
            <div>
              {features.map((f, i) => (
                <div
                  key={i}
                  className="py-3 border-b last:border-b-0 text-sm sm:text-base"
                >
                  {f}
                </div>
              ))}
            </div>
            <div className="pt-4 sm:pt-6 font-semibold text-sm sm:text-base">
              Requirements
            </div>
          </div>

          {/* Levels: each becomes its own card; will flow under labels on small screens */}
          {levels.map((lvl, i) => (
            <div
              key={i}
              className={`bg-white border rounded-lg p-4 sm:p-6 flex flex-col justify-between ${
                lvl.highlight ? "border-blue-500 shadow-md" : "border-gray-200"
              }`}
            >
              {/* Header */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold">{lvl.title}</h3>
                  {lvl.status === "Completed" ? (
                    <span className="text-green-600 bg-green-50 px-3 py-1 rounded text-sm">
                      ✓ Completed
                    </span>
                  ) : lvl.status === "Unlimited" ? (
                    <span className="text-white bg-blue-600 px-3 py-1 rounded text-sm">
                      ∞ Unlimited
                    </span>
                  ) : null}
                </div>

                {/* Optional Image */}
                {lvl.image && (
                  <div className="mb-3 flex justify-center">
                    <img
                      src={lvl.image}
                      alt={lvl.title}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                )}

                {/* Details */}
                <ul className="text-sm text-gray-700 space-y-3">
                  <li>
                    <strong>{lvl.limit}</strong>
                  </li>
                  <li>{lvl.withdraw}</li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-500" />
                    {lvl.crypto}
                  </li>
                  <li className="flex flex-col">
                    {lvl.fiat.map((method, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        {method.includes("Card") ? (
                          <BsCreditCard2Front />
                        ) : (
                          <BsWallet2 />
                        )}
                        {method}
                      </div>
                    ))}
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-500" />
                    {lvl.trading}
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-500" />
                    {lvl.copy}
                  </li>
                </ul>
              </div>

              {/* Requirements */}
              <div className="mt-6 border-t pt-4 space-y-2 text-sm">
                {lvl.req.map((r, k) => (
                  <div
                    key={k}
                    className={`flex items-center gap-2 ${
                      k === 0 ? "text-green-600" : "text-gray-600"
                    }`}
                  >
                    <FaCheckCircle
                      className={k === 0 ? "text-green-500" : "text-gray-400"}
                    />
                    {r}
                  </div>
                ))}
                {lvl.btn && (
                  <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 text-sm font-medium transition" onClick={gotoVerify}>
                    {lvl.btn}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KycLevelComparison;
