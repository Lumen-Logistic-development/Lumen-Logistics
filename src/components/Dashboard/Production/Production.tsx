import OverviewCards from "./ProductionStatCards";
import TopItems from "./ProductionBatches";
import ProductionEfficiency from "./ProductionEfficiency";
import ProductionLineStatus from "./ProductionLineStatus";
import QualityControlIndicator from "./QualityControlIndicator";
import ProductionBatches from "./ProductionBatches";
import EquipmentStatus from "./EquipmentStatus";


export default function Production() {
  return (
    <div className="bg-[#121212] min-h-screen space-y-6">
      <OverviewCards />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ProductionEfficiency />
        </div>
        <ProductionLineStatus />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TopItems />
        <QualityControlIndicator />
        <EquipmentStatus  />
      </div>
    </div>
  )
}
