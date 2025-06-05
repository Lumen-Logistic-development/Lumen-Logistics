import React from "react";

type MetricProps = {
  label: string;
  value: string;
  progress?: number;
};

const NetworkHealthIndicators: React.FC = () => {
  const Metric: React.FC<MetricProps> = ({ label, value, progress }) => (
    <div>
      <div className="flex justify-between mb-1 text-sm">
        <span className="text-white">{label}</span>
        <span className="font-medium text-gray-400">{value}</span>
      </div>
      <div className="w-full bg-gray-200 h-2 rounded-full">
        <div
          className="h-2 bg-blue-600 rounded-full"
          style={{ width: `${progress !== undefined ? progress : 10}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="bg-black p-4 rounded-xl shadow-sm">
      <h3 className="text-md font-semibold text-white">
        Network Health Indicators
      </h3>
      <p className="text-xs text-gray-500 mb-4">Various BlockChain Metrics</p>

      <div className="space-y-4">
        <Metric label="Block Height" value="15,482,198" />
        <Metric label="Transactions per Second" value="24.5" progress={80} />
        <Metric label="Average Block Time" value="5.8s" progress={60} />
      </div>
    </div>
  );
};

export default NetworkHealthIndicators;
