// pages/index.tsx
import React from "react";

export default function Home() {
  return (
    <main className="bg-background flex flex-col p-6 space-y-6">
      <section>
        <h1 className="text-xl font-bold text-foreground">
          Supply Chain Visibility
        </h1>
        <p className="text-muted-foreground text-sm mt-1">
          Global view of your supply chain network
        </p>
      </section>

      <section className="flex flex-wrap gap-6 items-center border border-border p-3 rounded-lg">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="text-foreground text-sm">Manufacturing</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-teal-400 rounded-full"></span>
          <span className="text-foreground text-sm">Distribution</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-cyan-500 rounded-full"></span>
          <span className="text-foreground text-sm">Warehouse</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
          <span className="text-foreground text-sm">Retail</span>
        </div>
      </section>

      <section className="bg-muted rounded-lg flex-1 overflow-hidden relative">
        <div className="relative w-full h-50 flex items-center justify-center">
          <p className="text-muted-foreground">[ Interactive Map Placeholder ]</p>

          <div className="absolute top-10 left-20 flex flex-col items-center">
            <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-muted-foreground mt-1">
              Manufacturing Plant
            </span>
          </div>

          <div className="absolute top-32 left-40 flex flex-col items-center">
            <div className="w-4 h-4 bg-teal-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-muted-foreground mt-1">
              Distribution Center
            </span>
          </div>

          <div className="absolute top-52 left-24 flex flex-col items-center">
            <div className="w-4 h-4 bg-cyan-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-muted-foreground mt-1">Warehouse A</span>
          </div>

          <div className="absolute bottom-10 right-20 flex flex-col items-center">
            <div className="w-4 h-4 bg-indigo-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-muted-foreground mt-1">Retail Location</span>
          </div>
        </div>
      </section>

      <section>
        <button className="w-full border border-border text-foreground py-3 rounded-md hover:bg-accent transition">
          View Detailed Map
        </button>
      </section>
    </main>
  );
}
