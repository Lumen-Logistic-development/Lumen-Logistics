"use client";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Overview from "./Overview";

const Logistics = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="p-4 md:p-8 font-inter max-w-full overflow-x-hidden">
      <div>
        <h1 className="text-[30px] text-[#020817] font-bold py-2">Logistics</h1>
        <p className="text-[16px] text-[#64748b] font-normal">
          Manage shipments, track deliveries, and optimize your supply chain
          logistics
        </p>
      </div>
      <div className="font-inter pt-6">
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
          <Overview />
        </Tabs>
      </div>
    </div>
  );
};
export default Logistics;
