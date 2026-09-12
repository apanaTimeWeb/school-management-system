"use client";

import { useState } from "react";
import { Plus, FastForward } from "lucide-react";
import SuperAdminSessionsTable from "./super_admin_sessions_components/SuperAdminSessionsTable";
import SuperAdminSessionDrawer from "./super_admin_sessions_components/SuperAdminSessionDrawer";
import SuperAdminRolloverDrawer from "./super_admin_sessions_components/SuperAdminRolloverDrawer";

export default function SuperAdminSessionsPage() {
  const [isSessionDrawerOpen, setIsSessionDrawerOpen] = useState(false);
  const [isRolloverDrawerOpen, setIsRolloverDrawerOpen] = useState(false);

  return (
    <div className="flex flex-col gap-8 max-w-[1200px]">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary">Academic Session Management</h1>
          <p className="text-sm text-text-secondary mt-1">Master control for current, past, and upcoming academic years.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsRolloverDrawerOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-bg-page border border-border text-text-primary text-sm font-medium rounded-md hover:border-primary hover:text-primary transition-colors"
          >
            <FastForward size={16} />
            Session Rollover
          </button>
          <button 
            onClick={() => setIsSessionDrawerOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary-hover transition-colors shadow-sm"
          >
            <Plus size={16} />
            Add Session
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-text-primary">Session Directory</h2>
        </div>
        <SuperAdminSessionsTable />
      </div>

      {/* Modals / Drawers */}
      <SuperAdminSessionDrawer 
        isOpen={isSessionDrawerOpen} 
        onClose={() => setIsSessionDrawerOpen(false)} 
      />
      
      <SuperAdminRolloverDrawer 
        isOpen={isRolloverDrawerOpen} 
        onClose={() => setIsRolloverDrawerOpen(false)} 
      />

    </div>
  );
}
