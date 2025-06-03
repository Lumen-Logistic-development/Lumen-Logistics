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
    <article className="flex-1 rounded-xl bg-card shadow-md text-foreground">
      <header className="flex justify-between items-center px-6 pt-6 pb-2">
        <h3 className="text-sm font-medium leading-5 text-muted-foreground">
          {title}
        </h3>
        <div>{icon}</div>
      </header>
      <div className="px-6 pt-0 pb-6">
        <p className="text-2xl font-bold leading-8 text-foreground">{value}</p>
        <p className="text-xs leading-4 text-muted-foreground">{description}</p>
      </div>
    </article>
  );
};

export default MetricCard;
