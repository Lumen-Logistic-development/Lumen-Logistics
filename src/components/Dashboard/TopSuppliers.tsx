import { FC } from "react";
import SupplierItem from "./SupplierItem";
// import SupplierItem from "./SupplierItem";

const suppliers = [
  { name: "Alpha Supplies Inc.", onTime: "98.2%", tier: "Tier 1" },
  { name: "Beta Manufacturing", onTime: "94.7%", tier: "Tier 1" },
  { name: "Gamma Industries", onTime: "91.3%", tier: "Tier 2" },
  { name: "Delta Logistics", onTime: "89.5%", tier: "Tier 2" },
];

const TopSuppliersCard: FC = () => {
  return (
    <div className="bg-black rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-1">Top Suppliers</h2>
      <p className="text-sm text-gray-400 mb-6">Performance metrics for key suppliers</p>

      <div className="space-y-5">
        {suppliers.map((supplier, idx) => (
          <SupplierItem key={idx} {...supplier} />
        ))}
      </div>

      <button className="mt-6 w-full border border-gray-600 py-2 rounded-md hover:bg-gray-800 transition">
        View All Suppliers
      </button>
    </div>
  );
};

export default TopSuppliersCard;
