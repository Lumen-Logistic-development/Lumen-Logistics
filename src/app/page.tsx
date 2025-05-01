import { InventoryChart } from '../components/organism/inventoryChart';
import { ProductionStatusChart } from '../components/organism/productionStatusChart';
import OnTimeDelivery from '../components/molecules/onTimeDelivery';
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/dashboard');
}
