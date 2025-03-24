
import BlockchainTransactionsModule from '@/components/ui/blockchainTransactions';
import { InventoryChart } from './components/inventory-chart';
import { ProductionStatusChart } from './components/production-status-chart';

export default function Home() {
  return (
    <div className="">
      <div className="text-center my-5"> Home page</div>
      <div className="grid grid-cols-7">
        <div className="col-span-2">sidebar</div>
        <div className=" col-span-5 grid gap-5 grid-cols-4 max-w-[1400px] ">
        <BlockchainTransactionsModule/>
          <div className="col-span-2">
            <InventoryChart />
          </div>

          <div className="col-span-2">
            <ProductionStatusChart />
          </div>
        </div>
      </div>
    </div>
  );
}
