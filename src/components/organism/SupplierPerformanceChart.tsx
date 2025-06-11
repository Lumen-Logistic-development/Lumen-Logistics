"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart"

export const description = "Supplier Performance Metrics"

const chartData = [
  {
    supplier: "Alpha Supplies Inc.",
    onTimeDelivery: 98,
    qualityRating: 96,
    responseTime: 88,
  },
  {
    supplier: "Beta Manufacturing",
    onTimeDelivery: 95,
    qualityRating: 92,
    responseTime: 82,
  },
  {
    supplier: "Gamma Industries",
    onTimeDelivery: 92,
    qualityRating: 88,
    responseTime: 78,
  },
  {
    supplier: "Delta Logistics",
    onTimeDelivery: 89,
    qualityRating: 85,
    responseTime: 75,
  },
]

const chartConfig = {
  onTimeDelivery: {
    label: "On-Time Delivery",
    color: "#0ea5e9", // Sky blue
  },
  qualityRating: {
    label: "Quality Rating", 
    color: "#10b981", // Emerald green
  },
  responseTime: {
    label: "Response Time",
    color: "#8b5cf6", // Purple
  },
} satisfies ChartConfig

export function SupplierPerformanceChart() {
  return (
    <Card className="w-full mr-10 bg-black border-none">
      <CardHeader>
        <CardTitle className="text-white">Supplier Performance</CardTitle>
        <CardDescription className="text-white">Key performance metrics by supplier</CardDescription>
      </CardHeader>
      <CardContent className="text-white">
        <ChartContainer config={chartConfig} className="text-white">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="supplier"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              angle={-45}
              textAnchor="end"
              height={80}
              tickFormatter={(value) => {
    
                return value
              }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              domain={[0, 100]}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar
              dataKey="onTimeDelivery"
              fill="var(--color-onTimeDelivery)"
              radius={[2, 2, 0, 0]}
            />
            <Bar
              dataKey="qualityRating"
              fill="var(--color-qualityRating)"
              radius={[2, 2, 0, 0]}
            />
            <Bar
              dataKey="responseTime"
              fill="var(--color-responseTime)"
              radius={[2, 2, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3  bg-[#0ea5e9]"></div>
          <span className="text-[#0ea5e9]">On-Time Delivery</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 bg-[#10b981]"></div>
          <span className="text-[#10b981]">Quality Rating</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 bg-[#8b5cf6]"></div>
          <span className="text-[#8b5cf6]">Response Time</span>
        </div>
      </CardFooter>
    </Card>
  )
}