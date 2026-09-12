"use client";

import { ShieldAlert, GlobeLock } from "lucide-react";
import SuperAdminDeviceSessionTable from "./super_admin_device_session_components/SuperAdminDeviceSessionTable";

export default function SuperAdminDeviceSessionPage() {
  
  return (
    <div className="flex flex-col gap-6 max-w-[1200px]">
      
      {/* Header & Global Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            <GlobeLock size={24} className="text-primary" /> Logged-in devices
          </h1>
          <p className="text-sm text-text-secondary mt-1">Monitor active sessions, track IPs, and manage device security centrally.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            className="flex items-center gap-2 px-4 py-2 bg-danger text-white text-sm font-bold rounded-md hover:bg-danger/90 transition-colors shadow-sm"
            onClick={() => alert("Are you sure you want to log out all devices across the entire system?")}
          >
            <ShieldAlert size={16} />
            Logout all devices
          </button>
        </div>
      </div>

      {/* Main Content Area - Table */}
      <div className="pt-2">
        <SuperAdminDeviceSessionTable />
      </div>

    </div>
  );
}
