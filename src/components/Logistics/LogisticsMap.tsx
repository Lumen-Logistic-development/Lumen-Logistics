const LogisticsMap = () => {
  return (
    <div className="flex-1 lg:flex-[2] border border-[#e2e8f0] rounded-[8px] p-6 min-h-[488px] max-w-[822px]">
      <div className="pb-6">
        <h1 className="text-[24px] font-semibold text-[#020817]">
          Logistics Map
        </h1>
        <p className="text-[14px] font-normal text-[#64748b]">
          Real-time view of active shipments
        </p>
      </div>
      <div className="w-full h-[298px] bg-gray-300 rounded-[6px]"></div>
      <div className="pt-6">
        <button className="w-full h-[40px] border border-[#e2e8f0] text-[14px] font-medium text-[#020817] rounded-[6px]">
          View Detailed Map
        </button>
      </div>
    </div>
  );
};
export default LogisticsMap;
