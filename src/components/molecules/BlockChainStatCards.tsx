'use client'

import {
  ArrowUpRight,
  ArrowDownRight,
  Info,
  Settings,
  MonitorCheck,
} from 'lucide-react'

export default function BlockchainStatsCards() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {/* Total Transactions */}
        <div className="bg-black rounded-xl  shadow-sm p-5">
          <div className="flex justify-between items-center text-sm text-gray-300">
            <span>Total Transactions</span>
            <Settings className="w-4 h-4 text-gray-400" />
          </div>
          <div className="text-2xl font-bold text-white mt-1">3,542,189</div>
          <div className="flex items-center gap-1 text-sm mt-1">
            <ArrowUpRight className="w-4 h-4 text-green-600" />
            <span className="text-green-600 font-medium">+8.7%</span>
            
          </div>
          <span className="text-gray-500 text-sm">from last month</span>
        </div>

        {/* Network Status */}
        <div className="bg-black rounded-xl shadow-sm p-5">
          <div className="flex justify-between items-center text-sm text-gray-300">
            <span>Network Status</span>
            <MonitorCheck className="w-4 h-4 text-gray-400" />
          </div>
          <div className="text-2xl font-bold text-white mt-1">Online</div>
          <span className="text-xs font-medium mt-2 inline-block px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
            Healthy
          </span>
        </div>

        {/* Average Gas Fee */}
        <div className="bg-black rounded-xl  shadow-sm p-5">
          <div className="flex justify-between items-center text-sm text-gray-300">
            <span>Average Gas Fee</span>
            <Info className="w-4 h-4 text-gray-400" />
          </div>
          <div className="text-2xl font-bold text-white mt-1">0.00032 ETH</div>
          <div className="flex items-center gap-1 text-sm mt-1">
            <ArrowDownRight className="w-4 h-4 text-red-600" />
            <span className="text-red-600 font-medium">-2.1%</span>
          </div>
          <span className="text-gray-500 text-sm">from last week</span>
        </div>

        {/* Smart Contracts Active */}
        <div className="bg-black rounded-xl  shadow-sm p-5">
          <div className="flex justify-between items-center text-sm text-gray-300">
            <span>Smart Contracts Active</span>
            <Settings className="w-4 h-4 text-gray-400" />
          </div>
          <div className="text-2xl font-bold text-white mt-1">1,284</div>
          <div className="flex items-center gap-1 text-sm mt-1">
            <ArrowUpRight className="w-4 h-4 text-green-600" />
            <span className="text-green-600 font-medium">+5</span>
           
          </div>
          <span className="text-gray-500 text-sm">new contracts this month</span>
        </div>
      </div>
    </div>
  )
}
