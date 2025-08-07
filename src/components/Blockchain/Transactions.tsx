import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Transactions = () => {
  const mockTransactions = [
    {
      id: "TX-1001",
      type: "Product Authentication",
      hash: "0x1...3xLP",
      status: "Confirmed",
      timestamp: "2023-03-15 14:32",
    },
    {
      id: "TX-1002",
      type: "Inventory Transfer",
      hash: "0x0...9PLN",
      status: "Confirmed",
      timestamp: "2023-03-15 13:45",
    },
    {
      id: "TX-1003",
      type: "Smart Contract",
      hash: "0x1...2QE",
      status: "Pending",
      timestamp: "2023-03-15 11:20",
    },
    {
      id: "TX-1004",
      type: "Payment",
      hash: "0x1...7TYU",
      status: "Failed",
      timestamp: "2023-03-15 10:05",
    },
  ];
  return (
    <TabsContent value="transactions" className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>
            Complete blockchain transaction history
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Hash</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">
                    {transaction.id}
                  </TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell className="font-mono text-xs">
                    {transaction.hash}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        transaction.status === "Confirmed"
                          ? "default"
                          : transaction.status === "Pending"
                          ? "secondary"
                          : "destructive"
                      }
                    >
                      {transaction.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{transaction.timestamp}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Copy Hash</DropdownMenuItem>
                        <DropdownMenuItem>Export</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </TabsContent>
  );
};
export default Transactions;
