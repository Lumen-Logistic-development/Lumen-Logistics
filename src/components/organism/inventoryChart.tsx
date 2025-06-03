"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/molecules/select";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", warehouse1: 3000, warehouse2: 1500, warehouse3: 2000 },
  { month: "Feb", warehouse1: 2500, warehouse2: 2000, warehouse3: 2200 },
  { month: "Mar", warehouse1: 5000, warehouse2: 3000, warehouse3: 4000 },
  { month: "Apr", warehouse1: 3500, warehouse2: 2500, warehouse3: 3000 },
  { month: "May", warehouse1: 4000, warehouse2: 2000, warehouse3: 2500 },
  { month: "Jun", warehouse1: 3800, warehouse2: 2200, warehouse3: 2800 },
  { month: "Jul", warehouse1: 4200, warehouse2: 2400, warehouse3: 3000 },
];

export function InventoryChart() {
  const [timeframe, setTimeframe] = useState("7");

  return (
    <Card className="col-span-1 bg-[#09090B] text-white border-[#27272A]">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="space-y-1">
          <CardTitle className="text-xl font-bold">Inventory Levels</CardTitle>
          <p className="text-sm text-muted-foreground">
            Monitor inventory levels across all warehouses
          </p>
        </div>
        <Select value={timeframe} onValueChange={setTimeframe}>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7">Last 7 days</SelectItem>
            <SelectItem value="30">Last 30 days</SelectItem>
            <SelectItem value="90">Last 90 days</SelectItem>
            <SelectItem value="365">Last year</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="pt-2 pb-4">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient
                  id="colorWarehouse1"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#6366F199" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#6366F199" stopOpacity={0.8} />
                </linearGradient>
                <linearGradient
                  id="colorWarehouse2"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                  className="border-[#10B98199]"
                >
                  <stop offset="5%" stopColor="#10B98199" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10B98199" stopOpacity={0.8} />
                </linearGradient>
                <linearGradient
                  id="colorWarehouse3"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#0EA5E999" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#0EA5E999" stopOpacity={0.8} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="5 5" stroke="#CCCCCC" />
              <XAxis
                dataKey="month"
                stroke="#666666"
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: "#CCCCCC" }}
              />
              <YAxis
                stroke="#666666"
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: "#CCCCCC" }}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  borderColor: "#fff",
                  borderRadius: "0.5rem",
                  boxShadow:
                    "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                }}
                itemStyle={{ color: "#000" }}
                labelStyle={{
                  color: "#000",
                  fontWeight: "bold",
                  marginBottom: "0.25rem",
                }}
              />
              <Area
                type="monotone"
                dataKey="warehouse1"
                stackId="1"
                stroke="#6366F1"
                fillOpacity={1}
                fill="url(#colorWarehouse1)"
              />
              <Area
                type="monotone"
                dataKey="warehouse2"
                stackId="1"
                stroke="#10B981"
                fillOpacity={1}
                fill="url(#colorWarehouse2)"
              />
              <Area
                type="monotone"
                dataKey="warehouse3"
                stackId="1"
                stroke="#0EA5E9"
                fillOpacity={1}
                fill="url(#colorWarehouse3)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
