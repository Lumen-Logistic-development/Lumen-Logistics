"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", Raw: 4500, Components: 4000, Packaging: 2000, Finished: 1500 },
  { month: "Feb", Raw: 4300, Components: 3800, Packaging: 2200, Finished: 1600 },
  { month: "Mar", Raw: 4200, Components: 3700, Packaging: 2500, Finished: 1700 },
  { month: "Apr", Raw: 4000, Components: 3600, Packaging: 2700, Finished: 1900 },
  { month: "May", Raw: 3700, Components: 3500, Packaging: 3000, Finished: 2100 },
  { month: "Jun", Raw: 3600, Components: 3400, Packaging: 3200, Finished: 2300 },
];

export default function InventoryTrends() {
  return (
    <div className="bg-card text-foreground p-6 rounded-2xl shadow w-full">
      <h2 className="text-xl font-semibold mb-1 text-foreground">Inventory Trends</h2>
      <p className="text-sm text-muted-foreground mb-4">Historical inventory levels over time</p>

      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="month" stroke="#D1D5DB" />
            <YAxis stroke="#D1D5DB" />
            <Tooltip />
            <Legend
              wrapperStyle={{
                paddingTop: 20,
                display: "flex",
                justifyContent: "flex-start",
                gap: "1.5rem",
              }}
            />
            <Line type="monotone" dataKey="Raw" stroke="#0EA5E9" strokeWidth={2} />
            <Line type="monotone" dataKey="Components" stroke="#10B981" strokeWidth={2} />
            <Line type="monotone" dataKey="Packaging" stroke="#FBBF24" strokeWidth={2} />
            <Line type="monotone" dataKey="Finished" stroke="#EF4444" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
