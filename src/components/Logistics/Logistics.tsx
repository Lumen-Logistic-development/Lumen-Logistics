"use client";
import {
  Truck,
  Calendar,
  Clock,
  CircleCheck,
  MoveUpRight,
  MoveDownRight,
} from "lucide-react";
import { useState } from "react";
import ShipmentStatus from "./ShipmentStatus";
import LogisticsAlerts from "./LogisticsAlerts";
import LogisticsMap from "./LogisticsMap";
import DeliveryPerformance from "./DeliverPerformance";

const Logistics = () => {
  const [selected, setSelected] = useState("Overview");
  const Tablist = [
    { name: "Overview" },
    { name: "Shipment" },
    { name: "Tracking" },
    { name: "Carriers" },
  ];
  const Data = [
    {
      heading: "Active Shipments",
      info: "3",
      stat: "+2",
      time: "from last week",
      icon: <Truck size={16} />,
      status: "up",
    },
    {
      heading: "On-Time Delivery",
      info: "92.5%",
      stat: "+1.2%",
      time: "from last month",
      icon: <Calendar size={16} />,
      status: "up",
    },
    {
      heading: "Average Transit Time",
      info: "3.2 days",
      stat: "+0.5 days",
      time: "from last month",
      icon: <Clock size={16} />,
      status: "down",
    },
    {
      heading: "Verified Shipments",
      info: "80%",
      stat: "+5%",
      time: "from last month",
      icon: <CircleCheck size={16} />,
      status: "up",
    },
  ];

  return (
    <div className="p-4 md:p-8 font-inter max-w-full overflow-x-hidden">
      <div>
        <h1 className="text-[30px] text-[#020817] font-bold py-2">Logistics</h1>
        <p className="text-[16px] text-[#64748b] font-normal">
          Manage shipments, track deliveries, and optimize your supply chain
          logistics
        </p>
      </div>
      <div className="font-inter pt-6">
        <ul className="flex bg-[#f1f5f9] w-[350px] h-[40px] gap-2 p-1 justify-center items-center text-center rounded-[6px]">
          {Tablist.map((item) => (
            <li
              key={item.name}
              className={`p-1 rounded-[4px] font-medium text-[14px] text-[#64748b] w-[87.5px] cursor-pointer hover:bg-white
                ${selected === item.name ? "bg-white text-black" : ""}`}
              onClick={() => setSelected(item.name)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="py-4 font-inter">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Data.map((item) => (
            <li
              key={item.heading}
              className="min-h-[142px] border border-[#e2e8f0] rounded-[8px] p-4"
            >
              <div>
                <div className="flex justify-between items-center">
                  <div className="text-[14px] text-[#020817] font-medium">
                    {item.heading}
                  </div>
                  <div>{item.icon}</div>
                </div>
                <div className="font-bold text-[24px] text-[#020817] pt-2">
                  {item.info}
                </div>
                <div
                  className={`flex items-center gap-1 ${
                    item.status === "up" ? "text-[#10b189]" : "text-[#f43f5e]"
                  }`}
                >
                  <div>
                    {item.status === "up" ? (
                      <MoveUpRight size={16} />
                    ) : (
                      <MoveDownRight size={16} />
                    )}
                  </div>
                  <div className="font-normal text-[12px]">{item.stat}</div>
                </div>
                <div className="font-normal text-[12px] text-[#64748b]">
                  {item.time}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 font-inter">
        <DeliveryPerformance />
        <ShipmentStatus />
      </div>
      <div className="flex flex-col lg:flex-row gap-4 font-inter pt-4">
        <LogisticsMap />
        <LogisticsAlerts />
      </div>
    </div>
  );
};
export default Logistics;
