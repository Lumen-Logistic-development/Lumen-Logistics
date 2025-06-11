'use client';
import { BsDot } from 'react-icons/bs';

const alerts = [
  {
    sku: 'SKU-8842',
    name: 'Raw Material A',
    quantity: 15,
    min: 50,
    icon: <BsDot className="text-green-500 text-xl" />,
    color: 'text-green-500',
    status: 'Active',
    statusColor: 'bg-green-600 text-white',
    bgColor: 'bg-[rgba(34,197,94,0.1)]', // Tailwind green-500 rgba
  },
  {
    sku: 'SKU-7291',
    name: 'Component B',
    quantity: 42,
    min: 100,
    icon: <BsDot className="text-green-500 text-xl" />,
    color: 'text-green-500',
    status: 'Active',
    statusColor: 'bg-green-600 text-white',
    bgColor: 'bg-[rgba(34,197,94,0.1)]',
  },
  {
    sku: 'SKU-9384',
    name: 'Packaging Material',
    quantity: 78,
    min: 200,
    icon: <BsDot className="text-yellow-500 text-xl" />,
    color: 'text-yellow-500',
    status: 'Maintenance',
    statusColor: 'bg-yellow-500 text-black',
    bgColor: 'bg-[rgba(234,179,8,0.1)]', // Tailwind yellow-500 rgba
  },
  {
    sku: 'SKU-1023',
    name: 'Machine D',
    quantity: 0,
    min: 30,
    icon: <BsDot className="text-red-500 text-xl" />,
    color: 'text-red-500',
    status: 'Offline',
    statusColor: 'bg-gray-500 text-white',
    bgColor: 'bg-[rgba(239,68,68,0.1)]', // Tailwind red-500 rgba
  },
];

const ProductionLineStatus = () => {
  return (
    <div className="bg-black p-4 rounded-lg shadow w-full">
      <div>
        <h2 className="text-base font-semibold text-gray-300">Production Line Status</h2>
        <p className="text-gray-400 text-[11px]">Real time status of all production lines</p>

        <div className="mt-4 space-y-3">
          {alerts.map((alert, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between p-2 rounded-lg border border-gray-400 ${alert.bgColor} hover:shadow-sm transition`}
            >
              <div className="flex items-center gap-2">
                <span>{alert.icon}</span>
                <div>
                  <p className="text-white text-sm">{alert.sku}</p>
                  <p className="text-white text-[11px]">{alert.name}</p>
                </div>
              </div>
              <span
                className={`text-[10px] font-medium px-3 py-1 rounded-full ${alert.statusColor}`}
              >
                {alert.status}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 text-center w-full">
          <button className="w-full mt-2 py-2 border border-gray-700 text-xs text-white rounded-lg hover:bg-gray-800 transition">
            View All Lines
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductionLineStatus;
