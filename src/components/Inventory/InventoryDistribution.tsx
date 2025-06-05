"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Raw Materials", value: 35 },
  { name: "Components", value: 25 },
  { name: "Packaging", value: 20 },
  { name: "Finished Goods", value: 20 },
];

const COLORS = ["#0EA5E9", "#F43F5E", "#6366F1", "#10B981"];

export default function InventoryDistribution() {
  return (
    <div className="bg-card text-foreground p-6 rounded-2xl shadow">
      <h2 className="text-xl font-semibold">Inventory Distribution</h2>
      <p className="mb-4 text-sm text-muted-foreground">Breakdown by category</p>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[index] }}
            />
            <span className="text-sm text-foreground">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
