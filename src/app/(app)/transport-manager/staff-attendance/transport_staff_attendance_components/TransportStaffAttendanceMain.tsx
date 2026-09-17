"use client";

import React, { useState } from 'react';
import { Search, Plus, Calendar, CheckCircle2, AlertTriangle, Users } from 'lucide-react';
import TransportStaffAttendanceTable from './TransportStaffAttendanceTable';
import TransportStaffAttendanceProfileModal from './TransportStaffAttendanceProfileModal';
import TransportStaffAttendanceFormModal from './TransportStaffAttendanceFormModal';
import { MOCK_STAFF_ATTENDANCE } from '../transport_staff_attendance_constants/transport_staff_attendance.constants';
import type { TransportStaffAttendance, TransportStaffAttendanceFormData } from '../transport_staff_attendance_types/transport_staff_attendance.types';

// RESPONSIBILITY: Main orchestrator for Staff Attendance module

export default function TransportStaffAttendanceMain() {
  const [records, setRecords] = useState<TransportStaffAttendance[]>(MOCK_STAFF_ATTENDANCE);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState<string>('ALL');
  const [filterStatus, setFilterStatus] = useState<string>('ALL');
  
  // Modals state
  const [selectedRecord, setSelectedRecord] = useState<TransportStaffAttendance | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Handlers
  const handleView = (record: TransportStaffAttendance) => {
    setSelectedRecord(record);
    setIsProfileOpen(true);
  };

  const handleEdit = (record: TransportStaffAttendance) => {
    setSelectedRecord(record);
    setIsFormOpen(true);
  };

  const handleAdd = () => {
    setSelectedRecord(null);
    setIsFormOpen(true);
  };

  const handleSave = (data: TransportStaffAttendanceFormData) => {
    
    // Enriching mock data
    const enrichData = {
      ...data,
      contactNumber: '9876543210', // Mock fallback
      assignedVehicle: data.role === 'DRIVER' ? 'MH-12-AB-1234' : null, // Mock fallback
    };

    if (selectedRecord) {
      // Edit
      setRecords(prev => prev.map(r => r.id === selectedRecord.id ? { 
        ...r, 
        ...enrichData,
        // preserve old values if untouched
        contactNumber: r.staffId === data.staffId ? r.contactNumber : enrichData.contactNumber,
        assignedVehicle: r.staffId === data.staffId ? r.assignedVehicle : enrichData.assignedVehicle
      } : r));
    } else {
      // Add
      const newRecord: TransportStaffAttendance = {
        ...enrichData,
        id: `S-ATT-${Math.floor(Math.random() * 10000)}`
      };
      setRecords(prev => [newRecord, ...prev]);
    }
  };

  // Filter
  const filteredRecords = records.filter(r => {
    const matchesSearch = r.staffName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          r.staffId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'ALL' || r.role === filterRole;
    const matchesStatus = filterStatus === 'ALL' || r.status === filterStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const presentCount = records.filter(r => r.status === 'PRESENT' || r.status === 'HALF_DAY').length;
  const leaveCount = records.filter(r => r.status === 'ON_LEAVE' || r.status === 'ABSENT').length;

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header & Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)]">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <span className="text-2xl">🪪</span> Staff Attendance
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Manage daily check-ins, shifts, and leaves for Drivers and Conductors.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(34,197,94,0.05)] border border-[rgba(34,197,94,0.2)]">
            <CheckCircle2 size={16} className="text-emerald-500" />
            <span className="text-sm font-semibold text-emerald-500">{presentCount} Present Today</span>
          </div>
          {leaveCount > 0 && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(245,158,11,0.05)] border border-[rgba(245,158,11,0.2)]">
              <AlertTriangle size={16} className="text-amber-500" />
              <span className="text-sm font-semibold text-amber-500">{leaveCount} On Leave/Absent</span>
            </div>
          )}
        </div>
      </div>

      {/* Tools Row */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-56">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
            <input
              type="text"
              placeholder="Search staff or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-md py-2 pl-9 pr-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
            />
          </div>
          
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors hidden sm:block"
          >
            <option value="ALL">All Roles</option>
            <option value="DRIVER">Drivers</option>
            <option value="CONDUCTOR">Conductors</option>
          </select>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors hidden sm:block"
          >
            <option value="ALL">All Statuses</option>
            <option value="PRESENT">Present & Half Day</option>
            <option value="ON_LEAVE">On Leave</option>
            <option value="ABSENT">Absent</option>
          </select>
        </div>

        <button 
          onClick={handleAdd}
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[var(--primary)] text-white text-sm font-medium hover:bg-[var(--primary-hover)] transition-colors shadow-lg shadow-[var(--primary-subtle)] whitespace-nowrap"
        >
          <Plus size={16} />
          <span className="hidden sm:inline">Mark Attendance</span>
        </button>
      </div>

      {/* Main Table Card */}
      <div className="bg-[var(--bg-card)] rounded-xl border border-[var(--border)] overflow-hidden">
        <TransportStaffAttendanceTable 
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
      <TransportStaffAttendanceProfileModal 
        isOpen={isProfileOpen}
        record={selectedRecord}
        onClose={() => setIsProfileOpen(false)}
      />
      
      <TransportStaffAttendanceFormModal 
        isOpen={isFormOpen}
        record={selectedRecord}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSave}
      />
      
    </div>
  );
}
