import { FC } from 'react';

interface Transaction {
  id: string;
  type: string;
  hash: string;
  timestamp: string;
  status: 'Confirmed' | 'Pending' | 'Failed';
}

interface RecentTransactionsProps {
  transactions: Transaction[];
}

/**
 * RecentTransactions component displays a list of recent blockchain transactions
 * in a styled table format. It accepts transactions as props to allow dynamic data.
 * 
 * Features:
 * - Displays transaction ID, type, hash, formatted timestamp, and status.
 * - Color-coded status badges for easy interpretation.
 * - Responsive table with horizontal scroll on small screens.
 * - Accessibility improvements with semantic HTML and aria attributes.
 */
const RecentTransactions: FC<RecentTransactionsProps> = ({ transactions }) => {
  // Format timestamp to a more readable format
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    if (isNaN(date.getTime())) {
      return timestamp; // fallback to original if invalid date
    }
    return new Intl.DateTimeFormat('default', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <section
      className="p-6 bg-black border border-[#27272A] rounded-lg"
      aria-label="Recent Blockchain Transactions"
    >
      <h1 className="text-2xl font-bold text-white mb-2">Recent Blockchain Transactions</h1>
      <p className="text-gray-400 mb-6">Latest transactions recorded on Stellar blockchain</p>
      
      <div className="overflow-x-auto">
        <table className="w-full" role="table">
          <thead>
            <tr className="text-gray-400 text-left" role="row">
              <th className="pb-4" scope="col">Transaction ID</th>
              <th className="pb-4" scope="col">Type</th>
              <th className="pb-4" scope="col">Hash</th>
              <th className="pb-4" scope="col">Timestamp</th>
              <th className="pb-4" scope="col">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {transactions.map((tx) => (
              <tr key={tx.id} className="text-white" role="row">
                <td className="py-4 font-mono" role="cell">{tx.id}</td>
                <td className="py-4" role="cell">{tx.type}</td>
                <td className="py-4 font-mono" role="cell">{tx.hash}</td>
                <td className="py-4" role="cell">{formatTimestamp(tx.timestamp)}</td>
                <td className="py-4" role="cell">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      tx.status === 'Confirmed'
                        ? 'bg-green-500/20 text-green-500'
                        : tx.status === 'Pending'
                        ? 'bg-yellow-500/20 text-yellow-500'
                        : 'bg-red-500/20 text-red-500'
                    }`}
                    aria-label={`Transaction status: ${tx.status}`}
                  >
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <button
        className="w-full mt-6 py-3 text-gray-400 border border-[#27272A] rounded-lg cursor-pointer hover:bg-gray-800 transition-colors"
        aria-label="View all transactions"
      >
        View All Transactions
      </button>
    </section>
  );
};

export default RecentTransactions;
