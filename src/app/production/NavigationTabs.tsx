"use client";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const NavigationTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview");
  return (
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
  );
};

export default NavigationTabs;
