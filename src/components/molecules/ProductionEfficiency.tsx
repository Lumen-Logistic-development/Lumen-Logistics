"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function ProductionEfficiency() {
  const data = [
    { name: "In Progress", value: 35, color: "#00C2FF" },
    { name: "Completed", value: 45, color: "#00D26A" },
    { name: "Planned", value: 15, color: "#A394F5" },
    { name: "Delayed", value: 5, color: "#FF5C8A" },
  ];

  return (
    <div className="bg-black p-4   rounded-2xl shadow-md w-full mx-auto text-white">
      <h2 className="font-bold mb-1 text-left">Production Efficiency Trend</h2>
      <p className="text-gray-400 text-xs mb-4 text-left">
        monitor production perfomace across all lines
      </p>
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="80%">
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
                    <div className="bg-[#1f1f1f] p-1 rounded-md shadow-md text-xs">
                      <p className="text-white">{`${payload[0].name}: ${payload[0].value}%`}</p>
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
      <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs">
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
  );
}
