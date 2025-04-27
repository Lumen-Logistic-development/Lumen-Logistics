import React from "react";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="relative h-2 rounded-full bg-zinc-800">
      <div
        className="h-full rounded-full bg-neutral-50"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
