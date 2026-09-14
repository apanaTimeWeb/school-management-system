"use client";

import React, { useState } from "react";
import InventoryCatalog from "./inventory_components/InventoryCatalog";
import StockManagement from "./inventory_components/StockManagement";
import AssetManagement from "./inventory_components/AssetManagement";
import VendorsPurchases from "./inventory_components/VendorsPurchases";
import { Package, RefreshCcw, Monitor, Store } from "lucide-react";
import clsx from "clsx";

const tabs = [
  { id: "inventory", label: "Inventory Catalog", icon: Package },
  { id: "stock", label: "Stock Management", icon: RefreshCcw },
  { id: "assets", label: "Asset Management", icon: Monitor },
  { id: "vendors", label: "Vendors & Purchases", icon: Store },
];

export default function InventoryAssetsPage() {
  const [activeTab, setActiveTab] = useState("inventory");

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10 fade-in h-[calc(100vh-100px)]">
      {/* Header & Tabs */}
      <div className="flex flex-col gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Inventory & Assets</h1>
          <p className="text-sm text-text-secondary mt-1">Manage consumable stock, fixed assets, vendors, and purchases.</p>
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
        {activeTab === "inventory" && <InventoryCatalog />}
        {activeTab === "stock" && <StockManagement />}
        {activeTab === "assets" && <AssetManagement />}
        {activeTab === "vendors" && <VendorsPurchases />}
      </div>
    </div>
  );
}
