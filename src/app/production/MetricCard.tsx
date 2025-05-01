import React, { ReactNode } from "react";

interface MetricCardProps {
  title: string;
  value: string;
  description: string;
  icon: ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  description,
  icon,
}) => {
  return (
    <article className="flex-1 p-px rounded-lg border border-solid bg-zinc-950 border-zinc-800 shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
      <header className="flex justify-between items-center px-6 pt-6 pb-2">
        <h3 className="text-sm font-medium leading-5 text-neutral-50">
          {title}
        </h3>
        <div>{icon}</div>
      </header>
      <div className="px-6 pt-0 pb-6">
        <p className="text-2xl font-bold leading-8 text-neutral-50">{value}</p>
        <p className="text-xs leading-4 text-zinc-400">{description}</p>
      </div>
    </article>
  );
};

export default MetricCard;
