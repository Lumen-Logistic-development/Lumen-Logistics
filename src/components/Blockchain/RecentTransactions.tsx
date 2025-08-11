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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

const RecentTransactions = () => {
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
    <div
      className="space-y-4 h-fit overflow-x-auto col-span-12 md:col-span-8 bg-white border rounded-lg p-6"
      style={{ minWidth: 0 }}
    >
      <div>
        <h3 className="text-lg font-semibold">Recent Transactions</h3>
        <p className="text-sm text-muted-foreground">
          Latest blockchain transactions
        </p>
      </div>
      <div className="min-w-[600px] md:min-w-0">
        <Table>
          <TableHeader>
            <TableRow className="border-b">
              <TableHead className="text-xs font-medium text-muted-foreground">
                ID
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">
                Type
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">
                Hash
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">
                Status
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">
                Timestamp
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockTransactions.map((transaction) => (
              <TableRow
                key={transaction.id}
                className="border-b last:border-b-0"
              >
                <TableCell className="font-medium text-sm">
                  {transaction.id}
                </TableCell>
                <TableCell className="text-sm">{transaction.type}</TableCell>
                <TableCell className="font-mono text-xs text-muted-foreground">
                  {transaction.hash}
                </TableCell>
                <TableCell>
                  <Badge
                    className={
                      transaction.status === "Confirmed"
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : transaction.status === "Pending"
                        ? "bg-orange-100 text-orange-800 hover:bg-orange-100"
                        : "bg-red-100 text-red-800 hover:bg-red-100"
                    }
                  >
                    {transaction.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {transaction.timestamp}
                </TableCell>
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
      </div>
    </div>
  );
};
export default RecentTransactions;
