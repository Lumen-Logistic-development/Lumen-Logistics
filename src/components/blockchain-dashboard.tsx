"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { MoreHorizontal, FileText, Clock, CheckCircle } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Mock data for the blockchain dashboard
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

// Chart data for transaction volume
const transactionVolumeData = [
  {
    month: "Jan",
    "Product Authentication": 130,
    "Inventory Transfer": 95,
    "Smart Contract": 65,
    Payment: 45,
  },
  {
    month: "Feb",
    "Product Authentication": 145,
    "Inventory Transfer": 105,
    "Smart Contract": 75,
    Payment: 50,
  },
  {
    month: "Mar",
    "Product Authentication": 165,
    "Inventory Transfer": 125,
    "Smart Contract": 85,
    Payment: 55,
  },
  {
    month: "Apr",
    "Product Authentication": 185,
    "Inventory Transfer": 145,
    "Smart Contract": 105,
    Payment: 58,
  },
  {
    month: "May",
    "Product Authentication": 215,
    "Inventory Transfer": 155,
    "Smart Contract": 115,
    Payment: 60,
  },
  {
    month: "Jun",
    "Product Authentication": 255,
    "Inventory Transfer": 175,
    "Smart Contract": 130,
    Payment: 65,
  },
];

// Chart data for verification status
const verificationStatusData = [
  { name: "Verified", value: 86, color: "#10b981" },
  { name: "Pending", value: 13, color: "#3b82f6" },
  { name: "Failed", value: 2, color: "#ef4444" },
];

export function BlockchainDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Blockchain Integration
        </h1>
        <p className="text-muted-foreground">
          Manage blockchain transactions, smart contracts, and product
          authenticity verification
        </p>
      </div>

      {/* Tabs */}
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-6"
      >
        <TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="contracts">Smart Contracts</TabsTrigger>
          <TabsTrigger value="verification">Verification</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Statistics Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Transactions
                </CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,482</div>
                <p className="text-xs text-muted-foreground">
                  Across all transaction types
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Smart Contracts
                </CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">
                  Out of 4 total contracts
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Verified Products</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">842</div>
                <p className="text-xs text-muted-foreground">
                  Products verified on blockchain
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Network Status</CardTitle>
                <div className="h-2 w-2 rounded-full bg-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">Healthy</div>
                <p className="text-xs text-muted-foreground">
                  All systems operational
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Transaction Volume</CardTitle>
                <CardDescription>Blockchain transaction volume over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={transactionVolumeData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: "#666" }}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: "#666" }}
                        domain={[0, 260]}
                        ticks={[0, 65, 130, 195, 260]}
                      />
                      <Line
                        type="monotone"
                        dataKey="Product Authentication"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: "#3b82f6", strokeWidth: 2 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="Inventory Transfer"
                        stroke="#10b981"
                        strokeWidth={2}
                        dot={{ fill: "#10b981", strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: "#10b981", strokeWidth: 2 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="Smart Contract"
                        stroke="#8b5cf6"
                        strokeWidth={2}
                        dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: "#8b5cf6", strokeWidth: 2 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="Payment"
                        stroke="#ef4444"
                        strokeWidth={2}
                        dot={{ fill: "#ef4444", strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: "#ef4444", strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                {/* Custom Legend */}
                <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-0.5 bg-blue-500"></div>
                    <span className="text-blue-500">Product Authentication</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-0.5 bg-green-500"></div>
                    <span className="text-green-500">Inventory Transfer</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-0.5 bg-purple-500"></div>
                    <span className="text-purple-500">Smart Contract</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-0.5 bg-red-500"></div>
                    <span className="text-red-500">Payment</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Verification Status</CardTitle>
                <CardDescription>Status of blockchain verifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={verificationStatusData}
                        cx="50%"
                        cy="45%"
                        labelLine={false}
                        outerRadius={80}
                        innerRadius={50}
                        fill="#8884d8"
                        dataKey="value"
                        startAngle={90}
                        endAngle={450}
                      >
                        {verificationStatusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>

                  {/* Static positioned labels around the chart */}
                  <div className="absolute top-16 left-8">
                    <span className="text-sm font-medium text-green-600">
                      Verified 86%
                    </span>
                  </div>

                  <div className="absolute top-32 right-12">
                    <span className="text-sm font-medium text-red-500">
                      Failed 2%
                    </span>
                  </div>

                  <div className="absolute bottom-20 right-8">
                    <span className="text-sm font-medium text-blue-500">
                      Pending 13%
                    </span>
                  </div>
                </div>

                {/* Manual Legend */}
                <div className="flex justify-center space-x-6 mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-sm text-gray-600">Verified</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                    <span className="text-sm text-gray-600">Pending</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="text-sm text-gray-600">Failed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Transactions and Smart Contracts */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Recent Transactions */}
            <div className="space-y-4 overflow-x-auto col-span-12 md:col-span-8 bg-white border rounded-lg p-6" style={{ minWidth: 0 }}>
              <div>
                <h3 className="text-lg font-semibold">Recent Transactions</h3>
                <p className="text-sm text-muted-foreground">Latest blockchain transactions</p>
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
                      <TableRow key={transaction.id} className="border-b last:border-b-0">
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

            {/* Smart Contracts */}
            <div className="space-y-4 col-span-12 md:col-span-4 md:pl-2 bg-white border rounded-lg p-6">
              <div>
                <h3 className="text-lg font-semibold">Smart Contracts</h3>
                <p className="text-sm text-muted-foreground">
                  Active smart contracts
                </p>
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
          </div>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
              <CardDescription>Complete blockchain transaction history</CardDescription>
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
                      <TableCell className="font-medium">{transaction.id}</TableCell>
                      <TableCell>{transaction.type}</TableCell>
                      <TableCell className="font-mono text-xs">{transaction.hash}</TableCell>
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

        <TabsContent value="verification" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Verification</CardTitle>
              <CardDescription>
                Blockchain-based product authenticity verification
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Verified Products</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-600">842</div>
                    <p className="text-sm text-muted-foreground">
                      Successfully verified
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Pending Verification</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-blue-600">127</div>
                    <p className="text-sm text-muted-foreground">
                      Awaiting verification
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Failed Verification</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-red-600">18</div>
                    <p className="text-sm text-muted-foreground">
                      Verification failed
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
