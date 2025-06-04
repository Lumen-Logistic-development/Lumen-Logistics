import React from 'react';
import { FiTrendingDown, FiTrendingUp } from 'react-icons/fi';

interface Metric {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  isPositive: boolean;
  change: string | number;
}

interface InventoryCardProps {
  metric: Metric;
  index: number;
}

export default function DashboardMetrics({
  metric,
  index,
}: InventoryCardProps) {
  return (
    <div key={index} className="bg-card rounded-lg shadow p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          {metric.title}
        </h3>
        {metric.icon}
      </div>
      <div className="flex items-end">
        <p className="text-2xl font-bold text-foreground mr-2">
          {metric.value}
        </p>
        <span
          className={`flex items-center text-sm ${
            metric.isPositive ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {metric.isPositive ? (
            <FiTrendingUp className="mr-1" />
          ) : (
            <FiTrendingDown className="mr-1" />
          )}
          {metric.change}
        </span>
      </div>
      <p className="text-xs text-muted-foreground mt-1">
        from {metric.title.includes('Month') ? 'last month' : 'last week'}
      </p>
    </div>
  );
}
