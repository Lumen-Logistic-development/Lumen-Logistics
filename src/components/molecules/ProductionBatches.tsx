'use client'

import React from 'react'

const batches = [
  {
    id: 'PB-2024-001',
    title: 'Premium Electronics',
    progress: 750,
    total: 1000,
    time: '2h',
    status: 'In Progress',
  },
  {
    id: 'PB-2024-002',
    title: 'Standard Components',
    progress: 900,
    total: 2000,
    time: '6h',
    status: 'In Progress',
  },
  {
    id: 'PB-2024-003',
    title: 'Custom Assembly',
    progress: 0,
    total: 500,
    time: 'Tomorrow 8:00 AM',
    status: 'Queued',
  },
]

const statusStyle:any = {
  'In Progress': 'bg-blue-100 text-blue-600',
  'Queued': 'bg-yellow-100 text-yellow-700',
}

const ProductionBatches = () => {
  return (
    <div className="bg-black p-5 rounded-xl shadow-md w-full max-w-3xl mx-auto">
      <h2 className=" font-semibold text-white">Active Production Batches</h2>
      <p className="text-gray-500 text-sm mb-4">Currently running production batches</p>

      {batches.map((batch, index) => {
        const percent = (batch.progress / batch.total) * 100

        return (
          <div key={index} className={`${index !== batches.length - 1 ? 'mb-4' : ''}`}>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-300 text-sm">Batch #{batch.id}</p>
                <p className="text-xs text-gray-500">{batch.title}</p>
              </div>
              <span
                className={`px-2 py-0.5 text-xs font-medium rounded-full ${statusStyle[batch.status]}`}
              >
                {batch.status}
              </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className={`h-2 rounded-full ${batch.status === 'Queued' ? 'bg-yellow-400' : 'bg-blue-600'}`}
                style={{ width: `${percent}%` }}
              ></div>
            </div>

            <p className="text-xs text-gray-500 mt-1">
              {batch.progress}/{batch.total} units •{' '}
              {batch.status === 'Queued' ? `Scheduled: ${batch.time}` : `Est. completion: ${batch.time}`}
            </p>
          </div>
        )
      })}

      <button className="w-full text-white py-2 mt-4 border border-gray-800 text-sm font-medium rounded-md">
        View All Batches
      </button>
    </div>
  )
}

export default ProductionBatches
