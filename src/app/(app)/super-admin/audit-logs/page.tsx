"use client";

import { FileText, FileSpreadsheet, FileJson, Search, Filter } from "lucide-react";
import SuperAdminAuditLogsTable from "./super_admin_audit_logs_components/SuperAdminAuditLogsTable";

export default function SuperAdminAuditLogsPage() {
  return (
    <div className="flex flex-col gap-6 max-w-full">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            <FileText size={24} className="text-primary" /> Audit Logs
          </h1>
          <p className="text-sm text-text-secondary mt-1">Immutable system-wide tracking of all important modifications.</p>
        </div>
        
        {/* Export Buttons exactly matching the checklist */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-text-secondary uppercase tracking-wider mr-2">Export</span>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-danger-bg text-danger text-xs font-bold border border-danger/20 rounded hover:bg-danger hover:text-white transition-colors">
            <FileText size={14} /> PDF
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-success-bg text-success text-xs font-bold border border-success/20 rounded hover:bg-success hover:text-white transition-colors">
            <FileSpreadsheet size={14} /> Excel
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-info-bg text-info text-xs font-bold border border-info/20 rounded hover:bg-info hover:text-white transition-colors">
            <FileJson size={14} /> CSV
          </button>
        </div>
      </div>

      {/* Filters Section exactly matching checklist */}
      <div className="bg-card border border-border rounded-lg p-4 flex flex-col gap-3">
        <div className="flex items-center gap-2 text-text-primary">
          <Filter size={16} />
          <h2 className="text-sm font-bold uppercase tracking-wider">Filters</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-text-secondary uppercase">User</label>
            <input type="text" placeholder="Search user..." className="bg-input border border-border rounded px-3 py-1.5 text-xs text-text-primary focus:border-primary outline-none" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-text-secondary uppercase">Module</label>
            <select className="bg-input border border-border rounded px-3 py-1.5 text-xs text-text-primary focus:border-primary outline-none">
              <option value="">All Modules</option>
              <option value="Security">Security</option>
              <option value="Users">Users</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-text-secondary uppercase">Action</label>
            <select className="bg-input border border-border rounded px-3 py-1.5 text-xs text-text-primary focus:border-primary outline-none">
              <option value="">All Actions</option>
              <option value="CREATE">CREATE</option>
              <option value="UPDATE">UPDATE</option>
              <option value="DELETE">DELETE</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-text-secondary uppercase">Date</label>
            <input type="date" className="bg-input border border-border rounded px-3 py-1.5 text-xs text-text-primary focus:border-primary outline-none" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-text-secondary uppercase">IP</label>
            <input type="text" placeholder="Search IP..." className="bg-input border border-border rounded px-3 py-1.5 text-xs text-text-primary focus:border-primary outline-none" />
          </div>
        </div>
      </div>

      {/* Main Table */}
      <div className="pt-2">
        <SuperAdminAuditLogsTable />
      </div>

    </div>
  );
}
