import { FC } from "react";

interface SupplierItemProps {
  name: string;
  onTime: string;
  tier: string;
}

const SupplierItem: FC<SupplierItemProps> = ({ name, onTime, tier }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
          <span className="text-sm">S</span>
        </div>
        <div>
          <h3 className="text-sm font-semibold">{name}</h3>
          <p className="text-xs text-gray-400">On-time: {onTime}</p>
        </div>
      </div>
      <div className="text-xs bg-gray-700 px-2 py-0.5 rounded-full">
        {tier}
      </div>
    </div>
  );
};

export default SupplierItem;
