'use client';
import { FaExclamationTriangle } from 'react-icons/fa';
import { FiAlertCircle } from 'react-icons/fi';

const alerts = [
  {
    sku: 'SKU-8842',
    name: 'Raw Material A',
    quantity: 15,
    min: 50,
    icon: <FiAlertCircle className="text-red-500 text-xl" />,
    color: 'text-red-500',
  },
  {
    sku: 'SKU-7291',
    name: 'Component B',
    quantity: 42,
    min: 100,
    icon: <FaExclamationTriangle className="text-yellow-500 text-xl" />,
    color: 'text-yellow-500',
  },
  {
    sku: 'SKU-9384',
    name: 'Packaging Material',
    quantity: 78,
    min: 200,
    icon: <FaExclamationTriangle className="text-yellow-500 text-xl" />,
    color: 'text-yellow-500',
  },
];

const CriticalStockAlerts = () => {
  return (
    <div className="bg-black  p-6 rounded-lg shadow  w-full">
    <div className="">
      <h2 className="font-bold text-gray-300">Critical Stock Alerts</h2>
      <p className="text-gray-400  text-sm">Items requiring immediate attention</p>

      <div className="mt-5 space-y-4">
        {alerts.map((alert, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-2 rounded-lg border border-gray-500  hover:shadow-sm transition"
          >
            <div className="flex items-center gap-3">
              <span>{alert.icon}</span>
              <div>
                <p className=" text-white text-sm ">{alert.sku}</p>
                <p className=" text-gray-300 text-xs">{alert.name}</p>
              </div>
            </div>
            <div className="text-right">
              <p className={` text-sm ${alert.color}`}>{alert.quantity} units</p>
              <p className="text-xs text-gray-400">Min: {alert.min}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center w-full">
      <button className="w-full mt-2 text-sm py-2 border border-gray-700 text-white rounded-lg hover:bg-gray-800 transition">
          View All Alerts
        </button>
      </div>
    </div>
    </div>
  );
};

export default CriticalStockAlerts;
