import { Badge } from "@/components/ui/badge";
import { FileText, Clock } from "lucide-react";

const SmartContracts = () => {
  const mockSmartContracts = [
    {
      name: "Inventory Transfer",
      status: "Active",
      description: "Automates inventory transfers between locations",
      lastExecuted: "2023-03-15 13:45",
    },
    {
      name: "Quality Verification",
      status: "Active",
      description: "Verifies quality control checks for products",
      lastExecuted: "2023-03-15 14:32",
    },
    {
      name: "Payment Processing",
      status: "Active",
      description: "Processes payments upon delivery confirmation",
      lastExecuted: "2023-03-14 09:15",
    },
  ];
  return (
    <div className="space-y-4 col-span-12 md:col-span-4 md:pl-2 bg-white border rounded-lg p-6">
      <div>
        <h3 className="text-lg font-semibold">Smart Contracts</h3>
        <p className="text-sm text-muted-foreground">Active smart contracts</p>
      </div>

      <div className="space-y-3">
        {mockSmartContracts.map((contract, index) => (
          <div key={index} className="border rounded-lg p-4 space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4 text-blue-600" />
                <span className="font-medium text-sm">{contract.name}</span>
              </div>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                {contract.status}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              {contract.description}
            </p>
            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>Last executed: {contract.lastExecuted}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SmartContracts;
