"use client";

import { Search, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import type { TransferRequest, TransferStatus } from "../hr_transfer_types/AdminHrTransferTypes";

interface AdminHrTransferRequestsProps {
  requests: TransferRequest[];
  reqType: string; setReqType: (s: string) => void;
  reqSearch: string; setReqSearch: (s: string) => void;
  updateStatus: (id: string, s: TransferStatus) => void;
}

export default function AdminHrTransferRequests({
  requests, reqType, setReqType, reqSearch, setReqSearch, updateStatus
}: AdminHrTransferRequestsProps) {

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'Promotion': return <span className="text-success bg-success/10 px-2 py-0.5 rounded text-xs font-bold">{type}</span>;
      case 'Demotion': return <span className="text-danger bg-danger/10 px-2 py-0.5 rounded text-xs font-bold">{type}</span>;
      default: return <span className="text-info bg-info/10 px-2 py-0.5 rounded text-xs font-bold">{type}</span>;
    }
  };

  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300">
      
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6 p-4 bg-card border border-border rounded-lg shadow-sm">
        <div className="relative w-full sm:w-64">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input type="text" placeholder="Search employee..." value={reqSearch} onChange={(e) => setReqSearch(e.target.value)} className="pl-9 pr-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none w-full" />
        </div>
        <select value={reqType} onChange={(e) => setReqType(e.target.value)} className="px-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none">
          <option value="All">All Request Types</option>
          <option value="Promotion">Promotion</option>
          <option value="Demotion">Demotion</option>
          <option value="Department Transfer">Department Transfer</option>
          <option value="Branch/Campus Transfer">Branch/Campus Transfer</option>
          <option value="Designation Change">Designation Change</option>
        </select>
      </div>

      {/* Table */}
      {requests.length === 0 ? (
         <div className="w-full p-12 flex flex-col items-center justify-center bg-card border border-border rounded-lg border-dashed">
           <span className="text-muted-foreground text-sm font-bold">No active requests found.</span>
         </div>
      ) : (
        <div className="w-full overflow-x-auto bg-card border border-border rounded-lg shadow-sm">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="border-b border-border bg-input/50">
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Employee</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Type & Effective Date</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Proposed Change</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider text-right">Approval Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map(req => (
                <tr key={req.id} className="border-b border-border hover:bg-primary/5 transition-colors group">
                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{req.employeeName}</span>
                      <span className="text-xs font-medium text-muted-foreground">{req.employeeId}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col items-start gap-1">
                      {getTypeBadge(req.type)}
                      <span className="text-xs font-bold text-muted-foreground">Effective: {req.effectiveDate}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-medium text-muted-foreground line-through decoration-danger decoration-2">{req.currentValue}</span>
                      <ArrowRight size={14} className="text-primary"/>
                      <span className="text-sm font-bold text-foreground bg-input/50 px-2 py-1 rounded border border-border">{req.proposedValue}</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-1 max-w-[250px] truncate" title={req.reason}>Reason: {req.reason}</p>
                  </td>
                  <td className="p-4 text-right">
                    {req.status === 'Pending Approval' ? (
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => updateStatus(req.id, 'Approved')} className="flex items-center gap-1 px-3 py-1.5 bg-success/10 text-success border border-success/20 rounded-md font-bold text-xs hover:bg-success hover:text-white transition-all shadow-sm">
                          <CheckCircle size={14} /> Approve
                        </button>
                        <button onClick={() => updateStatus(req.id, 'Rejected')} className="flex items-center gap-1 px-3 py-1.5 bg-danger/10 text-danger border border-danger/20 rounded-md font-bold text-xs hover:bg-danger hover:text-white transition-all shadow-sm">
                          <XCircle size={14} /> Reject
                        </button>
                      </div>
                    ) : (
                      <span className="text-xs font-bold text-success bg-success/10 px-2 py-1 rounded">Approved</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
