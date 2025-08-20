"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardPage from "./Dashboard";
import Inventory from "../organism/Inventory";
import Production from "../organism/Production";
import BlockChain from "../organism/blockchain";

const DashboardTabs = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="bg-[#121212] text-white min-h-screen p-6">
      <div className="mb-6 mt-10 md:mt-0">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-400 mt-1">
          Overview of your supply chain operations and blockchain transactions
        </p>
      </div>
      <div>
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="production">Production</TabsTrigger>
            <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardTabs;
