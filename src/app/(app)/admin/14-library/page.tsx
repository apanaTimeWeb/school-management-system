"use client";

import React, { useState } from "react";
import CatalogManagement from "./library_components/CatalogManagement";
import CirculationDesk from "./library_components/CirculationDesk";
import MembersReservations from "./library_components/MembersReservations";
import LibraryInventory from "./library_components/LibraryInventory";
import { Book, ArrowRightLeft, Users, AlertTriangle } from "lucide-react";
import clsx from "clsx";

const tabs = [
  { id: "catalog", label: "Catalog Management", icon: Book },
  { id: "circulation", label: "Circulation Desk", icon: ArrowRightLeft },
  { id: "members", label: "Members & Reservations", icon: Users },
  { id: "inventory", label: "Inventory & Reports", icon: AlertTriangle },
];

export default function LibraryManagementPage() {
  const [activeTab, setActiveTab] = useState("catalog");

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10 fade-in h-[calc(100vh-100px)]">
      {/* Header & Tabs */}
      <div className="flex flex-col gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Library Management</h1>
          <p className="text-sm text-text-secondary mt-1">Manage books, barcodes, issue/return circulation, and members.</p>
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
        {activeTab === "catalog" && <CatalogManagement />}
        {activeTab === "circulation" && <CirculationDesk />}
        {activeTab === "members" && <MembersReservations />}
        {activeTab === "inventory" && <LibraryInventory />}
      </div>
    </div>
  );
}
