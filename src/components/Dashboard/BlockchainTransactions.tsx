import React from "react";

const transactions = [
  {
    id: "tx-7829",
    type: "Product Authentication",
    hash: "QRT...29U",
    timestamp: "2023-03-15 14:32",
    status: "Confirmed",
  },
  {
    id: "tx-7828",
    type: "Inventory Transfer",
    hash: "URP...59V",
    timestamp: "2023-03-15 13:45",
    status: "Confirmed",
  },
  {
    id: "tx-7827",
    type: "Smart Contract",
    hash: "CLM...30K",
    timestamp: "2023-03-15 11:20",
    status: "Pending",
  },
  {
    id: "tx-7826",
    type: "Payment",
    hash: "GHL...7YU",
    timestamp: "2023-03-15 10:05",
    status: "Failed",
  },
  {
    id: "tx-7825",
    type: "Product Authentication",
    hash: "ERS...14T",
    timestamp: "2023-03-14 18:48",
    status: "Confirmed",
  },

  {
    id: "tx-7525",
    type: "Product Authentication",
    hash: "ERS...14T",
    timestamp: "2023-03-14 18:48",
    status: "Confirmed",
  },

  {
    id: "tx-7515",
    type: "Product Authentication",
    hash: "ERS...14T",
    timestamp: "2023-03-14 18:48",
    status: "Confirmed",
  },
];

export default function BlockchainTransactions() {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-md">
      <h2 className="text-xl font-semibold">Recent Blockchain Transactions</h2>
      <p className="text-sm text-muted-foreground mb-4">
        Latest transactions recorded on Stellar blockchain
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-muted-foreground text-sm">
              <th className="text-left py-2">Transaction ID</th>
              <th className="text-left py-2">Type</th>
              <th className="text-left py-2">Hash</th>
              <th className="text-left py-2">Timestamp</th>
              <th className="text-left py-2">Status</th>
            </tr>
          </thead>
          <tbody className="text-[11px]">
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-b border-border test-sm">
                <td className="py-4">{tx.id}</td>
                <td className="py-4">
                  {tx.type.split(" ").map((word, index) => (
                    <div key={index}>{word}</div>
                  ))}
                </td>
                <td className="py-4">{tx.hash}</td>
                <td className="py-4">
                  {tx.timestamp.split(" ").map((word, index) => (
                    <div key={index}>{word}</div>
                  ))}
                </td>
                <td className="py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium
                    ${
                      tx.status === "Confirmed"
                        ? "bg-green-600"
                        : tx.status === "Pending"
                        ? "bg-yellow-500"
                        : "bg-red-600"
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
      <button className="mt-4 w-full py-2 border border-border rounded-lg hover:bg-accent">
        View All Transactions
      </button>
    </div>
  );
}
