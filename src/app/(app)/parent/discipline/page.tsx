"use client";

import React, { useState } from 'react';
import { 
  Scale, ChevronDown, CheckCircle2, ShieldAlert, 
  MessageSquare, UserCircle, Calendar, FileText, AlertTriangle, Activity, Users
} from 'lucide-react';
import clsx from 'clsx';

// Mock Data
const childrenList = [
  { id: 'c1', name: 'Aarav Kumar', class: 'Class 5', section: 'A', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&backgroundColor=b6e3f4' },
  { id: 'c2', name: 'Riya Kumar', class: 'Class 8', section: 'B', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=f4b6e3' },
];

const disciplineData = {
  'c1': {
    overview: 'Good Conduct',
    remarks: [
      { id: 1, date: '10 Oct, 2023', teacher: 'Mrs. Sharma', text: 'Aarav is very helpful to his peers.', type: 'Positive' },
      { id: 2, date: '05 Sep, 2023', teacher: 'Mr. Verma', text: 'Talkative in class, but participates well.', type: 'Neutral' }
    ],
    warnings: [],
    counselling: [],
    meetings: []
  },
  'c2': {
    overview: 'Needs Improvement',
    remarks: [
      { id: 1, date: '12 Oct, 2023', teacher: 'Mr. Gupta', text: 'Frequently late to the first period.', type: 'Negative' },
      { id: 2, date: '01 Oct, 2023', teacher: 'Mrs. Nair', text: 'Excellent project work in Physics.', type: 'Positive' }
    ],
    warnings: [
      { id: 1, date: '15 Oct, 2023', level: 'Level 1 Warning', reason: 'Repeated tardiness and disruption in class.', status: 'Active' }
    ],
    counselling: [
      { id: 1, date: '16 Oct, 2023', counselor: 'Dr. Meena (School Counselor)', topic: 'Time Management & Focus', status: 'Scheduled' }
    ],
    meetings: [
      { id: 1, date: '18 Oct, 2023', attendees: 'Parents, Class Teacher, Counselor', agenda: 'Discussing recent behavioral changes and academic focus.', status: 'Pending Parent Confirmation' }
    ]
  }
};

export default function DisciplinePage() {
  const [selectedChildId, setSelectedChildId] = useState(childrenList[0].id);
  const [showChildSwitcher, setShowChildSwitcher] = useState(false);
  
  const childInfo = childrenList.find(c => c.id === selectedChildId)!;
  const data = disciplineData[selectedChildId as keyof typeof disciplineData];

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header & Child Switcher */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-border shadow-sm">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight flex items-center gap-2">
            Discipline & Conduct <Scale className="text-indigo-500" size={28} />
          </h1>
          <p className="text-text-secondary text-sm mt-1">Track behavioral remarks, warnings, and counseling updates.</p>
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-[fadeIn_0.3s_ease-out]">
         
         {/* Left Column: Overview & Remarks */}
         <div className="lg:col-span-1 space-y-6">
            
            {/* Overview Card */}
            <div className={clsx(
              "rounded-2xl border p-6 text-center shadow-sm",
              data.overview === 'Good Conduct' ? "bg-emerald-50 border-emerald-200" : "bg-orange-50 border-orange-200"
            )}>
               <div className={clsx(
                 "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner",
                 data.overview === 'Good Conduct' ? "bg-emerald-100 text-emerald-600" : "bg-orange-100 text-orange-600"
               )}>
                 <Activity size={32} />
               </div>
               <h3 className="text-sm font-bold text-text-secondary uppercase tracking-wider mb-1">Overall Conduct</h3>
               <p className={clsx(
                 "text-2xl font-extrabold",
                 data.overview === 'Good Conduct' ? "text-emerald-700" : "text-orange-700"
               )}>{data.overview}</p>
            </div>

            {/* Behaviour Remarks */}
            <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
              <h3 className="font-bold text-text-primary mb-4 flex items-center gap-2 border-b border-border pb-2">
                <FileText size={18} className="text-indigo-500" /> Behaviour Remarks
              </h3>
              
              <div className="space-y-4">
                {data.remarks.map(remark => (
                  <div key={remark.id} className="flex gap-3">
                    <div className={clsx(
                      "w-2 h-2 rounded-full mt-1.5 flex-shrink-0",
                      remark.type === 'Positive' ? "bg-emerald-500" :
                      remark.type === 'Negative' ? "bg-red-500" : "bg-blue-500"
                    )}></div>
                    <div>
                      <p className="text-sm font-semibold text-text-primary">{remark.text}</p>
                      <p className="text-xs text-text-tertiary mt-1 font-bold">By {remark.teacher} on {remark.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

         </div>

         {/* Right Column: Incidents, Counselling, Meetings */}
         <div className="lg:col-span-2 space-y-6">
            
            {/* Important Info Note */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3 items-start">
               <ShieldAlert size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
               <div>
                 <p className="text-sm font-bold text-blue-900">Restricted View</p>
                 <p className="text-xs text-blue-700 mt-1">
                   In accordance with school policy, sensitive internal disciplinary actions are restricted. Only parent-permitted warnings and follow-ups are displayed below.
                 </p>
               </div>
            </div>

            {/* Warnings Section */}
            {data.warnings.length > 0 && (
              <div className="bg-white rounded-2xl border border-red-200 shadow-sm p-6 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-red-500"></div>
                <h3 className="font-bold text-red-700 mb-4 flex items-center gap-2">
                  <AlertTriangle size={18} /> Disciplinary Warnings
                </h3>
                <div className="space-y-3">
                  {data.warnings.map(warning => (
                    <div key={warning.id} className="bg-red-50 border border-red-100 rounded-xl p-4">
                      <div className="flex justify-between items-start mb-2">
                        <span className="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                          {warning.level}
                        </span>
                        <span className="text-xs font-bold text-red-500">{warning.date}</span>
                      </div>
                      <p className="text-sm font-semibold text-red-900">{warning.reason}</p>
                      <p className="text-xs text-red-600 font-medium mt-2">Status: <strong>{warning.status}</strong></p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Counselling & Follow-ups */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               
               {/* Counselling Info */}
               <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
                 <h3 className="font-bold text-text-primary mb-4 flex items-center gap-2">
                   <MessageSquare size={18} className="text-indigo-500" /> Counselling Info
                 </h3>
                 {data.counselling.length === 0 ? (
                   <p className="text-sm text-text-secondary text-center py-6 bg-page rounded-xl">No counselling sessions scheduled.</p>
                 ) : (
                   <div className="space-y-4">
                     {data.counselling.map(session => (
                       <div key={session.id} className="p-4 border border-border rounded-xl">
                         <p className="text-xs font-bold text-indigo-600 uppercase mb-1">{session.status}</p>
                         <h4 className="font-extrabold text-text-primary text-sm mb-2">{session.topic}</h4>
                         <div className="flex items-center gap-2 text-xs text-text-secondary font-medium">
                           <UserCircle size={14} /> {session.counselor}
                         </div>
                         <div className="flex items-center gap-2 text-xs text-text-secondary font-medium mt-1">
                           <Calendar size={14} /> {session.date}
                         </div>
                       </div>
                     ))}
                   </div>
                 )}
               </div>

               {/* Parent Meetings */}
               <div className="bg-white rounded-2xl border border-border shadow-sm p-6 flex flex-col">
                 <h3 className="font-bold text-text-primary mb-4 flex items-center gap-2">
                   <Users size={18} className="text-emerald-500" /> Parent Meetings
                 </h3>
                 {data.meetings.length === 0 ? (
                   <p className="text-sm text-text-secondary text-center py-6 bg-page rounded-xl flex-1">No discipline-related parent meetings requested.</p>
                 ) : (
                   <div className="flex-1 space-y-4">
                     {data.meetings.map(meeting => (
                       <div key={meeting.id} className="p-4 border border-border rounded-xl h-full flex flex-col">
                         <div className="flex justify-between items-start mb-2">
                            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                              {meeting.date}
                            </span>
                         </div>
                         <p className="text-sm font-semibold text-text-primary mb-3 flex-1">{meeting.agenda}</p>
                         <div className="text-xs text-text-secondary font-medium border-t border-border pt-2 mt-auto">
                           <strong>Attendees:</strong> {meeting.attendees}
                         </div>
                         <button className="w-full mt-3 py-2 text-xs font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                           Confirm Attendance
                         </button>
                       </div>
                     ))}
                   </div>
                 )}
               </div>

            </div>

         </div>

      </div>
    </div>
  );
}
