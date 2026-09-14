"use client";
import React from "react";
import { Clock, Download, CheckCircle2, Loader2 } from "lucide-react";
import { MOCK_EXPORT_HISTORY } from "../accountant_export_utils/AccountantExportConstants";
import clsx from "clsx";

export default function AccountantExportHistory() {
  
  const getFormatColor = (format: string) => {
    switch(format) {
      case 'PDF': return 'text-danger bg-danger/10';
      case 'Excel': return 'text-success bg-success/10';
      case 'CSV': return 'text-primary bg-primary/10';
      default: return 'text-text-secondary bg-bg-page';
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-2 border-b border-border pb-4 mb-4">
        <Clock size={18} className="text-text-secondary" />
        <h2 className="text-base font-bold text-text-primary">Recent Exports (Audit Log)</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] uppercase text-text-secondary font-semibold">
              <th className="p-3 w-40">Timestamp</th>
              <th className="p-3">Report Details</th>
              <th className="p-3 w-24 text-center">Format</th>
              <th className="p-3 w-32 text-center">Status</th>
              <th className="p-3 w-24 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_EXPORT_HISTORY.map((record) => (
              <tr key={record.id} className="border-b border-border/50 hover:bg-bg-input transition-colors">
                <td className="p-3 text-xs font-semibold text-text-secondary">
                  {record.timestamp}
                  <div className="text-[10px] text-text-secondary/70 mt-0.5">{record.requestedBy}</div>
                </td>
                <td className="p-3">
                  <div className="text-sm font-bold text-text-primary">{record.reportName}</div>
                  <div className="text-[11px] text-text-secondary mt-1 truncate max-w-md" title={record.filtersUsed}>
                    Filters: {record.filtersUsed}
                  </div>
                </td>
                <td className="p-3 text-center">
                  <span className={clsx("px-2 py-1 rounded text-[10px] font-black uppercase", getFormatColor(record.format))}>
                    {record.format}
                  </span>
                </td>
                <td className="p-3 text-center">
                  {record.status === 'Completed' ? (
                    <span className="flex items-center justify-center gap-1.5 text-xs font-bold text-success">
                      <CheckCircle2 size={14} /> Ready ({record.fileSize})
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-1.5 text-xs font-bold text-warning">
                      <Loader2 size={14} className="animate-spin" /> Processing
                    </span>
                  )}
                </td>
                <td className="p-3 text-center">
                  {record.status === 'Completed' && (
                    <button className="p-2 bg-primary/10 text-primary hover:bg-primary hover:text-black rounded-lg transition-colors inline-flex items-center justify-center">
                      <Download size={16} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
