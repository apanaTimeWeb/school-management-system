import React from 'react';
import { Calendar, AlertCircle, Bell, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

const recentAlerts = [
  { id: 1, title: 'Server Maintenance Scheduled', time: '2 hours ago', type: 'warning' },
  { id: 2, title: 'Fee Defaulters List Generated', time: '5 hours ago', type: 'danger' },
  { id: 3, title: 'New Admissions Target Reached', time: '1 day ago', type: 'success' },
  { id: 4, title: 'System Update Completed', time: '1 day ago', type: 'info' },
];

const upcomingEvents = [
  { id: 1, title: 'Annual Sports Day', date: 'Oct 15, 2026', time: '09:00 AM', location: 'Main Ground' },
  { id: 2, title: 'PTM - Class X & XII', date: 'Oct 20, 2026', time: '10:00 AM', location: 'School Auditorium' },
  { id: 3, title: 'Diwali Break Starts', date: 'Oct 28, 2026', time: 'All Day', location: 'N/A' },
];

export function AlertsAndNotifications() {
  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
          <Bell className="text-primary" size={20} />
          Alerts & Notifications
        </h3>
        <button className="text-sm font-semibold text-info hover:underline">View All</button>
      </div>
      
      <div className="flex flex-col gap-4 flex-1">
        {recentAlerts.map((alert) => (
          <div key={alert.id} className="flex gap-3 items-start p-3 rounded-lg hover:bg-bg-page transition-colors border border-transparent hover:border-border cursor-pointer">
            <div className={clsx(
              "mt-0.5 w-2 h-2 rounded-full flex-shrink-0",
              alert.type === 'warning' ? 'bg-warning' : 
              alert.type === 'danger' ? 'bg-danger' : 
              alert.type === 'success' ? 'bg-success' : 'bg-info'
            )} />
            <div className="flex-1">
              <h4 className="text-sm font-bold text-text-primary mb-0.5">{alert.title}</h4>
              <p className="text-xs font-semibold text-text-secondary">{alert.time}</p>
            </div>
            <ArrowRight size={14} className="text-text-disabled" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function UpcomingEventsList() {
  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
          <Calendar className="text-secondary" size={20} />
          Upcoming Events
        </h3>
        <button className="text-sm font-semibold text-info hover:underline">Calendar</button>
      </div>
      
      <div className="flex flex-col gap-4 flex-1">
        {upcomingEvents.map((event) => (
          <div key={event.id} className="flex gap-4 items-center p-3 rounded-lg border border-border/50 bg-bg-page">
            <div className="bg-secondary/10 px-3 py-2 rounded-md flex flex-col items-center justify-center border border-secondary/20 min-w-[60px]">
              <span className="text-xs font-bold text-secondary uppercase">{event.date.split(' ')[0]}</span>
              <span className="text-lg font-bold text-text-primary">{event.date.split(' ')[1].replace(',', '')}</span>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-text-primary mb-1">{event.title}</h4>
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                <span className="text-xs font-semibold text-text-secondary">{event.time}</span>
                <span className="text-xs font-semibold text-text-secondary">• {event.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ExamsAndGrievancesList() {
  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
          <AlertCircle className="text-danger" size={20} />
          Exams & Grievances
        </h3>
      </div>
      
      <div className="flex flex-col gap-6 flex-1">
        <div>
          <h4 className="text-sm font-bold text-text-secondary uppercase tracking-wider mb-3">Upcoming Exams</h4>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center p-3 rounded-lg bg-bg-page border border-border/50">
              <span className="font-semibold text-sm text-text-primary">Mid-Term: Class X</span>
              <span className="text-xs font-bold text-info bg-info-bg px-2 py-1 rounded">Starts in 3 Days</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-bg-page border border-border/50">
              <span className="font-semibold text-sm text-text-primary">Weekly Unit Tests</span>
              <span className="text-xs font-bold text-text-secondary">Every Friday</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold text-text-secondary uppercase tracking-wider mb-3">Recent Complaints / Grievances</h4>
          <div className="flex flex-col gap-3">
            <div className="p-3 rounded-lg bg-danger-bg/50 border border-danger/20 border-l-4 border-l-danger text-sm">
              <p className="font-bold text-danger mb-1">Bus Route 4 Delay Issue</p>
              <p className="text-xs text-text-secondary">Reported by 5 parents. Status: Unresolved</p>
            </div>
            <div className="p-3 rounded-lg bg-warning-bg/50 border border-warning/20 border-l-4 border-l-warning text-sm">
              <p className="font-bold text-warning mb-1">Cafeteria Hygiene Check</p>
              <p className="text-xs text-text-secondary">Reported by Student Council. Status: In Review</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
