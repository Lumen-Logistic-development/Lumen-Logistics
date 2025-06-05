import { TbMapPinCheck } from "react-icons/tb";

const health = [
  {
    category: "Pass Rate",
    percentage: 98.7,
    value: "$578,400",
    quantity: "12,300 items",
  },
  {
    category: "First Pass Yield",
    percentage: 94.2,
    value: "$302,100",
    quantity: "8,200 items",
  },
  {
    category: "Defect Rate",
    percentage: 1.3,
    value: "$689,750",
    quantity: "15,000 items",
  },
  {
    category: "Rework Rate",
    percentage: 4.5,
    value: "$245,890",
    quantity: "5,600 items",
  },
];

export default function QualityControlIndicator() {
  return (
    <div className="bg-[#09090B] p-6 rounded-2xl shadow">
      <h2 className="font-semibold">Quality control metrics</h2>
      <p className="mb-4 text-sm text-[#A1A1AA]">
        Quality assurance performance indicators
      </p>
      <div className="space-y-6">
        {health.map((item, idx) => (
          <div key={idx}>
            <div className="flex justify-between">
              <span className="text-sm">{item.category}</span>
              <span>{item.percentage}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5 mt-1">
              <div
                className="bg-blue-500 h-2.5 rounded-full"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-green-300/20 p-4 rounded-lg shadow-md">
        <div className="flex items-center mb-2">
          <TbMapPinCheck className="text-green-500  mr-1" />
          <h6 className="text-green-500 font-semibold text-sm">
            Quality Target
          </h6>
        </div>
        <p className="text-green-500 text-xs">
          All metrics are within the acceptable range.
        </p>
      </div>
    </div>
  );
}
