import { Package, Users, Clock, Star } from 'lucide-react';

const stats = [
  {
    title: "Total Suppliers",
    value: 5,
    description: "Across all categories",
    icon: <Package className="text-gray-400 w-5 h-5" />,
  },
  {
    title: "Active Suppliers",
    value: 4,
    description: "80% of total suppliers",
    icon: <Users className="text-gray-400 w-5 h-5" />,
  },
  {
    title: "Avg. On-Time Delivery",
    value: "91.2%",
    description: "Across all suppliers",
    icon: <Clock className="text-gray-400 w-5 h-5" />,
  },
  {
    title: "Avg. Quality Rating",
    value: "4.4/5",
    description: "Based on performance metrics",
    icon: <Star className="text-gray-400 w-5 h-5" />,
  },
];

export default function SupplierStatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {stats.map((item, idx) => (
        <div key={idx} className="bg-black text-white dark:bg-[#09090B] p-6 rounded-2xl shadow  dark:border-gray-800 transition-colors duration-300">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium  dark:text-gray-300">{item.title}</h2>
            {item.icon}
          </div>

          <p className="text-3xl font-bold mt-4  dark:text-white">{item.value}</p>
          <p className=" dark:text-gray-400 text-sm mt-1">{item.description}</p>
        </div>
      ))}
    </div>
  );
}