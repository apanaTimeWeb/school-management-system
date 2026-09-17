"use client";

import React from 'react';
import { Bell, Clock, ShieldAlert, Bus, Users, Wrench, FileText, CheckCircle2 } from 'lucide-react';
import type { TransportNotification, NotificationCategory } from '../transport_notifications_types/transport_notifications.types';
import { NOTIFICATION_CONFIGS } from '../transport_notifications_constants/transport_notifications.constants';

// RESPONSIBILITY: Renders the feed/list of notifications

interface TransportNotificationsListProps {
  notifications: TransportNotification[];
  onMarkAsRead: (id: string) => void;
  onMarkAllAsRead: () => void;
}

export default function TransportNotificationsList({ notifications, onMarkAsRead, onMarkAllAsRead }: TransportNotificationsListProps) {
  
  const getIconForCategory = (category: NotificationCategory, color: string) => {
    switch(category) {
      case 'EMERGENCY_ALERT': return <ShieldAlert size={20} color={color} />;
      case 'BUS_DELAYED': 
      case 'ROUTE_CHANGED': return <Clock size={20} color={color} />;
      case 'VEHICLE_CHANGED': 
      case 'TRANSPORT_ASSIGNMENT': return <Bus size={20} color={color} />;
      case 'DRIVER_CHANGED': return <Users size={20} color={color} />;
      case 'PICKUP_ALERT': 
      case 'DROP_ALERT': return <CheckCircle2 size={20} color={color} />;
      case 'VEHICLE_MAINTENANCE': return <Wrench size={20} color={color} />;
      case 'DOCUMENT_EXPIRY': 
      case 'TRANSPORT_REQUEST': return <FileText size={20} color={color} />;
      default: return <Bell size={20} color={color} />;
    }
  };

  const formatTimeAgo = (isoString: string) => {
    const now = new Date();
    const past = new Date(isoString);
    const diffMs = now.getTime() - past.getTime();
    
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} min${diffMins > 1 ? 's' : ''} ago`;
    if (diffHours < 24) return `${diffHours} hr${diffHours > 1 ? 's' : ''} ago`;
    if (diffDays === 1) return 'Yesterday';
    return `${diffDays} days ago`;
  };

  const hasUnread = notifications.some(n => !n.isRead);

  return (
    <div className="w-full flex flex-col h-full bg-[var(--bg-card)] rounded-xl border border-[var(--border)] overflow-hidden">
      
      {/* Sub-Header for the List */}
      <div className="p-4 border-b border-[var(--border)] flex justify-between items-center bg-[var(--bg-card)] sticky top-0 z-10">
        <h3 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
          Inbox Feed 
          <span className="bg-[var(--primary)] text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
            {notifications.length}
          </span>
        </h3>
        
        {hasUnread && (
          <button 
            onClick={onMarkAllAsRead}
            className="text-xs font-semibold text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors"
          >
            Mark all as read
          </button>
        )}
      </div>

      {/* List Content */}
      <div className="flex-1 overflow-y-auto">
        {notifications.length > 0 ? (
          <div className="flex flex-col divide-y divide-[var(--border)]">
            {notifications.map((notification) => {
              const config = NOTIFICATION_CONFIGS[notification.category] || NOTIFICATION_CONFIGS.CUSTOM;
              const isCritical = notification.category === 'EMERGENCY_ALERT';

              return (
                <div 
                  key={notification.id} 
                  className={`p-4 hover:bg-[rgba(250,204,21,0.02)] transition-colors flex gap-4 cursor-default ${!notification.isRead ? 'bg-[var(--bg-input)]/50' : 'opacity-80'}`}
                  onClick={() => { if (!notification.isRead) onMarkAsRead(notification.id); }}
                >
                  
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 relative ${isCritical && !notification.isRead ? 'animate-pulse' : ''}`} style={{ backgroundColor: config.bg }}>
                     {getIconForCategory(notification.category, config.iconColor)}
                     {!notification.isRead && (
                       <span className="absolute -top-1 -right-1 w-3 h-3 bg-[var(--primary)] border-2 border-[var(--bg-card)] rounded-full"></span>
                     )}
                  </div>

                  {/* Body */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <h4 className={`text-sm font-bold truncate ${!notification.isRead ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'} ${isCritical ? 'text-red-500' : ''}`}>
                        {notification.title}
                      </h4>
                      <span className="text-[10px] text-[var(--text-secondary)] whitespace-nowrap flex-shrink-0 font-medium">
                        {formatTimeAgo(notification.timestamp)}
                      </span>
                    </div>
                    
                    <p className={`text-xs mb-2 leading-relaxed ${!notification.isRead ? 'text-[var(--text-secondary)]' : 'text-[var(--text-secondary)] opacity-80'}`}>
                      {notification.message}
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                       <span 
                         className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border"
                         style={{ backgroundColor: config.bg, color: config.iconColor, borderColor: config.iconColor + '40' }}
                       >
                         {config.label}
                       </span>
                       
                       <span className="text-[10px] text-[var(--text-secondary)] flex items-center gap-1">
                         Sent to: {notification.audience.join(', ')}
                       </span>

                       <span className="text-[10px] text-[var(--text-secondary)] ml-auto">
                         By: {notification.sentBy}
                       </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center p-12 text-center text-[var(--text-secondary)]">
            <Bell size={48} className="opacity-20 mb-4" />
            <h3 className="text-base font-semibold text-[var(--text-primary)] mb-1">All Caught Up</h3>
            <p className="text-sm">There are no new notifications or alerts at this time.</p>
          </div>
        )}
      </div>
    </div>
  );
}
