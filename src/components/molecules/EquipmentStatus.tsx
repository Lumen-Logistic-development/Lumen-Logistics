"use client";
import { BsDot } from "react-icons/bs";
import { IoCheckmarkCircleOutline, IoWarningOutline } from "react-icons/io5";

const alerts = [
  {
    sku: "CNC Machine #1",
    name: "Operational . 98% uptime",
    quantity: 15,
    min: 50,
    icon: <IoCheckmarkCircleOutline className="text-green-500 text-xl" />,
    color: "text-green-500",
    status: "Good",
    statusColor: "bg-green-600 text-white",
    bgColor: "bg-[rgba(34,197,94,0.1)]", // Tailwind green-500 rgba
  },
  {
    sku: "Assembly Robot #2",
    name: "Maintenace due in 2 days",
    quantity: 42,
    min: 100,
    icon: <IoWarningOutline className="text-yellow-500 text-xl" />,
    color: "text-green-500",
    status: "Warning",
    statusColor: "bg-green-600 text-white",
    bgColor: "bg-[rgba(34,197,94,0.1)]",
  },
  {
    sku: "Conveyor Belt #3",
    name: "Motor replacement needed",
    quantity: 78,
    min: 200,
    icon: <IoWarningOutline className="text-yellow-500 text-xl" />,
    color: "text-red-500",
    status: "Critical",
    statusColor: "bg-yellow-500 text-black",
    bgColor: "bg-[rgba(234,179,8,0.1)]",
  },
  {
    sku: "Quality Scanner #4",
    name: "Recently calibrated",
    quantity: 0,
    min: 30,
    icon: <IoCheckmarkCircleOutline className="text-green-500 text-xl" />,
    color: "text-red-500",
    status: "Good",
    statusColor: "bg-red-500 text-white",
    bgColor: "bg-[rgba(239,68,68,0.1)]",
  },
];

const EquipmentStatus = () => {
  return (
    <div className="bg-black p-4 rounded-lg shadow w-full">
      <div>
        <h2 className="text-base font-semibold text-gray-300">
          Equipment Status
        </h2>
        <p className="text-gray-400 text-[11px]">
          Critical equipment monitoring
        </p>

        <div className="mt-4 space-y-3">
          {alerts.map((alert, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between p-2 rounded-lg border border-gray-400 bg-black hover:shadow-sm transition`}
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
            Equipment Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default EquipmentStatus;
