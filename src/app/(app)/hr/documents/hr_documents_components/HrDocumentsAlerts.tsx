"use client";

import { AlertTriangle, Clock, XCircle } from "lucide-react";
import type { DocumentAlert } from "../hr_documents_types/HrDocumentsTypes";

interface HrDocumentsAlertsProps {
  alerts: DocumentAlert[];
}

export default function HrDocumentsAlerts({ alerts }: HrDocumentsAlertsProps) {
  if (alerts.length === 0) {
    return (
      <div className="w-full p-12 flex flex-col items-center justify-center bg-card border border-border rounded-lg border-dashed motion-safe:animate-in motion-safe:fade-in">
        <span className="text-muted-foreground text-sm font-bold">No active document alerts. All clear!</span>
      </div>
    );
  }

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'Expired': return <XCircle size={24} className="text-danger" />;
      case 'Expiring Soon': return <Clock size={24} className="text-warning" />;
      case 'Missing Critical': return <AlertTriangle size={24} className="text-danger" />;
      default: return null;
    }
  };

  const getAlertBg = (type: string) => {
    switch (type) {
      case 'Expired': return 'bg-danger/10 border-danger/30';
      case 'Expiring Soon': return 'bg-warning/10 border-warning/30';
      case 'Missing Critical': return 'bg-danger/5 border-danger/30';
      default: return 'bg-card border-border';
    }
  };

  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {alerts.map(alert => (
          <div key={alert.id} className={`flex items-start gap-4 p-5 rounded-xl border shadow-sm ${getAlertBg(alert.alertType)}`}>
            <div className="mt-1 bg-card rounded-full p-2 shadow-sm border border-border/50">
              {getAlertIcon(alert.alertType)}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="text-sm font-bold text-foreground">{alert.documentName}</h3>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                  alert.alertType === 'Expiring Soon' ? 'bg-warning text-black' : 'bg-danger text-white'
                }`}>{alert.alertType}</span>
              </div>
              <p className="text-xs font-bold text-muted-foreground mt-1 mb-2">Category: {alert.category}</p>
              
              <div className="flex justify-between items-center pt-3 border-t border-black/10 dark:border-white/10">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase">Employee</span>
                  <span className="text-xs font-bold text-foreground">{alert.employeeName} ({alert.employeeId})</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase">Due / Expiry</span>
                  <span className="text-xs font-bold text-foreground">{alert.dueDate}</span>
                </div>
              </div>
              
              <div className="mt-4 flex justify-end">
                <button className="text-xs font-bold px-4 py-1.5 bg-card border border-border rounded-md hover:bg-input transition-colors shadow-sm">Notify Employee</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

