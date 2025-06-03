import React from 'react';

interface Supplier {
  id: number;
  name: string;
  tier: number;
  category: string;
  location: string;
  rating: number;
}

const suppliers: Supplier[] = [
  {
    id: 1,
    name: "Alpha Supplies Inc.",
    tier: 1,
    category: "Raw Materials",
    location: "New York, USA",
    rating: 4.8
  },
  {
    id: 2,
    name: "Beta Manufacturing",
    tier: 1,
    category: "Components",
    location: "Chicago, USA",
    rating: 4.7
  },
  {
    id: 3,
    name: "Gamma Industries",
    tier: 2,
    category: "Components",
    location: "Toronto, Canada",
    rating: 4.6
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3 h-3 ${
            star <= Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const TopSuppliers = () => {
  return (
    <div className="bg-black p-6 rounded-lg  w-full max-w-md mt-5">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white mb-1">
          Top Suppliers
        </h2>
        <p className="text-sm text-white">
          Highest performing suppliers
        </p>
      </div>

      {/* Suppliers List */}
      <div className="space-y-4">
        {suppliers.map((supplier) => (
          <div key={supplier.id} className="flex items-start gap-3 border-b pb-2">
            {/* Avatar */}
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-gray-500 font-medium text-sm">
                {supplier.name.charAt(0)}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-sm font-medium text-white truncate">
                  {supplier.name}
                </h3>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-700">
                  Tier {supplier.tier}
                </span>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <span className="text-blue-600">{supplier.category}</span>
                <span>•</span>
                <span>{supplier.location}</span>
              </div>
              {/* Rating */}
              <div className="flex items-center gap-1">
                <StarRating rating={supplier.rating} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSuppliers;