"use client";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Overview from "./Overview";
import Transactions from "./Transactions";
import Contracts from "./Contracts";
import Verification from "./Verification";

export function Blockchain() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Blockchain Integration
        </h1>
        <p className="text-muted-foreground">
          Manage blockchain transactions, smart contracts, and product
          authenticity verification
        </p>
      </div>
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-6"
      >
        <TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="contracts">Smart Contracts</TabsTrigger>
          <TabsTrigger value="verification">Verification</TabsTrigger>
        </TabsList>
        <Overview />
        <Transactions />
        <Contracts />
        <Verification />
      </Tabs>
    </div>
  );
}
