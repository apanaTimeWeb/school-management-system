"use client";

import React, { useState } from 'react';
import { Send, BellRing, Filter, Search } from 'lucide-react';
import TransportNotificationsList from './TransportNotificationsList';
import TransportNotificationComposerModal from './TransportNotificationComposerModal';
import { MOCK_NOTIFICATIONS } from '../transport_notifications_constants/transport_notifications.constants';
import type { TransportNotification, TransportNotificationFormData, NotificationCategory } from '../transport_notifications_types/transport_notifications.types';

// RESPONSIBILITY: Main orchestrator for Notifications module

export default function TransportNotificationsMain() {
  const [notifications, setNotifications] = useState<TransportNotification[]>(
    // Sort by newest first
    MOCK_NOTIFICATIONS.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
  );
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('ALL');
  const [filterUnread, setFilterUnread] = useState(false);
  
  // Modals state
  const [isComposerOpen, setIsComposerOpen] = useState(false);

  // Handlers
  const handleMarkAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
  };

  const handleMarkAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  const handleSendBroadcast = (data: TransportNotificationFormData) => {
    const newNotif: TransportNotification = {
      id: `NOTIF-${new Date().getFullYear()}-${Math.floor(Math.random() * 10000)}`,
      category: data.category,
      title: data.title,
      message: data.message,
      audience: data.audience,
      timestamp: new Date().toISOString(),
      isRead: true, // Sender inherently read it
      sentBy: 'Transport Manager (You)'
    };
    
    setNotifications(prev => [newNotif, ...prev]);
  };

  // Filter
  const filteredNotifications = notifications.filter(n => {
    const matchesSearch = n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          n.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'ALL' || n.category === filterCategory;
    const matchesUnread = filterUnread ? !n.isRead : true;
    
    return matchesSearch && matchesCategory && matchesUnread;
  });

  // Calculate Metrics
  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header & Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <span className="text-2xl">🔔</span> Notification Center
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Manage automatic system alerts and send custom broadcasts to parents and staff.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(59,130,246,0.05)] border border-[rgba(59,130,246,0.2)]">
            <BellRing size={16} className="text-blue-500" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] leading-none mb-0.5">Unread Alerts</span>
              <span className="text-sm font-bold text-blue-500 leading-none">{unreadCount} New</span>
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
              placeholder="Search notifications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-md py-2 pl-9 pr-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
            />
          </div>
          
          <div className="relative">
             <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] pointer-events-none" />
             <select
               value={filterCategory}
               onChange={(e) => setFilterCategory(e.target.value)}
               className="bg-[var(--bg-card)] border border-[var(--border)] rounded-md py-2 pl-8 pr-3 text-sm font-medium text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors cursor-pointer appearance-none max-w-[150px] sm:max-w-none"
             >
               <option value="ALL">All Categories</option>
               <option value="BUS_DELAYED">Bus Delays</option>
               <option value="ROUTE_CHANGED">Route Changes</option>
               <option value="PICKUP_ALERT">Pickup/Drop Logs</option>
               <option value="VEHICLE_MAINTENANCE">Maintenance</option>
               <option value="EMERGENCY_ALERT">Emergencies</option>
             </select>
          </div>

          <label className="flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)] cursor-pointer">
             <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${filterUnread ? 'bg-[var(--primary)] border-[var(--primary)]' : 'bg-[var(--bg-input)] border-[var(--border)]'}`}>
                {filterUnread && <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
             </div>
             <input type="checkbox" className="hidden" checked={filterUnread} onChange={() => setFilterUnread(!filterUnread)} />
             Unread Only
          </label>
        </div>

        <button 
          onClick={() => setIsComposerOpen(true)}
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[var(--primary)] text-white text-sm font-medium hover:bg-[var(--primary-hover)] transition-colors shadow-lg shadow-[var(--primary-subtle)] whitespace-nowrap"
        >
          <Send size={16} />
          <span className="hidden sm:inline">Send Broadcast</span>
        </button>
      </div>

      {/* Main List */}
      <div className="flex-1 min-h-0 relative">
        <TransportNotificationsList 
          notifications={filteredNotifications}
          onMarkAsRead={handleMarkAsRead}
          onMarkAllAsRead={handleMarkAllAsRead}
        />
      </div>

      {/* Modals */}
      <TransportNotificationComposerModal 
        isOpen={isComposerOpen}
        onClose={() => setIsComposerOpen(false)}
        onSend={handleSendBroadcast}
      />
      
    </div>
  );
}
