"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Package,
  Factory,
  Truck,
  LinkIcon,
  BarChart3,
  Users,
  FileText,
  Settings,
} from "lucide-react";

const sidebarItems = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "Inventory", href: "/inventory", icon: Package },
  { title: "Production", href: "/production", icon: Factory },
  { title: "Logistics", href: "/logistics", icon: Truck },
  { title: "Blockchain", href: "/blockchain", icon: LinkIcon },
  { title: "Analytics", href: "/analytics", icon: BarChart3 },
  { title: "Suppliers", href: "/suppliers", icon: Users },
  { title: "Reports", href: "/reports", icon: FileText },
  { title: "Settings", href: "/settings", icon: Settings },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col bg-white border-r">
      {/* Logo */}
      <div className="flex h-16 items-center px-6 border-b">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded bg-blue-600 flex items-center justify-center">
            <Package className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-semibold">Lumen Logistics</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-blue-50 text-blue-700 border border-blue-200"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
