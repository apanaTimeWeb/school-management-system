"use client";

import React, { useState } from 'react';
import { Search, CreditCard, AlertCircle, TrendingUp, Filter } from 'lucide-react';
import TransportFeeTable from './TransportFeeTable';
import TransportFeeProfileModal from './TransportFeeProfileModal';
import { MOCK_FEE_RECORDS } from '../transport_fee_constants/transport_fee.constants';
import type { TransportFeeRecord } from '../transport_fee_types/transport_fee.types';

// RESPONSIBILITY: Main orchestrator for Transport Fee module (Operational View)

export default function TransportFeeMain() {
  const [records, setRecords] = useState<TransportFeeRecord[]>(MOCK_FEE_RECORDS);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('ALL');
  
  // Modals state
  const [selectedRecord, setSelectedRecord] = useState<TransportFeeRecord | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Handlers
  const handleView = (record: TransportFeeRecord) => {
    setSelectedRecord(record);
    setIsProfileOpen(true);
  };

  // Filter
  const filteredRecords = records.filter(r => {
    const matchesSearch = r.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          r.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          r.routeId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'ALL' || r.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  // Calculate Metrics
  const totalRevenueExpected = records.reduce((sum, r) => sum + r.netPayable, 0);
  const totalCollected = records.reduce((sum, r) => sum + r.paidAmount, 0);
  const totalOutstanding = records.reduce((sum, r) => sum + r.outstandingAmount, 0);
  const overdueCount = records.filter(r => r.status === 'OVERDUE').length;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
  };

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header & Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <span className="text-2xl">💳</span> Transport Fee (Operational)
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1 flex items-center gap-1.5">
            View student payment status and route revenue. <span className="text-[10px] bg-[var(--bg-input)] border border-[var(--border)] px-1.5 py-0.5 rounded italic">Managed by Accountant</span>
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(16,185,129,0.05)] border border-[rgba(16,185,129,0.2)]">
            <TrendingUp size={16} className="text-emerald-500" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] leading-none mb-0.5">Total Collected</span>
              <span className="text-sm font-bold text-emerald-500 leading-none">{formatCurrency(totalCollected)}</span>
            </div>
          </div>
          {totalOutstanding > 0 && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(239,68,68,0.05)] border border-[rgba(239,68,68,0.2)]">
              <AlertCircle size={16} className="text-red-500" />
              <div className="flex flex-col">
                 <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] leading-none mb-0.5">Outstanding ({overdueCount} Overdue)</span>
                 <span className="text-sm font-bold text-red-500 leading-none">{formatCurrency(totalOutstanding)}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Tools Row */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
            <input
              type="text"
              placeholder="Search Student, ID, or Route..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-md py-2 pl-9 pr-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
            />
          </div>
          
          <div className="relative">
             <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] pointer-events-none" />
             <select
               value={filterStatus}
               onChange={(e) => setFilterStatus(e.target.value)}
               className="bg-[var(--bg-card)] border border-[var(--border)] rounded-md py-2 pl-8 pr-3 text-sm font-medium text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors cursor-pointer appearance-none"
             >
               <option value="ALL">All Payment Statuses</option>
               <option value="PAID">Paid in Full</option>
               <option value="PARTIAL">Partial / Installment</option>
               <option value="UPCOMING">Upcoming Due</option>
               <option value="OVERDUE">Overdue (Defaulters)</option>
             </select>
          </div>
        </div>

        <button 
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[var(--bg-input)] text-[var(--text-secondary)] text-sm font-medium border border-[var(--border)] cursor-not-allowed opacity-70 whitespace-nowrap"
          title="Fee collection is managed by the Accounting department."
        >
          <CreditCard size={16} />
          <span className="hidden sm:inline">Collect Fee (Admin Only)</span>
        </button>
      </div>

      {/* Main Table Card */}
      <div className="bg-[var(--bg-card)] rounded-xl border border-[var(--border)] overflow-hidden">
        <TransportFeeTable 
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
      <TransportFeeProfileModal 
        isOpen={isProfileOpen}
        record={selectedRecord}
        onClose={() => setIsProfileOpen(false)}
      />
      
    </div>
  );
}
