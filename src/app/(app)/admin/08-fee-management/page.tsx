"use client";

import React, { useState } from "react";
import FeeConfiguration from "./fee_management_components/FeeConfiguration";
import FeeCollection from "./fee_management_components/FeeCollection";
import DiscountsRefunds from "./fee_management_components/DiscountsRefunds";
import ReceiptsInvoices from "./fee_management_components/ReceiptsInvoices";
import DefaultersReports from "./fee_management_components/DefaultersReports";
import { Settings, IndianRupee, Percent, Receipt, AlertTriangle } from "lucide-react";
import clsx from "clsx";

const tabs = [
  { id: "config", label: "Fee Configuration", icon: Settings },
  { id: "collection", label: "Fee Collection", icon: IndianRupee },
  { id: "discounts", label: "Discounts & Refunds", icon: Percent },
  { id: "receipts", label: "Receipts & History", icon: Receipt },
  { id: "defaulters", label: "Defaulters & Reports", icon: AlertTriangle },
];

export default function FeeManagementPage() {
  const [activeTab, setActiveTab] = useState("config");

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10 fade-in h-[calc(100vh-100px)]">
      {/* Header & Tabs */}
      <div className="flex flex-col gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Fee Management</h1>
          <p className="text-sm text-text-secondary mt-1">Configure fee structures, process payments, manage discounts, and track defaulters.</p>
        </div>
        
        <div className="flex bg-card border border-border rounded-lg p-1 w-fit shadow-sm overflow-x-auto max-w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-all whitespace-nowrap",
                activeTab === tab.id 
                  ? "bg-primary text-black shadow-sm" 
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
        {activeTab === "config" && <FeeConfiguration />}
        {activeTab === "collection" && <FeeCollection />}
        {activeTab === "discounts" && <DiscountsRefunds />}
        {activeTab === "receipts" && <ReceiptsInvoices />}
        {activeTab === "defaulters" && <DefaultersReports />}
      </div>
    </div>
  );
}
