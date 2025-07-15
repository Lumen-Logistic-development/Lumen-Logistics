import { FC } from "react";

interface InventoryItemProps {
  name: string;
  status: string;
  statusColor: string;
  percentage: number;
}

const InventoryItem: FC<InventoryItemProps> = ({ name, status, statusColor, percentage }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span>{name}</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${statusColor}`}>{status}</span>
        </div>
        <span className="text-sm">{percentage}%</span>
      </div>
      <div className="w-full bg-muted h-2 rounded-full">
        <div
          className="h-2 rounded-full bg-foreground"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default InventoryItem;
