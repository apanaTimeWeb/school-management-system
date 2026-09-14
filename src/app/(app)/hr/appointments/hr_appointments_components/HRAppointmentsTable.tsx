"use client";
import React from "react";
import { Download, FileText, Send } from "lucide-react";
import { useHRAppointmentsStore } from "../hr_appointments_store/useHRAppointmentsStore";
import clsx from "clsx";

export default function HRAppointmentsTable() {
  const { lettersData, searchQuery, typeFilter, statusFilter } = useHRAppointmentsStore();

  const filteredData = lettersData.filter(letter => {
    const matchesSearch = letter.recipientName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          letter.recipientRole.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = typeFilter === "All" || letter.letterType === typeFilter;
    const matchesStatus = statusFilter === "All" || letter.status === statusFilter;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Signed': return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'Draft': return 'text-amber-700 bg-amber-50 border-amber-200';
      case 'Sent': return 'text-indigo-700 bg-indigo-50 border-indigo-200';
      default: return 'text-slate-700 bg-slate-50 border-slate-200';
    }
  };

  return (
    <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-bg-input border-b border-border">
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Recipient</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Letter Details</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider hidden md:table-cell">Issue Date</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Status</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredData.map((letter) => (
              <tr key={letter.id} className="hover:bg-bg-page/50 transition-colors group">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold shrink-0">
                      {letter.recipientName.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-primary group-hover:text-indigo-600 transition-colors">{letter.recipientName}</p>
                      <p className="text-xs font-semibold text-text-secondary">{letter.recipientRole}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <FileText size={16} className="text-indigo-500 shrink-0" />
                    <p className="text-sm font-bold text-text-primary">{letter.letterType}</p>
                  </div>
                  <p className="text-[11px] font-bold text-text-secondary mt-1 ml-6">{letter.id}</p>
                </td>
                <td className="p-4 hidden md:table-cell">
                  <p className="text-sm font-semibold text-text-primary">{letter.issueDate}</p>
                </td>
                <td className="p-4">
                  <span className={clsx("px-2.5 py-1 rounded-md text-[11px] font-bold border", getStatusColor(letter.status))}>
                    {letter.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    {letter.status === 'Draft' && (
                      <button 
                        className="p-1.5 text-text-secondary hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                        title="Send Letter"
                      >
                        <Send size={18} />
                      </button>
                    )}
                    <button 
                      className="p-1.5 text-text-secondary hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                      title="Download PDF"
                    >
                      <Download size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-text-secondary font-semibold">
                  No letters found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
