"use client";

import React, { useEffect, useState } from 'react';
import { fetchStudentNotificationsData } from '../student_notifications_api/student_notifications_api';
import type { StudentNotificationsData, AppNotification, NotificationCategory } from '../student_notifications_types/student_notifications_types';
import StudentNotificationsList from './StudentNotificationsList';
import StudentNotificationsFilter from './StudentNotificationsFilter';
import { Loader2, CheckCheck } from 'lucide-react';

/**
 * RESPONSIBILITY: Orchestrates the Notifications center view.
 */
export default function StudentNotificationsMain() {
  const [data, setData] = useState<StudentNotificationsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [activeFilter, setActiveFilter] = useState<NotificationCategory>('All');

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetchStudentNotificationsData();
        if (isMounted) {
          if (response.success) {
            setData(response.data);
          } else {
            setError(response.message);
          }
        }
      } catch (err) {
        if (isMounted) setError("Failed to load notifications.");
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }
    loadData();
    return () => { isMounted = false; };
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center motion-safe:animate-pulse">
        <Loader2 className="animate-spin text-primary w-10 h-10" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="bg-danger/10 border border-danger text-danger p-4 rounded-md">
        {error || "No data found."}
      </div>
    );
  }

  const handleMarkAllRead = () => {
    setData(prev => prev ? {
      ...prev,
      notifications: prev.notifications.map(n => ({ ...n, isRead: true }))
    } : null);
  };

  const handleToggleRead = (id: string) => {
    setData(prev => prev ? {
      ...prev,
      notifications: prev.notifications.map(n => n.id === id ? { ...n, isRead: !n.isRead } : n)
    } : null);
  };

  const filteredNotifs = activeFilter === 'All' 
    ? data.notifications 
    : data.notifications.filter(n => n.category === activeFilter);

  const unreadCount = data.notifications.filter(n => !n.isRead).length;

  return (
    <div className="flex flex-col lg:flex-row gap-6 items-start motion-safe:animate-[fadeIn_0.3s_ease-out]">
      
      {/* Sidebar Filters */}
      <div className="w-full lg:w-64 shrink-0">
        <StudentNotificationsFilter 
          activeFilter={activeFilter} 
          onFilterChange={setActiveFilter} 
          counts={{
            All: data.notifications.length,
            Attendance: data.notifications.filter(n => n.category === 'Attendance').length,
            Homework: data.notifications.filter(n => n.category === 'Homework').length,
            Assignment: data.notifications.filter(n => n.category === 'Assignment').length,
            Exam: data.notifications.filter(n => n.category === 'Exam').length,
            Result: data.notifications.filter(n => n.category === 'Result').length,
            Fee: data.notifications.filter(n => n.category === 'Fee').length,
            Leave: data.notifications.filter(n => n.category === 'Leave').length,
            Event: data.notifications.filter(n => n.category === 'Event').length,
            Notice: data.notifications.filter(n => n.category === 'Notice').length,
            Certificate: data.notifications.filter(n => n.category === 'Certificate').length,
            System: data.notifications.filter(n => n.category === 'System').length,
          }}
        />
      </div>

      {/* Main List Area */}
      <div className="flex-1 w-full flex flex-col gap-4">
        
        {/* Top actions */}
        <div className="flex items-center justify-between bg-card border border-border p-4 rounded-xl shadow-sm">
          <div className="text-sm font-bold text-text-primary">
            {activeFilter === 'All' ? 'All Notifications' : `${activeFilter} Updates`}
            <span className="ml-2 px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs">
              {unreadCount} Unread
            </span>
          </div>
          <button 
            onClick={handleMarkAllRead}
            disabled={unreadCount === 0}
            className="flex items-center gap-2 text-xs font-bold text-text-secondary hover:text-primary transition-colors disabled:opacity-50 disabled:hover:text-text-secondary"
          >
            <CheckCheck size={16} /> Mark all as read
          </button>
        </div>

        {/* List */}
        <StudentNotificationsList 
          notifications={filteredNotifs} 
          onToggleRead={handleToggleRead} 
        />
      </div>

    </div>
  );
}
