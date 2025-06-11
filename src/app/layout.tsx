import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "../components/organism/sideBar";
import { ThemeProvider } from "@/components/theme/theme-provider";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";
import { AppSidebar } from "@/components/app-sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lumen Logistics - Blockchain Integration",
  description:
    "Manage blockchain transactions, smart contracts, and product authenticity verification",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="min-h-screen w-full bg-background text-foreground">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen w-full bg-background text-foreground`}
      >
        <div className="flex h-screen bg-gray-50">
          <AppSidebar />
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GoogleAnalytics />
          <Sidebar />
          <div className="w-full">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
