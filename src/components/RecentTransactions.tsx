import { FC } from 'react';

interface Transaction {
  id: string;
  type: string;
  hash: string;
  timestamp: string;
  status: 'Confirmed' | 'Pending' | 'Failed';
}

const RecentTransactions: FC = () => {
  const transactions: Transaction[] = [
    {
      id: 'tx-7829',
      type: 'Product Authentication',
      hash: 'GDST...3XLP',
      timestamp: '2023-03-15 14:32',
      status: 'Confirmed',
    },
    {
      id: 'tx-7828',
      type: 'Inventory Transfer',
      hash: 'GBND...9PLM',
      timestamp: '2023-03-15 13:45',
      status: 'Confirmed',
    },
    {
      id: 'tx-7827',
      type: 'Smart Contract',
      hash: 'GAJK...2QWE',
      timestamp: '2023-03-15 11:20',
      status: 'Pending',
    },
    {
      id: 'tx-7826',
      type: 'Payment',
      hash: 'GHJL...7TYU',
      timestamp: '2023-03-15 10:05',
      status: 'Failed',
    },
    {
      id: 'tx-7825',
      type: 'Product Authentication',
      hash: 'GFDS...5RTY',
      timestamp: '2023-03-14 16:48',
      status: 'Confirmed',
    },
  ];

  return (
    <div className="p-6 bg-black border border-[#27272A] rounded-lg">
      <h1 className="text-2xl font-bold text-white mb-1">Recent Blockchain Transactions</h1>
      <p className="text-gray-400 mb-6">Latest transactions recorded on Stellar blockchain</p>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 text-left">
              <th className="pb-4">Transaction ID</th>
              <th className="pb-4">Type</th>
              <th className="pb-4">Hash</th>
              <th className="pb-4">Timestamp</th>
              <th className="pb-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {transactions.map((tx) => (
              <tr key={tx.id} className="text-white">
                <td className="py-4 font-mono">{tx.id}</td>
                <td className="py-4">{tx.type}</td>
                <td className="py-4 font-mono">{tx.hash}</td>
                <td className="py-4">{tx.timestamp}</td>
                <td className="py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      tx.status === 'Confirmed'
                        ? 'bg-green-500/20 text-green-500'
                        : tx.status === 'Pending'
                        ? 'bg-yellow-500/20 text-yellow-500'
                        : 'bg-red-500/20 text-red-500'
                    }`}
                  >
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <button className="w-full mt-6 py-3 text-gray-400 border border-[#27272A] rounded-lg cursor-pointer">
        View All Transactions
      </button>
    </div>
  );
};

export default RecentTransactions; 