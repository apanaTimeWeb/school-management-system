"use client";
import React from "react";
import { BellRing, FileText } from "lucide-react";
import { MOCK_DEFAULTERS, formatCurrency } from "../accountant_defaulters_utils/AccountantDefaultersConstants";
import { useAccountantDefaultersStore } from "../accountant_defaulters_store/useAccountantDefaultersStore";
import clsx from "clsx";

export default function AccountantDefaultersTable() {
  const { 
    searchQuery, classFilter, sectionFilter, agingFilter, 
    setSelectedDefaulter, setReminderModalOpen, setFollowUpModalOpen 
  } = useAccountantDefaultersStore();

  const filteredData = MOCK_DEFAULTERS.filter(d => {
    const matchesSearch = d.studentName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          d.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesClass = classFilter === "All" || d.classSection.includes(classFilter);
    const matchesSection = sectionFilter === "All" || d.classSection.includes(` ${sectionFilter}`);
    
    let matchesAging = true;
    if (agingFilter === "1-30") matchesAging = d.overdueDays >= 1 && d.overdueDays <= 30;
    else if (agingFilter === "31-60") matchesAging = d.overdueDays >= 31 && d.overdueDays <= 60;
    else if (agingFilter === "61-90") matchesAging = d.overdueDays >= 61 && d.overdueDays <= 90;
    else if (agingFilter === "90+") matchesAging = d.overdueDays > 90;

    return matchesSearch && matchesClass && matchesSection && matchesAging;
  });

  const getReminderBadge = (status: string) => {
    switch (status) {
      case 'Sent': return 'text-success bg-success/10 border-success/20';
      case 'Pending': return 'text-warning bg-warning/10 border-warning/20';
      case 'Failed': return 'text-danger bg-danger/10 border-danger/20';
      default: return 'text-text-secondary bg-bg-page';
    }
  };

  const openReminder = (defaulter: any) => {
    setSelectedDefaulter(defaulter);
    setReminderModalOpen(true);
  };

  const openFollowUp = (defaulter: any) => {
    setSelectedDefaulter(defaulter);
    setFollowUpModalOpen(true);
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col flex-1 h-full">
      <div className="overflow-x-auto w-full flex-1">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] uppercase text-text-secondary font-semibold">
              <th className="p-4 w-48">Student Info</th>
              <th className="p-4 w-28">Due Date</th>
              <th className="p-4 w-28 text-center">Overdue Days</th>
              <th className="p-4 w-32 text-right">Outstanding</th>
              <th className="p-4 w-32 text-center">Reminder</th>
              <th className="p-4 w-40">Follow-up Status</th>
              <th className="p-4 w-24 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((d, index) => (
              <tr 
                key={d.id} 
                className={clsx(
                  "border-b border-border/50 hover:bg-bg-input transition-colors group",
                  index % 2 === 0 ? "bg-transparent" : "bg-bg-page/30"
                )}
              >
                <td className="p-4">
                  <div className="text-sm font-semibold text-text-primary">{d.studentName}</div>
                  <div className="text-[11px] text-text-secondary">{d.classSection} | {d.id}</div>
                </td>
                <td className="p-4 text-xs font-semibold text-text-primary">{d.dueDate}</td>
                <td className="p-4 text-center">
                  <span className={clsx(
                    "text-xs font-black",
                    d.overdueDays > 90 ? "text-red-600" : d.overdueDays > 60 ? "text-danger" : d.overdueDays > 30 ? "text-danger/80" : "text-warning"
                  )}>
                    {d.overdueDays} Days
                  </span>
                </td>
                <td className="p-4 text-sm font-bold text-danger text-right">
                  {formatCurrency(d.outstandingAmount)}
                </td>
                <td className="p-4 text-center">
                  <span className={clsx("px-2.5 py-0.5 rounded-full text-[10px] font-bold border block w-max mx-auto", getReminderBadge(d.reminderStatus))}>
                    {d.reminderStatus}
                  </span>
                  {d.lastReminderDate && <div className="text-[9px] text-text-secondary mt-1">{d.lastReminderDate}</div>}
                </td>
                <td className="p-4 text-xs">
                  <div className={clsx("font-semibold mb-0.5", 
                    d.followUpStatus === 'Not Contacted' ? 'text-warning' : 
                    d.followUpStatus === 'Promised to Pay' ? 'text-info' : 
                    d.followUpStatus === 'Unreachable' ? 'text-text-secondary' : 'text-danger'
                  )}>
                    {d.followUpStatus}
                  </div>
                  {d.lastFollowUpNote && <div className="text-[10px] text-text-secondary truncate max-w-[150px]" title={d.lastFollowUpNote}>{d.lastFollowUpNote}</div>}
                </td>
                <td className="p-4 text-center">
                  <div className="flex justify-center gap-2">
                    <button 
                      onClick={() => openReminder(d)}
                      title="Send Reminder"
                      className="text-text-secondary hover:text-primary transition-colors p-1"
                    >
                      <BellRing size={16} />
                    </button>
                    <button 
                      onClick={() => openFollowUp(d)}
                      title="Log Follow-up"
                      className="text-text-secondary hover:text-primary transition-colors p-1"
                    >
                      <FileText size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={7} className="p-8 text-center text-text-secondary text-sm">
                  No defaulters found matching the selected criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      <div className="p-4 border-t border-border flex justify-between items-center text-xs text-text-secondary bg-bg-page shrink-0">
        <span>Showing {filteredData.length} defaulters</span>
      </div>
    </div>
  );
}
