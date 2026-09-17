"use client";

import React, { useState } from 'react';
import { Search, Filter, ShieldCheck, Download, Calendar } from 'lucide-react';
import AuditHistoryTable from './AuditHistoryTable';
import AuditHistoryDetailModal from './AuditHistoryDetailModal';
import { MOCK_AUDIT_LOGS, ENTITY_TYPE_CONFIGS, ACTION_TYPE_CONFIGS } from '../audit_history_constants/audit_history.constants';
import type { AuditRecord } from '../audit_history_types/audit_history.types';

// RESPONSIBILITY: Main orchestrator for Audit & History module

export default function AuditHistoryMain() {
  const [records] = useState<AuditRecord[]>(MOCK_AUDIT_LOGS);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filters
  const [filterEntity, setFilterEntity] = useState<string>('ALL');
  const [filterAction, setFilterAction] = useState<string>('ALL');
  
  // Modals state
  const [selectedRecord, setSelectedRecord] = useState<AuditRecord | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // Handlers
  const handleView = (record: AuditRecord) => {
    setSelectedRecord(record);
    setIsDetailOpen(true);
  };

  // Filter Logic
  const filteredRecords = records.filter(r => {
    const matchesSearch = r.entityName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          r.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          r.performedByUserName.toLowerCase().includes(searchTerm.toLowerCase());
                          
    const matchesEntity = filterEntity === 'ALL' || r.entityType === filterEntity;
    const matchesAction = filterAction === 'ALL' || r.actionType === filterAction;
    
    return matchesSearch && matchesEntity && matchesAction;
  });

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header & Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <span className="text-2xl">🕵️</span> System Audit & History
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Immutable log of all critical transport actions, manual adjustments, and state changes.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(16,185,129,0.05)] border border-[rgba(16,185,129,0.2)]">
            <ShieldCheck size={16} className="text-emerald-500" />
            <div className="flex flex-col">
               <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] leading-none mb-0.5">Integrity</span>
               <span className="text-sm font-bold text-emerald-500 leading-none">Logging Active</span>
            </div>
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--bg-input)] border border-[var(--border)] text-[var(--text-primary)] text-sm font-medium hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] transition-colors">
            <Download size={16} />
            <span className="hidden sm:inline">Export Logs</span>
          </button>
        </div>
      </div>

      {/* Tools Row */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
        <div className="flex flex-wrap items-center gap-3 w-full">
          
          {/* Search */}
          <div className="relative w-full sm:w-72">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
            <input
              type="text"
              placeholder="Search by User, Entity, or Description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-md py-2 pl-9 pr-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
            />
          </div>
          
          {/* Entity Filter */}
          <div className="relative">
             <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] pointer-events-none" />
             <select
               value={filterEntity}
               onChange={(e) => setFilterEntity(e.target.value)}
               className="bg-[var(--bg-card)] border border-[var(--border)] rounded-md py-2 pl-8 pr-3 text-sm font-medium text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors cursor-pointer appearance-none max-w-[150px] sm:max-w-none"
             >
               <option value="ALL">All Entities</option>
               {Object.entries(ENTITY_TYPE_CONFIGS).map(([key, config]) => (
                 <option key={key} value={key}>{config.label}</option>
               ))}
             </select>
          </div>

          {/* Action Filter */}
          <div className="relative">
             <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] pointer-events-none" />
             <select
               value={filterAction}
               onChange={(e) => setFilterAction(e.target.value)}
               className="bg-[var(--bg-card)] border border-[var(--border)] rounded-md py-2 pl-8 pr-3 text-sm font-medium text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors cursor-pointer appearance-none max-w-[150px] sm:max-w-none"
             >
               <option value="ALL">All Actions</option>
               {Object.entries(ACTION_TYPE_CONFIGS).map(([key, config]) => (
                 <option key={key} value={key}>{config.label}</option>
               ))}
             </select>
          </div>

          {/* Date Filter (Visual only for now) */}
          <div className="relative hidden sm:block">
             <Calendar size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] pointer-events-none" />
             <select className="bg-[var(--bg-card)] border border-[var(--border)] rounded-md py-2 pl-8 pr-3 text-sm font-medium text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors cursor-pointer appearance-none">
               <option>Last 7 Days</option>
               <option>Last 30 Days</option>
               <option>This Term</option>
               <option>Custom Range...</option>
             </select>
          </div>

        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-[var(--bg-card)] rounded-xl border border-[var(--border)] overflow-hidden flex flex-col flex-1 min-h-0">
        <div className="flex-1 overflow-y-auto">
           <AuditHistoryTable 
             records={filteredRecords} 
             onView={handleView}
           />
        </div>
        
        {/* Pagination Footer */}
        <div className="p-4 border-t border-[var(--border)] bg-[var(--bg-page)] flex items-center justify-between text-sm text-[var(--text-secondary)] shrink-0">
          <div>Showing {filteredRecords.length > 0 ? 1 : 0} to {filteredRecords.length} of {records.length} logs</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 rounded border border-[var(--border)] hover:bg-[var(--bg-input)] disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 rounded border border-[var(--primary)] bg-[rgba(250,204,21,0.1)] text-[var(--primary)]">1</button>
            <button className="px-3 py-1 rounded border border-[var(--border)] hover:bg-[var(--bg-input)] disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <AuditHistoryDetailModal 
        isOpen={isDetailOpen}
        record={selectedRecord}
        onClose={() => setIsDetailOpen(false)}
      />
      
    </div>
  );
}
