// components/TransactionStats.tsx
const stats = [
    {
      title: "Total Transactions",
      value: "1,482",
      change: "+12.3% from last month",
      positive: true,
    },
    {
      title: "Success Rate",
      value: "98.7%",
      change: "+0.2% from last month",
      positive: true,
    },
    {
      title: "Total Gas Used",
      value: "2.4M",
      change: "-5.1% from last month",
      positive: false,
    },
  ];
  
  export default function TransactionStats() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="rounded-xl border bg-white p-5 shadow-sm flex flex-col"
          >
            <p className="text-sm text-gray-500 font-medium mb-1">{stat.title}</p>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className={`text-sm mt-1 ${stat.positive ? "text-green-600" : "text-red-500"}`}>
              {stat.change}
            </p>
          </div>
        ))}
      </div>
    );
  }
  