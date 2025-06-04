"use client";
import { useState } from "react";
import { BsEye } from "react-icons/bs";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaTimesCircle,
  FaSearch,
  FaDownload,
  FaFilter,
} from "react-icons/fa";
import { GrShare } from "react-icons/gr";
import TransactionStats from "./TransactionStats";

const transactions = [
  {
    id: "TX-2024-001482",
    type: "Smart Contract",
    description: "Order fulfillment - SKU-8842",
    amount: 12450,
    status: "Confirmed",
    timestamp: "2024-01-15 14:32:18",
  },
  {
    id: "TX-2024-001481",
    type: "Payment",
    description: "Supplier payment - Alpha Supplies Inc.",
    amount: 8750,
    status: "Confirmed",
    timestamp: "2024-01-15 13:45:22",
  },
  {
    id: "TX-2024-001480",
    type: "Inventory Update",
    description: "Stock level verification - Warehouse B",
    amount: null,
    status: "Pending",
    timestamp: "2024-01-15 12:18:45",
  },
  {
    id: "TX-2024-001479",
    type: "Quality Verification",
    description: "Product quality check - Batch #QC-2024-01",
    amount: null,
    status: "Confirmed",
    timestamp: "2024-01-15 11:22:33",
  },
  {
    id: "TX-2024-001478",
    type: "Smart Contract",
    description: "Delivery confirmation - Order #38291",
    amount: 15200,
    status: "Failed",
    timestamp: "2024-01-15 10:45:12",
  },
  {
    id: "TX-2024-001477",
    type: "Payment",
    description: "Logistics payment - Delta Logistics",
    amount: 3450,
    status: "Confirmed",
    timestamp: "2024-01-15 09:33:28",
  },
];

const statusColors: Record<string, { text: string; bg: string }> = {
  Confirmed: {
    text: "text-green-700 dark:text-green-400",
    bg: "bg-green-100 dark:bg-green-900/30",
  },
  Pending: {
    text: "text-yellow-700 dark:text-yellow-400",
    bg: "bg-yellow-100 dark:bg-yellow-900/30",
  },
  Failed: {
    text: "text-red-700 dark:text-red-400",
    bg: "bg-red-100 dark:bg-red-900/30",
  },
};

const TransactionPage = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  const filtered = transactions.filter((tx) => {
    const matchesSearch =
      tx.id.toLowerCase().includes(search.toLowerCase()) ||
      tx.description.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = statusFilter === "All" || tx.status === statusFilter;
    const matchesType = typeFilter === "All" || tx.type === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  const handleExport = () => {
    alert("Exporting transactions... (implement logic)");
  };

  const handleAdvancedFilters = () => {
    alert("Opening advanced filters... (implement logic)");
  };

  return (
    <div className="p-6 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-1">Blockchain Transactions</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Complete History of all blockchain transactions recorded on the stellar network.
        </p>
      </div>

      <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold mb-1">Transaction History</h1>
            <p className="text-gray-500 dark:text-gray-400">
              All blockchain transactions with detailed information and verification status.
            </p>
          </div>
          <div className="flex gap-2 mt-2 md:mt-0">
            <button
              onClick={handleExport}
              className="flex items-center gap-2 px-4 py-2 border rounded-md shadow-sm text-sm hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-300 dark:border-gray-700"
            >
              <FaDownload /> Export
            </button>
            <button
              onClick={handleAdvancedFilters}
              className="flex items-center gap-2 px-4 py-2 border rounded-md shadow-sm text-sm hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-300 dark:border-gray-700"
            >
              <FaFilter /> Advanced Filters
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-6 mb-4">
          <div className="relative w-full md:max-w-sm">
            <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search transactions..."
              className="w-full pl-10 pr-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex gap-4">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border rounded-md bg-white dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
            >
              <option value="All">All Statuses</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Pending">Pending</option>
              <option value="Failed">Failed</option>
            </select>

            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-2 border rounded-md bg-white dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
            >
              <option value="All">All Types</option>
              <option value="Smart Contract">Smart Contract</option>
              <option value="Payment">Payment</option>
              <option value="Inventory Update">Inventory Update</option>
              <option value="Quality Verification">Quality Verification</option>
            </select>
          </div>
        </div>

        <div className="overflow-auto rounded-lg shadow border border-gray-200 dark:border-gray-700">
          <table className="min-w-full bg-white dark:bg-gray-900 text-sm">
            <thead className="text-left text-gray-400 dark:text-gray-500 font-normal">
              <tr>
                <th className="p-3">Transaction ID</th>
                <th className="p-3">Type</th>
                <th className="p-3">Description</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Status</th>
                <th className="p-3">Timestamp</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((tx, index) => (
                <tr key={index} className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="p-3 font-medium text-gray-800 dark:text-gray-100">{tx.id}</td>
                  <td className="p-3">
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-2 py-1 rounded text-xs font-medium">
                      {tx.type}
                    </span>
                  </td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">{tx.description}</td>
                  <td className="p-3 font-semibold text-gray-800 dark:text-gray-100">
                    {tx.amount ? `$${tx.amount.toLocaleString()}` : "-"}
                  </td>
                  <td className="p-3">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${
                        statusColors[tx.status].text
                      } ${statusColors[tx.status].bg}`}
                    >
                      {tx.status === "Confirmed" && <FaCheckCircle className="text-sm" />}
                      {tx.status === "Pending" && <FaExclamationCircle className="text-sm" />}
                      {tx.status === "Failed" && <FaTimesCircle className="text-sm" />}
                      {tx.status}
                    </span>
                  </td>
                  <td className="p-3 text-gray-600 dark:text-gray-400">{tx.timestamp}</td>
                  <td className="p-3">
                    <div className="flex gap-3 text-gray-600 dark:text-gray-300">
                      <BsEye className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400" title="View" />
                      <GrShare className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400" title="Share" />
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="text-center py-8 text-gray-400 dark:text-gray-500">
                    No transactions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="pt-6">
        <TransactionStats />
      </div>
    </div>
  );
};

export default TransactionPage;



