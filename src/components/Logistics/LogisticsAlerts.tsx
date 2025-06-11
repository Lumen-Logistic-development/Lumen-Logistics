import { Clock, TriangleAlert } from "lucide-react";
const LogisticsAlerts = () => {
  const Alerts = [
    {
      title: "Delay: SHP-1003",
      description: "Shipment delay due to weather conditions",
      timing: "2023-03-13 14:30",
      icon: "alert",
      timeicon: <Clock size={12} />,
    },
    {
      title: "Verification: SHP-1004",
      description: "Blockchain verification pending for shipment",
      timing: "2023-03-15 09:45",
      icon: "clock",
      timeicon: <Clock size={12} />,
    },
    {
      title: "Route Change: SHP-1001",
      description: "Route optimized to avoid traffic congestion",
      timing: "2023-03-14 16:20",
      icon: "clock",
      timeicon: <Clock size={12} />,
    },
  ];
  return (
    <div className="flex-1 lg:flex-[2] border border-[#e2e8f0] rounded-[8px] p-6 min-h-[488px] max-w-[403px]">
      <div>
        <h1 className="text-[24px] font-semibold text-[#020817]">
          Logistics Alerts
        </h1>
        <p className="text-[14px] font-normal text-[#64748b]">
          Recent alerts and notifications
        </p>
      </div>
      <div className="font-inter">
        <ul className="pt-4">
          {Alerts.map((item) => (
            <li key={item.title}>
              <div className="flex gap-4 py-1">
                <div
                  className={`pt-2 ${
                    item.icon === "alert" ? "text-[#f59e0b]" : "text-[#3b82f6]"
                  }`}
                >
                  {item.icon === "clock" ? (
                    <Clock size={20} />
                  ) : (
                    <TriangleAlert size={20} />
                  )}
                </div>
                <div>
                  <div className="font-medium text-[14px] text-[#020817]">
                    {item.title}
                  </div>
                  <div className="font-normal text-[14px] text-[#64748b]">
                    {item.description}
                  </div>
                  <div className="flex items-center gap-2 py-1">
                    <div className="text-[#64748b]">{item.timeicon}</div>
                    <div className="font-normal text-[12px] text-[#64748b]">
                      {item.timing}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-4">
        <button className="w-full h-[40px] border border-[#e2e8f0] text-[14px] font-medium text-[#020817] rounded-[6px]">
          View All Alerts
        </button>
      </div>
    </div>
  );
};
export default LogisticsAlerts;
