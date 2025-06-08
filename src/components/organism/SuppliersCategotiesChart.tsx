"use client";
import { Pie, PieChart, Cell } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "Supplier Categories Distribution";

const chartData = [
  {
    category: "Components",
    percentage: 40,
    suppliers: 24,
    fill: "#10b981", // Green
  },
  {
    category: "Raw Materials",
    percentage: 20,
    suppliers: 12,
    fill: "#0ea5e9", // Blue
  },
  {
    category: "Electronics",
    percentage: 20,
    suppliers: 12,
    fill: "#ef4444", // Red
  },
  {
    category: "Logistics",
    percentage: 20,
    suppliers: 12,
    fill: "#8b5cf6", // Purple
  },
];

const chartConfig = {
  suppliers: {
    label: "Suppliers",
  },
  components: {
    label: "Components",
    color: "#10b981",
  },
  rawMaterials: {
    label: "Raw Materials",
    color: "#0ea5e9",
  },
  electronics: {
    label: "Electronics",
    color: "#ef4444",
  },
  logistics: {
    label: "Logistics",
    color: "#8b5cf6",
  },
} satisfies ChartConfig;

export function SupplierCategoriesChart() {
  return (
    <Card className="w-full md:h-[41rem] bg-black border-none">
      <CardHeader className="pb-2 text-white">
        <CardTitle className="text-lg font-semibold">
          Supplier Categories
        </CardTitle>
        <CardDescription className="text-sm text-white">
          Distribution of suppliers by category
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center p-6 pt-2">
        <div className="flex items-center justify-center md:h-[25rem] md:w-[580px]">
          <ChartContainer config={chartConfig} className="h-full w-full">
            <PieChart width={580} height={400}>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="percentage"
                nameKey="category"
                cx={290} // Half of PieChart width (580/2)
                cy={200} // Half of PieChart height (400/2)
                innerRadius={55}
                outerRadius={120} // Increased for better visual balance
                paddingAngle={2}
                stroke="none"
                label={(props) => {
                  const {
                    cx,
                    cy,
                    midAngle,
                    innerRadius,
                    outerRadius,
                    name,
                    percent,
                  } = props;
                  const RADIAN = Math.PI / 180;
                  const radius =
                    innerRadius + (outerRadius - innerRadius) * 1.2; // Adjusted for tighter labels
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);

                  // Adjust positioning based on quadrant for better alignment
                  let adjustedX = x;
                  let adjustedY = y;
                  const textAnchor = x > cx ? "start" : "end";

                  // Fine-tune positioning for each segment
                  if (name === "Components") {
                    adjustedX = x - 10;
                    adjustedY = y - 5;
                  } else if (name === "Raw Materials") {
                    adjustedX = x + 5;
                    adjustedY = y - 15;
                  } else if (name === "Electronics") {
                    adjustedX = x + 5;
                    adjustedY = y + 5;
                  } else if (name === "Logistics") {
                    adjustedX = x - 5;
                    adjustedY = y + 10;
                  }

                  return (
                    <text
                      x={adjustedX}
                      y={adjustedY}
                      fill="#374151"
                      textAnchor={textAnchor}
                      dominantBaseline="central"
                      fontSize={13}
                      fontWeight="500"
                    >
                      {`${name} ${(percent * 100).toFixed(0)}%`}
                    </text>
                  );
                }}
                labelLine={false}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>
        </div>

        {/* Custom Legend */}
        <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {chartData.map((item) => (
            <div key={item.category} className="flex items-center gap-2">
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: item.fill }}
              ></div>
              <span className="text-white font-medium">{item.category}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
