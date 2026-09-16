"use client";

import React, { useState } from 'react';
import { 
  Siren, ChevronDown, CheckCircle2, 
  AlertTriangle, CloudRain, CalendarX2, Bus, 
  FileWarning, Megaphone, Clock, ShieldAlert,
  Info
} from 'lucide-react';
import clsx from 'clsx';

// Mock Data
const childrenList = [
  { id: 'c1', name: 'Aarav Kumar', class: 'Class 5', section: 'A', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&backgroundColor=b6e3f4' },
  { id: 'c2', name: 'Riya Kumar', class: 'Class 8', section: 'B', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=f4b6e3' },
];

const MOCK_ALERTS = [
  { 
    id: 'AL-1', 
    type: 'Weather/Safety Notice', 
    title: 'Severe Rainfall Warning', 
    message: 'Due to severe rainfall and waterlogging alerts from the local authorities, the school will remain closed for all classes tomorrow. Online assignments will be posted.', 
    time: '30 mins ago',
    severity: 'critical',
    icon: <CloudRain size={24} />
  },
  { 
    id: 'AL-2', 
    type: 'Transport Alert', 
    title: 'Bus Route 4 Breakdown', 
    message: 'Bus Route 4 has experienced a minor mechanical issue near Central Park. A backup bus has been dispatched. Students will be delayed by approximately 45 minutes.', 
    time: '2 hours ago',
    severity: 'high',
    icon: <Bus size={24} />
  },
  { 
    id: 'AL-3', 
    type: 'Holiday Change', 
    title: 'Local Election Holiday', 
    message: 'Please be informed that Friday will be observed as a holiday due to the upcoming local elections. The scheduled unit tests have been postponed to Monday.', 
    time: 'Yesterday',
    severity: 'medium',
    icon: <CalendarX2 size={24} />
  },
  { 
    id: 'AL-4', 
    type: 'Exam Change', 
    title: 'Science Practical Rescheduled', 
    message: 'Class 8 Science Practicals initially scheduled for 20th Oct have been moved to 22nd Oct due to lab maintenance.', 
    time: '2 days ago',
    severity: 'low',
    icon: <FileWarning size={24} />
  }
];

export default function EmergencyAlertsPage() {
  const [selectedChildId, setSelectedChildId] = useState(childrenList[0].id);
  const [showChildSwitcher, setShowChildSwitcher] = useState(false);

  const childInfo = childrenList.find(c => c.id === selectedChildId)!;

  const getSeverityStyle = (severity: string) => {
    switch (severity) {
      case 'critical': 
        return 'bg-red-50 border-red-500 text-red-700 shadow-[0_0_15px_rgba(239,68,68,0.2)] animate-[pulse_3s_infinite]';
      case 'high': 
        return 'bg-orange-50 border-orange-500 text-orange-800';
      case 'medium': 
        return 'bg-yellow-50 border-yellow-500 text-yellow-800';
      case 'low': 
        return 'bg-blue-50 border-blue-400 text-blue-800';
      default: 
        return 'bg-gray-50 border-gray-400 text-gray-800';
    }
  };

  const getBadgeStyle = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-600 text-white';
      case 'high': return 'bg-orange-500 text-white';
      case 'medium': return 'bg-yellow-500 text-white';
      case 'low': return 'bg-blue-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-6">
      
      {/* Header & Child Switcher */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-red-200 shadow-sm relative overflow-hidden">
        
        {/* Decorative alert background */}
        <div className="absolute -top-10 -right-10 text-red-50 opacity-50 rotate-12 pointer-events-none">
           <ShieldAlert size={150} />
        </div>

        <div className="relative z-10">
          <h1 className="text-2xl md:text-3xl font-extrabold text-red-700 tracking-tight flex items-center gap-3">
            Emergency & Important Alerts <Siren className="animate-pulse" size={28} />
          </h1>
          <p className="text-red-900/70 font-medium text-sm mt-1">High-priority notices and urgent school announcements.</p>
        </div>
        
        <div className="relative z-30">
          <button 
            onClick={() => setShowChildSwitcher(!showChildSwitcher)}
            className="flex items-center gap-3 px-4 py-2 bg-white border border-red-200 rounded-xl hover:bg-red-50 transition-colors focus:outline-none shadow-sm"
          >
            <img src={childInfo.avatar} alt={childInfo.name} className="w-8 h-8 rounded-full border border-red-300" />
            <div className="text-left">
              <p className="text-sm font-bold text-red-900 leading-none">{childInfo.name}</p>
              <p className="text-[10px] font-bold text-red-600 uppercase mt-1">{childInfo.class} - {childInfo.section}</p>
            </div>
            <ChevronDown size={16} className={clsx("text-red-700 transition-transform", showChildSwitcher && "rotate-180")} />
          </button>
          
          {showChildSwitcher && (
            <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-border rounded-xl shadow-xl overflow-hidden animate-[fadeIn_0.15s_ease-out]">
              {childrenList.map((child) => (
                <button
                  key={child.id}
                  onClick={() => { setSelectedChildId(child.id); setShowChildSwitcher(false); }}
                  className={clsx(
                    "w-full flex items-center justify-between px-4 py-3 text-left transition-colors hover:bg-page",
                    selectedChildId === child.id ? "bg-red-50 border-l-4 border-red-500" : "border-l-4 border-transparent"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <img src={child.avatar} alt={child.name} className="w-8 h-8 rounded-full bg-page border border-border" />
                    <div>
                      <p className="text-sm font-bold text-text-primary">{child.name}</p>
                      <p className="text-xs text-text-secondary">{child.class} - {child.section}</p>
                    </div>
                  </div>
                  {selectedChildId === child.id && <CheckCircle2 size={16} className="text-red-500" />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm p-2 md:p-4">
        
        <div className="flex items-center gap-2 mb-6 px-2 text-text-secondary font-medium text-sm">
          <Info size={16} /> 
          These notices are broadcasted directly from the school administration.
        </div>

        <div className="space-y-4">
          {MOCK_ALERTS.map(alert => (
            <div 
              key={alert.id}
              className={clsx(
                "border-l-4 rounded-xl p-5 md:p-6 transition-all duration-300 hover:scale-[1.01]",
                getSeverityStyle(alert.severity)
              )}
            >
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={clsx(
                    "w-12 h-12 rounded-full flex items-center justify-center shrink-0",
                    getBadgeStyle(alert.severity)
                  )}>
                    {alert.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                       <span className={clsx("text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider", getBadgeStyle(alert.severity))}>
                         {alert.type}
                       </span>
                    </div>
                    <h3 className="text-lg font-extrabold">{alert.title}</h3>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold opacity-70 shrink-0 sm:ml-auto">
                  <Clock size={14} /> {alert.time}
                </div>
              </div>
              
              <div className="pl-0 sm:pl-15 ml-0 sm:ml-15 border-t border-black/10 pt-4 mt-2">
                <p className="font-medium text-[15px] leading-relaxed">
                  {alert.message}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
