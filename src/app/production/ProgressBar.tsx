import React from "react";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="relative h-2 rounded-full bg-muted">
      <div
        className="h-full rounded-full bg-foreground"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
