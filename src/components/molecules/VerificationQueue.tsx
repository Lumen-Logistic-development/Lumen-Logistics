import React from "react";
import { FiFileText } from "react-icons/fi";
import { GoChecklist } from "react-icons/go";

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


const VerificationQueue: React.FC = () => {
  const contracts: ContractStatus[] = [
    {
      id: "#A1B2C3",
      label: "Verification Pending",
      status: "pending",
      color: "yellow",
    },
    {
      id: "#D4E5F6",
      label: "Verification Pending",
      status: "pending",
      color: "yellow",
    },
    {
      id: "#C7H8I9",
      label: "Verification Pending",
      status: "pending",
      color: "yellow",
    },
  ];

  return (
    <div className="bg-black p-4 rounded-xl shadow-sm">
      <h3 className="text-md font-semibold text-white">Verification Queue</h3>
      <p className="text-xs mb-4 text-gray-500">Pending Verificationsatus</p>
      {contracts.map((c, i) => (
        <div
          key={i}
          className="flex items-center justify-between p-2 border border-gray-800 mb-2 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <GoChecklist
              className={`w-5 h-5 ${colorMap[c.color]} flex-shrink-0`}
            />
            <div>
              <p className="font-medium text-white">Transaction {c.id}</p>
              <p className="text-sm text-gray-500">{c.label}</p>
            </div>
          </div>
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              badgeBgMap[c.color]
            } text-white`}
          >
            {c.status}
          </span>
        </div>
      ))}
      <button className="mt-4 px-4 py-2 border border-gray-800 rounded-md text-sm font-medium text-white w-full">
        View Verification Queue
      </button>
    </div>
  );
};

export default VerificationQueue;

// const VerificationQueue: React.FC = () => {
//     const transactions = ["A1B2C3", "D4E5F6", "C7H8I9"];

//     return (
//       <div className="bg-black p-4 rounded-xl shadow-sm">
//         <h3 className="text-md font-semibold text-white">Verification Queue</h3>
//         <p className="text-xs mb-4 text-gray-800">Pending Verifications</p>
//         {transactions.map((id, i) => (
//           <div
//             key={i}
//             className="flex items-center justify-between py-2 border-b last:border-b-0"
//           >
//             <div>
//               <p className="font-medium text-gray-700">Transaction #{id}</p>
//               <p className="text-sm text-gray-500">Verification Pending</p>
//             </div>
//             <span className="px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">
//               Pending
//             </span>
//           </div>
//         ))}
//         <button className="mt-4 px-4 py-2 border rounded-md text-sm font-medium text-blue-600 hover:bg-blue-50 w-full">
//           View Verification Queue
//         </button>
//       </div>
//     );
//   };

//   export default VerificationQueue;
