import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";

const Contracts = () => {
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
    <TabsContent value="contracts" className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Smart Contract Management</CardTitle>
          <CardDescription>Manage and monitor smart contracts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {mockSmartContracts.map((contract, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{contract.name}</CardTitle>
                    <Badge variant="default">{contract.status}</Badge>
                  </div>
                  <CardDescription>{contract.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Last executed: {contract.lastExecuted}</span>
                    </div>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        Execute
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};
export default Contracts;
