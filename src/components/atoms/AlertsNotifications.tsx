"use client";

import { AiOutlineWarning } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";

export default function AlertsNotifications() {
  return (
    <div className="bg-card p-6 rounded-xl max-w-md w-full mx-auto text-foreground shadow-md">
      <h2 className="text-2xl font-bold mb-1">Alerts & Notifications</h2>
      <p className="text-muted-foreground text-sm mb-6">
        Recent system alerts requiring attention
      </p>

      <div className="flex items-start space-x-4 mb-6">
        <AiOutlineWarning className="text-yellow-400 text-2xl mt-1" />
        <div>
          <p>Low inventory alert: SKU-8842</p>
          <p className="text-muted-foreground text-sm">
            Inventory below threshold (15 units)
          </p>
          <div className="flex items-center text-muted-foreground text-xs mt-1">
            <AiOutlineClockCircle className="mr-1" />
            <span>2 hours ago</span>
          </div>
        </div>
      </div>

      <div className="flex items-start space-x-4 mb-6">
        <RiErrorWarningLine className="text-pink-500 text-2xl mt-1" />
        <div>
          <p>Production delay: Line B</p>
          <p className="text-muted-foreground text-sm">
            Maintenance required on assembly unit
          </p>
          <div className="flex items-center text-muted-foreground text-xs mt-1">
            <AiOutlineClockCircle className="mr-1" />
            <span>5 hours ago</span>
          </div>
        </div>
      </div>

      <div className="flex items-start space-x-4 mb-6">
        <BsCheckCircle className="text-green-400 text-2xl mt-1" />
        <div>
          <p>Smart contract executed: Order #38291</p>
          <p className="text-muted-foreground text-sm">
            Payment confirmed on blockchain
          </p>
          <div className="flex items-center text-muted-foreground text-xs mt-1">
            <AiOutlineClockCircle className="mr-1" />
            <span>1 day ago</span>
          </div>
        </div>
      </div>

      <button className="w-full mt-2 py-2 border border-border text-foreground rounded-lg hover:bg-accent transition">
        View All Alerts
      </button>
    </div>
  );
}
