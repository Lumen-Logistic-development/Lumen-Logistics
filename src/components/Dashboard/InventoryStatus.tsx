import { FC } from "react";
import InventoryItem from "./InventoryItem";


const inventoryItems = [
  { name: "Raw Material A", status: "Critical", statusColor: "bg-red-600", percentage: 24 },
  { name: "Component B", status: "Warning", statusColor: "bg-yellow-500", percentage: 42 },
  { name: "Finished Product C", status: "Good", statusColor: "bg-green-500", percentage: 78 },
  { name: "Packaging Material D", status: "Good", statusColor: "bg-green-500", percentage: 86 },
];

const InventoryStatus: FC = () => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-1">Inventory Status</h2>
      <p className="text-sm text-muted-foreground mb-6">Critical inventory items status</p>

      <div className="space-y-5">
        {inventoryItems.map((item, idx) => (
          <InventoryItem key={idx} {...item} />
        ))}
      </div>

      <button className="mt-6 w-full border border-border py-2 rounded-md hover:bg-accent transition">
        Manage Inventory
      </button>
    </div>
  );
};

export default InventoryStatus;
