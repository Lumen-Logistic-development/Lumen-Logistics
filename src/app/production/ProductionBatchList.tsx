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
    <section className="p-px rounded-lg border border-solid bg-zinc-950 border-zinc-800 flex-[2] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:w-full max-sm:w-full">
      <header className="p-6">
        <h2 className="text-2xl font-semibold leading-6 text-neutral-50">
          Active Production Batches
        </h2>
        <p className="text-sm leading-5 text-zinc-400">
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
        <button className="px-0 py-2.5 text-sm font-medium leading-5 rounded-md border border-solid cursor-pointer bg-zinc-950 border-zinc-800 text-neutral-50 w-full">
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
      className={`p-4 ${!isLast ? "border-b border-solid border-b-zinc-800" : ""}`}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="px-3 py-1 text-xs font-semibold leading-4 bg-emerald-500 rounded-full text-zinc-900">
          {batch.status}
        </span>
        <h3 className="text-base font-medium leading-6 text-neutral-50">
          {batch.line}
        </h3>
        <p className="text-sm leading-5 text-zinc-400">
          Batch: {batch.batchNumber}
        </p>
      </div>
      <div className="flex justify-between mb-1">
        <p className="text-sm leading-5 text-neutral-50">
          Product: {batch.product}
        </p>
        <p className="text-sm leading-5 text-neutral-50">
          Efficiency: {batch.efficiency}
        </p>
      </div>
      <div className="mb-2">
        <p className="text-sm leading-5 text-neutral-50">
          Progress: {batch.progress}%
        </p>
        <p className="text-sm leading-5 text-neutral-50">
          {batch.units} / {batch.totalUnits} units
        </p>
        <ProgressBar progress={batch.progress} />
      </div>
    </article>
  );
};

export default ProductionBatchList;
