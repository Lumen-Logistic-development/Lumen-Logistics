import { BsBox } from 'react-icons/bs';
import { FaExclamationTriangle, FaBan, FaCheckCircle } from 'react-icons/fa';

const stats = [
  {
    title: "Total Items",
    value: 8,
    description: "Across all categories",
    icon: <BsBox className="text-white w-5 h-5" />,
  },
  {
    title: "Low Stock Items",
    value: 2,
    description: "Below reorder point",
    icon: <FaExclamationTriangle className="text-yellow-400 w-5 h-5" />,
  },
  {
    title: "Out of Stock",
    value: 1,
    description: "Immediate restock needed",
    icon: <FaBan className="text-red-500 w-5 h-5" />,
  },
  {
    title: "Verified Items",
    value: 7,
    description: "Verified on blockchain",
    icon: <FaCheckCircle className="text-green-500 w-5 h-5" />,
  },
];


export default function StatsCards() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((item, idx) => (
          <div key={idx} className="bg-card text-foreground p-6 rounded-2xl shadow">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              {item.icon}
            </div>
  
            <p className="text-3xl font-bold mt-4">{item.value}</p>
            <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    );
  }
  
