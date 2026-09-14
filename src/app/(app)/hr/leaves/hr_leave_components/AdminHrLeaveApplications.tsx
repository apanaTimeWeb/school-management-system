"use client";

import { useState } from "react";
import { Check, X, Search, Paperclip } from "lucide-react";
import type { LeaveApplication } from "../hr_leave_types/AdminHrLeaveTypes";
import AdminHrLeaveActionModal from "./AdminHrLeaveActionModal";

interface AdminHrLeaveApplicationsProps {
  applications: LeaveApplication[];
  appStatus: string; setAppStatus: (s: string) => void;
  appType: string; setAppType: (s: string) => void;
  appSearch: string; setAppSearch: (s: string) => void;
  approve: (id: string, remarks?: string) => void;
  reject: (id: string, remarks?: string) => void;
}

export default function AdminHrLeaveApplications({
  applications, appStatus, setAppStatus, appType, setAppType, appSearch, setAppSearch, approve, reject
}: AdminHrLeaveApplicationsProps) {

  const [selectedApp, setSelectedApp] = useState<LeaveApplication | null>(null);
  const [modalAction, setModalAction] = useState<'Approve' | 'Reject' | null>(null);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Approved': return <span className="bg-success/10 text-success border border-success/20 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase">Approved</span>;
      case 'Rejected': return <span className="bg-danger/10 text-danger border border-danger/20 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase">Rejected</span>;
      default: return <span className="bg-warning/10 text-warning border border-warning/20 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase">Pending</span>;
    }
  };

  const handleActionConfirm = (id: string, action: 'Approve' | 'Reject', remarks: string) => {
    if (action === 'Approve') approve(id, remarks);
    if (action === 'Reject') reject(id, remarks);
    setSelectedApp(null);
    setModalAction(null);
  };

  return (
    <>
      <div className="motion-safe:animate-in motion-safe:fade-in duration-300">
        
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6 p-4 bg-card border border-border rounded-lg shadow-sm">
          <div className="relative w-full sm:w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input type="text" placeholder="Search employee..." value={appSearch} onChange={(e) => setAppSearch(e.target.value)} className="pl-9 pr-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none w-full" />
          </div>
          <select value={appStatus} onChange={(e) => setAppStatus(e.target.value)} className="px-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none">
            <option value="All">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
          <select value={appType} onChange={(e) => setAppType(e.target.value)} className="px-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none">
            <option value="All">All Staff & Teachers</option>
            <option value="Teacher">Teachers Only</option>
            <option value="Staff">Staff Only</option>
          </select>
        </div>

        {/* Table */}
        {applications.length === 0 ? (
           <div className="w-full p-12 flex flex-col items-center justify-center bg-card border border-border rounded-lg border-dashed">
             <span className="text-muted-foreground text-sm font-bold">No leave applications found.</span>
           </div>
        ) : (
          <div className="w-full overflow-x-auto bg-card border border-border rounded-lg shadow-sm">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead>
                <tr className="border-b border-border bg-input/50">
                  <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Employee</th>
                  <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Leave Details</th>
                  <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Duration</th>
                  <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Status</th>
                  <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {applications.map(app => (
                  <tr key={app.id} className="border-b border-border hover:bg-primary/5 transition-colors group">
                    <td className="p-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{app.employeeName}</span>
                        <span className="text-xs font-medium text-muted-foreground">{app.employeeId} • {app.employeeType}</span>
                      </div>
                    </td>
                    <td className="p-4 max-w-[250px]">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-foreground">{app.leaveType}</span>
                        <span className="text-xs text-muted-foreground truncate" title={app.reason}>{app.reason}</span>
                        {app.attachmentUrl && <span className="flex items-center gap-1 text-xs font-bold text-info mt-1 cursor-pointer hover:underline"><Paperclip size={12}/> View Proof</span>}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-foreground">{app.days} Days</span>
                        <span className="text-xs font-bold text-muted-foreground">{app.startDate} to {app.endDate}</span>
                      </div>
                    </td>
                    <td className="p-4">{getStatusBadge(app.status)}</td>
                    <td className="p-4 text-right">
                      {app.status === 'Pending' ? (
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button 
                            onClick={() => { setSelectedApp(app); setModalAction('Approve'); }} 
                            className="flex items-center gap-1 px-3 py-1.5 bg-success/10 text-success border border-success/20 rounded-md font-bold text-xs hover:bg-success hover:text-white transition-all active:scale-95 shadow-sm"
                          >
                            <Check size={14} /> Approve
                          </button>
                          <button 
                            onClick={() => { setSelectedApp(app); setModalAction('Reject'); }} 
                            className="flex items-center gap-1 px-3 py-1.5 bg-danger/10 text-danger border border-danger/20 rounded-md font-bold text-xs hover:bg-danger hover:text-white transition-all active:scale-95 shadow-sm"
                          >
                            <X size={14} /> Reject
                          </button>
                        </div>
                      ) : (
                         <span className="text-xs font-bold text-muted-foreground italic">— Processed —</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <AdminHrLeaveActionModal
        isOpen={!!selectedApp && !!modalAction}
        onClose={() => { setSelectedApp(null); setModalAction(null); }}
        application={selectedApp}
        action={modalAction}
        onConfirm={handleActionConfirm}
      />
    </>
  );
}
