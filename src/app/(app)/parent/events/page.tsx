"use client";

import React, { useState } from 'react';
import { 
  Trophy, ChevronDown, CheckCircle2, CalendarDays, MapPin, 
  UserPlus, FileCheck2, Award, Download, Users, Palette, Activity
} from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';

// Mock Data
const childrenList = [
  { id: 'c1', name: 'Aarav Kumar', class: 'Class 5', section: 'A', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&backgroundColor=b6e3f4' },
  { id: 'c2', name: 'Riya Kumar', class: 'Class 8', section: 'B', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=f4b6e3' },
];

const allEvents = [
  { id: 1, type: 'Sports', title: 'Annual Inter-School Athletics', date: '25 Nov, 2023', venue: 'Main Ground', isRegistrationOpen: true, targetClasses: ['Class 5', 'Class 6', 'Class 7', 'Class 8'] },
  { id: 2, type: 'Cultural', title: 'Diwali Cultural Fest', date: '18 Oct, 2023', venue: 'Auditorium', isRegistrationOpen: false, targetClasses: ['All'] },
  { id: 3, type: 'Workshop', title: 'Robotics Workshop - Basics', date: '05 Nov, 2023', venue: 'Science Lab 2', isRegistrationOpen: true, targetClasses: ['Class 7', 'Class 8', 'Class 9'] },
  { id: 4, type: 'Competition', title: 'State Level Spelling Bee', date: '10 Nov, 2023', venue: 'Hall B', isRegistrationOpen: true, targetClasses: ['Class 3', 'Class 4', 'Class 5'] },
];

const participationData = {
  'c1': [
    { id: 4, type: 'Competition', title: 'State Level Spelling Bee', status: 'Registered', role: 'Participant', result: '', certificate: null },
    { id: 5, type: 'Sports', title: 'Summer Football Camp', status: 'Completed', role: 'Team Captain', result: '1st Runner Up', certificate: 'Football_Cert.pdf' }
  ],
  'c2': [
    { id: 3, type: 'Workshop', title: 'Robotics Workshop - Basics', status: 'Registered', role: 'Attendee', result: '', certificate: null },
    { id: 6, type: 'Cultural', title: 'Annual Dance Competition', status: 'Completed', role: 'Lead Dancer', result: 'Winner', certificate: 'Dance_Winner_Cert.pdf' }
  ]
};

export default function EventsPage() {
  const [selectedChildId, setSelectedChildId] = useState(childrenList[0].id);
  const [showChildSwitcher, setShowChildSwitcher] = useState(false);
  const [activeTab, setActiveTab] = useState<'upcoming' | 'participation'>('upcoming');

  const childInfo = childrenList.find(c => c.id === selectedChildId)!;
  const participation = participationData[selectedChildId as keyof typeof participationData];
  
  // Filter events based on child's class
  const upcomingEvents = allEvents.filter(ev => 
    ev.targetClasses.includes('All') || ev.targetClasses.includes(childInfo.class)
  );

  const getEventStyle = (type: string) => {
    switch(type) {
      case 'Sports': return { icon: <Activity size={20}/>, bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', badgeBg: 'bg-emerald-100' };
      case 'Cultural': return { icon: <Palette size={20}/>, bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-700', badgeBg: 'bg-pink-100' };
      case 'Workshop': return { icon: <Users size={20}/>, bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700', badgeBg: 'bg-indigo-100' };
      case 'Competition': return { icon: <Trophy size={20}/>, bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', badgeBg: 'bg-orange-100' };
      default: return { icon: <CalendarDays size={20}/>, bg: 'bg-slate-50', border: 'border-slate-200', text: 'text-slate-700', badgeBg: 'bg-slate-100' };
    }
  };

  const handleRegister = (eventId: number) => {
    alert('Registration request sent successfully!');
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header & Child Switcher */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-border shadow-sm">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">Events & Activities</h1>
          <p className="text-text-secondary text-sm mt-1">Explore upcoming events and track child participation.</p>
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
                  onClick={() => { setSelectedChildId(child.id); setShowChildSwitcher(false); setActiveTab('upcoming'); }}
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

      <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm min-h-[500px]">
        
        {/* Tabs */}
        <div className="flex border-b border-border bg-page/30">
          <button 
            onClick={() => setActiveTab('upcoming')}
            className={clsx(
              "flex-1 flex items-center justify-center gap-2 py-4 font-bold text-sm transition-all border-b-2",
              activeTab === 'upcoming' ? "border-indigo-500 text-indigo-600 bg-white" : "border-transparent text-text-secondary hover:text-text-primary"
            )}
          >
            <CalendarDays size={18} /> Upcoming Events
          </button>
          <button 
            onClick={() => setActiveTab('participation')}
            className={clsx(
              "flex-1 flex items-center justify-center gap-2 py-4 font-bold text-sm transition-all border-b-2",
              activeTab === 'participation' ? "border-indigo-500 text-indigo-600 bg-white" : "border-transparent text-text-secondary hover:text-text-primary"
            )}
          >
            <Award size={18} /> Child Participation
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'upcoming' ? (
            
            /* Upcoming Events */
            <div className="animate-[fadeIn_0.3s_ease-out]">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {upcomingEvents.map((ev) => {
                   const style = getEventStyle(ev.type);
                   const isAlreadyRegistered = participation.some(p => p.id === ev.id);
                   
                   return (
                     <div key={ev.id} className={clsx("border rounded-2xl overflow-hidden flex flex-col hover:shadow-md transition-shadow", style.bg, style.border)}>
                        <div className="p-5 flex-1">
                          <div className="flex justify-between items-start mb-4">
                            <span className={clsx("px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider", style.badgeBg, style.text)}>
                              {ev.type}
                            </span>
                            <div className={clsx("w-8 h-8 rounded-full flex items-center justify-center bg-white shadow-sm", style.text)}>
                              {style.icon}
                            </div>
                          </div>
                          
                          <h3 className="font-extrabold text-lg text-text-primary leading-tight mb-4">{ev.title}</h3>
                          
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm font-semibold text-text-secondary">
                              <CalendarDays size={16} /> <span>{ev.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm font-semibold text-text-secondary">
                              <MapPin size={16} /> <span>{ev.venue}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-white border-t border-white/50 mt-auto">
                          {isAlreadyRegistered ? (
                            <div className="w-full py-2.5 flex items-center justify-center gap-2 text-sm font-bold text-emerald-600 bg-emerald-50 rounded-xl border border-emerald-200">
                              <CheckCircle2 size={16}/> Registered
                            </div>
                          ) : ev.isRegistrationOpen ? (
                            <button 
                              onClick={() => handleRegister(ev.id)}
                              className="w-full py-2.5 flex items-center justify-center gap-2 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors shadow-sm"
                            >
                              <UserPlus size={16}/> Register Now
                            </button>
                          ) : (
                            <div className="w-full py-2.5 flex items-center justify-center gap-2 text-sm font-bold text-text-tertiary bg-page rounded-xl">
                              Registration Closed
                            </div>
                          )}
                        </div>
                     </div>
                   );
                 })}
               </div>
            </div>
            
          ) : (
            
            /* Child Participation */
            <div className="animate-[fadeIn_0.3s_ease-out]">
               {participation.length === 0 ? (
                 <div className="text-center py-16">
                    <div className="w-16 h-16 bg-page rounded-full flex items-center justify-center mx-auto mb-4 border border-dashed border-border text-text-tertiary">
                      <Trophy size={32} />
                    </div>
                    <h3 className="text-lg font-bold text-text-primary mb-1">No Participation Records</h3>
                    <p className="text-sm text-text-secondary">Child hasn't registered for any events yet.</p>
                 </div>
               ) : (
                 <div className="space-y-4 max-w-4xl mx-auto">
                   {participation.map((part) => {
                     const style = getEventStyle(part.type);
                     return (
                       <div key={part.id} className="border border-border rounded-2xl bg-white p-5 flex flex-col md:flex-row gap-6 md:items-center justify-between hover:shadow-sm transition-shadow">
                          
                          <div className="flex items-center gap-4 flex-1">
                            <div className={clsx("w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm border", style.badgeBg, style.text, style.border)}>
                              {style.icon}
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className={clsx("text-[10px] font-bold uppercase tracking-wider", style.text)}>{part.type}</span>
                                <span className="w-1 h-1 rounded-full bg-border"></span>
                                <span className="text-xs font-semibold text-text-tertiary">{part.role}</span>
                              </div>
                              <h4 className="font-extrabold text-lg text-text-primary">{part.title}</h4>
                            </div>
                          </div>

                          <div className="flex flex-col md:items-end gap-3 md:w-64">
                            <div className="flex items-center gap-2">
                              {part.status === 'Completed' ? (
                                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200">Completed</span>
                              ) : (
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full border border-blue-200">Upcoming</span>
                              )}
                            </div>
                            
                            {part.result && (
                              <p className="text-sm font-bold text-indigo-700 flex items-center gap-1.5">
                                <Award size={16}/> Result: {part.result}
                              </p>
                            )}

                            {part.certificate && (
                              <button className="text-xs font-bold text-text-secondary hover:text-indigo-600 flex items-center gap-1.5 px-3 py-1.5 bg-page border border-border rounded-lg transition-colors group">
                                <FileCheck2 size={14} className="group-hover:text-indigo-500" />
                                Download Certificate
                                <Download size={14} className="ml-1 opacity-50 group-hover:opacity-100 group-hover:-translate-y-0.5 transition-all" />
                              </button>
                            )}
                          </div>

                       </div>
                     )
                   })}
                 </div>
               )}
            </div>
            
          )}
        </div>
      </div>
    </div>
  );
}
