import React from "react";
import HRSidebar from "@/components/layout/HRSidebar";
import HRHeader from "@/components/layout/HRHeader";

export default function HRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-bg-page">
      {/* Sidebar Component */}
      <HRSidebar />

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col h-full relative lg:ml-64 w-full">
        {/* Top Header */}
        <HRHeader />

        {/* Scrollable Page Content */}
        <main className="flex-1 overflow-y-auto w-full custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}
