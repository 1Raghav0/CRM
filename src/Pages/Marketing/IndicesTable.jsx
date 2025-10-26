import React from 'react';

const indicesData = [
  { name: 'DAX 40 (Germany)', price: '€24,212.10', change: '-0.05%', changeValue: '-€12.2' },
  { name: 'CAC 40 (France)', price: '€8,217.90', change: '-0.57%', changeValue: '+€47' },
  { name: 'FTSE 100 Index (UK)', price: '€9,636.00', change: '+0.47%', changeValue: '+€45.5' },
  { name: 'EURO STOXX 50', price: '€5,670.50', change: '-0.35%', changeValue: '-€20' },
  { name: 'IBEX 35 (Spain)', price: '€15,853.80', change: '+0.11%', changeValue: '+€17.6' },
  { name: 'Dow Jones (US)', price: '$47,205.58', change: '+1.02%', changeValue: '+$475.94' },
  { name: 'S&P 500 (US)', price: '$6,792.16', change: '+0.7%', changeValue: '+$469.9' },
  { name: 'Nasdaq-100 (US)', price: '$25,377.46', change: '+0.96%', changeValue: '+$242.5' },
  { name: 'Nikkei 225 (Japan)', price: '¥49,509.50', change: '+1%', changeValue: '+¥400' }
];

const IndicesTable = () => {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left">24h %</th>
            <th className="px-4 py-2 text-left">24h Change</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {indicesData.map((index, indexId) => (
            <tr key={indexId} className="border-b">
              <td className="px-4 py-2">{index.name}</td>
              <td className="px-4 py-2">{index.price}</td>
              <td className={`px-4 py-2 ${parseFloat(index.change) > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {index.change}
              </td>
              <td className={`px-4 py-2 ${parseFloat(index.change) > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {index.changeValue}
              </td>
              <td className="px-4 py-2">
                <button className="bg-green-500 text-white px-4 py-2 rounded mr-2">Buy</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded">Sell</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IndicesTable;
