// components/AnalyticsOverview.tsx
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import AnalyticsHeader from "./AnalyticsHeader";

const metrics = [
  {
    title: "Supply Chain Efficiency",
    value: "92.4%",
    change: "+2.1%",
    isPositive: true,
    note: "from last period",
  },
  {
    title: "Inventory Turnover",
    value: "8.3x",
    change: "+0.5x",
    isPositive: true,
    note: "from last period",
  },
  {
    title: "On-Time Delivery",
    value: "94.8%",
    change: "-1.2%",
    isPositive: false,
    note: "from last period",
  },
  {
    title: "Supply Chain Cost",
    value: "$1.24M",
    change: "-3.2%",
    isPositive: false,
    note: "from last period",
  },
];

export default function AnalyticsOverview() {
  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
      </div>
      <AnalyticsHeader/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg p-4 border shadow-sm">
            <div className="text-sm font-medium text-gray-500">{metric.title}</div>
            <div className="text-2xl font-semibold text-gray-900 mt-1">{metric.value}</div>
            <div className={`flex items-center text-sm mt-1 ${metric.isPositive ? "text-green-600" : "text-red-600"}`}>
              {metric.isPositive ? (
                <ArrowUpRight className="w-4 h-4 mr-1" />
              ) : (
                <ArrowDownRight className="w-4 h-4 mr-1" />
              )}
              {metric.change}
            </div>
            <div className="text-xs text-gray-400 mt-1">{metric.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
