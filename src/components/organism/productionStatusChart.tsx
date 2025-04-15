'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/atoms/card';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';

const data = [
  { name: 'Completed', value: 45, color: '#10B981' },
  { name: 'In Progress', value: 35, color: '#0EA5E9' },
  { name: 'Planned', value: 15, color: '#6366F1' },
  { name: 'Delayed', value: 5, color: '#F43F5E' },
];

export function ProductionStatusChart() {
  return (
    <Card className="col-span-1 bg-[#09090B] text-white border-[#27272A]">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">Production Status</CardTitle>
        <p className="text-sm ">Current production workflow status</p>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
                stroke="hsl(var(--background))"
                strokeWidth={4}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#09090B',
                  borderColor: 'border-[#27272A]',
                  borderRadius: '0.5rem',
                  boxShadow:
                    '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                }}
                formatter={(value) => [`${value}%`, 'Value']}
                itemStyle={{ color: 'text-white' }}
                labelStyle={{
                  color: 'text-white',
                  fontWeight: 'bold',
                  marginBottom: '0.25rem',
                }}
              />
              <Legend
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
                formatter={(value, entry, index) => {
                  const item = data[index];
                  return (
                    <span
                      style={{ color: 'hsl(var(--foreground))' }}
                      className="flex"
                    >
                      {value} {item.value}%
                    </span>
                  );
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
