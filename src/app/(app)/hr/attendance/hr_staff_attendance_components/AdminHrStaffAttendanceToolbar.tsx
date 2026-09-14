"use client";

import { useState } from "react";
import { CalendarDays, CalendarHeart, Download, Fingerprint, Loader2 } from "lucide-react";
import AdminHrStaffAttendanceReportModal from "./AdminHrStaffAttendanceReportModal";

interface AdminHrStaffAttendanceToolbarProps {
  activeTab: 'Daily' | 'Monthly';
  setActiveTab: (tab: 'Daily' | 'Monthly') => void;
  date: string;
  setDate: (d: string) => void;
  month: number;
  setMonth: (m: number) => void;
  year: number;
  setYear: (y: number) => void;
  department: string;
  setDepartment: (d: string) => void;
  syncBiometric: () => void;
}

export default function AdminHrStaffAttendanceToolbar({
  activeTab, setActiveTab, date, setDate, month, setMonth, year, setYear, department, setDepartment, syncBiometric
}: AdminHrStaffAttendanceToolbarProps) {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

  const handleSync = () => {
    setIsSyncing(true);
    // Simulate sync
    setTimeout(() => {
      setIsSyncing(false);
      syncBiometric(); // Can still call parent function if needed to refresh data
      alert("Biometric data synced successfully!");
    }, 2000);
  };

  return (
    <div className="flex flex-col gap-4 mb-6">
      <div className="flex border-b border-border">
        <button onClick={() => setActiveTab('Daily')} className={`flex items-center gap-2 px-6 py-3 font-bold transition-colors relative ${activeTab === 'Daily' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
          <CalendarDays size={18} /> Daily Attendance
          {activeTab === 'Daily' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary motion-safe:animate-in motion-safe:fade-in"></div>}
        </button>
        <button onClick={() => setActiveTab('Monthly')} className={`flex items-center gap-2 px-6 py-3 font-bold transition-colors relative ${activeTab === 'Monthly' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
          <CalendarHeart size={18} /> Monthly Register
          {activeTab === 'Monthly' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary motion-safe:animate-in motion-safe:fade-in"></div>}
        </button>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-card border border-border rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          {activeTab === 'Daily' ? (
            <input 
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
              className="px-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none" 
            />
          ) : (
            <div className="flex gap-2">
              <select value={month} onChange={(e) => setMonth(Number(e.target.value))} className="px-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none">
                {Array.from({length: 12}, (_, i) => i + 1).map(m => <option key={m} value={m}>Month {m}</option>)}
              </select>
              <select value={year} onChange={(e) => setYear(Number(e.target.value))} className="px-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none">
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
              </select>
            </div>
          )}
          
          <select value={department} onChange={(e) => setDepartment(e.target.value)} className="px-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none">
            <option value="All">All Departments</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Science">Science</option>
            <option value="Administration">Administration</option>
            <option value="Support">Support</option>
          </select>
        </div>

        <div className="flex items-center gap-3">
          {activeTab === 'Daily' && (
            <button 
              onClick={handleSync}
              disabled={isSyncing}
              className="flex items-center gap-2 px-4 py-2 bg-info/10 text-info font-bold rounded-md hover:bg-info hover:text-white transition-all active:scale-95 text-sm border border-info/20 shadow-sm disabled:opacity-50 disabled:pointer-events-none"
            >
              {isSyncing ? <Loader2 size={16} className="animate-spin" /> : <Fingerprint size={16} />} 
              {isSyncing ? 'Syncing...' : 'Sync Biometric'}
            </button>
          )}
          <button 
            className="flex items-center gap-2 px-4 py-2 bg-input text-foreground border border-border font-bold rounded-md hover:border-primary hover:text-primary transition-all active:scale-95 text-sm shadow-sm" 
            onClick={() => setIsReportModalOpen(true)}
          >
            <Download size={16} /> Reports
          </button>
        </div>
      </div>

      <AdminHrStaffAttendanceReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        date={date}
        month={month}
        year={year}
        activeTab={activeTab}
      />
    </div>
  );
}
