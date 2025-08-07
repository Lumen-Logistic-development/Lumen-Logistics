import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const VerificationStatus = () => {
  const verificationStatusData = [
    { name: "Verified", value: 86, color: "#10b981" },
    { name: "Pending", value: 13, color: "#3b82f6" },
    { name: "Failed", value: 2, color: "#ef4444" },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Verification Status</CardTitle>
        <CardDescription>Status of blockchain verifications</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={verificationStatusData}
                cx="50%"
                cy="45%"
                labelLine={false}
                outerRadius={80}
                innerRadius={50}
                fill="#8884d8"
                dataKey="value"
                startAngle={90}
                endAngle={450}
              >
                {verificationStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Static positioned labels around the chart */}
          <div className="absolute top-16 left-8">
            <span className="text-sm font-medium text-green-600">
              Verified 86%
            </span>
          </div>

          <div className="absolute top-32 right-12">
            <span className="text-sm font-medium text-red-500">Failed 2%</span>
          </div>

          <div className="absolute bottom-20 right-8">
            <span className="text-sm font-medium text-blue-500">
              Pending 13%
            </span>
          </div>
        </div>

        {/* Manual Legend */}
        <div className="flex justify-center space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-sm text-gray-600">Verified</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="text-sm text-gray-600">Pending</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <span className="text-sm text-gray-600">Failed</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default VerificationStatus;
