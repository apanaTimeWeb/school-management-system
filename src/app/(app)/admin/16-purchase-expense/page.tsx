"use client";

import React, { useState } from "react";
import ProcurementCycle from "./purchase_components/ProcurementCycle";
import PurchaseEntry from "./purchase_components/PurchaseEntry";
import ExpenseManagement from "./purchase_components/ExpenseManagement";
import ExpenseReports from "./purchase_components/ExpenseReports";
import { ShoppingCart, PackageOpen, IndianRupee, BarChart2 } from "lucide-react";
import clsx from "clsx";

const tabs = [
  { id: "procurement", label: "Procurement Cycle", icon: ShoppingCart },
  { id: "purchase", label: "Purchase Entry & Bills", icon: PackageOpen },
  { id: "expenses", label: "Daily Expenses", icon: IndianRupee },
  { id: "reports", label: "Analytics & Reports", icon: BarChart2 },
];

export default function PurchaseExpensePage() {
  const [activeTab, setActiveTab] = useState("procurement");

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10 fade-in h-[calc(100vh-100px)]">
      {/* Header & Tabs */}
      <div className="flex flex-col gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Purchase & Expenses</h1>
          <p className="text-sm text-text-secondary mt-1">Manage purchase requests, vendor bills, and petty cash expenses.</p>
        </div>
        
        <div className="flex bg-card border border-border rounded-lg p-1 w-fit shadow-sm overflow-x-auto max-w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-all whitespace-nowrap",
                activeTab === tab.id 
                  ? "bg-primary text-white shadow-sm" 
                  : "text-text-secondary hover:text-text-primary hover:bg-bg-page"
              )}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto hide-scrollbar pb-6">
        {activeTab === "procurement" && <ProcurementCycle />}
        {activeTab === "purchase" && <PurchaseEntry />}
        {activeTab === "expenses" && <ExpenseManagement />}
        {activeTab === "reports" && <ExpenseReports />}
      </div>
    </div>
  );
}
