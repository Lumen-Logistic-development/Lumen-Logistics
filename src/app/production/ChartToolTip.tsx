import React from "react";

export interface TooltipData {
  title: string;
  value: string;
  target?: string;
  color?: string;
}

interface ChartTooltipProps {
  data: TooltipData;
  position: { x: number; y: number };
  visible: boolean;
}

const ChartTooltip: React.FC<ChartTooltipProps> = ({
  data,
  position,
  visible,
}) => {
  if (!visible) return null;

  return (
    <div
      className="absolute z-10 p-2 rounded shadow-lg bg-popover border border-border text-popover-foreground text-sm"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -100%)",
        marginTop: "-10px",
        pointerEvents: "none",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.2s ease-in-out",
      }}
    >
      <div className="font-medium mb-1">{data.title}</div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <div
            className="w-3 h-3 rounded-sm"
            style={{ backgroundColor: data.color || "#0EA5E9" }}
          ></div>
          <span>Current: {data.value}</span>
        </div>
        {data.target && (
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-sm bg-emerald-500"></div>
            <span>Target: {data.target}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChartTooltip;
