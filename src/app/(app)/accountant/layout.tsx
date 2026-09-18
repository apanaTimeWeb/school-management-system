import React from "react";
import AccountantSidebar from "@/components/layout/AccountantSidebar";
import AccountantHeader from "@/components/layout/AccountantHeader";

export default function AccountantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-[#F8FAFC]">
      {/* Sidebar Component */}
      <AccountantSidebar />

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col h-full relative lg:ml-64 w-full">
        {/* Top Header */}
        <AccountantHeader />

        {/* Scrollable Page Content */}
        <main className="flex-1 overflow-y-auto w-full custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}
