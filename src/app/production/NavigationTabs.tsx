import React from "react";

const NavigationTabs: React.FC = () => {
  const tabs = [
    "Overview",
    "Production Lines",
    "Quality Control",
    "Maintenance",
  ];

  return (
    <nav className="flex gap-4 mb-6 max-sm:hidden">
      {tabs.map((tab) => (
        <button
          key={tab}
          className="px-3 py-1.5 text-sm font-medium leading-5 rounded cursor-pointer bg-muted text-muted-foreground"
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

export default NavigationTabs;
