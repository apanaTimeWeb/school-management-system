"use client";

import React, { useState } from 'react';
import { Search, Filter, Plus, Clock, AlertTriangle, Bus } from 'lucide-react';
import TransportDailyTripsTable from './TransportDailyTripsTable';
import TransportDailyTripsProfileModal from './TransportDailyTripsProfileModal';
import TransportDailyTripsFormModal from './TransportDailyTripsFormModal';
import { MOCK_DAILY_TRIPS } from '../transport_daily_trips_constants/transport_daily_trips.constants';
import type { DailyTrip, DailyTripFormData } from '../transport_daily_trips_types/transport_daily_trips.types';

// RESPONSIBILITY: Main orchestrator for Daily Trips module

export default function TransportDailyTripsMain() {
  const [trips, setTrips] = useState<DailyTrip[]>(MOCK_DAILY_TRIPS);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('ALL');
  
  // Modals state
  const [selectedTrip, setSelectedTrip] = useState<DailyTrip | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Handlers
  const handleView = (trip: DailyTrip) => {
    setSelectedTrip(trip);
    setIsProfileOpen(true);
  };

  const handleEdit = (trip: DailyTrip) => {
    setSelectedTrip(trip);
    setIsFormOpen(true);
  };

  const handleAdd = () => {
    setSelectedTrip(null);
    setIsFormOpen(true);
  };

  const handleDelete = (tripId: string) => {
    if (window.confirm('Are you sure you want to delete this trip schedule?')) {
      setTrips(prev => prev.filter(t => t.id !== tripId));
    }
  };

  const handleSave = (data: DailyTripFormData) => {
    const enrichData = {
      ...data,
      routeName: data.routeId === 'RT-001' ? 'Route R-01 (City Center)' : 'Route R-02 (North Campus)',
      vehicleNumber: data.vehicleId === 'VEH-001' ? 'MH-12-AB-1234' : 'MH-12-CD-5678',
    };

    if (selectedTrip) {
      // Edit
      setTrips(prev => prev.map(t => t.id === selectedTrip.id ? { 
        ...t, 
        ...enrichData 
      } : t));
    } else {
      // Add
      const newTrip: DailyTrip = {
        ...enrichData,
        id: `TRP-${Math.floor(Math.random() * 10000)}`,
        actualStartTime: null,
        actualEndTime: null,
        studentsBoarded: 0,
        totalCapacity: 40,
        currentLocation: null
      };
      setTrips(prev => [newTrip, ...prev]);
    }
  };

  // Filter
  const filteredTrips = trips.filter(t => {
    const matchesSearch = t.routeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          t.driverName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          t.vehicleNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'ALL' || t.tripType === filterType;
    return matchesSearch && matchesType;
  });

  const activeCount = trips.filter(t => t.status === 'IN_TRANSIT').length;
  const delayedCount = trips.filter(t => t.status === 'DELAYED').length;

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header & Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)]">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <span className="text-2xl">🚦</span> Today's Trips
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Monitor live transit, schedules, and delays for all daily routes.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(34,197,94,0.05)] border border-[rgba(34,197,94,0.2)]">
            <Bus size={16} className="text-emerald-500" />
            <span className="text-sm font-semibold text-emerald-500">{activeCount} In Transit</span>
          </div>
          {delayedCount > 0 && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(217,70,239,0.05)] border border-[rgba(217,70,239,0.2)]">
              <AlertTriangle size={16} className="text-purple-500" />
              <span className="text-sm font-semibold text-purple-500">{delayedCount} Delayed</span>
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
              placeholder="Search route, driver, vehicle..."
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
            <option value="ALL">All Trip Types</option>
            <option value="MORNING_PICKUP">Morning Pickup</option>
            <option value="AFTERNOON_DROP">Afternoon Drop</option>
            <option value="SPECIAL_PICKUP">Special Pickup</option>
            <option value="SPECIAL_DROP">Special Drop</option>
          </select>
        </div>

        <button 
          onClick={handleAdd}
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[var(--primary)] text-white text-sm font-medium hover:bg-[var(--primary-hover)] transition-colors shadow-lg shadow-[var(--primary-subtle)] whitespace-nowrap"
        >
          <Plus size={16} />
          <span className="hidden sm:inline">Schedule Trip</span>
        </button>
      </div>

      {/* Main Table Card */}
      <div className="bg-[var(--bg-card)] rounded-xl border border-[var(--border)] overflow-hidden">
        <TransportDailyTripsTable 
          trips={filteredTrips} 
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        
        {/* Pagination Footer */}
        <div className="p-4 border-t border-[var(--border)] bg-[var(--bg-page)] flex items-center justify-between text-sm text-[var(--text-secondary)]">
          <div>Showing {filteredTrips.length > 0 ? 1 : 0} to {filteredTrips.length} of {trips.length} entries</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 rounded border border-[var(--border)] hover:bg-[var(--bg-input)] disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 rounded border border-[var(--primary)] bg-[rgba(250,204,21,0.1)] text-[var(--primary)]">1</button>
            <button className="px-3 py-1 rounded border border-[var(--border)] hover:bg-[var(--bg-input)] disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <TransportDailyTripsProfileModal 
        isOpen={isProfileOpen}
        trip={selectedTrip}
        onClose={() => setIsProfileOpen(false)}
      />
      
      <TransportDailyTripsFormModal 
        isOpen={isFormOpen}
        trip={selectedTrip}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSave}
      />
      
    </div>
  );
}
