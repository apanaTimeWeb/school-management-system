"use client";
import React from "react";
import { MessageSquare, Mail, Bell, FileText, Eye } from "lucide-react";
import { useHRCommunicationStore } from "../hr_communication_store/useHRCommunicationStore";
import clsx from "clsx";

export default function HRCommunicationTable() {
  const { communicationData, searchQuery, typeFilter, statusFilter, setComposeModalOpen, setSelectedRecord } = useHRCommunicationStore();

  const filteredData = communicationData.filter(record => {
    const matchesSearch = record.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          record.audience.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = typeFilter === "All" || record.type === typeFilter;
    const matchesStatus = statusFilter === "All" || record.status === statusFilter;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Sent': return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'Scheduled': return 'text-indigo-700 bg-indigo-50 border-indigo-200';
      case 'Draft': return 'text-slate-700 bg-slate-50 border-slate-200';
      default: return 'text-slate-700 bg-slate-50 border-slate-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'Notice': return <FileText size={16} className="text-indigo-500" />;
      case 'Email': return <Mail size={16} className="text-indigo-500" />;
      case 'SMS': return <MessageSquare size={16} className="text-indigo-500" />;
      case 'Announcement': return <Bell size={16} className="text-indigo-500" />;
      default: return <MessageSquare size={16} className="text-indigo-500" />;
    }
  };

  const handleAction = (record: any) => {
    setSelectedRecord(record);
    // setComposeModalOpen(true); // Maybe a separate view modal or just reuse compose
  };

  return (
    <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-bg-input border-b border-border">
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Message Title</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Audience</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider hidden md:table-cell">Date & Sender</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Status</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredData.map((record) => (
              <tr key={record.id} className="hover:bg-bg-page/50 transition-colors group">
                <td className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-indigo-50 border border-indigo-100 mt-1 shrink-0">
                      {getTypeIcon(record.type)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-primary group-hover:text-indigo-600 transition-colors">{record.title}</p>
                      <p className="text-[11px] font-semibold text-text-secondary mt-0.5">{record.type} • {record.id}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <p className="text-sm font-bold text-text-primary">{record.audience}</p>
                </td>
                <td className="p-4 hidden md:table-cell">
                  <p className="text-sm font-bold text-text-primary">{record.date}</p>
                  <p className="text-xs font-semibold text-text-secondary">By: {record.sentBy}</p>
                </td>
                <td className="p-4">
                  <span className={clsx("px-2.5 py-1 rounded-md text-[11px] font-bold border", getStatusColor(record.status))}>
                    {record.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button 
                      onClick={() => handleAction(record)}
                      className="p-1.5 text-text-secondary hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                      title="View Details"
                    >
                      <Eye size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-text-secondary font-semibold">
                  No communication records found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
