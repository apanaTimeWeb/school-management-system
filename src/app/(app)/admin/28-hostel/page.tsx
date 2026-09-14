"use client";

import React, { useState } from "react";
import { Bed, Users, IndianRupee, ClipboardCheck } from "lucide-react";
import clsx from "clsx";

const tabs = [
  { id: "rooms", label: "Rooms & Beds", icon: Bed },
  { id: "allocation", label: "Student Allocation", icon: Users },
  { id: "fees", label: "Hostel Fees", icon: IndianRupee },
  { id: "attendance", label: "Hostel Attendance", icon: ClipboardCheck },
];

export default function HostelManagementPage() {
  const [activeTab, setActiveTab] = useState("rooms");

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10 fade-in h-[calc(100vh-100px)]">
      <div className="flex flex-col gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Hostel & Dormitory</h1>
          <p className="text-sm text-text-secondary mt-1">Manage hostel rooms, student allocations, and mess/hostel fees.</p>
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

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 flex flex-col items-center justify-center text-center opacity-70">
         <Bed size={64} className="text-primary mb-4"/>
         <h3 className="text-lg font-bold">Hostel Module Configuration</h3>
         <p className="text-sm font-semibold text-text-secondary mt-2 max-w-md">
           This module is currently in setup mode. Please define the Hostel Blocks and Wardens in the Settings before allocating students to beds.
         </p>
         <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold shadow-sm hover:bg-primary-hover mt-6">
           Configure Hostel Settings
         </button>
      </div>
    </div>
  );
}
