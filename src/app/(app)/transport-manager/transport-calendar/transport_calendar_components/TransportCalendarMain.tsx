"use client";

import React, { useState } from 'react';
import { Plus, Search, Calendar as CalendarIcon, Filter, Info } from 'lucide-react';
import TransportCalendarView from './TransportCalendarView';
import TransportCalendarEventModal from './TransportCalendarEventModal';
import { MOCK_CALENDAR_EVENTS } from '../transport_calendar_constants/transport_calendar.constants';
import type { TransportCalendarEvent, TransportCalendarEventFormData } from '../transport_calendar_types/transport_calendar.types';

// RESPONSIBILITY: Main orchestrator for Transport Calendar module

export default function TransportCalendarMain() {
  const [events, setEvents] = useState<TransportCalendarEvent[]>(MOCK_CALENDAR_EVENTS);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('ALL');
  
  // Modals state
  const [selectedEvent, setSelectedEvent] = useState<TransportCalendarEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handlers
  const handleEdit = (event: TransportCalendarEvent) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setSelectedEvent(null);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this calendar event?")) {
       setEvents(prev => prev.filter(e => e.id !== id));
    }
  };

  const handleSave = (data: TransportCalendarEventFormData) => {
    
    // Parse comma separated strings back to arrays
    const affectedRoutesArray = data.affectedRoutes.split(',').map(s => s.trim()).filter(Boolean);
    const affectedVehiclesArray = data.affectedVehicles.split(',').map(s => s.trim()).filter(Boolean);

    const enrichData: TransportCalendarEvent = {
      id: selectedEvent ? selectedEvent.id : `CAL-${new Date().getFullYear()}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
      type: data.type,
      title: data.title,
      startDate: data.startDate,
      endDate: data.endDate,
      startTime: data.startTime || undefined,
      endTime: data.endTime || undefined,
      description: data.description,
      affectedRoutes: affectedRoutesArray.length > 0 ? affectedRoutesArray : ['ALL'],
      affectedVehicles: affectedVehiclesArray.length > 0 ? affectedVehiclesArray : ['ALL'],
      createdBy: 'Transport Manager (You)'
    };

    if (selectedEvent) {
      setEvents(prev => prev.map(e => e.id === selectedEvent.id ? enrichData : e));
    } else {
      setEvents(prev => [...prev, enrichData]);
    }
  };

  // Filter
  const filteredEvents = events.filter(e => {
    const matchesSearch = e.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          e.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'ALL' || e.type === filterType;
    
    return matchesSearch && matchesType;
  });

  // Calculate Metrics
  const activeNow = events.filter(e => {
     const today = new Date();
     today.setHours(0,0,0,0);
     const start = new Date(e.startDate);
     start.setHours(0,0,0,0);
     const end = new Date(e.endDate);
     end.setHours(23,59,59,999);
     return today >= start && today <= end;
  }).length;

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header & Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <span className="text-2xl">📅</span> Transport Calendar
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Manage holidays, no-transport days, special trips, and route diversions.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(16,185,129,0.05)] border border-[rgba(16,185,129,0.2)]">
            <Info size={16} className="text-emerald-500" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] leading-none mb-0.5">Active Events</span>
              <span className="text-sm font-bold text-emerald-500 leading-none">{activeNow} Today</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Row */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
            <input
              type="text"
              placeholder="Search events..."
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
               className="bg-[var(--bg-card)] border border-[var(--border)] rounded-md py-2 pl-8 pr-3 text-sm font-medium text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors cursor-pointer appearance-none max-w-[150px] sm:max-w-none"
             >
               <option value="ALL">All Event Types</option>
               <option value="HOLIDAY">Holidays</option>
               <option value="NO_TRANSPORT_DAY">No-Transport Days</option>
               <option value="SPECIAL_TRIP">Special Trips</option>
               <option value="ROUTE_CHANGE">Route Changes</option>
             </select>
          </div>
        </div>

        <button 
          onClick={handleAdd}
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[var(--primary)] text-white text-sm font-medium hover:bg-[var(--primary-hover)] transition-colors shadow-lg shadow-[var(--primary-subtle)] whitespace-nowrap"
        >
          <Plus size={16} />
          <span className="hidden sm:inline">Add Event</span>
        </button>
      </div>

      {/* Main List */}
      <div className="flex-1 min-h-0 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl overflow-y-auto">
        <TransportCalendarView 
          events={filteredEvents}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      {/* Modals */}
      <TransportCalendarEventModal 
        isOpen={isModalOpen}
        record={selectedEvent}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
      />
      
    </div>
  );
}
