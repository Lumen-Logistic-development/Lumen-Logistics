import React from "react";
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";
import { MdSettingsInputComponent } from "react-icons/md";
import { HiLightningBolt } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { FaChartLine } from "react-icons/fa";

function OverviewCards() {
  const metrics = [
    {
      title: "Production line active",
      value: "8/10",
      change: "2.5%",
      isPositive: true,
      icon: <MdSettingsInputComponent className="text-blue-500 text-2xl" />,
    },
    {
      title: "Overall Efficiency",
      value: "94.2%",
      change: "1.2%",
      isPositive: true,
      icon: <HiLightningBolt className="text-green-500 text-2xl" />,
    },
    {
      title: "Quality Score",
      value: "89.7%",
      change: "0.9%",
      isPositive: false,
      icon: <AiFillStar className="text-yellow-500 text-2xl" />,
    },
    {
      title: "Daily Output",
      value: "1,482",
      change: "13.3%",
      isPositive: false,
      icon: <FaChartLine className="text-purple-500 text-2xl" />,
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-black rounded-lg shadow p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-medium text-gray-400">
                {metric.title}
              </h3>
              {metric.icon}
            </div>
            <div className=" items-end">
              <p className="text-2xl font-bold text-white mr-2">
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
              from {metric.title.includes("Month") ? "last month" : "last week"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OverviewCards;
