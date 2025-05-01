"use client";

import { useState } from "react";
import Inventory from "./Inventory";

const tabs = ["Overview", "Inventory Items", "Alerts", "Analytics"];

const InventoryTabs = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Overview":
        return <Inventory />;
      case "Inventory Items":
        return <h1>Inventory Items</h1>;
      case "Alerts":
        return <h1>Alerts</h1>;
      case "Analytics":
        return <h1>Analytics</h1>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#121212] text-white min-h-screen p-6  ">
      {/* Header */}
      <div className="mb-6 mt-10 md:mt-0">
        <h1 className="text-2xl font-bold">Inventory Management</h1>
        <p className="text-gray-400 mt-1">
          Track, manage, and optimize your inventory across all locations
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 bg-[#1f1f22] p-3 rounded-lg  mb-6 w-full md:max-w-[450px] max-w-[600px]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition ${
              activeTab === tab
                ? "bg-[#09090B] text-white"
                : "text-gray-400 hover:bg-[#09090B] hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Dynamic content */}
      <div className="mt-6">{renderTabContent()}</div>
    </div>
  );
};

export default InventoryTabs;
