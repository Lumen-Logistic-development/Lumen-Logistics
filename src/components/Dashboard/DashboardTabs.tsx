"use client";

import { useState } from "react";
import DashboardPage from "./Dashboard";
import Inventory from "../organism/Inventory";
import Production from "../organism/Production";
import BlockChain from "../organism/bloackchain";


const tabs = ["Overview", "Inventory", "Production", "Blockchain"];

const DashboardTabs = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Overview":
        return <DashboardPage />;
      case "Inventory":
        return <Inventory/>;
      case "Production":
        return <Production />;
      case "Blockchain":
        return <BlockChain />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#121212] text-white min-h-screen  p-6  ">
      {/* Header */}
      <div className="mb-6 mt-10 md:mt-0">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-400 mt-1">
          Overview of your supply chain operations and blockchain transactions
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

export default DashboardTabs;
