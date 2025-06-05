import React from "react";
import { FiFileText } from "react-icons/fi";

interface ContractStatus {
  id: string;
  label: string;
  status: string;
  color: "green" | "yellow" | "red";
}

const colorMap = {
  green: "text-green-400",
  yellow: "text-yellow-400",
  red: "text-red-400",
};

const badgeBgMap = {
  green: "bg-green-500",
  yellow: "bg-yellow-500",
  red: "bg-red-500",
};

const SmartContractStatus: React.FC = () => {
  const contracts: ContractStatus[] = [
    {
      id: "#1234",
      label: "Order Processing",
      status: "Active",
      color: "green",
    },
    {
      id: "#6578",
      label: "Inventory Management",
      status: "Warning",
      color: "yellow",
    },
    {
      id: "#9012",
      label: "Payment Processing",
      status: "Inactive",
      color: "red",
    },
  ];

  return (
    <div className="bg-black p-4 rounded-xl shadow-sm">
      <h3 className="text-md font-semibold text-white">
        Smart Contract Status
      </h3>
      <p className="text-xs mb-4 text-gray-500">
        Active contracts and their status
      </p>
      {contracts.map((c, i) => (
        <div
          key={i}
          className="flex items-center justify-between p-2 border border-gray-800 mb-2 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <FiFileText
              className={`w-5 h-5 ${colorMap[c.color]} flex-shrink-0`}
            />
            <div>
              <p className="font-medium text-white">Contract {c.id}</p>
              <p className="text-sm text-gray-500">{c.label}</p>
            </div>
          </div>
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${badgeBgMap[c.color]} text-white`}
          >
            {c.status}
          </span>
        </div>
      ))}
      <button className="mt-4 px-4 py-2 border border-gray-800 rounded-md text-sm font-medium text-white w-full">
        View All Contracts
      </button>
    </div>
  );
};

export default SmartContractStatus;
