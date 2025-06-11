'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

const data = {
  labels,
  datasets: [
    {
      label: 'Product Authentication',
      data: [120, 150, 170, 190, 220, 260],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
    },
    {
      label: 'Inventory Transfer',
      data: [90, 100, 110, 130, 150, 170],
      borderColor: 'rgb(34, 197, 94)',
      backgroundColor: 'rgba(34, 197, 94, 0.5)',
    },
    {
      label: 'Smart Contract',
      data: [50, 60, 80, 100, 110, 120],
      borderColor: 'rgb(168, 85, 247)',
      backgroundColor: 'rgba(168, 85, 247, 0.5)',
    },
    {
      label: 'Payment',
      data: [40, 45, 50, 55, 58, 60],
      borderColor: 'rgb(239, 68, 68)',
      backgroundColor: 'rgba(239, 68, 68, 0.5)',
    },
  ],
};

interface LineChartProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LineChart({ className, ...props }: LineChartProps) {
  return (
    <div className={className} {...props}>
      <Line options={options} data={data} />
    </div>
  );
} 