"use client";

import { Bell } from "lucide-react";

export default function SuperAdminNotificationConfig() {
  const channels = ["In-app", "Push", "SMS", "Email", "WhatsApp"];
  
  const templates = [
    "Admission", "Fee due", "Fee payment", "Attendance", 
    "Homework", "Exam", "Result", "Leave", 
    "Notice", "PTM", "Transport", "Emergency"
  ];
  
  const controls = [
    "Enable/disable channel",
    "Template",
    "Variables",
    "Sender details",
    "Schedule",
    "Delivery logs"
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col gap-8">
      
      {/* Channels Section */}
      <div className="flex flex-col gap-4">
        <h2 className="text-base font-bold text-text-primary uppercase border-b border-border pb-2">Channels</h2>
        <div className="flex flex-col gap-3 pl-2">
          {channels.map((ch, i) => (
            <label key={i} className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
              <span className="text-sm font-semibold text-text-primary">{ch}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Templates Section */}
      <div className="flex flex-col gap-4">
        <h2 className="text-base font-bold text-text-primary uppercase border-b border-border pb-2">Templates</h2>
        <div className="flex flex-col gap-3 pl-2">
          {templates.map((tpl, i) => (
            <div key={i} className="p-3 bg-bg-page border border-border rounded-md text-sm font-semibold text-text-primary">
              {tpl}
            </div>
          ))}
        </div>
      </div>

      {/* Controls Section */}
      <div className="flex flex-col gap-4">
        <h2 className="text-base font-bold text-text-primary uppercase border-b border-border pb-2">Controls</h2>
        <div className="flex flex-col gap-3 pl-2">
          {controls.map((ctrl, i) => (
            <button key={i} className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-md text-sm font-bold text-left hover:bg-primary hover:text-black transition-colors">
              {ctrl}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
