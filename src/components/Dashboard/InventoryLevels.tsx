"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function InventoryLevels() {
  const data = [
    { month: "Jan", stockA: 4000, stockB: 2400, stockC: 2000 },
    { month: "Feb", stockA: 3000, stockB: 1398, stockC: 2200 },
    { month: "Mar", stockA: 8000, stockB: 3800, stockC: 2400 },
    { month: "Apr", stockA: 4000, stockB: 2400, stockC: 2200 },
    { month: "May", stockA: 3800, stockB: 2100, stockC: 2000 },
    { month: "Jun", stockA: 4200, stockB: 2200, stockC: 2300 },
    { month: "Jul", stockA: 6000, stockB: 2500, stockC: 2600 },
  ];

  return (
    <div className="bg-black p-6 rounded-2xl shadow-md w-full max-w-2xl mx-auto text-white">
    
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold">Inventory Levels</h2>
          <p className="text-gray-400 text-sm">
            Monitor inventory levels across all warehouses
          </p>
        </div>
        <button className="bg-[#1f1f1f] text-gray-300 text-xs px-3 py-1 rounded-md border border-[#333]">
          Last 7 days ▼
        </button>
      </div>

  
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid stroke="#333" strokeDasharray="4 4" />
            <XAxis dataKey="month" stroke="#888" fontSize={12} />
            <YAxis stroke="#888" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1f1f1f",
                borderRadius: "8px",
                border: "none",
              }}
              labelStyle={{ color: "#fff" }}
              itemStyle={{ color: "#fff", fontSize: "12px" }}
            />
            <Area
              type="monotone"
              dataKey="stockA"
              stackId="1"
              stroke="#38BDF8"
              fill="#38BDF8"
              fillOpacity={0.7}
            />
            <Area
              type="monotone"
              dataKey="stockB"
              stackId="1"
              stroke="#34D399"
              fill="#34D399"
              fillOpacity={0.7}
            />
            <Area
              type="monotone"
              dataKey="stockC"
              stackId="1"
              stroke="#8B5CF6"
              fill="#8B5CF6"
              fillOpacity={0.7}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}



