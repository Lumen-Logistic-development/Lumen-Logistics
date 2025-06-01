import React from 'react'
import SupplierStatsCards from './StatsCards'
import { SupplierPerformanceChart } from './SupplierPerformanceChart'
import { SupplierCategoriesChart } from './SuppliersCategotiesChart'
import TopSuppliers from './TopSuppliers'


const Supplier = () => {
  return (
    <div className="min-h-screen bg-[#1c1c1e] text-white p-4">
       <SupplierStatsCards/>

       <div className='flex flex-row items-center mt-4'>
          <SupplierPerformanceChart/>
           <SupplierCategoriesChart/>  
       </div>

       <TopSuppliers/>
    </div>
  )
}

export default Supplier
