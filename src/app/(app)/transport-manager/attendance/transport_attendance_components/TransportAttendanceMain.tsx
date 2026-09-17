"use client";

import React, { useState } from 'react';
import { Search, Plus, FileText, CheckCircle2, UserX } from 'lucide-react';
import TransportAttendanceTable from './TransportAttendanceTable';
import TransportAttendanceProfileModal from './TransportAttendanceProfileModal';
import TransportAttendanceFormModal from './TransportAttendanceFormModal';
import { MOCK_TRANSPORT_ATTENDANCE } from '../transport_attendance_constants/transport_attendance.constants';
import type { TransportAttendance, TransportAttendanceFormData } from '../transport_attendance_types/transport_attendance.types';

// RESPONSIBILITY: Main orchestrator for Transport Attendance module

export default function TransportAttendanceMain() {
  const [records, setRecords] = useState<TransportAttendance[]>(MOCK_TRANSPORT_ATTENDANCE);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('ALL');
  
  // Modals state
  const [selectedRecord, setSelectedRecord] = useState<TransportAttendance | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Handlers
  const handleView = (record: TransportAttendance) => {
    setSelectedRecord(record);
    setIsProfileOpen(true);
  };

  const handleEdit = (record: TransportAttendance) => {
    setSelectedRecord(record);
    setIsFormOpen(true);
  };

  const handleAdd = () => {
    setSelectedRecord(null);
    setIsFormOpen(true);
  };

  const handleSave = (data: TransportAttendanceFormData, sendNotification: boolean) => {
    
    // Enriching mock data
    const enrichData = {
      ...data,
      classSection: 'Class 5 - A', // Mock fallback
      routeName: 'Route R-01 (City Center)', // Mock fallback
      stopName: 'Campus Gate', // Mock fallback
      date: new Date().toISOString().split('T')[0],
      notificationSent: sendNotification
    };

    if (selectedRecord) {
      // Edit
      setRecords(prev => prev.map(r => r.id === selectedRecord.id ? { 
        ...r, 
        ...enrichData,
        // preserve old values if untouched
        classSection: r.studentId === data.studentId ? r.classSection : enrichData.classSection,
        routeName: r.tripId === data.tripId ? r.routeName : enrichData.routeName,
        stopName: r.tripId === data.tripId ? r.stopName : enrichData.stopName,
        date: r.date
      } : r));
    } else {
      // Add
      const newRecord: TransportAttendance = {
        ...enrichData,
        id: `ATT-${Math.floor(Math.random() * 10000)}`
      };
      setRecords(prev => [newRecord, ...prev]);
    }
  };

  // Filter
  const filteredRecords = records.filter(r => {
    const matchesSearch = r.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          r.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          r.tripId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'ALL' || r.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const presentCount = records.filter(r => r.status === 'PRESENT').length;
  const missedCount = records.filter(r => r.status === 'MISSED_BUS').length;

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header & Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)]">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <span className="text-2xl">📝</span> Student Transport Attendance
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Track live boarding status, drop times, and handovers for every trip.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(34,197,94,0.05)] border border-[rgba(34,197,94,0.2)]">
            <CheckCircle2 size={16} className="text-emerald-500" />
            <span className="text-sm font-semibold text-emerald-500">{presentCount} Boarded Today</span>
          </div>
          {missedCount > 0 && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(245,158,11,0.05)] border border-[rgba(245,158,11,0.2)]">
              <UserX size={16} className="text-amber-500" />
              <span className="text-sm font-semibold text-amber-500">{missedCount} Missed Bus</span>
            </div>
          )}
        </div>
      </div>

      {/* Tools Row */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
            <input
              type="text"
              placeholder="Search student, ID, trip..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-md py-2 pl-9 pr-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
            />
          </div>
          
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors hidden sm:block"
          >
            <option value="ALL">All Statuses</option>
            <option value="PRESENT">Present (Boarded)</option>
            <option value="NOT_BOARDED">Not Boarded</option>
            <option value="MISSED_BUS">Missed Bus</option>
            <option value="ABSENT">Absent</option>
          </select>
        </div>

        <button 
          onClick={handleAdd}
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[var(--primary)] text-white text-sm font-medium hover:bg-[var(--primary-hover)] transition-colors shadow-lg shadow-[var(--primary-subtle)] whitespace-nowrap"
        >
          <Plus size={16} />
          <span className="hidden sm:inline">Log Manual Entry</span>
        </button>
      </div>

      {/* Main Table Card */}
      <div className="bg-[var(--bg-card)] rounded-xl border border-[var(--border)] overflow-hidden">
        <TransportAttendanceTable 
          records={filteredRecords} 
          onView={handleView}
          onEdit={handleEdit}
        />
        
        {/* Pagination Footer */}
        <div className="p-4 border-t border-[var(--border)] bg-[var(--bg-page)] flex items-center justify-between text-sm text-[var(--text-secondary)]">
          <div>Showing {filteredRecords.length > 0 ? 1 : 0} to {filteredRecords.length} of {records.length} entries</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 rounded border border-[var(--border)] hover:bg-[var(--bg-input)] disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 rounded border border-[var(--primary)] bg-[rgba(250,204,21,0.1)] text-[var(--primary)]">1</button>
            <button className="px-3 py-1 rounded border border-[var(--border)] hover:bg-[var(--bg-input)] disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <TransportAttendanceProfileModal 
        isOpen={isProfileOpen}
        record={selectedRecord}
        onClose={() => setIsProfileOpen(false)}
      />
      
      <TransportAttendanceFormModal 
        isOpen={isFormOpen}
        record={selectedRecord}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSave}
      />
      
    </div>
  );
}
