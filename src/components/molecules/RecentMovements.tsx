"use client";

import { BsDot } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";

// Movement data array
const movements = [
  {
    type: "Inbound: 500 units",
    sku: "SKU-8842 . Raw material A",
    time: "2 hours ago",
    color: "text-green-400",
  },
  {
    type: "Transfer: 200 units",
    sku: "SKU-7291 . Component B",
    time: "5 hours ago",
    color: "text-blue-500",
  },
  {
    type: "OutBound: 150 units",
    sku: "SKU-7291 . Packaging Material",
    time: "5 hours ago",
    color: "text-red-500",
  },
  {
    type: "Adjustment: -25 units",
    sku: "SKU-7291 . Specialty Chemicals",
    time: "5 hours ago",
    color: "text-red-500",
  },
];

export default function RecentMovements() {
  return (
    <div className="bg-black p-6 rounded-xl max-w-md w-full mx-auto text-white shadow-md">
      <h2 className="font-bold mb-1">Recent Movements</h2>
      <p className="text-gray-400 text-sm mb-6">
        Recent system alerts requiring attention
      </p>

      {movements.map((item, idx) => (
        <div className="flex items-start space-x-2 mb-6" key={idx}>
          <BsDot className={`${item.color} text-2xl`} />
          <div>
            <p className="text-sm">{item.type}</p>
            <p className="text-gray-400 text-xs">{item.sku}</p>
            <div className="flex items-center text-gray-500 text-xs mt-1">
              <AiOutlineClockCircle className="mr-1" />
              <span>{item.time}</span>
            </div>
          </div>
        </div>
      ))}

      <button className="w-full mt-2 text-sm py-2 border border-gray-700 text-white rounded-lg hover:bg-gray-800 transition">
        View Movement History
      </button>
    </div>
  );
}


  