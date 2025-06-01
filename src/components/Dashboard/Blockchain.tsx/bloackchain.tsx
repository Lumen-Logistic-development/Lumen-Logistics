import React from "react";
import BlockChainTopCards from "./BlockChainStatCards";
import SmartContractStatus from "./SmartContractStatus";
import NetworkHealthIndicators from "./NetworkHealthIndicator";
import VerificationQueue from "./VerificationQueue";
import SectionCard from "./StartCards";



export default function BlockChain() {
  return (
    <div className=" min-h-screen bg-[#121212]">
      {/* Summary Cards */}

      <BlockChainTopCards />

      {/* Trends & Recent Transactions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <SectionCard
          title="Transaction Volume Trends"
          content="Transaction Volume Chart Here"
          sub="Track transaction volume over time"
        />
        <SectionCard
          title="Recent Transactions"
          content="Recent Transactions Table Here"
          buttonText="View All Transactions"
          sub="Latest transactions on the blockchain"
        />
      </div>

      {/* Bottom Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <SmartContractStatus />
        <NetworkHealthIndicators />
        <VerificationQueue />
      </div>
    </div>
  );
}




