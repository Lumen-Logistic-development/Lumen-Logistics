"use client";

import { useState } from "react";
import Inventory from "./Inventory";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const InventoryTabs = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="bg-background text-foreground min-h-screen p-6">
      {/* Header */}
      <div className="mb-6 mt-10 md:mt-0">
        <h1 className="text-2xl font-bold">Inventory Management</h1>
        <p className="text-muted-foreground mt-1">
          Track, manage, and optimize your inventory across all locations
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

export default InventoryTabs;
