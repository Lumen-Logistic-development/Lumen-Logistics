"use client";

import InventoryDistribution from "./InventoryDistribution";
import InventoryHealth from "./InventoryHealth";
import InventoryTrends from "./InventoryTrends";
import RecentInventoryAlerts from "./RecentInventoryAlerts";
import StatsCards from "./StatsCards";

export default function Inventory() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <StatsCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <InventoryTrends />
        <InventoryDistribution />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <RecentInventoryAlerts />
        <InventoryHealth />
      </div>
    </div>
  );
}
