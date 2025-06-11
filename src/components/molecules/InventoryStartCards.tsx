import React from "react";
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";
import {
  MdInventory2,
  MdReportProblem,
  MdAutorenew,
  MdWarningAmber,
} from "react-icons/md";

function InventoryStartCards() {
  const metrics = [
    {
      title: "Total SKUs",
      value: "2,345",
      change: "12",
      isPositive: true,
      icon: <MdInventory2 className="text-blue-500 text-2xl" />, // Inventory icon
    },
    {
      title: "Low Stock Items",
      value: "24",
      change: "-3",
      isPositive: true,
      icon: <MdReportProblem className="text-orange-500 text-2xl" />, // Warning/low stock
    },
    {
      title: "Inventory Turnover",
      value: "4.2x",
      change: "0.9%",
      isPositive: false,
      icon: <MdAutorenew className="text-yellow-500 text-2xl" />, // Cycle/turnover
    },
    {
      title: "Stockout Risk",
      value: "8",
      change: "13.3%",
      isPositive: false,
      icon: <MdWarningAmber className="text-red-500 text-2xl" />, // Risk/warning
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-black rounded-lg shadow p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-medium text-gray-400">
                {metric.title}
              </h3>
              {metric.icon}
            </div>
            <div className="items-end">
              <p className="text-2xl font-bold text-white mr-2">
                {metric.value}
              </p>
              <span
                className={`flex items-center text-sm ${
                  metric.isPositive ? "text-green-500" : "text-red-500"
                }`}
              >
                {metric.isPositive ? (
                  <FiTrendingUp className="mr-1" />
                ) : (
                  <FiTrendingDown className="mr-1" />
                )}
                {metric.change}
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              from {metric.title.includes("Month") ? "last month" : "last week"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InventoryStartCards;
