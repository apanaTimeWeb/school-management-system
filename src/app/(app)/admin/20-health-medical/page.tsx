"use client";

import React, { useState } from "react";
import MedicalProfile from "./medical_components/MedicalProfile";
import HealthCheckups from "./medical_components/HealthCheckups";
import FirstAidIncidents from "./medical_components/FirstAidIncidents";
import HealthReports from "./medical_components/HealthReports";
import { HeartPulse, Stethoscope, Ambulance, Activity } from "lucide-react";
import clsx from "clsx";

const tabs = [
  { id: "profile", label: "Medical Profiles", icon: HeartPulse },
  { id: "checkups", label: "Health Checkups", icon: Stethoscope },
  { id: "incidents", label: "Medical Incidents", icon: Ambulance },
  { id: "reports", label: "Health Reports", icon: Activity },
];

export default function HealthMedicalPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10 fade-in h-[calc(100vh-100px)]">
      {/* Header & Tabs */}
      <div className="flex flex-col gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Health & Medical</h1>
          <p className="text-sm text-text-secondary mt-1">Manage student medical records, checkups, and first aid incidents.</p>
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
        {activeTab === "profile" && <MedicalProfile />}
        {activeTab === "checkups" && <HealthCheckups />}
        {activeTab === "incidents" && <FirstAidIncidents />}
        {activeTab === "reports" && <HealthReports />}
      </div>
    </div>
  );
}
