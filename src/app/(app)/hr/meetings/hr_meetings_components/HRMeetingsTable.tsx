"use client";
import React from "react";
import { Users, Calendar, MapPin, Video, Eye, Edit } from "lucide-react";
import { useHRMeetingsStore } from "../hr_meetings_store/useHRMeetingsStore";
import clsx from "clsx";

export default function HRMeetingsTable() {
  const { meetingsData, searchQuery, typeFilter, statusFilter, setActionModalOpen, setSelectedRecord } = useHRMeetingsStore();

  const filteredData = meetingsData.filter(record => {
    const matchesSearch = record.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          record.organizer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = typeFilter === "All" || record.type === typeFilter;
    const matchesStatus = statusFilter === "All" || record.status === statusFilter;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Completed': return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'Scheduled': return 'text-blue-700 bg-blue-50 border-blue-200';
      case 'Cancelled': return 'text-rose-700 bg-rose-50 border-rose-200';
      default: return 'text-slate-700 bg-slate-50 border-slate-200';
    }
  };

  const handleAction = (record: any) => {
    setSelectedRecord(record);
    setActionModalOpen(true);
  };

  return (
    <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-bg-input border-b border-border">
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Meeting Title</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Date & Time</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider hidden md:table-cell">Location & Organizer</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Status</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredData.map((record) => (
              <tr key={record.id} className="hover:bg-bg-page/50 transition-colors group">
                <td className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 border border-blue-100 mt-1 shrink-0">
                      <Video size={16} className="text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-primary group-hover:text-blue-600 transition-colors">{record.title}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[11px] font-semibold text-text-secondary">{record.type}</span>
                        <span className="text-[10px] text-text-secondary/50">•</span>
                        <span className="text-[11px] font-bold text-text-secondary flex items-center gap-1">
                          <Users size={12} /> {record.attendeesCount}
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex flex-col gap-1 text-sm font-bold text-text-primary">
                    <span className="flex items-center gap-1.5"><Calendar size={14} className="text-text-secondary" /> {record.date}</span>
                    <span className="text-xs text-text-secondary">{record.time}</span>
                  </div>
                </td>
                <td className="p-4 hidden md:table-cell">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-bold text-text-primary flex items-center gap-1.5">
                      <MapPin size={14} className="text-rose-500" /> {record.location}
                    </span>
                    <span className="text-[11px] font-semibold text-text-secondary">Org: {record.organizer}</span>
                  </div>
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
                      className="px-3 py-1.5 text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border border-blue-200 flex items-center gap-1.5"
                    >
                      <Edit size={14} /> Update
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-text-secondary font-semibold">
                  No meeting records found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
