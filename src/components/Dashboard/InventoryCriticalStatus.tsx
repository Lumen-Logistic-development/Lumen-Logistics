"use client";

const InventoryCriticalStatus = () => {
  return (
    <div className="bg-card p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Inventory Status</h2>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span>Raw Material A</span>
          <span className="text-red-500">Critical</span>
        </div>
        <div className="flex justify-between">
          <span>Component B</span>
          <span className="text-yellow-400">Warning</span>
        </div>
        <div className="flex justify-between">
          <span>Finished Product C</span>
          <span className="text-green-400">Good</span>
        </div>
        <div className="flex justify-between">
          <span>Packaging Material D</span>
          <span className="text-green-400">Good</span>
        </div>
      </div>
      <button className="mt-4 w-full bg-muted hover:bg-accent py-2 rounded-lg text-sm">
        Manage Inventory
      </button>
    </div>
  );
}

export default InventoryCriticalStatus 