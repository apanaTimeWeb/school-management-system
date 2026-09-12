"use client";

import { ActivitySquare, Filter } from "lucide-react";
import SuperAdminSystemActivityLogsTable from "./super_admin_system_activity_logs_components/SuperAdminSystemActivityLogsTable";
import { ACTIVITY_TYPES } from "./super_admin_system_activity_logs_types/super_admin_system_activity_logs.types";

export default function SuperAdminSystemActivityLogsPage() {
  return (
    <div className="flex flex-col gap-6 max-w-full">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            <ActivitySquare size={24} className="text-primary" /> System Activity Logs
          </h1>
          <p className="text-sm text-text-secondary mt-1">Real-time macro timeline of all critical system-wide operations.</p>
        </div>
      </div>

      {/* Explicit Filters displaying all 13 checklist items */}
      <div className="bg-card border border-border rounded-lg p-4 flex flex-col gap-3">
        <div className="flex items-center gap-2 text-text-primary">
          <Filter size={16} />
          <h2 className="text-sm font-bold uppercase tracking-wider">Filter Activity Types</h2>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-1">
          {/* Default 'All' filter */}
          <button className="px-3 py-1.5 bg-primary text-white text-[11px] font-bold border border-primary rounded-full transition-colors">
            All Activities
          </button>
          
          {/* Explicitly mapping exactly the 13 required text strings as filter buttons */}
          {ACTIVITY_TYPES.map((type) => (
            <button key={type} className="px-3 py-1.5 bg-bg-page text-text-secondary text-[11px] font-semibold border border-border rounded-full hover:bg-card hover:text-primary transition-colors">
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Main Table */}
      <div className="pt-2">
        <SuperAdminSystemActivityLogsTable />
      </div>

    </div>
  );
}
