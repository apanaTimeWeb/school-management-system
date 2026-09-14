"use client";

import { Search, Plus, MapPin, Users, CalendarDays, Clock, Edit } from "lucide-react";
import type { StaffMeeting } from "../hr_meetings_types/AdminHrMeetingsTypes";

interface AdminHrMeetingsListProps {
  meetings: StaffMeeting[];
  statusFilter: string; setStatusFilter: (s: string) => void;
  searchFilter: string; setSearchFilter: (s: string) => void;
  openModal: (m?: StaffMeeting) => void;
}

export default function AdminHrMeetingsList({
  meetings, statusFilter, setStatusFilter, searchFilter, setSearchFilter, openModal
}: AdminHrMeetingsListProps) {

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Upcoming': return 'bg-info/10 text-info border-info/20';
      case 'Completed': return 'bg-success/10 text-success border-success/20';
      case 'Cancelled': return 'bg-danger/10 text-danger border-danger/20';
      default: return 'bg-input text-muted-foreground border-border';
    }
  };

  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300">
      
      {/* Top Actions & Filters */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 p-4 bg-card border border-border rounded-lg shadow-sm">
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input type="text" placeholder="Search meetings..." value={searchFilter} onChange={(e) => setSearchFilter(e.target.value)} className="pl-9 pr-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none w-full" />
          </div>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="px-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none max-w-[200px]">
            <option value="All">All Statuses</option>
            <option value="Upcoming">Upcoming</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        <button onClick={() => openModal()} className="flex items-center gap-2 px-6 py-2 bg-primary text-card rounded-md font-bold text-sm shadow-lg shadow-primary/20 hover:bg-yellow-500 transition-all active:scale-95">
          <Plus size={16} /> Schedule Meeting
        </button>
      </div>

      {/* Meetings Grid */}
      {meetings.length === 0 ? (
         <div className="w-full p-12 flex flex-col items-center justify-center bg-card border border-border rounded-lg border-dashed">
           <span className="text-muted-foreground text-sm font-bold">No meetings found.</span>
         </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {meetings.map(m => (
            <div key={m.id} className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col">
              
              <div className="flex justify-between items-start mb-4">
                <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${getStatusColor(m.status)}`}>
                  {m.status}
                </span>
                {m.status === 'Completed' && (
                  <span className="text-[10px] font-bold text-muted-foreground">
                    Attendance: {m.attendanceRecorded ? `${m.presentCount}/${m.totalCount}` : 'Pending'}
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-foreground mb-4">{m.title}</h3>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                  <CalendarDays size={14}/> {m.date}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                  <Clock size={14}/> {m.time}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                  <MapPin size={14}/> {m.location}
                </div>
                <div className="flex items-start gap-2 text-sm text-muted-foreground font-medium">
                  <Users size={14} className="mt-0.5 flex-shrink-0"/> 
                  <span className="line-clamp-1">{m.participants.join(", ")}</span>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-border flex justify-end">
                <button onClick={() => openModal(m)} className="px-4 py-2 bg-input text-foreground font-bold text-xs rounded-md border border-border hover:bg-primary hover:text-white transition-colors flex items-center gap-2">
                  <Edit size={14}/> View / Edit Details
                </button>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}
