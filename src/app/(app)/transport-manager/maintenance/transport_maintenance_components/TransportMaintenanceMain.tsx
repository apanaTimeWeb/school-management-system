"use client";

import React, { useState } from 'react';
import { Search, Plus, Wrench, AlertCircle, TrendingUp } from 'lucide-react';
import TransportMaintenanceTable from './TransportMaintenanceTable';
import TransportMaintenanceProfileModal from './TransportMaintenanceProfileModal';
import TransportMaintenanceFormModal from './TransportMaintenanceFormModal';
import { MOCK_MAINTENANCE_RECORDS } from '../transport_maintenance_constants/transport_maintenance.constants';
import type { TransportMaintenance, TransportMaintenanceFormData } from '../transport_maintenance_types/transport_maintenance.types';

// RESPONSIBILITY: Main orchestrator for Vehicle Maintenance module

export default function TransportMaintenanceMain() {
  const [records, setRecords] = useState<TransportMaintenance[]>(MOCK_MAINTENANCE_RECORDS);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('ALL');
  const [filterStatus, setFilterStatus] = useState<string>('ALL');
  
  // Modals state
  const [selectedRecord, setSelectedRecord] = useState<TransportMaintenance | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Handlers
  const handleView = (record: TransportMaintenance) => {
    setSelectedRecord(record);
    setIsProfileOpen(true);
  };

  const handleEdit = (record: TransportMaintenance) => {
    setSelectedRecord(record);
    setIsFormOpen(true);
  };

  const handleAdd = () => {
    setSelectedRecord(null);
    setIsFormOpen(true);
  };

  const handleSave = (data: TransportMaintenanceFormData) => {
    const enrichData = {
      ...data,
      partsCost: Number(data.partsCost) || 0,
      labourCost: Number(data.labourCost) || 0,
      totalCost: (Number(data.partsCost) || 0) + (Number(data.labourCost) || 0),
    };

    if (selectedRecord) {
      // Edit
      setRecords(prev => prev.map(r => r.id === selectedRecord.id ? { 
        ...r, 
        ...enrichData,
      } : r));
    } else {
      // Add
      const newRecord: TransportMaintenance = {
        ...enrichData,
        id: `MNT-${Math.floor(Math.random() * 10000)}`
      };
      setRecords(prev => [newRecord, ...prev]);
    }
  };

  // Filter
  const filteredRecords = records.filter(r => {
    const matchesSearch = r.vehicleNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          r.workshopName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'ALL' || r.type === filterType;
    const matchesStatus = filterStatus === 'ALL' || r.status === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  // Calculate Metrics
  const totalSpend = records.reduce((sum, r) => sum + r.totalCost, 0);
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
            <span className="text-2xl">🔧</span> Vehicle Maintenance
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Track service history, workshop repairs, breakdown logs, and billing.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(59,130,246,0.05)] border border-[rgba(59,130,246,0.2)]">
            <TrendingUp size={16} className="text-blue-500" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] leading-none mb-0.5">Fleet Total Cost</span>
              <span className="text-sm font-bold text-blue-500 leading-none">{formatCurrency(totalSpend)}</span>
            </div>
          </div>
          {overdueCount > 0 && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(239,68,68,0.05)] border border-[rgba(239,68,68,0.2)]">
              <AlertCircle size={16} className="text-red-500" />
              <span className="text-sm font-semibold text-red-500">{overdueCount} Services Overdue</span>
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
              placeholder="Search vehicle or workshop..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-md py-2 pl-9 pr-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
            />
          </div>
          
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors hidden sm:block"
          >
            <option value="ALL">All Service Types</option>
            <option value="SCHEDULED_SERVICE">Scheduled Service</option>
            <option value="INSPECTION">Inspection</option>
            <option value="REPAIR">Repair</option>
            <option value="BREAKDOWN">Breakdown</option>
          </select>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors hidden sm:block"
          >
            <option value="ALL">All Statuses</option>
            <option value="SCHEDULED">Scheduled</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="COMPLETED">Completed</option>
            <option value="OVERDUE">Overdue</option>
          </select>
        </div>

        <button 
          onClick={handleAdd}
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[var(--primary)] text-white text-sm font-medium hover:bg-[var(--primary-hover)] transition-colors shadow-lg shadow-[var(--primary-subtle)] whitespace-nowrap"
        >
          <Plus size={16} />
          <span className="hidden sm:inline">Log Service/Repair</span>
        </button>
      </div>

      {/* Main Table Card */}
      <div className="bg-[var(--bg-card)] rounded-xl border border-[var(--border)] overflow-hidden">
        <TransportMaintenanceTable 
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
      <TransportMaintenanceProfileModal 
        isOpen={isProfileOpen}
        record={selectedRecord}
        onClose={() => setIsProfileOpen(false)}
      />
      
      <TransportMaintenanceFormModal 
        isOpen={isFormOpen}
        record={selectedRecord}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSave}
      />
      
    </div>
  );
}
