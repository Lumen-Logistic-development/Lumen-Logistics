import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TransactionVolume = () => {
  const transactionVolumeData = [
    {
      month: "Jan",
      "Product Authentication": 130,
      "Inventory Transfer": 95,
      "Smart Contract": 65,
      Payment: 45,
    },
    {
      month: "Feb",
      "Product Authentication": 145,
      "Inventory Transfer": 105,
      "Smart Contract": 75,
      Payment: 50,
    },
    {
      month: "Mar",
      "Product Authentication": 165,
      "Inventory Transfer": 125,
      "Smart Contract": 85,
      Payment: 55,
    },
    {
      month: "Apr",
      "Product Authentication": 185,
      "Inventory Transfer": 145,
      "Smart Contract": 105,
      Payment: 58,
    },
    {
      month: "May",
      "Product Authentication": 215,
      "Inventory Transfer": 155,
      "Smart Contract": 115,
      Payment: 60,
    },
    {
      month: "Jun",
      "Product Authentication": 255,
      "Inventory Transfer": 175,
      "Smart Contract": 130,
      Payment: 65,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction Volume</CardTitle>
        <CardDescription>
          Blockchain transaction volume over time
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={transactionVolumeData}
              margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#666" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#666" }}
                domain={[0, 260]}
                ticks={[0, 65, 130, 195, 260]}
              />
              <Line
                type="monotone"
                dataKey="Product Authentication"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "#3b82f6", strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="Inventory Transfer"
                stroke="#10b981"
                strokeWidth={2}
                dot={{ fill: "#10b981", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "#10b981", strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="Smart Contract"
                stroke="#8b5cf6"
                strokeWidth={2}
                dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "#8b5cf6", strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="Payment"
                stroke="#ef4444"
                strokeWidth={2}
                dot={{ fill: "#ef4444", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "#ef4444", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        {/* Custom Legend */}
        <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-0.5 bg-blue-500"></div>
            <span className="text-blue-500">Product Authentication</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-0.5 bg-green-500"></div>
            <span className="text-green-500">Inventory Transfer</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-0.5 bg-purple-500"></div>
            <span className="text-purple-500">Smart Contract</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-0.5 bg-red-500"></div>
            <span className="text-red-500">Payment</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default TransactionVolume;
