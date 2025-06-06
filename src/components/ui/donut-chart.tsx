"use client";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

interface DonutChartProps {
  data: { name: string; value: number }[];
  dataKey?: string;
  colors?: string[];
  width?: number | string;
  height?: number | string;
}

export const DonutChart: React.FC<DonutChartProps> = ({
  data,
  dataKey = "value",
  colors = ["#0EA5E9", "#F43F5E", "#6366F1", "#10B981"],
  width = "100%",
  height = 250,
}) => (
  <ResponsiveContainer width={width} height={height}>
    <PieChart>
      <Pie
        data={data}
        dataKey={dataKey}
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={90}
        paddingAngle={2}
        stroke="none"
      >
        {data.map((_, idx) => (
          <Cell key={`cell-${idx}`} fill={colors[idx % colors.length]} />
        ))}
      </Pie>
      <Tooltip
        contentStyle={{
          backgroundColor: "hsl(var(--popover))",
          borderRadius: "8px",
          border: "none",
          color: "hsl(var(--popover-foreground))",
          fontSize: 13,
        }}
        labelStyle={{ color: "hsl(var(--popover-foreground))" }}
        itemStyle={{ color: "hsl(var(--popover-foreground))" }}
      />
    </PieChart>
  </ResponsiveContainer>
);
