import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const DeliveryPerformance = () => {
  const data = [
    {
      name: "Express Logistics",
      onTime: 1,
      //delayed: 15,
    },
    {
      name: "Global Freight",
      onTime: 1,
      //delayed: 22,
    },
    {
      name: "Rapid Shipping",
      onTime: 1,
      //delayed: 8,
    },
  ];

  return (
    <div className="flex-1 lg:flex-[2] border border-[#e2e8f0] rounded-[8px] p-6 min-h-[474px] max-w-[702px]">
      <div>
        <h1 className="text-[24px] font-semibold text-[#020817]">
          Delivery Performance
        </h1>
        <p className="text-[14px] font-normal text-[#64748b]">
          On-time delivery performance by carrier
        </p>
      </div>
      <div className="pt-8 h-[350px]">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            layout="vertical"
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              type="number"
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
            />
            <YAxis type="category" dataKey="name" />
            <Tooltip cursor={false} />
            <Legend
              payload={[
                { value: "On Time", type: "rect", color: "#10b981" },
                { value: "Delayed", type: "rect", color: "#f43f5e" },
              ]}
            />
            <Bar dataKey="onTime" stackId="a" fill="#10b981" />
            <Bar dataKey="delayed" stackId="a" fill="#f43f5e" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DeliveryPerformance;
