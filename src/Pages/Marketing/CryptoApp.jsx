import React, { useState } from "react";
import CryptoHeroSection from "./CryptoHeroSection";
import CryptoDashboard from "./CryptoDashboard";

const CryptoApp = () => {
  const [selectedCrypto, setSelectedCrypto] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top crypto cards section */}
      <CryptoHeroSection onSelectCrypto={setSelectedCrypto} />

      {/* Conditionally show chart when a crypto is selected */}
      {selectedCrypto && (
        <CryptoDashboard selectedCrypto={selectedCrypto} />
      )}
    </div>
  );
};

export default CryptoApp;
