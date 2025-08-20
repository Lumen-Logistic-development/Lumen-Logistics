"use client";

import { useState } from "react";
import Supplier from "./Supplier";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SupplierTabs = () => {
  const [activeTab, setActiveTab] = useState("Overview");

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
      <div className="font-inter">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="shipment">Shipment</TabsTrigger>
            <TabsTrigger value="tracking">Tracking</TabsTrigger>
            <TabsTrigger value="carriers">Carriers</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default SupplierTabs;
