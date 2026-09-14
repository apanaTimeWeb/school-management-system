"use client";

import React, { useState } from "react";
import VehiclesDocuments from "./transport_components/VehiclesDocuments";
import RoutesStops from "./transport_components/RoutesStops";
import AllocationAssignment from "./transport_components/AllocationAssignment";
import TransportFee from "./transport_components/TransportFee";
import GPSReports from "./transport_components/GPSReports";
import { Truck, Map, Users, IndianRupee, Navigation } from "lucide-react";
import clsx from "clsx";

const tabs = [
  { id: "vehicles", label: "Vehicles & Documents", icon: Truck },
  { id: "routes", label: "Routes & Stops", icon: Map },
  { id: "allocation", label: "Allocation & Assignment", icon: Users },
  { id: "fees", label: "Transport Fee", icon: IndianRupee },
  { id: "gps", label: "GPS & Reports", icon: Navigation },
];

export default function TransportManagementPage() {
  const [activeTab, setActiveTab] = useState("vehicles");

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10 fade-in h-[calc(100vh-100px)]">
      {/* Header & Tabs */}
      <div className="flex flex-col gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Transport Management</h1>
          <p className="text-sm text-text-secondary mt-1">Manage fleet, routes, driver assignment, student allocation, and GPS tracking.</p>
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
        {activeTab === "vehicles" && <VehiclesDocuments />}
        {activeTab === "routes" && <RoutesStops />}
        {activeTab === "allocation" && <AllocationAssignment />}
        {activeTab === "fees" && <TransportFee />}
        {activeTab === "gps" && <GPSReports />}
      </div>
    </div>
  );
}
