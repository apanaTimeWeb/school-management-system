"use client";
// RESPONSIBILITY: Renders the Operations dashboard section containing tabs for Notices, Alerts, Leaves, and Events.
import React, { useState } from 'react';
import { ImportantNotice, DisciplineAlert, LeaveRequest, UpcomingEvent } from '../dashboard_types/PrincipalDashboard.types';
import { Bell, AlertTriangle, Calendar, FileText } from 'lucide-react';

interface PrincipalDashboardOperationsProps {
  notices: ImportantNotice[];
  alerts: DisciplineAlert[];
  leaves: LeaveRequest[];
  events: UpcomingEvent[];
  isLoading: boolean;
}

type TabType = 'notices' | 'alerts' | 'leaves' | 'events';

export default function PrincipalDashboardOperations({
  notices, alerts, leaves, events, isLoading
}: PrincipalDashboardOperationsProps) {
  const [activeTab, setActiveTab] = useState<TabType>('notices');

  if (isLoading) {
    return (
      <div className="bg-card border border-border rounded-lg p-5 min-h-[300px] flex flex-col">
        <div className="flex gap-2 mb-4 border-b border-border pb-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-8 w-24 bg-skeleton-base animate-pulse rounded" />
          ))}
        </div>
        <div className="flex-1 space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-16 w-full bg-skeleton-base animate-pulse rounded" />
          ))}
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'notices', label: 'Notices', icon: <Bell size={14} className="text-info" />, count: notices.length },
    { id: 'alerts', label: 'Alerts', icon: <AlertTriangle size={14} className="text-danger" />, count: alerts.length },
    { id: 'leaves', label: 'Leave Req', icon: <FileText size={14} className="text-warning" />, count: leaves.length },
    { id: 'events', label: 'Events', icon: <Calendar size={14} className="text-success" />, count: events.length },
  ];

  return (
    <div className="bg-card border border-border rounded-lg flex flex-col h-full overflow-hidden">
      <div className="flex border-b border-border bg-black/20 overflow-x-auto custom-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as TabType)}
            className={`flex items-center gap-2 px-4 py-3 text-[13px] font-medium whitespace-nowrap transition-colors duration-200 border-b-2 focus-visible:outline-none focus-visible:bg-white/5 ${
              activeTab === tab.id
                ? 'text-primary border-primary bg-primary/5'
                : 'text-text-secondary border-transparent hover:text-text-primary hover:bg-white/5'
            }`}
          >
            {tab.icon}
            {tab.label}
            <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
              activeTab === tab.id ? 'bg-primary text-black' : 'bg-white/10 text-text-secondary'
            }`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>
      
      <div className="flex-1 overflow-y-auto custom-scrollbar p-3">
        {activeTab === 'notices' && (
          <div className="space-y-2">
            {notices.length === 0 ? <p className="text-text-secondary text-[13px] text-center p-4">No important notices.</p> : notices.map(n => (
              <div key={n.id} className="p-3 bg-page border border-border/50 rounded hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-[14px] font-medium text-text-primary">{n.title}</h3>
                  {n.priority === 'high' && <span className="px-1.5 py-0.5 rounded text-[10px] bg-danger/20 text-danger border border-danger/30 uppercase">High</span>}
                </div>
                <div className="text-[11px] text-text-secondary">{n.date}</div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'alerts' && (
          <div className="space-y-2">
            {alerts.length === 0 ? <p className="text-text-secondary text-[13px] text-center p-4">No discipline alerts.</p> : alerts.map(a => (
              <div key={a.id} className={`p-3 border rounded hover:-translate-y-0.5 transition-all duration-200 ${
                a.severity === 'high' ? 'bg-danger/10 border-danger/30' : a.severity === 'medium' ? 'bg-warning/10 border-warning/30' : 'bg-page border-border/50'
              }`}>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-[14px] font-medium text-text-primary">{a.studentName} <span className="text-[11px] text-text-secondary">({a.class})</span></h3>
                  <span className={`text-[11px] font-medium ${a.severity === 'high' ? 'text-danger' : a.severity === 'medium' ? 'text-warning' : 'text-info'}`}>{a.incident}</span>
                </div>
                <div className="text-[11px] text-text-secondary">{a.date}</div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'leaves' && (
          <div className="space-y-2">
            {leaves.length === 0 ? <p className="text-text-secondary text-[13px] text-center p-4">No leave requests.</p> : leaves.map(l => (
              <div key={l.id} className="p-3 bg-page border border-border/50 rounded flex justify-between items-center hover:-translate-y-0.5 transition-all duration-200">
                <div>
                  <h3 className="text-[14px] font-medium text-text-primary">{l.requesterName} <span className="text-[10px] uppercase text-text-secondary bg-white/5 px-1 rounded ml-1">{l.role}</span></h3>
                  <div className="text-[12px] text-text-secondary mt-1">{l.dateRange} &bull; {l.reason}</div>
                </div>
                <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.dispatchEvent(new CustomEvent('open-coming-soon', { detail: 'Action completed successfully!' })); }} className="px-3 py-1 bg-primary text-white text-[12px] font-medium rounded hover:bg-primary-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-page">Review</button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'events' && (
          <div className="space-y-2">
            {events.length === 0 ? <p className="text-text-secondary text-[13px] text-center p-4">No upcoming events.</p> : events.map(e => (
              <div key={e.id} className="p-3 bg-page border border-border/50 rounded flex gap-3 hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex flex-col items-center justify-center bg-white/5 rounded px-2 py-1 min-w-[50px]">
                  <span className="text-[11px] text-primary font-semibold uppercase">{new Date(e.date).toLocaleString('default', { month: 'short' })}</span>
                  <span className="text-[16px] font-bold text-text-primary">{new Date(e.date).getDate()}</span>
                </div>
                <div>
                  <h3 className="text-[14px] font-medium text-text-primary">{e.title}</h3>
                  <div className="text-[12px] text-text-secondary mt-1">{e.time} &bull; {e.location}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
