import { Calendar, Download, Share2 } from "lucide-react";

export default function AnalyticsHeader() {
  return (
    <div className="bg-white">
      {/* Header & Description */}
      <div className="space-y-2 mb-6">
        <h1 className="text-xl font-semibold text-gray-900">Analytics</h1>
        <p className="text-sm text-gray-500">
          Supply chain analytics, forecasting, and business intelligence
        </p>
      </div>

      {/* Filters & Actions (Responsive) */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        {/* Select Dropdown */}
        <div>
          <select className="border rounded px-3 py-1 text-sm text-gray-700 bg-white shadow-sm w-full md:w-auto">
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>Last 90 days</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 justify-start md:justify-end">
          <button className="flex items-center gap-1 text-sm px-3 py-1 border rounded text-gray-700 hover:bg-gray-50">
            <Calendar className="w-4 h-4" />
            Custom Range
          </button>
          <button className="flex items-center gap-1 text-sm px-3 py-1 border rounded text-gray-700 hover:bg-gray-50">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="flex items-center gap-1 text-sm px-3 py-1 border rounded text-gray-700 hover:bg-gray-50">
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-gray-50 rounded-md  p-2 overflow-x-auto whitespace-nowrap  gap-2 mb-4 inline-flex">
        <button className="text-sm font-medium text-black bg-white border border-gray-200 px-3 py-1 rounded shadow-sm">
          Overview
        </button>
        <button className="text-sm font-medium text-gray-500 hover:text-blue-600 px-3 py-1">
          Inventory
        </button>
        <button className="text-sm font-medium text-gray-500 hover:text-blue-600 px-3 py-1">
          Suppliers
        </button>
        <button className="text-sm font-medium text-gray-500 hover:text-blue-600 px-3 py-1">
          Costs
        </button>
      </div>
    </div>
  );
}







// import { Calendar, Download, Share2 } from "lucide-react";

// export default function AnalyticsHeader() {
//   return (
//     <div className=" bg-white">
//       {/* Top Heading and Actions */}
//       <div className=" space-y-4 gap-4 mb-4">
//         <div>
//           <h1 className="text-xl font-semibold text-gray-900">Analytics</h1>
//           <p className="text-sm text-gray-500">
//             Supply chain analytics, forecasting, and business intelligence
//           </p>
//         </div>

//         {/* Filters & Actions */}
//         <div className="flex  items-center justify-between gap-2">
//           <div>
//             <select className="border rounded px-3 py-1 text-sm text-gray-700 bg-white shadow-sm">
//               <option>Last 30 days</option>
//               <option>Last 7 days</option>
//               <option>Last 90 days</option>
//             </select>
//           </div>

//           <div className="flex items-center gap-2">
//             <button className="flex items-center gap-1 text-sm px-3 py-1 border rounded text-gray-700 hover:bg-gray-50">
//               <Calendar className="w-4 h-4" />
//               Custom Range
//             </button>

//             <button className="flex items-center gap-1 text-sm px-3 py-1 border rounded text-gray-700 hover:bg-gray-50">
//               <Download className="w-4 h-4" />
//               Export
//             </button>

//             <button className="flex items-center gap-1 text-sm px-3 py-1 border rounded text-gray-700 hover:bg-gray-50">
//               <Share2 className="w-4 h-4" />
//               Share
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="bg-gray-50 rounded-md p-2 inline-flex gap-2 mb-4">
//         <button className="text-sm font-medium text-black bg-white border border-gray-200 px-3 py-1 rounded shadow-sm">
//           Overview
//         </button>
//         <button className="text-sm font-medium text-gray-500 hover:text-blue-600 px-3 py-1">
//           Inventory
//         </button>
//         <button className="text-sm font-medium text-gray-500 hover:text-blue-600 px-3 py-1">
//           Suppliers
//         </button>
//         <button className="text-sm font-medium text-gray-500 hover:text-blue-600 px-3 py-1">
//           Costs
//         </button>
//       </div>
//     </div>
//   );
// }
