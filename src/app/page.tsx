import { InventoryChart } from './components/inventory-chart';
import { ProductionStatusChart } from './components/production-status-chart';
import OnTimeDelivery from './components/onTimeDelivery';
import RecentTransactions from '@/components/organism/RecentTransactions';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] p-8">
      <div className="">
        <div className="grid grid-cols-7">
          <div className=" col-span-5 grid gap-5 grid-cols-4 max-w-[1400px] ">
            <div className="col-span-2">
              <InventoryChart />
            </div>
            <div className="max-w-5xl mx-auto">
              <RecentTransactions />
            </div>

            <div className="col-span-2">
              <ProductionStatusChart />
            </div>

            <div className="col-span-3">
              <OnTimeDelivery />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
