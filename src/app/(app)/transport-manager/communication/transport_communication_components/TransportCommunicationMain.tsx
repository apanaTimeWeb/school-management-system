"use client";

import React, { useState } from 'react';
import { Send, Megaphone, Search, Filter } from 'lucide-react';
import TransportCommunicationTable from './TransportCommunicationTable';
import TransportCommunicationProfileModal from './TransportCommunicationProfileModal';
import TransportCommunicationComposerModal from './TransportCommunicationComposerModal';
import { MOCK_COMMUNICATIONS } from '../transport_communication_constants/transport_communication.constants';
import type { TransportCommunication, TransportCommunicationFormData } from '../transport_communication_types/transport_communication.types';

// RESPONSIBILITY: Main orchestrator for Communication module

export default function TransportCommunicationMain() {
  const [records, setRecords] = useState<TransportCommunication[]>(MOCK_COMMUNICATIONS);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('ALL');
  
  // Modals state
  const [selectedRecord, setSelectedRecord] = useState<TransportCommunication | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isComposerOpen, setIsComposerOpen] = useState(false);

  // Handlers
  const handleView = (record: TransportCommunication) => {
    setSelectedRecord(record);
    setIsProfileOpen(true);
  };

  const handleSend = (data: TransportCommunicationFormData) => {
    
    const isScheduled = data.scheduleForLater;

    const newRecord: TransportCommunication = {
      id: `MSG-${new Date().getFullYear()}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
      type: data.type,
      title: data.title,
      message: data.message,
      targetAudience: data.targetAudience,
      channel: data.channel,
      sentBy: 'Transport Manager (You)',
      sentAt: isScheduled ? data.scheduledTime || null : new Date().toISOString(),
      status: isScheduled ? 'SCHEDULED' : 'SENT',
      deliveryStats: isScheduled ? null : {
        totalTargeted: Math.floor(Math.random() * 500) + 50, // Mock stats for demo
        delivered: 0, // In a real app this updates asynchronously
        failed: 0
      }
    };
    
    // Auto-update mock stats after 2 seconds to simulate delivery
    if (!isScheduled) {
       setTimeout(() => {
          setRecords(prev => prev.map(r => {
             if (r.id === newRecord.id && r.deliveryStats) {
                const total = r.deliveryStats.totalTargeted;
                const failed = Math.floor(Math.random() * 5); // 0-4 fails
                return {
                   ...r,
                   deliveryStats: {
                      totalTargeted: total,
                      delivered: total - failed,
                      failed: failed
                   }
                };
             }
             return r;
          }));
       }, 2000);
    }

    setRecords(prev => [newRecord, ...prev]);
  };

  // Filter
  const filteredRecords = records.filter(r => {
    const matchesSearch = r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          r.targetAudience.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'ALL' || r.type === filterType;
    
    return matchesSearch && matchesType;
  });

  // Calculate Metrics
  const totalSentThisMonth = records.filter(r => r.status === 'SENT').length;
  const scheduledCount = records.filter(r => r.status === 'SCHEDULED').length;

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header & Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <span className="text-2xl">📢</span> Communication Hub
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Broadcast notices, parent updates, and emergency alerts across multiple channels.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(16,185,129,0.05)] border border-[rgba(16,185,129,0.2)]">
            <Send size={16} className="text-emerald-500" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] leading-none mb-0.5">Campaigns</span>
              <span className="text-sm font-bold text-emerald-500 leading-none">{totalSentThisMonth} Sent</span>
            </div>
          </div>
          {scheduledCount > 0 && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(59,130,246,0.05)] border border-[rgba(59,130,246,0.2)]">
              <Clock size={16} className="text-blue-500" />
              <div className="flex flex-col">
                 <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] leading-none mb-0.5">Upcoming</span>
                 <span className="text-sm font-bold text-blue-500 leading-none">{scheduledCount} Scheduled</span>
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
              placeholder="Search Subject or Audience..."
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
               className="bg-[var(--bg-card)] border border-[var(--border)] rounded-md py-2 pl-8 pr-3 text-sm font-medium text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors cursor-pointer appearance-none max-w-[160px] sm:max-w-none"
             >
               <option value="ALL">All Message Types</option>
               <option value="TRANSPORT_NOTICE">General Notices</option>
               <option value="PARENT_NOTIFICATION">Parent Alerts</option>
               <option value="ROUTE_ANNOUNCEMENT">Route Announcements</option>
               <option value="STAFF_COMMUNICATION">Staff Comms</option>
               <option value="EMERGENCY_COMMUNICATION">Emergencies</option>
             </select>
          </div>
        </div>

        <button 
          onClick={() => setIsComposerOpen(true)}
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[var(--primary)] text-white text-sm font-medium hover:bg-[var(--primary-hover)] transition-colors shadow-lg shadow-[var(--primary-subtle)] whitespace-nowrap"
        >
          <Megaphone size={16} />
          <span className="hidden sm:inline">Compose Message</span>
        </button>
      </div>

      {/* Main Table Card */}
      <div className="bg-[var(--bg-card)] rounded-xl border border-[var(--border)] overflow-hidden">
        <TransportCommunicationTable 
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
      <TransportCommunicationProfileModal 
        isOpen={isProfileOpen}
        record={selectedRecord}
        onClose={() => setIsProfileOpen(false)}
      />
      
      <TransportCommunicationComposerModal 
        isOpen={isComposerOpen}
        onClose={() => setIsComposerOpen(false)}
        onSend={handleSend}
      />
      
    </div>
  );
}

function Clock(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
