"use client";

import React, { useState } from 'react';
import { Search, Plus, ClipboardCheck, ShieldAlert, CheckCircle2 } from 'lucide-react';
import TransportVehicleInspectionTable from './TransportVehicleInspectionTable';
import TransportVehicleInspectionProfileModal from './TransportVehicleInspectionProfileModal';
import TransportVehicleInspectionFormModal from './TransportVehicleInspectionFormModal';
import { MOCK_INSPECTION_RECORDS } from '../transport_vehicle_inspection_constants/transport_vehicle_inspection.constants';
import type { TransportVehicleInspection, TransportVehicleInspectionFormData } from '../transport_vehicle_inspection_types/transport_vehicle_inspection.types';

// RESPONSIBILITY: Main orchestrator for Vehicle Inspection module

export default function TransportVehicleInspectionMain() {
  const [records, setRecords] = useState<TransportVehicleInspection[]>(MOCK_INSPECTION_RECORDS);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterResult, setFilterResult] = useState<string>('ALL');
  
  // Modals state
  const [selectedRecord, setSelectedRecord] = useState<TransportVehicleInspection | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Handlers
  const handleView = (record: TransportVehicleInspection) => {
    setSelectedRecord(record);
    setIsProfileOpen(true);
  };

  const handleEdit = (record: TransportVehicleInspection) => {
    setSelectedRecord(record);
    setIsFormOpen(true);
  };

  const handleAdd = () => {
    setSelectedRecord(null);
    setIsFormOpen(true);
  };

  const handleSave = (data: TransportVehicleInspectionFormData) => {
    
    const enrichData: TransportVehicleInspection = {
      id: selectedRecord ? selectedRecord.id : `INSP-${Math.floor(Math.random() * 10000)}`,
      ...data
    };

    if (selectedRecord) {
      setRecords(prev => prev.map(r => r.id === selectedRecord.id ? enrichData : r));
    } else {
      setRecords(prev => [enrichData, ...prev]);
    }
  };

  // Filter
  const filteredRecords = records.filter(r => {
    const matchesSearch = r.vehicleNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          r.inspectorName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesResult = filterResult === 'ALL' || r.overallResult === filterResult;
    
    return matchesSearch && matchesResult;
  });

  // Calculate Metrics
  const passedCount = records.filter(r => r.overallResult === 'PASSED').length;
  const failedCount = records.filter(r => r.overallResult === 'FAILED').length;

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header & Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <span className="text-2xl">📋</span> Vehicle Inspection
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Conduct daily/periodic checklists for brakes, tyres, and general safety.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(16,185,129,0.05)] border border-[rgba(16,185,129,0.2)]">
            <CheckCircle2 size={16} className="text-emerald-500" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] leading-none mb-0.5">Cleared Vehicles</span>
              <span className="text-sm font-bold text-emerald-500 leading-none">{passedCount} Passed</span>
            </div>
          </div>
          {failedCount > 0 && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(239,68,68,0.05)] border border-[rgba(239,68,68,0.2)]">
              <ShieldAlert size={16} className="text-red-500" />
              <div className="flex flex-col">
                 <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] leading-none mb-0.5">Critical Action</span>
                 <span className="text-sm font-bold text-red-500 leading-none">{failedCount} Failed</span>
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
              placeholder="Search vehicle or inspector..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-md py-2 pl-9 pr-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
            />
          </div>
          
          <select
            value={filterResult}
            onChange={(e) => setFilterResult(e.target.value)}
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors hidden sm:block"
          >
            <option value="ALL">All Results</option>
            <option value="PASSED">Passed</option>
            <option value="NEEDS_ATTENTION">Needs Attention</option>
            <option value="FAILED">Failed</option>
          </select>
        </div>

        <button 
          onClick={handleAdd}
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[var(--primary)] text-white text-sm font-medium hover:bg-[var(--primary-hover)] transition-colors shadow-lg shadow-[var(--primary-subtle)] whitespace-nowrap"
        >
          <Plus size={16} />
          <span className="hidden sm:inline">Conduct Inspection</span>
        </button>
      </div>

      {/* Main Table Card */}
      <div className="bg-[var(--bg-card)] rounded-xl border border-[var(--border)] overflow-hidden">
        <TransportVehicleInspectionTable 
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
      <TransportVehicleInspectionProfileModal 
        isOpen={isProfileOpen}
        record={selectedRecord}
        onClose={() => setIsProfileOpen(false)}
      />
      
      <TransportVehicleInspectionFormModal 
        isOpen={isFormOpen}
        record={selectedRecord}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSave}
      />
      
    </div>
  );
}
