import Image from "next/image";
import RecentTransactions from '@/components/RecentTransactions';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] p-8">
      <div className="max-w-5xl mx-auto">
        <RecentTransactions />
      </div>
    </main>
  );
}
