import InventoryTrends from "./InventoryTrends";
import RecentMovements from "./RecentMovements";
import StockAlerts from "./StockAlerts";
import TopItems from "./TopItems";
import WarehouseDistribution from "./WarehouseDistribution";
import InventoryStartCards from "./InventoryStartCards";


export default function Inventory() {
  return (
    <div className=" bg-[#121212] min-h-screen space-y-6">
      <InventoryStartCards />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <InventoryTrends />
        </div>
        <StockAlerts />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TopItems />
        <WarehouseDistribution />
        <RecentMovements />
      </div>
    </div>
  )
}
