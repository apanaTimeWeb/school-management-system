"use client";

import React, { useState } from 'react';
import { 
  CalendarDays, ChevronDown, CheckCircle2, AlertTriangle, 
  XCircle, Clock, PieChart, Bell, Calendar as CalendarIcon, Filter
} from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';

// Mock Data
const childrenList = [
  { id: 'c1', name: 'Aarav Kumar', class: 'Class 5', section: 'A', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&backgroundColor=b6e3f4' },
  { id: 'c2', name: 'Riya Kumar', class: 'Class 8', section: 'B', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=f4b6e3' },
];

const attendanceData = {
  'c1': {
    percentage: 92,
    totalDays: 120,
    present: 110,
    absent: 6,
    late: 2,
    leave: 2,
    todayStatus: 'Present',
    lowAttendanceAlert: false,
    subjectAttendance: [
      { subject: 'Mathematics', present: 45, total: 48, percentage: 93 },
      { subject: 'Science', present: 42, total: 45, percentage: 93 },
      { subject: 'English', present: 44, total: 48, percentage: 91 },
      { subject: 'Hindi', present: 38, total: 42, percentage: 90 },
    ],
    history: [
      { date: '2023-10-10', status: 'Present', type: 'Daily' },
      { date: '2023-10-09', status: 'Late', type: 'Daily', reason: 'Heavy Traffic' },
      { date: '2023-10-08', status: 'Absent', type: 'Daily' },
      { date: '2023-10-07', status: 'Present', type: 'Daily' },
    ]
  },
  'c2': {
    percentage: 72,
    totalDays: 120,
    present: 86,
    absent: 28,
    late: 4,
    leave: 2,
    todayStatus: 'Absent',
    lowAttendanceAlert: true,
    subjectAttendance: [
      { subject: 'Mathematics', present: 35, total: 48, percentage: 72 },
      { subject: 'Physics', present: 32, total: 45, percentage: 71 },
      { subject: 'Chemistry', present: 34, total: 48, percentage: 70 },
      { subject: 'English', present: 38, total: 42, percentage: 90 },
    ],
    history: [
      { date: '2023-10-10', status: 'Absent', type: 'Daily' },
      { date: '2023-10-09', status: 'Absent', type: 'Daily' },
      { date: '2023-10-08', status: 'Present', type: 'Daily' },
      { date: '2023-10-07', status: 'Present', type: 'Daily' },
    ]
  }
};

// Generate calendar days for October (mock)
const calendarDays = Array.from({ length: 31 }, (_, i) => {
  const day = i + 1;
  let status = 'Present';
  if ([5, 12, 19, 26].includes(day)) status = 'Weekend';
  else if ([8, 9].includes(day)) status = 'Absent';
  else if (day === 3) status = 'Late';
  else if (day === 15) status = 'Leave';
  else if (day > 10) status = 'Future';
  return { day, status };
});

export default function AttendancePage() {
  const [selectedChildId, setSelectedChildId] = useState(childrenList[0].id);
  const [showChildSwitcher, setShowChildSwitcher] = useState(false);
  const [viewMode, setViewMode] = useState<'daily' | 'subject'>('daily');

  const childInfo = childrenList.find(c => c.id === selectedChildId)!;
  const attendance = attendanceData[selectedChildId as keyof typeof attendanceData];

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header & Child Switcher */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-border shadow-sm">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">Attendance Record</h1>
          <p className="text-text-secondary text-sm mt-1">Monitor daily and subject-wise attendance.</p>
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

      {/* Alerts */}
      {attendance.lowAttendanceAlert && (
        <div className="bg-red-50 border border-red-200 p-4 rounded-xl flex items-start md:items-center gap-4 animate-[pulse_2s_infinite]">
          <div className="p-2 bg-red-100 rounded-lg text-red-600 flex-shrink-0">
            <AlertTriangle size={24} />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-bold text-red-800">Low Attendance Alert!</h3>
            <p className="text-xs text-red-600 mt-0.5">Your child's attendance ({attendance.percentage}%) has fallen below the minimum required criteria (75%). Please contact the class teacher immediately.</p>
          </div>
          <button className="px-4 py-2 bg-red-600 text-white text-xs font-bold rounded-lg hover:bg-red-700 transition-colors flex-shrink-0">
             Contact Teacher
          </button>
        </div>
      )}

      {/* Overview Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        
        <div className="col-span-2 md:col-span-1 bg-white rounded-2xl border border-border p-4 shadow-sm flex flex-col justify-center items-center text-center relative overflow-hidden">
           <div className="w-16 h-16 relative flex items-center justify-center mb-2">
             <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
               <path className="text-page stroke-current" strokeWidth="4" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
               <path className={clsx("stroke-current", attendance.percentage >= 75 ? "text-emerald-500" : "text-red-500")} strokeDasharray={`${attendance.percentage}, 100`} strokeWidth="4" strokeLinecap="round" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
             </svg>
             <div className="absolute inset-0 flex items-center justify-center">
               <span className={clsx("text-sm font-extrabold", attendance.percentage >= 75 ? "text-emerald-600" : "text-red-600")}>{attendance.percentage}%</span>
             </div>
           </div>
           <h3 className="text-xs font-bold text-text-tertiary uppercase tracking-wider">Overall</h3>
        </div>

        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 flex flex-col justify-between group hover:shadow-md transition-all hover:bg-emerald-100">
           <CheckCircle2 size={24} className="text-emerald-500 mb-2 group-hover:scale-110 transition-transform" />
           <div>
             <p className="text-2xl font-extrabold text-emerald-700">{attendance.present}</p>
             <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider mt-1">Present Days</p>
           </div>
        </div>

        <div className="bg-red-50 border border-red-100 rounded-2xl p-4 flex flex-col justify-between group hover:shadow-md transition-all hover:bg-red-100">
           <XCircle size={24} className="text-red-500 mb-2 group-hover:scale-110 transition-transform" />
           <div>
             <p className="text-2xl font-extrabold text-red-700">{attendance.absent}</p>
             <p className="text-[10px] font-bold text-red-600 uppercase tracking-wider mt-1">Absent Days</p>
           </div>
        </div>

        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 flex flex-col justify-between group hover:shadow-md transition-all hover:bg-orange-100">
           <Clock size={24} className="text-orange-500 mb-2 group-hover:scale-110 transition-transform" />
           <div>
             <p className="text-2xl font-extrabold text-orange-700">{attendance.late}</p>
             <p className="text-[10px] font-bold text-orange-600 uppercase tracking-wider mt-1">Late Days</p>
           </div>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex flex-col justify-between group hover:shadow-md transition-all hover:bg-blue-100">
           <CalendarDays size={24} className="text-blue-500 mb-2 group-hover:scale-110 transition-transform" />
           <div>
             <p className="text-2xl font-extrabold text-blue-700">{attendance.leave}</p>
             <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mt-1">Leaves Taken</p>
           </div>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Calendar & History */}
        <div className="lg:col-span-2 space-y-6">
          
          <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
            <div className="px-6 py-4 border-b border-border bg-page/50 flex justify-between items-center">
              <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
                <CalendarIcon className="text-indigo-500" size={20} /> Attendance Calendar
              </h3>
              <div className="flex bg-white border border-border rounded-lg overflow-hidden p-0.5">
                <button 
                  onClick={() => setViewMode('daily')}
                  className={clsx("px-3 py-1.5 text-xs font-bold rounded-md transition-colors", viewMode === 'daily' ? "bg-indigo-500 text-white shadow-sm" : "text-text-secondary hover:text-text-primary")}
                >
                  Daily
                </button>
                <button 
                  onClick={() => setViewMode('subject')}
                  className={clsx("px-3 py-1.5 text-xs font-bold rounded-md transition-colors", viewMode === 'subject' ? "bg-indigo-500 text-white shadow-sm" : "text-text-secondary hover:text-text-primary")}
                >
                  Subject-wise
                </button>
              </div>
            </div>

            {viewMode === 'daily' ? (
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-text-primary">October 2023</h4>
                  <div className="flex gap-3 text-[10px] font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> P</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500"></span> A</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-orange-500"></span> L</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span> LV</span>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-text-tertiary mb-2">
                  <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {/* Empty cells for starting day */}
                  <div className="aspect-square"></div><div className="aspect-square"></div>
                  
                  {calendarDays.map((d, i) => {
                    let bgClass = "bg-page text-text-primary border border-border";
                    if (d.status === 'Present') bgClass = "bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-sm";
                    else if (d.status === 'Absent') bgClass = "bg-red-50 text-red-700 border border-red-200 shadow-sm";
                    else if (d.status === 'Late') bgClass = "bg-orange-50 text-orange-700 border border-orange-200 shadow-sm";
                    else if (d.status === 'Leave') bgClass = "bg-blue-50 text-blue-700 border border-blue-200 shadow-sm";
                    else if (d.status === 'Future') bgClass = "bg-white text-text-tertiary border border-dashed border-border opacity-50";
                    else if (d.status === 'Weekend') bgClass = "bg-bg-secondary text-text-tertiary border border-border";

                    return (
                      <div key={i} className={clsx("aspect-square rounded-xl flex items-center justify-center text-sm font-bold transition-transform hover:scale-105 cursor-default", bgClass)}>
                        {d.day}
                      </div>
                    )
                  })}
                </div>
              </div>
            ) : (
              <div className="p-6 space-y-4">
                 {attendance.subjectAttendance.map((sub, i) => (
                   <div key={i} className="flex flex-col md:flex-row items-center gap-4 p-4 border border-border rounded-xl bg-page/30">
                     <div className="flex-1 w-full text-left">
                       <h4 className="font-bold text-text-primary">{sub.subject}</h4>
                       <p className="text-xs text-text-secondary">Lectures Attended: {sub.present}/{sub.total}</p>
                     </div>
                     <div className="flex-1 w-full flex items-center gap-3">
                       <div className="flex-1 h-2 w-full bg-page rounded-full overflow-hidden">
                         <div 
                           className={clsx("h-full rounded-full", sub.percentage >= 75 ? "bg-emerald-500" : "bg-red-500")}
                           style={{ width: `${sub.percentage}%` }}
                         ></div>
                       </div>
                       <span className={clsx("text-sm font-bold min-w-[3rem] text-right", sub.percentage >= 75 ? "text-emerald-600" : "text-red-600")}>
                         {sub.percentage}%
                       </span>
                     </div>
                   </div>
                 ))}
              </div>
            )}
          </div>
          
        </div>

        {/* Right Column: Status & History */}
        <div className="space-y-6">
          
          {/* Today's Status */}
          <div className="bg-gradient-to-br from-pink-600 to-purple-600 rounded-2xl p-6 text-white shadow-md text-center">
            <h3 className="text-xs font-bold uppercase tracking-wider text-pink-200 mb-2">Today's Status</h3>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full backdrop-blur-md mb-4 border border-white/30">
              {attendance.todayStatus === 'Present' && <CheckCircle2 size={40} className="text-white" />}
              {attendance.todayStatus === 'Absent' && <XCircle size={40} className="text-white" />}
              {attendance.todayStatus === 'Late' && <Clock size={40} className="text-white" />}
            </div>
            <p className="text-2xl font-extrabold mb-1">{attendance.todayStatus}</p>
            <p className="text-sm opacity-90">10 October, 2023</p>
          </div>

          {/* Recent History */}
          <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
            <div className="px-6 py-4 border-b border-border bg-page/50 flex justify-between items-center">
              <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider flex items-center gap-2">
                <Clock size={16} className="text-pink-500" /> Recent History
              </h3>
              <button className="text-text-secondary hover:text-pink-600 transition-colors"><Filter size={14}/></button>
            </div>
            <div className="divide-y divide-border">
              {attendance.history.map((hist, idx) => (
                <div key={idx} className="p-4 flex items-center justify-between hover:bg-page/30 transition-colors cursor-default">
                  <div>
                    <p className="text-sm font-bold text-text-primary">{hist.date}</p>
                    <p className="text-xs text-text-secondary">{hist.type} Attendance {(hist as any).reason && <span className="text-red-500 font-semibold">• {(hist as any).reason}</span>}</p>
                  </div>
                  <span className={clsx(
                    "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border",
                    hist.status === 'Present' ? "bg-emerald-50 text-emerald-600 border-emerald-200" :
                    hist.status === 'Absent' ? "bg-red-50 text-red-600 border-red-200" :
                    hist.status === 'Late' ? "bg-orange-50 text-orange-600 border-orange-200" :
                    "bg-blue-50 text-blue-600 border-blue-200"
                  )}>
                    {hist.status}
                  </span>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-border bg-page text-center">
               <button className="text-xs font-bold text-pink-600 hover:underline">View Full History</button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
