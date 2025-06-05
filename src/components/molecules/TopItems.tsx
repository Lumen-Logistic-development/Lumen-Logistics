const items = [
  {
    name: "Premium Steel Sheets",
    value: "$234,890",
    sku: "SKU-1001",
    quantity: "1,200",
  },
  {
    name: "Electronics",
    value: "$98,212",
    sku: "SKU-1002",
    quantity: "850",
  },
  {
    name: "Cement Bags",
    value: "$72,310",
    sku: "SKU-1003",
    quantity: "1,150",
  },
  {
    name: "Packaged Treats",
    value: "$34,890",
    sku: "SKU-1004",
    quantity: "2,000",
  },
  {
    name: "Specialty Chemicals",
    value: "$27,560",
    sku: "SKU-1005",
    quantity: "930",
  },
];

export default function TopItems() {
  return (
    <div className="bg-black p-4 rounded-lg shadow-sm">
      <h2 className=" font-bold mb-1 text-white">Top Items of Value</h2>
      <p className="text-gray-400 text-sm mb-6">
        Highest value items in inventory
      </p>
      <ul>
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex text-black justify-between py-2 last:border-none"
          >
            <div>
              <span className="text-white text-sm">{item.name}</span>
              <p className="text-gray-500 text-xs">{item.sku}</p>
            </div>

            <div>
              <span className="font-medium text-white text-sm">
                {item.value}
              </span>
              <div className="text-gray-500 text-xs">{item.quantity}</div>
            </div>
          </li>
        ))}
      </ul>

      <button className="w-full text-sm mt-2 py-2 border border-gray-700 text-white rounded-lg hover:bg-gray-800 transition">
        View Full Inventory
      </button>
    </div>
  );
}
