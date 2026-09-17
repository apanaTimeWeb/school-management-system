"use client";

import React, { useState } from 'react';
import { Plus, Search, Map, Filter, Navigation } from 'lucide-react';
import SpecialTransportTable from './SpecialTransportTable';
import SpecialTransportProfileModal from './SpecialTransportProfileModal';
import SpecialTransportFormModal from './SpecialTransportFormModal';
import { MOCK_SPECIAL_TRIPS } from '../special_transport_constants/special_transport.constants';
import type { SpecialTransportRecord, SpecialTransportFormData } from '../special_transport_types/special_transport.types';

// RESPONSIBILITY: Main orchestrator for Special / Event Transport module

export default function SpecialTransportMain() {
  const [records, setRecords] = useState<SpecialTransportRecord[]>(MOCK_SPECIAL_TRIPS);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('ALL');
  const [filterStatus, setFilterStatus] = useState<string>('ALL');
  
  // Modals state
  const [selectedRecord, setSelectedRecord] = useState<SpecialTransportRecord | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Handlers
  const handleView = (record: SpecialTransportRecord) => {
    setSelectedRecord(record);
    setIsProfileOpen(true);
  };

  const handleAdd = () => {
    setSelectedRecord(null);
    setIsFormOpen(true);
  };

  const handleSave = (data: SpecialTransportFormData) => {
    const enrichData: SpecialTransportRecord = {
      id: selectedRecord ? selectedRecord.id : `ST-${new Date().getFullYear()}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
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
    const matchesSearch = r.tripName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          r.destination.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'ALL' || r.tripType === filterType;
    const matchesStatus = filterStatus === 'ALL' || r.status === filterStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  // Calculate Metrics
  const activeTripsCount = records.filter(r => r.status === 'IN_TRANSIT').length;
  const scheduledCount = records.filter(r => r.status === 'SCHEDULED').length;

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header & Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <span className="text-2xl">🎟️</span> Special / Event Transport
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Manage logistics for picnics, sports events, exam centers, and field trips.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          {activeTripsCount > 0 && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(245,158,11,0.05)] border border-[rgba(245,158,11,0.2)] animate-pulse">
              <Navigation size={16} className="text-amber-500" />
              <div className="flex flex-col">
                 <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] leading-none mb-0.5">Live Now</span>
                 <span className="text-sm font-bold text-amber-500 leading-none">{activeTripsCount} Trips Active</span>
              </div>
            </div>
          )}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(59,130,246,0.05)] border border-[rgba(59,130,246,0.2)]">
            <Map size={16} className="text-blue-500" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] leading-none mb-0.5">Upcoming</span>
              <span className="text-sm font-bold text-blue-500 leading-none">{scheduledCount} Scheduled</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Row */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
          <div className="relative w-full sm:w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
            <input
              type="text"
              placeholder="Search Trip Name or Destination..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-md py-2 pl-9 pr-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
            />
          </div>
          
          <div className="relative">
             <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] pointer-events-none" />
             <select
               value={filterType}
               onChange={(e) => setFilterType(e.target.value)}
               className="bg-[var(--bg-card)] border border-[var(--border)] rounded-md py-2 pl-8 pr-3 text-sm font-medium text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors cursor-pointer appearance-none max-w-[140px] sm:max-w-none"
             >
               <option value="ALL">All Event Types</option>
               <option value="PICNIC">Picnics</option>
               <option value="SPORTS_EVENT">Sports Events</option>
               <option value="EDUCATIONAL_TOUR">Educational Tours</option>
               <option value="EXAM_CENTER">Exam Centers</option>
             </select>
          </div>

          <div className="relative">
             <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] pointer-events-none" />
             <select
               value={filterStatus}
               onChange={(e) => setFilterStatus(e.target.value)}
               className="bg-[var(--bg-card)] border border-[var(--border)] rounded-md py-2 pl-8 pr-3 text-sm font-medium text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors cursor-pointer appearance-none w-full sm:w-auto"
             >
               <option value="ALL">All Statuses</option>
               <option value="SCHEDULED">Scheduled</option>
               <option value="IN_TRANSIT">In Transit</option>
               <option value="COMPLETED">Completed</option>
             </select>
          </div>
        </div>

        <button 
          onClick={handleAdd}
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[var(--primary)] text-white text-sm font-medium hover:bg-[var(--primary-hover)] transition-colors shadow-lg shadow-[var(--primary-subtle)] whitespace-nowrap"
        >
          <Plus size={16} />
          <span className="hidden sm:inline">Plan Special Trip</span>
        </button>
      </div>

      {/* Main Table Card */}
      <div className="bg-[var(--bg-card)] rounded-xl border border-[var(--border)] overflow-hidden">
        <SpecialTransportTable 
          records={filteredRecords} 
          onView={handleView}
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
      <SpecialTransportProfileModal 
        isOpen={isProfileOpen}
        record={selectedRecord}
        onClose={() => {
           setIsProfileOpen(false);
           // After viewing, we might want to edit. If so, user can just double click or we can add an edit button in profile. 
           // For simplicity, we keep edit in the action row or allow editing from the profile modal (not implemented yet, but good UX).
        }}
      />
      
      <SpecialTransportFormModal 
        isOpen={isFormOpen}
        record={selectedRecord} // Pass null to create new
        onClose={() => setIsFormOpen(false)}
        onSave={handleSave}
      />
      
    </div>
  );
}
