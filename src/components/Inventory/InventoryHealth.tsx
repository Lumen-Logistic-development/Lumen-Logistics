const health = [
    { category: "Raw Materials", percentage: 65 },
    { category: "Components", percentage: 42 },
    { category: "Packaging", percentage: 78 },
    { category: "Finished Goods", percentage: 35 },
  ];
  
  export default function InventoryHealth() {
    return (
      <div className="bg-card text-foreground p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold">Inventory Health</h2>
        <p className="mb-4 text-sm text-muted-foreground">Stock level status by category</p>
        <div className="space-y-6">
          {health.map((item, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-1">
                <span>{item.category}</span>
                <span>{item.percentage}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2.5">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  