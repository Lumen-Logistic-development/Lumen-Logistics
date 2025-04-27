"use client";

import AlertsNotifications from "./AlertsNotifications";
import BlockchainTransactions from "./BlockchainTransactions";
import InventoryLevels from "./InventoryLevels";
import InventoryStatus from "./InventoryStatus";
import ProductionStatus from "./ProductionStatus";
import SupplyChainVisibility from "./SupplyChainVisibility";
import TopSuppliers from "./TopSuppliers";
import {
  MdInventory,
  MdProductionQuantityLimits,
  MdLocalShipping,
} from "react-icons/md";
import { SiBlockchaindotcom } from "react-icons/si";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";


  const metrics = [
    {
      title: "Total Inventory Value",
      value: "$1,284,342",
      change: "2.5%",
      isPositive: true,
      icon: <MdInventory className="text-blue-500 text-2xl" />,
    },
    {
      title: "Production Efficiency",
      value: "94.2%",
      change: "1.2%",
      isPositive: true,
      icon: <MdProductionQuantityLimits className="text-green-500 text-2xl" />,
    },
    {
      title: "On-Time Delivery",
      value: "89.7%",
      change: "0.9%",
      isPositive: false,
      icon: <MdLocalShipping className="text-yellow-500 text-2xl" />,
    },
    {
      title: "Blockchain Transactions",
      value: "1,482",
      change: "13.3%",
      isPositive: false,
      icon: <SiBlockchaindotcom className="text-purple-500 text-2xl" />,
    },
  ];








export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#121212] text-white p-6">
      {/* Top summary section */}

      <h1 className="text-2xl font-bold text-white mb-2 md:mt-0 mt-10">Dashboard</h1>
      <p className="text-[#A1A1AA] mb-6">
        Overview of your supply chain operations and blockchain transactions
      </p>

      <section className="mb-8">
        <div className=" space-x-2 bg-[#27272a] p-2 rounded-lg inline-block mb-5">
          <button className="px-4 py-2 text-white bg-neutral-900 rounded-md">
            Overview
          </button>
          <button className="px-4 py-2 text-neutral-500">Inventory</button>
          <button className="px-4 py-2 text-neutral-500">Production</button>
          <button className="px-4 py-2 text-neutral-500">Blockchain</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-black rounded-lg shadow p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm font-medium text-gray-500">
                  {metric.title}
                </h3>
                {metric.icon}
              </div>
              <div className="flex items-end">
                <p className="text-2xl font-bold text-gray-800 mr-2">
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
              <p className="text-xs text-gray-500 mt-1">
                from{" "}
                {metric.title.includes("Month") ? "last month" : "last week"}
              </p>
            </div>
          ))}
        </div>
      </section>





   

      {/* Main chart sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Inventory and Production charts */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <InventoryLevels />
          <ProductionStatus />
        </div>

        {/* Supply Chain Visibility */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <BlockchainTransactions />

          <SupplyChainVisibility />

          {/* Blockchain Transactions */}
        </div>

        {/* Inventory Status Chart */}
        <div>
          
        </div>
      </div>

      {/* Bottom Alerts/Inventory/Suppliers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <AlertsNotifications />
        <InventoryStatus />
        <TopSuppliers />
      </div>
    </div>
  );
}
