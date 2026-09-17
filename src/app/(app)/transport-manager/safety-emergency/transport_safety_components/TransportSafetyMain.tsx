"use client";

import React, { useState } from 'react';
import { Search, Plus, AlertOctagon, ShieldAlert, Activity } from 'lucide-react';
import TransportSafetyTable from './TransportSafetyTable';
import TransportSafetyProfileModal from './TransportSafetyProfileModal';
import TransportSafetyFormModal from './TransportSafetyFormModal';
import { MOCK_INCIDENT_RECORDS } from '../transport_safety_constants/transport_safety.constants';
import type { TransportIncident, TransportIncidentFormData } from '../transport_safety_types/transport_safety.types';

// RESPONSIBILITY: Main orchestrator for Safety & Emergency module

export default function TransportSafetyMain() {
  const [records, setRecords] = useState<TransportIncident[]>(MOCK_INCIDENT_RECORDS);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSeverity, setFilterSeverity] = useState<string>('ALL');
  const [filterStatus, setFilterStatus] = useState<string>('ALL');
  
  // Modals state
  const [selectedRecord, setSelectedRecord] = useState<TransportIncident | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Handlers
  const handleView = (record: TransportIncident) => {
    setSelectedRecord(record);
    setIsProfileOpen(true);
  };

  const handleEdit = (record: TransportIncident) => {
    setSelectedRecord(record);
    setIsFormOpen(true);
  };

  const handleAdd = () => {
    setSelectedRecord(null);
    setIsFormOpen(true);
  };

  const handleSave = (data: TransportIncidentFormData) => {
    
    // Simulate current user for audit trail
    const currentUser = 'Transport Admin';
    const timestamp = new Date().toISOString();

    if (selectedRecord) {
      // Logic for editing and appending to audit trail
      let newLog = null;
      if (data.status !== selectedRecord.status) {
         newLog = { timestamp, action: `Status changed to ${data.status}`, performedBy: currentUser };
      } else {
         newLog = { timestamp, action: `Incident details updated`, performedBy: currentUser };
      }

      const updatedRecord: TransportIncident = {
        ...selectedRecord,
        ...data,
        auditTrail: [...selectedRecord.auditTrail, newLog]
      };
      
      setRecords(prev => prev.map(r => r.id === selectedRecord.id ? updatedRecord : r));
    } else {
      // Logic for new incident
      const newRecord: TransportIncident = {
        id: `INC-${new Date().getFullYear()}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
        ...data,
        auditTrail: [
          { timestamp, action: `Incident reported manually`, performedBy: currentUser }
        ]
      };
      setRecords(prev => [newRecord, ...prev]);
    }
  };

  // Filter
  const filteredRecords = records.filter(r => {
    const matchesSearch = r.vehicleNumber?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          r.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          r.reportedBy.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeverity = filterSeverity === 'ALL' || r.severity === filterSeverity;
    const matchesStatus = filterStatus === 'ALL' || r.status === filterStatus;
    
    return matchesSearch && matchesSeverity && matchesStatus;
  });

  // Calculate Metrics
  const activeIncidentsCount = records.filter(r => r.status !== 'RESOLVED').length;
  const criticalCount = records.filter(r => (r.severity === 'CRITICAL' || r.severity === 'HIGH') && r.status !== 'RESOLVED').length;

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header & Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <span className="text-2xl">🚨</span> Safety & Emergency
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Manage breakdowns, accidents, and medical emergencies with a secure audit trail.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(245,158,11,0.05)] border border-[rgba(245,158,11,0.2)]">
            <Activity size={16} className="text-amber-500" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] leading-none mb-0.5">Active Incidents</span>
              <span className="text-sm font-bold text-amber-500 leading-none">{activeIncidentsCount} Unresolved</span>
            </div>
          </div>
          {criticalCount > 0 && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(239,68,68,0.05)] border border-[rgba(239,68,68,0.2)]">
              <ShieldAlert size={16} className="text-red-500 animate-pulse" />
              <div className="flex flex-col">
                 <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] leading-none mb-0.5">Emergency</span>
                 <span className="text-sm font-bold text-red-500 leading-none">{criticalCount} Critical/High</span>
              </div>
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
              placeholder="Search ID or Reporter..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-md py-2 pl-9 pr-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
            />
          </div>
          
          <select
            value={filterSeverity}
            onChange={(e) => setFilterSeverity(e.target.value)}
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors hidden sm:block"
          >
            <option value="ALL">All Severities</option>
            <option value="LOW">Low</option>
            <option value="MEDIUM">Medium</option>
            <option value="HIGH">High</option>
            <option value="CRITICAL">Critical</option>
          </select>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors hidden sm:block"
          >
            <option value="ALL">All Statuses</option>
            <option value="REPORTED">Reported</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="UNDER_INVESTIGATION">Investigating</option>
            <option value="RESOLVED">Resolved</option>
          </select>
        </div>

        <button 
          onClick={handleAdd}
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors shadow-lg shadow-red-900/30 whitespace-nowrap"
        >
          <AlertOctagon size={16} />
          <span className="hidden sm:inline">Log Emergency</span>
        </button>
      </div>

      {/* Main Table Card */}
      <div className="bg-[var(--bg-card)] rounded-xl border border-[var(--border)] overflow-hidden">
        <TransportSafetyTable 
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
      <TransportSafetyProfileModal 
        isOpen={isProfileOpen}
        record={selectedRecord}
        onClose={() => setIsProfileOpen(false)}
      />
      
      <TransportSafetyFormModal 
        isOpen={isFormOpen}
        record={selectedRecord}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSave}
      />
      
    </div>
  );
}
