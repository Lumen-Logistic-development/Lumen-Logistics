"use client";

import { useState } from "react";
import Supplier from "./Supplier";

const tabs = ["Overview", "Suppliers", "Performance", "Contracts"];

const SupplierTabs = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Overview":
        return <Supplier/>;
      case "Suppliers":
        return <h1>Suppliers</h1>;
      case "Performance":
        return <h1>Performance</h1>;
      case "Contracts":
        return <h1>Contracts</h1>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#121212] text-white min-h-screen p-6  ">
      {/* Header */}
      <div className="mb-6 mt-10 md:mt-0">
        <h1 className="text-2xl font-bold">Suppliers</h1>
        <p className="text-gray-400 mt-1">
          Manage and monitor your suppliers and vendors relationships
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

export default SupplierTabs;
