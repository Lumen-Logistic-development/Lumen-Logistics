"use client";

import { FC } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { GoArrowDownRight } from "react-icons/go";

import { FiTrendingUp } from "react-icons/fi";

const OnTimeDelivery: FC = () => {
  const metric = {
    title: "On-Time Delivery",
    value: "89.7%",
    change: "0.9%",
    isPositive: false,
    icon: <TbTruckDelivery className="text-[#A1A1AA] text-2xl ml-[120px]" />,
  };

  return (
    <div className="bg-black rounded-lg shadow p-4 w-fit wmax-w-sm">
      <div className="flex justify-between items-start mb-1">
        <h3 className="text-sm font-medium text-white">{metric.title}</h3>
        {metric.icon}
      </div>
      <div className="flex flex-col items-start">
        <p className="text-2xl font-bold text-white mr-2">{metric.value}</p>
        <span
          className={`flex items-center text-sm ${
            metric.isPositive ? "text-green-500" : "text-[#F43F5E]"
          }`}
        >
          {metric.isPositive ? (
            <FiTrendingUp className="mr-1" />
          ) : (
            <GoArrowDownRight className="mr-1" />
          )}
          {metric.change}
        </span>
      </div>
      <p className="text-xs text-[#A1A1AA] mt-1">from last week</p>
    </div>
  );
};

export default OnTimeDelivery;
