import OverviewCards from "../molecules/ProductionStatCards";
import TopItems from "../molecules/ProductionBatches";
import ProductionEfficiency from "../molecules/ProductionEfficiency";
import ProductionLineStatus from "../molecules/ProductionLineStatus";
import QualityControlIndicator from "../molecules/QualityControlIndicator";
import EquipmentStatus from "../molecules/EquipmentStatus";


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
