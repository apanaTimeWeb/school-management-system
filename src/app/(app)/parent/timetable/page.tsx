"use client";

import React, { useState } from 'react';
import { 
  Calendar, Clock, UserSquare2, MapPin, ChevronDown, CheckCircle2, 
  AlertCircle, Info, Coffee, CalendarDays, RefreshCcw
} from 'lucide-react';
import clsx from 'clsx';

// Mock Data
const childrenList = [
  { id: 'c1', name: 'Aarav Kumar', class: 'Class 5', section: 'A', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&backgroundColor=b6e3f4' },
  { id: 'c2', name: 'Riya Kumar', class: 'Class 8', section: 'B', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=f4b6e3' },
];

const timetableData = {
  'c1': {
    alerts: [
      { type: 'substitute', message: 'Mrs. Sharma is on leave today. Mr. Raj will take Mathematics for Period 1.' },
      { type: 'change', message: 'PT period has been swapped with Library today.' }
    ],
    daily: [
      { period: '1', time: '08:00 AM - 08:45 AM', subject: 'Mathematics', teacher: 'Mr. Raj (Sub)', originalTeacher: 'Mrs. Sharma', room: 'Room 101', type: 'class', isSubstitute: true },
      { period: '2', time: '08:45 AM - 09:30 AM', subject: 'Science', teacher: 'Mrs. Verma', room: 'Lab 1', type: 'class' },
      { period: '3', time: '09:30 AM - 10:15 AM', subject: 'English', teacher: 'Ms. Davis', room: 'Room 101', type: 'class' },
      { period: 'Break', time: '10:15 AM - 10:45 AM', subject: 'Snack Break', type: 'break' },
      { period: '4', time: '10:45 AM - 11:30 AM', subject: 'Hindi', teacher: 'Mr. Gupta', room: 'Room 101', type: 'class' },
      { period: '5', time: '11:30 AM - 12:15 PM', subject: 'Library', teacher: 'Mrs. Librarian', room: 'Library', type: 'class', isSwapped: true },
    ],
    weekly: [
      { day: 'Monday', subjects: ['Math', 'Science', 'English', 'Break', 'Hindi', 'Library'] },
      { day: 'Tuesday', subjects: ['Science', 'Math', 'Hindi', 'Break', 'English', 'PT'] },
      { day: 'Wednesday', subjects: ['English', 'Hindi', 'Science', 'Break', 'Math', 'Art'] },
      { day: 'Thursday', subjects: ['Math', 'Science', 'English', 'Break', 'Hindi', 'Music'] },
      { day: 'Friday', subjects: ['Hindi', 'English', 'Math', 'Break', 'Science', 'PT'] },
    ]
  },
  'c2': {
    alerts: [],
    daily: [
      { period: '1', time: '08:00 AM - 08:45 AM', subject: 'Physics', teacher: 'Dr. Singh', room: 'Lab 2', type: 'class' },
      { period: '2', time: '08:45 AM - 09:30 AM', subject: 'Chemistry', teacher: 'Mrs. Patel', room: 'Lab 3', type: 'class' },
      { period: '3', time: '09:30 AM - 10:15 AM', subject: 'Mathematics', teacher: 'Mr. Rajesh', room: 'Room 205', type: 'class' },
      { period: 'Break', time: '10:15 AM - 10:45 AM', subject: 'Snack Break', type: 'break' },
      { period: '4', time: '10:45 AM - 11:30 AM', subject: 'English', teacher: 'Ms. Davis', room: 'Room 205', type: 'class' },
      { period: '5', time: '11:30 AM - 12:15 PM', subject: 'History', teacher: 'Mr. Mehta', room: 'Room 205', type: 'class' },
    ],
    weekly: [
      { day: 'Monday', subjects: ['Physics', 'Chem', 'Math', 'Break', 'English', 'History'] },
      { day: 'Tuesday', subjects: ['Math', 'Physics', 'History', 'Break', 'Chem', 'English'] },
      { day: 'Wednesday', subjects: ['English', 'Math', 'Chem', 'Break', 'History', 'Physics'] },
      { day: 'Thursday', subjects: ['Chem', 'History', 'Physics', 'Break', 'English', 'Math'] },
      { day: 'Friday', subjects: ['History', 'English', 'Math', 'Break', 'Physics', 'Chem'] },
    ]
  }
};

export default function TimetablePage() {
  const [selectedChildId, setSelectedChildId] = useState(childrenList[0].id);
  const [showChildSwitcher, setShowChildSwitcher] = useState(false);
  const [viewMode, setViewMode] = useState<'daily' | 'weekly'>('daily');

  const childInfo = childrenList.find(c => c.id === selectedChildId)!;
  const timetable = timetableData[selectedChildId as keyof typeof timetableData];

  // Map subjects to colors for visual consistency
  const getSubjectColor = (subject: string) => {
    const s = subject.toLowerCase();
    if (s.includes('math')) return 'from-blue-500 to-blue-600 bg-blue-50 text-blue-700 border-blue-200';
    if (s.includes('sci') || s.includes('phy') || s.includes('chem')) return 'from-emerald-500 to-emerald-600 bg-emerald-50 text-emerald-700 border-emerald-200';
    if (s.includes('eng') || s.includes('hin')) return 'from-purple-500 to-purple-600 bg-purple-50 text-purple-700 border-purple-200';
    if (s.includes('his') || s.includes('geo') || s.includes('sst')) return 'from-orange-500 to-orange-600 bg-orange-50 text-orange-700 border-orange-200';
    if (s.includes('break')) return 'from-slate-400 to-slate-500 bg-slate-50 text-slate-700 border-slate-200';
    return 'from-pink-500 to-pink-600 bg-pink-50 text-pink-700 border-pink-200'; // fallback
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header & Child Switcher */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-border shadow-sm">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">Class Timetable</h1>
          <p className="text-text-secondary text-sm mt-1">View daily schedule, teachers, and classroom details.</p>
        </div>
        
        <div className="relative z-30">
          <button 
            onClick={() => setShowChildSwitcher(!showChildSwitcher)}
            className="flex items-center gap-3 px-4 py-2 bg-pink-50 border border-pink-200 rounded-xl hover:bg-pink-100 transition-colors focus:outline-none"
          >
            <img src={childInfo.avatar} alt={childInfo.name} className="w-8 h-8 rounded-full border border-pink-300" />
            <div className="text-left">
              <p className="text-sm font-bold text-pink-700 leading-none">{childInfo.name}</p>
              <p className="text-[10px] font-bold text-pink-500 uppercase mt-1">{childInfo.class} - {childInfo.section}</p>
            </div>
            <ChevronDown size={16} className={clsx("text-pink-600 transition-transform", showChildSwitcher && "rotate-180")} />
          </button>
          
          {showChildSwitcher && (
            <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-border rounded-xl shadow-xl overflow-hidden animate-[fadeIn_0.15s_ease-out]">
              {childrenList.map((child) => (
                <button
                  key={child.id}
                  onClick={() => { setSelectedChildId(child.id); setShowChildSwitcher(false); }}
                  className={clsx(
                    "w-full flex items-center justify-between px-4 py-3 text-left transition-colors hover:bg-page",
                    selectedChildId === child.id ? "bg-pink-50 border-l-4 border-pink-500" : "border-l-4 border-transparent"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <img src={child.avatar} alt={child.name} className="w-8 h-8 rounded-full bg-page border border-border" />
                    <div>
                      <p className="text-sm font-bold text-text-primary">{child.name}</p>
                      <p className="text-xs text-text-secondary">{child.class} - {child.section}</p>
                    </div>
                  </div>
                  {selectedChildId === child.id && <CheckCircle2 size={16} className="text-pink-500" />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Alerts / Timetable Changes */}
      {timetable.alerts.length > 0 && (
        <div className="space-y-3 animate-[fadeIn_0.3s_ease-out]">
          {timetable.alerts.map((alert, idx) => (
            <div key={idx} className={clsx(
              "flex items-start md:items-center gap-4 p-4 rounded-xl border",
              alert.type === 'substitute' ? "bg-orange-50 border-orange-200" : "bg-blue-50 border-blue-200"
            )}>
              <div className={clsx(
                "p-2 rounded-lg flex-shrink-0",
                alert.type === 'substitute' ? "bg-orange-100 text-orange-600" : "bg-blue-100 text-blue-600"
              )}>
                {alert.type === 'substitute' ? <UserSquare2 size={24} /> : <RefreshCcw size={24} />}
              </div>
              <div>
                <h3 className={clsx("text-sm font-bold", alert.type === 'substitute' ? "text-orange-800" : "text-blue-800")}>
                  {alert.type === 'substitute' ? "Substitute Teacher Alert" : "Timetable Change"}
                </h3>
                <p className={clsx("text-xs mt-0.5", alert.type === 'substitute' ? "text-orange-700" : "text-blue-700")}>
                  {alert.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View Toggle & Content */}
      <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
        
        {/* Toolbar */}
        <div className="px-6 py-4 border-b border-border bg-page/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex bg-white border border-border rounded-lg overflow-hidden p-0.5 shadow-sm">
            <button 
              onClick={() => setViewMode('daily')}
              className={clsx("flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-md transition-all", viewMode === 'daily' ? "bg-pink-500 text-white shadow-sm" : "text-text-secondary hover:text-pink-600")}
            >
              <Calendar size={16} /> Daily View
            </button>
            <button 
              onClick={() => setViewMode('weekly')}
              className={clsx("flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-md transition-all", viewMode === 'weekly' ? "bg-pink-500 text-white shadow-sm" : "text-text-secondary hover:text-pink-600")}
            >
              <CalendarDays size={16} /> Weekly Grid
            </button>
          </div>
          
          {viewMode === 'daily' && (
            <div className="flex items-center gap-2 text-sm font-bold text-text-primary">
              <span className="px-3 py-1 bg-page rounded-full border border-border">Today: Tuesday</span>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="p-6">
          
          {viewMode === 'daily' ? (
            <div className="space-y-4 relative before:absolute before:inset-0 before:ml-10 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {timetable.daily.map((slot, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  
                  {/* Timeline Node */}
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-pink-100 shadow-sm z-10 absolute left-6 md:left-1/2 -translate-x-1/2">
                     <span className="text-[10px] font-extrabold text-pink-600">{slot.period}</span>
                  </div>

                  {/* Spacer for MD view */}
                  <div className="hidden md:block w-1/2"></div>
                  
                  {/* Card Content */}
                  <div className="w-[calc(100%-4rem)] md:w-1/2 pl-8 md:pl-0 md:px-8 py-2">
                    {slot.type === 'break' ? (
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 border-dashed flex items-center justify-center gap-3 text-slate-500 shadow-sm">
                         <Coffee size={24} />
                         <div className="text-center md:text-left">
                           <h4 className="font-bold text-slate-700">{slot.subject}</h4>
                           <p className="text-xs font-semibold">{slot.time}</p>
                         </div>
                      </div>
                    ) : (
                      <div className={clsx("p-4 rounded-2xl border shadow-sm transition-all hover:shadow-md hover:-translate-y-1 relative overflow-hidden group/card", getSubjectColor(slot.subject).split(' ').slice(2).join(' '))}>
                        
                        {/* Status badges */}
                        {(slot.isSubstitute || slot.isSwapped) && (
                           <div className="absolute top-3 right-3 flex gap-1">
                              {slot.isSubstitute && <span className="bg-orange-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1"><UserSquare2 size={10}/> Sub</span>}
                              {slot.isSwapped && <span className="bg-blue-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1"><RefreshCcw size={10}/> Swapped</span>}
                           </div>
                        )}

                        <div className="flex items-center gap-2 mb-3">
                          <Clock size={14} className="opacity-70" />
                          <span className="text-xs font-bold opacity-80">{slot.time}</span>
                        </div>
                        
                        <h4 className="text-lg font-extrabold mb-3">{slot.subject}</h4>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mt-auto">
                          <div className="flex items-center gap-2">
                            <div className="p-1.5 rounded-md bg-white/50 backdrop-blur-sm">
                              <UserSquare2 size={14} />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-xs font-bold">{slot.teacher}</span>
                              {slot.isSubstitute && <span className="text-[9px] font-bold opacity-75 line-through">{slot.originalTeacher}</span>}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="p-1.5 rounded-md bg-white/50 backdrop-blur-sm">
                              <MapPin size={14} />
                            </div>
                            <span className="text-xs font-bold">{slot.room}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              ))}
            </div>
          ) : (
            
            /* Weekly View Grid */
            <div className="overflow-x-auto pb-4 custom-scrollbar">
              <div className="min-w-[800px]">
                <div className="grid grid-cols-6 gap-2 mb-2">
                  <div className="p-3 text-center text-xs font-bold text-text-tertiary uppercase tracking-wider">Day / Period</div>
                  {[1,2,3,4,5].map(p => (
                    <div key={p} className="p-3 text-center bg-page rounded-xl text-xs font-bold text-text-primary border border-border shadow-sm">
                      Period {p}
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2">
                  {timetable.weekly.map((dayRow, idx) => (
                    <div key={idx} className="grid grid-cols-6 gap-2 items-stretch">
                      <div className="p-3 bg-white border border-border rounded-xl flex items-center justify-center text-sm font-bold text-text-primary shadow-sm">
                        {dayRow.day}
                      </div>
                      
                      {dayRow.subjects.map((sub, i) => {
                        const styleClass = getSubjectColor(sub);
                        return (
                          <div key={i} className={clsx(
                            "p-3 rounded-xl border flex flex-col items-center justify-center text-center shadow-sm transition-transform hover:scale-105 cursor-default",
                            sub.includes('Break') ? "bg-slate-50 border-slate-200 border-dashed text-slate-500" : styleClass.split(' ').slice(2).join(' ')
                          )}>
                            {sub.includes('Break') ? <Coffee size={16} className="mb-1 opacity-50"/> : null}
                            <span className={clsx("text-xs font-bold", sub.includes('Break') ? "opacity-75" : "")}>{sub}</span>
                          </div>
                        )
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
      
    </div>
  );
}
