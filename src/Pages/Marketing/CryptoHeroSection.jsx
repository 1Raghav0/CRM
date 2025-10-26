import React, { useState } from "react";

// Sample data for crypto assets
const cryptoAssets = [
  {
    name: "Polkadot",
    symbol: "DOT/USD",
    price: "$3.361",
    change: "+16.78%",
    logo: "https://cryptologos.cc/logos/polkadot-dot-logo.png",
  },
  {
    name: "Dogecoin",
    symbol: "DOGE/USD",
    price: "$0.20391",
    change: "+4.21%",
    logo: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
  },
  {
    name: "Ethereum",
    symbol: "ETH/USD",
    price: "$4,051.95",
    change: "+3.09%",
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
  },
  {
    name: "Solana",
    symbol: "SOL/USD",
    price: "$199.47",
    change: "+3.72%",
    logo: "https://cryptologos.cc/logos/solana-sol-logo.png",
  },
  {
    name: "Bitcoin",
    symbol: "BTC/USD",
    price: "$57,126.35",
    change: "+2.50%",
    logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
  },
  {
    name: "Litecoin",
    symbol: "LTC/USD",
    price: "$174.00",
    change: "+1.80%",
    logo: "https://cryptologos.cc/logos/litecoin-ltc-logo.png",
  },
  {
    name: "Ripple",
    symbol: "XRP/USD",
    price: "$1.15",
    change: "-1.10%",
    logo: "https://cryptologos.cc/logos/ripple-xrp-logo.png",
  },
  {
    name: "Cardano",
    symbol: "ADA/USD",
    price: "$1.89",
    change: "+0.85%",
    logo: "https://cryptologos.cc/logos/cardano-ada-logo.png",
  },
  {
    name: "Polkadot",
    symbol: "DOT/USD",
    price: "$3.36",
    change: "+3.80%",
    logo: "https://cryptologos.cc/logos/polkadot-dot-logo.png",
  },
  {
    name: "Chainlink",
    symbol: "LINK/USD",
    price: "$29.58",
    change: "-2.05%",
    logo: "https://cryptologos.cc/logos/chainlink-link-logo.png",
  },
  {
    name: "Avalanche",
    symbol: "AVAX/USD",
    price: "$56.23",
    change: "+2.15%",
    logo: "https://cryptologos.cc/logos/avalanche-avax-logo.png",
  },
  {
    name: "Polygon",
    symbol: "MATIC/USD",
    price: "$1.22",
    change: "+1.95%",
    logo: "https://cryptologos.cc/logos/polygon-matic-logo.png",
  },
  {
    name: "Shiba Inu",
    symbol: "SHIB/USD",
    price: "$0.000045",
    change: "+3.24%",
    logo: "https://cryptologos.cc/logos/shiba-inu-shib-logo.png",
  },
  {
    name: "Tezos",
    symbol: "XTZ/USD",
    price: "$4.23",
    change: "-0.80%",
    logo: "https://cryptologos.cc/logos/tezos-xzt-logo.png",
  },
  {
    name: "Stellar",
    symbol: "XLM/USD",
    price: "$0.34",
    change: "+2.50%",
    logo: "https://cryptologos.cc/logos/stellar-xlm-logo.png",
  },
  {
    name: "Uniswap",
    symbol: "UNI/USD",
    price: "$26.87",
    change: "+5.00%",
    logo: "https://cryptologos.cc/logos/uniswap-uni-logo.png",
  },
  {
    name: "VeChain",
    symbol: "VET/USD",
    price: "$0.12",
    change: "+4.55%",
    logo: "https://cryptologos.cc/logos/vechain-vet-logo.png",
  },
  {
    name: "Monero",
    symbol: "XMR/USD",
    price: "$230.90",
    change: "-1.20%",
    logo: "https://cryptologos.cc/logos/monero-xmr-logo.png",
  },
  {
    name: "Aave",
    symbol: "AAVE/USD",
    price: "$424.40",
    change: "+7.10%",
    logo: "https://cryptologos.cc/logos/aave-aave-logo.png",
  },
  {
    name: "Cosmos",
    symbol: "ATOM/USD",
    price: "$29.51",
    change: "+3.10%",
    logo: "https://cryptologos.cc/logos/cosmos-atm-logo.png",
  },
];

const CryptoHeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter crypto assets based on search
  const filteredAssets = cryptoAssets.filter((asset) =>
    asset.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 py-10">
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-2">
            Invest in 1000+ assets
          </h1>
          <p className="text-lg text-gray-600">
            Explore the hottest assets and find the ones you would like to
            invest in.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mx-auto mb-8">
          <input
            type="text"
            placeholder="Search by asset name or ticker, e.g. 'Bitcoin' or 'ETH/USD'"
            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Crypto Asset Cards */}
      <div className="container  mx-auto px-4">
        <div className="flex overflow-x-scroll space-x-4 pb-4 hide-scrollbar">
          {filteredAssets.map((asset, index) => (
            <div
              key={index}
              className="flex-none bg-white p-6 rounded-lg shadow-lg w-60 min-w-[350px]"
            >
              <div className="flex items-center justify-b mb-4">
                <div className="flex">
                  <img
                    src={asset.logo}
                    alt={asset.name}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{asset.name}</h3>
                    <p className="text-sm text-gray-500">{asset.symbol}</p>
                  </div>
                </div>
                <div>
                  <div className="mb-2 text-xl font-bold">{asset.price}</div>
                  <div
                    className={`text-sm ${
                      asset.change.includes("-")
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {asset.change}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoHeroSection;
