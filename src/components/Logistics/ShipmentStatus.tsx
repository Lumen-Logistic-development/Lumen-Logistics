"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const ShipmentStatus = () => {
  const data = [
    { name: "In Transit", value: 40, color: "#0EA5E9" },
    { name: "Delivered", value: 20, color: "#10B981" },
    { name: "Delayed", value: 20, color: "#F43F5E" },
    { name: "Preparing", value: 20, color: "#6366F1" },
  ];

  return (
    <div>
      <div className="flex-1 border border-[#e2e8f0] rounded-[8px] p-6 min-h-[474px] max-w-[523px]">
        <div>
          <h1 className="text-[24px] font-semibold text-[#020817]">
            Shipment Status
          </h1>
          <p className="text-[14px] font-normal text-[#64748b]">
            Current status of all shipments
          </p>
        </div>
        <div className="pt-18">
          <div className="w-full h-44">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  innerRadius="65%"
                  outerRadius="90%"
                  paddingAngle={3}
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-popover p-1 rounded-md shadow-md text-xs">
                          <p className="text-popover-foreground">{`${payload[0].name}: ${payload[0].value}%`}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm pt-8">
            {data.map((entry, index) => (
              <div key={index} className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: entry.color }}
                ></span>
                <span className="font-medium" style={{ color: entry.color }}>
                  {entry.name} {entry.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShipmentStatus;
