"use client";

import React, { useState } from 'react';
import { Search, Filter, Plus, MapPin, AlertCircle } from 'lucide-react';
import TransportStopsTable from './TransportStopsTable';
import TransportStopsProfileModal from './TransportStopsProfileModal';
import TransportStopsFormModal from './TransportStopsFormModal';
import { MOCK_TRANSPORT_STOPS } from '../transport_stops_constants/transport_stops.constants';
import type { TransportStop, TransportStopFormData } from '../transport_stops_types/transport_stops.types';

// RESPONSIBILITY: Main orchestrator for Route Stops module

export default function TransportStopsMain() {
  const [stops, setStops] = useState<TransportStop[]>(MOCK_TRANSPORT_STOPS);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRoute, setFilterRoute] = useState<string>('ALL');
  
  // Modals state
  const [selectedStop, setSelectedStop] = useState<TransportStop | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Handlers
  const handleView = (stop: TransportStop) => {
    setSelectedStop(stop);
    setIsProfileOpen(true);
  };

  const handleEdit = (stop: TransportStop) => {
    setSelectedStop(stop);
    setIsFormOpen(true);
  };

  const handleAdd = () => {
    setSelectedStop(null);
    setIsFormOpen(true);
  };

  const handleDelete = (stopId: string) => {
    if (window.confirm('Are you sure you want to delete this stop?')) {
      setStops(prev => prev.filter(s => s.id !== stopId));
    }
  };

  const handleSave = (data: TransportStopFormData) => {
    if (selectedStop) {
      // Edit
      setStops(prev => prev.map(s => s.id === selectedStop.id ? { 
        ...s, 
        ...data,
        routeName: data.routeId === 'RT-001' ? 'Route R-01 (City Center)' : 'Route R-02 (North Campus)'
      } : s));
    } else {
      // Add
      const newStop: TransportStop = {
        ...data,
        id: `STP-${Math.floor(Math.random() * 1000)}`,
        routeName: data.routeId === 'RT-001' ? 'Route R-01 (City Center)' : 'Route R-02 (North Campus)',
        assignedStudents: 0
      };
      setStops(prev => {
        // Simple logic to keep them sorted by sequence if on the same route
        const updated = [...prev, newStop];
        return updated.sort((a, b) => {
          if (a.routeId === b.routeId) return a.sequence - b.sequence;
          return 0;
        });
      });
    }
  };

  // Filter
  const filteredStops = stops.filter(s => {
    const matchesSearch = s.stopName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          s.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRoute = filterRoute === 'ALL' || s.routeId === filterRoute;
    return matchesSearch && matchesRoute;
  });

  const activeStops = stops.filter(s => s.status === 'ACTIVE').length;
  const closedStops = stops.filter(s => s.status === 'TEMPORARY_CLOSURE').length;

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header & Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)]">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <span className="text-2xl">🚏</span> Route Stops
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Manage sequences, pickup/drop times, and locations for each route.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(34,197,94,0.05)] border border-[rgba(34,197,94,0.2)]">
            <MapPin size={16} className="text-emerald-500" />
            <span className="text-sm font-semibold text-emerald-500">{activeStops} Active Stops</span>
          </div>
          {closedStops > 0 && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(239,68,68,0.05)] border border-[rgba(239,68,68,0.2)]">
              <AlertCircle size={16} className="text-red-500" />
              <span className="text-sm font-semibold text-red-500">{closedStops} Closed</span>
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
              placeholder="Search stop name, location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-md py-2 pl-9 pr-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
            />
          </div>
          
          <select
            value={filterRoute}
            onChange={(e) => setFilterRoute(e.target.value)}
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors hidden sm:block"
          >
            <option value="ALL">All Routes</option>
            <option value="RT-001">Route R-01 (City Center)</option>
            <option value="RT-002">Route R-02 (North Campus)</option>
          </select>
        </div>

        <button 
          onClick={handleAdd}
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[var(--primary)] text-white text-sm font-medium hover:bg-[var(--primary-hover)] transition-colors shadow-lg shadow-[var(--primary-subtle)] whitespace-nowrap"
        >
          <Plus size={16} />
          <span className="hidden sm:inline">Add Stop</span>
        </button>
      </div>

      {/* Main Table Card */}
      <div className="bg-[var(--bg-card)] rounded-xl border border-[var(--border)] overflow-hidden">
        <TransportStopsTable 
          stops={filteredStops} 
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        
        {/* Pagination Footer */}
        <div className="p-4 border-t border-[var(--border)] bg-[var(--bg-page)] flex items-center justify-between text-sm text-[var(--text-secondary)]">
          <div>Showing {filteredStops.length > 0 ? 1 : 0} to {filteredStops.length} of {stops.length} entries</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 rounded border border-[var(--border)] hover:bg-[var(--bg-input)] disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 rounded border border-[var(--primary)] bg-[rgba(250,204,21,0.1)] text-[var(--primary)]">1</button>
            <button className="px-3 py-1 rounded border border-[var(--border)] hover:bg-[var(--bg-input)] disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <TransportStopsProfileModal 
        isOpen={isProfileOpen}
        stop={selectedStop}
        onClose={() => setIsProfileOpen(false)}
      />
      
      <TransportStopsFormModal 
        isOpen={isFormOpen}
        stop={selectedStop}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSave}
      />
      
    </div>
  );
}
