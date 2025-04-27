import { FC } from "react";
import {
  MdInventory,
  MdProductionQuantityLimits,
  MdLocalShipping,
} from "react-icons/md";
import { SiBlockchaindotcom } from "react-icons/si";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";

const Dashboard: FC = () => {
  // Mock data - replace with your actual data sources
  const metrics = [
    {
      title: "Total Inventory Value",
      value: "$1,284,342",
      change: "2.5%",
      isPositive: true,
      icon: <MdInventory className="text-blue-500 text-2xl" />,
    },
    {
      title: "Production Efficiency",
      value: "94.2%",
      change: "1.2%",
      isPositive: true,
      icon: <MdProductionQuantityLimits className="text-green-500 text-2xl" />,
    },
    {
      title: "On-Time Delivery",
      value: "89.7%",
      change: "0.9%",
      isPositive: false,
      icon: <MdLocalShipping className="text-yellow-500 text-2xl" />,
    },
    {
      title: "Blockchain Transactions",
      value: "1,482",
      change: "13.3%",
      isPositive: false,
      icon: <SiBlockchaindotcom className="text-purple-500 text-2xl" />,
    },
  ];

  const inventoryData = [10000, 12000, 8000, 4000, 0];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  const productionStatus = [
    { name: "In Progress", value: 35, color: "bg-blue-500" },
    { name: "Completed", value: 45, color: "bg-green-500" },
    { name: "Delayed", value: 5, color: "bg-red-500" },
    { name: "Planned", value: 15, color: "bg-gray-400" },
  ];

  return (
    <div className="p-6 bg-[#121212]">
      <h1 className="text-2xl font-bold text-white mb-2">Dashboard</h1>
      <p className="text-[#A1A1AA] mb-6">
        Overview of your supply chain operations and blockchain transactions
      </p>

      {/* Overview Section */}
      <section className="mb-8">
        <div className=" space-x-2 bg-[#27272a] p-2 rounded-lg inline-block mb-5">
          <button className="px-4 py-2 text-white bg-neutral-900 rounded-md">
            Overview
          </button>
          <button className="px-4 py-2 text-neutral-500">Inventory</button>
          <button className="px-4 py-2 text-neutral-500">Production</button>
          <button className="px-4 py-2 text-neutral-500">Blockchain</button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-black rounded-lg shadow p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm font-medium text-gray-500">
                  {metric.title}
                </h3>
                {metric.icon}
              </div>
              <div className="flex items-end">
                <p className="text-2xl font-bold text-gray-800 mr-2">
                  {metric.value}
                </p>
                <span
                  className={`flex items-center text-sm ${
                    metric.isPositive ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {metric.isPositive ? (
                    <FiTrendingUp className="mr-1" />
                  ) : (
                    <FiTrendingDown className="mr-1" />
                  )}
                  {metric.change}
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                from{" "}
                {metric.title.includes("Month") ? "last month" : "last week"}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Inventory Levels Section */}
        <section className="bg-black rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Inventory Levels
          </h2>
          <p className="text-gray-600 mb-4">
            Monitor inventory levels across all warehouses
          </p>

          <div className="h-64">
            <h3 className="text-sm font-medium text-gray-500 mb-2">
              Last 7 days
            </h3>
            <div className="flex items-end h-48 border-b border-l border-gray-200">
              {inventoryData.map((value, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-8 bg-blue-500 rounded-t hover:bg-blue-600 transition-colors"
                    style={{ height: `${(value / 12000) * 100}%` }}
                  />
                  <span className="text-xs text-gray-500 mt-1">
                    {months[index]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Production Status Section */}
        <section className="bg-black rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Production Status
          </h2>
          <p className="text-gray-600 mb-4">
            Current production workflow status
          </p>

          <div className="flex justify-between mb-4">
            {productionStatus.map((status, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl font-bold text-gray-800">
                  {status.value}%
                </p>
                <p className="text-sm text-gray-500">{status.name}</p>
              </div>
            ))}
          </div>

          <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
            {productionStatus.map((status, index) => (
              <div
                key={index}
                className={`h-full ${status.color}`}
                style={{ width: `${status.value}%` }}
              />
            ))}
          </div>

          <div className="flex justify-between mt-2">
            {productionStatus.map((status, index) => (
              <span key={index} className="text-xs text-gray-500">
                {status.name}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* Recent Blockchain Transactions Section */}
      <section className="bg-black rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Blockchain Transactions
        </h2>
        <p className="text-gray-600 mb-4">
          Latest transactions recorded on Stellar blockchain
        </p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-center text-gray-500">
            Blockchain transaction data visualization would go here
          </p>
        </div>
      </section>

      {/* Supply Chain Visibility Section */}
      <section className="bg-black rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Supply Chain Visibility
        </h2>
        <p className="text-gray-600 mb-4">
          Global view of your supply chain network
        </p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-center text-gray-500">
            Supply chain network visualization would go here
          </p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;