"use client";

import React, { useState } from 'react';
import { Search, Plus, Droplet, AlertTriangle, TrendingDown } from 'lucide-react';
import TransportFuelManagementTable from './TransportFuelManagementTable';
import TransportFuelManagementProfileModal from './TransportFuelManagementProfileModal';
import TransportFuelManagementFormModal from './TransportFuelManagementFormModal';
import { MOCK_FUEL_LOGS } from '../transport_fuel_management_constants/transport_fuel_management.constants';
import type { TransportFuelLog, TransportFuelLogFormData } from '../transport_fuel_management_types/transport_fuel_management.types';

// RESPONSIBILITY: Main orchestrator for Fuel Management module

export default function TransportFuelManagementMain() {
  const [records, setRecords] = useState<TransportFuelLog[]>(MOCK_FUEL_LOGS);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('ALL');
  const [filterSuspicious, setFilterSuspicious] = useState<boolean>(false);
  
  // Modals state
  const [selectedRecord, setSelectedRecord] = useState<TransportFuelLog | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Handlers
  const handleView = (record: TransportFuelLog) => {
    setSelectedRecord(record);
    setIsProfileOpen(true);
  };

  const handleEdit = (record: TransportFuelLog) => {
    setSelectedRecord(record);
    setIsFormOpen(true);
  };

  const handleAdd = () => {
    setSelectedRecord(null);
    setIsFormOpen(true);
  };

  const handleSave = (data: TransportFuelLogFormData) => {
    
    const qty = Number(data.quantityLiters) || 0;
    const rate = Number(data.ratePerLiter) || 0;
    const totalCost = qty * rate;
    const currentOdo = Number(data.odometerReading) || 0;

    // Enriching mock data (Simulating previous odo logic)
    const prevOdo = currentOdo > 500 ? currentOdo - 400 : 0; 
    const mileage = qty > 0 && prevOdo > 0 ? (currentOdo - prevOdo) / qty : null;
    
    // Simple mock logic for suspicious detection
    const isSuspicious = mileage !== null && (mileage < 4 || mileage > 25);

    const enrichData: TransportFuelLog = {
      id: selectedRecord ? selectedRecord.id : `FL-${Math.floor(Math.random() * 10000)}`,
      vehicleId: data.vehicleId,
      vehicleNumber: data.vehicleNumber,
      fuelType: data.fuelType,
      date: data.date,
      fuelStation: data.fuelStation,
      quantityLiters: qty,
      ratePerLiter: rate,
      totalCost: totalCost,
      odometerReading: currentOdo,
      previousOdometer: selectedRecord ? selectedRecord.previousOdometer : prevOdo,
      mileageKmpl: mileage,
      isSuspicious: isSuspicious,
      remarks: data.remarks || null
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
                          r.fuelStation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'ALL' || r.fuelType === filterType;
    const matchesSuspicious = filterSuspicious ? r.isSuspicious : true;
    
    return matchesSearch && matchesType && matchesSuspicious;
  });

  // Calculate Metrics
  const totalVolume = records.reduce((sum, r) => sum + r.quantityLiters, 0);
  const totalSpend = records.reduce((sum, r) => sum + r.totalCost, 0);
  const suspiciousCount = records.filter(r => r.isSuspicious).length;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
  };

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header & Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <span className="text-2xl">⛽</span> Fuel Management
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Track fuel expenses, consumption rates, and detect suspicious mileage drops.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(59,130,246,0.05)] border border-[rgba(59,130,246,0.2)]">
            <Droplet size={16} className="text-blue-500" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] leading-none mb-0.5">Total Consumed</span>
              <span className="text-sm font-bold text-blue-500 leading-none">{totalVolume.toFixed(0)} Ltrs</span>
            </div>
          </div>
          {suspiciousCount > 0 && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(239,68,68,0.05)] border border-[rgba(239,68,68,0.2)]">
              <TrendingDown size={16} className="text-red-500" />
              <div className="flex flex-col">
                 <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] leading-none mb-0.5">Alerts</span>
                 <span className="text-sm font-bold text-red-500 leading-none">{suspiciousCount} Suspicious Logs</span>
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
              placeholder="Search vehicle or station..."
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
            <option value="ALL">All Fuel Types</option>
            <option value="DIESEL">Diesel</option>
            <option value="PETROL">Petrol</option>
            <option value="CNG">CNG</option>
            <option value="EV">EV / Charge</option>
          </select>

          <label className="flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)] cursor-pointer">
             <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${filterSuspicious ? 'bg-red-500 border-red-500' : 'bg-[var(--bg-input)] border-[var(--border)]'}`}>
                {filterSuspicious && <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
             </div>
             <input type="checkbox" className="hidden" checked={filterSuspicious} onChange={() => setFilterSuspicious(!filterSuspicious)} />
             Show Suspicious Only
          </label>
        </div>

        <button 
          onClick={handleAdd}
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[var(--primary)] text-white text-sm font-medium hover:bg-[var(--primary-hover)] transition-colors shadow-lg shadow-[var(--primary-subtle)] whitespace-nowrap"
        >
          <Plus size={16} />
          <span className="hidden sm:inline">Log Fuel Entry</span>
        </button>
      </div>

      {/* Main Table Card */}
      <div className="bg-[var(--bg-card)] rounded-xl border border-[var(--border)] overflow-hidden">
        <TransportFuelManagementTable 
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
      <TransportFuelManagementProfileModal 
        isOpen={isProfileOpen}
        record={selectedRecord}
        onClose={() => setIsProfileOpen(false)}
      />
      
      <TransportFuelManagementFormModal 
        isOpen={isFormOpen}
        record={selectedRecord}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSave}
      />
      
    </div>
  );
}
