import React from 'react';

// Usage: <WithdrawalMethods onSelect={(method) => console.log(method)} />

const methods = [
  { id: 'bank', title: 'Bank transfer', eta: '5-7 days', subtitle: '' },
  { id: 'btc', title: 'Bitcoin', eta: '0-2 hours', subtitle: '' },
  { id: 'usdc_erc', title: 'USD Coin', eta: '0-2 hours', subtitle: 'ERC-20' },
  { id: 'usdc_sol', title: 'USD Coin', eta: '0-2 hours', subtitle: 'SOL' },
  { id: 'usdt_erc', title: 'Tether', eta: '0-2 hours', subtitle: 'ERC-20' },
  { id: 'usdt_trc', title: 'Tether', eta: '0-2 hours', subtitle: 'TRC-20' },
  { id: 'eth', title: 'Ethereum', eta: '0-2 hours', subtitle: '' },
];

const Icon = ({ type }) => {
  // Minimal inline SVG icons. Replace with your icon library if desired.
  switch (type) {
    case 'bank':
      return (
        <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 10.5L12 5l9 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 11v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 16v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 16v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'btc':
      return (
        <svg className="w-5 h-5 text-yellow-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2" />
          <path d="M11 7v10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M13 7v10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M10 9h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M10 15h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    case 'usdc':
    case 'usdt':
    case 'eth':
    default:
      return (
        <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3v18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 7h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M6 17h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
  }
};

export default function WithdrawalMethods({ onSelect = () => {} }) {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4 shadow">
            {/* Up arrow icon */}
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19 12l-7-7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h2 className="text-lg font-semibold text-gray-800">Select withdrawal method</h2>
          <p className="text-sm text-gray-500 mt-2">Withdrawal methods depend on your country of residence. Most withdrawals get automatically approved within 2 hours</p>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {methods.map((m) => (
            <button
              key={m.id}
              onClick={() => onSelect(m)}
              className="flex flex-col items-start gap-2 p-4 rounded-lg border border-gray-100 bg-white hover:shadow-md transition text-left"
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-gray-50 flex items-center justify-center">
                    <Icon type={m.id === 'bank' ? 'bank' : m.id === 'btc' ? 'btc' : 'usdc'} />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-800">{m.title}</span>
                    {m.subtitle && <span className="text-xs text-gray-400">{m.subtitle}</span>}
                  </div>
                </div>

                <div className="text-xs text-gray-400">{m.eta}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
