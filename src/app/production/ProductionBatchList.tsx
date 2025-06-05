import React from "react";
import ProgressBar from "./ProgressBar";

interface BatchData {
  status: string;
  line: string;
  batchNumber: string;
  product: string;
  efficiency: string;
  progress: number;
  units: number;
  totalUnits: number;
}

const ProductionBatchList: React.FC = () => {
  const batches: BatchData[] = [
    {
      status: "Running",
      line: "Assembly Line A",
      batchNumber: "BATCH-1042",
      product: "Product X",
      efficiency: "94%",
      progress: 64,
      units: 320,
      totalUnits: 500,
    },
    {
      status: "Running",
      line: "Packaging Line A",
      batchNumber: "BATCH-1044",
      product: "Product X Packaging",
      efficiency: "98%",
      progress: 82,
      units: 410,
      totalUnits: 500,
    },
    {
      status: "Running",
      line: "Quality Control Line",
      batchNumber: "BATCH-1046",
      product: "All Products",
      efficiency: "92%",
      progress: 74,
      units: 700,
      totalUnits: 950,
    },
  ];

  return (
    <section className="rounded-xl bg-card shadow-md text-foreground flex-[2] max-md:w-full max-sm:w-full">
      <header className="p-6">
        <h2 className="text-2xl font-semibold leading-6 text-foreground">
          Active Production Batches
        </h2>
        <p className="text-sm leading-5 text-muted-foreground">
          Currently running production batches
        </p>
      </header>

      {batches.map((batch, index) => (
        <BatchItem
          key={batch.batchNumber}
          batch={batch}
          isLast={index === batches.length - 1}
        />
      ))}

      <div className="p-6 text-center">
        <button className="px-0 py-2.5 text-sm font-medium leading-5 rounded-md border border-border cursor-pointer bg-card text-foreground w-full hover:bg-accent transition">
          View All Batches
        </button>
      </div>
    </section>
  );
};

interface BatchItemProps {
  batch: BatchData;
  isLast: boolean;
}

const BatchItem: React.FC<BatchItemProps> = ({ batch, isLast }) => {
  return (
    <article
      className={`p-4 ${!isLast ? "border-b border-solid border-border" : ""}`}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="px-3 py-1 text-xs font-semibold leading-4 bg-emerald-500 rounded-full text-zinc-900">
          {batch.status}
        </span>
        <h3 className="text-base font-medium leading-6 text-foreground">
          {batch.line}
        </h3>
        <p className="text-sm leading-5 text-muted-foreground">
          Batch: {batch.batchNumber}
        </p>
      </div>
      <div className="flex justify-between mb-1">
        <p className="text-sm leading-5 text-foreground">
          Product: {batch.product}
        </p>
        <p className="text-sm leading-5 text-foreground">
          Efficiency: {batch.efficiency}
        </p>
      </div>
      <div className="mb-2">
        <p className="text-sm leading-5 text-foreground">
          Progress: {batch.progress}%
        </p>
        <p className="text-sm leading-5 text-foreground">
          {batch.units} / {batch.totalUnits} units
        </p>
        <ProgressBar progress={batch.progress} />
      </div>
    </article>
  );
};

export default ProductionBatchList;
