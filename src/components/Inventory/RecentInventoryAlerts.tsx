import { FaExclamationTriangle, FaBan } from "react-icons/fa";

const alerts = [
  {
    title: "Low Stock: Raw Materials",
    time: "2023-03-15",
    description: "Inventory below reorder point (180 < 200)",
    type: "low",
  },
  {
    title: "Low Stock: Components",
    time: "2023-03-14",
    description: "Inventory below reorder point (420 < 500)",
    type: "low",
  },
  {
    title: "Out of Stock: Finished Product G",
    time: "2023-03-13",
    description: "0 units left",
    type: "out",
  },
];

export default function RecentInventoryAlerts() {
  return (
    <div className="bg-card text-foreground p-6 rounded-2xl shadow">
      <h2 className="text-xl font-semibold">Recent Inventory Alerts</h2>
      <p className="mb-4 text-sm text-muted-foreground">Stock level status by category</p>

      <ul className="space-y-4">
        {alerts.map((alert, idx) => {
          const Icon = alert.type === "low" ? FaExclamationTriangle : FaBan;

          return (
            <li key={idx} className="border-b border-border pb-2">
              <div className="flex items-center gap-2">
                <Icon
                  className={`w-4 h-4 ${
                    alert.type === "low" ? "text-yellow-400" : "text-red-500"
                  }`}
                />
                <h3 className="font-semibold text-foreground">{alert.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm">{alert.description}</p>
              <p className="text-muted-foreground text-xs">{alert.time}</p>
            </li>
          );
        })}
      </ul>

      <button className="text-sm w-full px-4 py-2 bg-transparent border border-border mt-5 text-foreground rounded-md hover:bg-accent transition">
        View All Alerts
      </button>
    </div>
  );
}
