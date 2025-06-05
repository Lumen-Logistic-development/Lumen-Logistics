"use client";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  BarChart,
  Bar,
  ResponsiveContainer,
  Legend,
} from "recharts";
import AnalyticsOverview from "../molecules/AnalyticsOverview";
import CostAnalysic from "../molecules/CostAnalysics";


const supplyChainData = [
  { month: "Jan", Efficiency: 55, Delivery: 65, Accuracy: 92 },
  { month: "Feb", Efficiency: 59, Delivery: 70, Accuracy: 93 },
  { month: "Mar", Efficiency: 60, Delivery: 75, Accuracy: 94 },
  { month: "Apr", Efficiency: 65, Delivery: 80, Accuracy: 95 },
  { month: "May", Efficiency: 70, Delivery: 85, Accuracy: 96 },
  { month: "Jun", Efficiency: 79.4, Delivery: 94.8, Accuracy: 97 },
];

const inventoryForecast = Array.from({ length: 10 }, (_, i) => ({
  day: `Day ${i * 10 + 1}`,
  actual: 3000 + Math.random() * 500,
  forecast: 3500 + Math.random() * 500,
}));

const supplierData = [
  { name: "Alpha", Delivery: 90, Quality: 85, Cost: 88 },
  { name: "Beta", Delivery: 92, Quality: 89, Cost: 85 },
  { name: "Gamma", Delivery: 88, Quality: 90, Cost: 90 },
  { name: "Delta", Delivery: 91, Quality: 92, Cost: 87 },
];

const costBreakdown = [
  { name: "Transportation", value: 35 },
  { name: "Warehousing", value: 25 },
  { name: "Inventory", value: 20 },
  { name: "Labor", value: 15 },
  { name: "Other", value: 5 },
];

const COLORS = ["#3b82f6", "#10b981", "#facc15", "#ef4444", "#a855f7"];

export default function Analytics() {
  return (
    <>
    
      <AnalyticsOverview />

      <div className="p-4 md:p-8 space-y-8">
        {/* Performance Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Line Chart */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold mb-2">
              Supply Chain Performance
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={supplyChainData}>
                <Line type="monotone" dataKey="Efficiency" stroke="#3b82f6" />
                <Line type="monotone" dataKey="Delivery" stroke="#10b981" />
                <Line type="monotone" dataKey="Accuracy" stroke="#a855f7" />
                <CartesianGrid stroke="#e5e7eb" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Area Chart */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className=" mb-2 font-bold">Inventory Forecast</h2>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={inventoryForecast}>
                <Area
                  type="monotone"
                  dataKey="actual"
                  stackId="1"
                  stroke="#3b82f6"
                  fill="#bfdbfe"
                />
                <Area
                  type="monotone"
                  dataKey="forecast"
                  stackId="1"
                  stroke="#10b981"
                  fill="#d1fae5"
                />
                <CartesianGrid stroke="#e5e7eb" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Supplier and Cost Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Bar Chart */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-bold mb-1 text-left text-black">
              Supplier Perfomance
            </h2>
            <p className="text-gray-400 text-xs mb-4 text-left">
              Performance metrics for key suppliers
            </p>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={supplierData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Delivery" fill="#3b82f6" />
                <Bar dataKey="Quality" fill="#10b981" />
                <Bar dataKey="Cost" fill="#6366F1" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <CostAnalysic />
        </div>
      </div>
    </>
  );
}


