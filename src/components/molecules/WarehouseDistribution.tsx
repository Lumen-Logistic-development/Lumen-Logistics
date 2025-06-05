const health = [
  {
    category: "Main Warehouse",
    percentage: 65,
    value: "$578,400",
    quantity: "12,300 items",
  },
  {
    category: "Distribution Center A",
    percentage: 42,
    value: "$302,100",
    quantity: "8,200 items",
  },
  {
    category: "Distribution Center B",
    percentage: 78,
    value: "$689,750",
    quantity: "15,000 items",
  },
  {
    category: "Outflow Storage",
    percentage: 35,
    value: "$245,890",
    quantity: "5,600 items",
  },
];

export default function InventoryHealth() {
  return (
    <div className="bg-[#09090B] p-6 rounded-2xl shadow">
      <h2 className="font-semibold">Warehouse Distribution</h2>
      <p className="mb-4 text-sm text-[#A1A1AA]">
        Inventory across warehouse locations
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
            <p className="text-gray-500 mt-1 text-xs">
              {item.value} • {item.quantity}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
