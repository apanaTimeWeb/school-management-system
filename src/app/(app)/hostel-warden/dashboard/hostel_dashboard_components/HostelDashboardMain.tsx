"use client";

import React, { useState } from 'react';
import { 
  Building2, Bed, DoorOpen, Users, UserCheck, CalendarDays, 
  UserPlus, BellRing, MessageSquareWarning, Wrench, Utensils, 
  Activity, ArrowRight, CheckCircle2, AlertTriangle, Clock
} from 'lucide-react';
import { 
  MOCK_HOSTEL_STATS, MOCK_STUDENT_STATS, 
  MOCK_PENDING_ACTIONS, MOCK_RECENT_ACTIVITIES 
} from '../hostel_dashboard_constants/hostel_dashboard.constants';

export default function HostelDashboardMain() {
  
  const StatCard = ({ title, value, subtitle, icon: Icon, color, bgColor }: any) => (
    <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5 hover:border-[var(--primary)] transition-colors shadow-sm flex items-start justify-between group">
      <div>
        <p className="text-[11px] font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-2">{title}</p>
        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1">{value}</h3>
        <p className="text-[10px] text-[var(--text-secondary)] font-medium">{subtitle}</p>
      </div>
      <div 
        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border transition-transform group-hover:scale-110"
        style={{ backgroundColor: bgColor, color: color, borderColor: color + '40' }}
      >
        <Icon size={20} />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <span className="text-2xl">👋</span> Warden Dashboard
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Overview of hostel operations, student presence, and pending action items.
          </p>
        </div>
        <div className="flex gap-3">
           <button className="flex items-center gap-2 px-4 py-2 bg-[var(--primary)] text-white text-sm font-bold rounded-lg shadow-sm hover:bg-[var(--primary-hover)] transition-colors">
              <UserPlus size={16} /> New Admission
           </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-6">
         
         {/* Left Column (8 cols) */}
         <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Top Stats Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
               <StatCard 
                 title="Total Capacity" 
                 value={MOCK_HOSTEL_STATS.totalBeds} 
                 subtitle={`${MOCK_HOSTEL_STATS.totalRooms} Rooms across ${MOCK_HOSTEL_STATS.totalHostels} Hostels`}
                 icon={Building2} color="#3B82F6" bgColor="rgba(59,130,246,0.1)" 
               />
               <StatCard 
                 title="Occupied Beds" 
                 value={MOCK_HOSTEL_STATS.occupiedBeds} 
                 subtitle={`${MOCK_HOSTEL_STATS.availableBeds} beds currently available`}
                 icon={Bed} color="#10B981" bgColor="rgba(16,185,129,0.1)" 
               />
               <StatCard 
                 title="Vacant Rooms" 
                 value={MOCK_HOSTEL_STATS.vacantRooms} 
                 subtitle="Completely empty rooms"
                 icon={DoorOpen} color="#F59E0B" bgColor="rgba(245,158,11,0.1)" 
               />
            </div>

            {/* Students Overview */}
            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5 shadow-sm">
               <div className="flex items-center justify-between mb-5">
                  <h3 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider flex items-center gap-2">
                     <Users size={16} className="text-[var(--text-secondary)]" /> Student Overview (Today)
                  </h3>
               </div>
               
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col gap-1 p-3 bg-[var(--bg-input)] rounded-lg border border-[var(--border)]">
                     <span className="text-xs text-[var(--text-secondary)] font-medium">Total Students</span>
                     <span className="text-xl font-bold text-[var(--text-primary)]">{MOCK_STUDENT_STATS.totalStudents}</span>
                     <span className="text-[10px] text-[var(--text-secondary)] mt-1">{MOCK_STUDENT_STATS.boys} Boys • {MOCK_STUDENT_STATS.girls} Girls</span>
                  </div>
                  
                  <div className="flex flex-col gap-1 p-3 bg-[rgba(16,185,129,0.05)] rounded-lg border border-[rgba(16,185,129,0.2)]">
                     <span className="text-xs text-emerald-600 font-medium flex items-center gap-1.5"><UserCheck size={12}/> Present In</span>
                     <span className="text-xl font-bold text-emerald-600">{MOCK_STUDENT_STATS.presentToday}</span>
                     <span className="text-[10px] text-emerald-600/70 mt-1">Logged in premises</span>
                  </div>

                  <div className="flex flex-col gap-1 p-3 bg-[rgba(245,158,11,0.05)] rounded-lg border border-[rgba(245,158,11,0.2)]">
                     <span className="text-xs text-amber-600 font-medium flex items-center gap-1.5"><CalendarDays size={12}/> On Leave/Out</span>
                     <span className="text-xl font-bold text-amber-600">{MOCK_STUDENT_STATS.onLeave}</span>
                     <span className="text-[10px] text-amber-600/70 mt-1">Authorized absence</span>
                  </div>

                  <div className="flex flex-col gap-1 p-3 bg-[var(--bg-input)] rounded-lg border border-[var(--border)]">
                     <span className="text-xs text-[var(--text-secondary)] font-medium flex items-center gap-1.5"><Users size={12}/> Visitors</span>
                     <span className="text-xl font-bold text-[var(--text-primary)]">{MOCK_STUDENT_STATS.visitorsToday}</span>
                     <span className="text-[10px] text-[var(--text-secondary)] mt-1">Logged today</span>
                  </div>
               </div>
            </div>

            {/* Quick Actions / Pending Tasks */}
            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl overflow-hidden shadow-sm flex flex-col">
               <div className="p-4 border-b border-[var(--border)] bg-[rgba(250,204,21,0.05)]">
                  <h3 className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-2">
                     <Activity size={16} className="text-amber-500" /> Pending Action Center
                  </h3>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-y md:divide-y-0 divide-[var(--border)]">
                  <div className="p-4 flex flex-col items-center justify-center text-center hover:bg-[var(--bg-input)] cursor-pointer transition-colors group">
                     <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform relative">
                        <FileSignature size={20} />
                        {MOCK_PENDING_ACTIONS.admissionRequests > 0 && <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center border border-white">{MOCK_PENDING_ACTIONS.admissionRequests}</span>}
                     </div>
                     <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] group-hover:text-blue-500">Admissions</span>
                  </div>
                  
                  <div className="p-4 flex flex-col items-center justify-center text-center hover:bg-[var(--bg-input)] cursor-pointer transition-colors group">
                     <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform relative">
                        <ArrowRight size={20} />
                        {MOCK_PENDING_ACTIONS.outingRequests > 0 && <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center border border-white">{MOCK_PENDING_ACTIONS.outingRequests}</span>}
                     </div>
                     <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] group-hover:text-emerald-500">Outings</span>
                  </div>

                  <div className="p-4 flex flex-col items-center justify-center text-center hover:bg-[var(--bg-input)] cursor-pointer transition-colors group">
                     <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform relative">
                        <CalendarDays size={20} />
                        {MOCK_PENDING_ACTIONS.leaveRequests > 0 && <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center border border-white">{MOCK_PENDING_ACTIONS.leaveRequests}</span>}
                     </div>
                     <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] group-hover:text-amber-500">Leaves</span>
                  </div>

                  <div className="p-4 flex flex-col items-center justify-center text-center hover:bg-[var(--bg-input)] cursor-pointer transition-colors group">
                     <div className="w-10 h-10 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform relative">
                        <MessageSquareWarning size={20} />
                        {MOCK_PENDING_ACTIONS.complaints > 0 && <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center border border-white">{MOCK_PENDING_ACTIONS.complaints}</span>}
                     </div>
                     <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] group-hover:text-red-500">Complaints</span>
                  </div>

                  <div className="p-4 flex flex-col items-center justify-center text-center hover:bg-[var(--bg-input)] cursor-pointer transition-colors group">
                     <div className="w-10 h-10 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform relative">
                        <Wrench size={20} />
                        {MOCK_PENDING_ACTIONS.maintenanceIssues > 0 && <span className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center border border-white">{MOCK_PENDING_ACTIONS.maintenanceIssues}</span>}
                     </div>
                     <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] group-hover:text-purple-500">Maintenance</span>
                  </div>
               </div>
            </div>

         </div>

         {/* Right Column (4 cols) */}
         <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Quick Status */}
            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5 shadow-sm">
               <h3 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider mb-4 border-b border-[var(--border)] pb-2">
                 Quick Status
               </h3>
               <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5">
                     <div className="flex items-center gap-2">
                        <Utensils size={16} className="text-emerald-500" />
                        <span className="text-sm font-semibold text-[var(--text-primary)]">Mess Operations</span>
                     </div>
                     <span className="text-[10px] font-bold uppercase bg-emerald-500 text-white px-2 py-0.5 rounded">Active</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border border-[var(--border)] bg-[var(--bg-input)]">
                     <div className="flex items-center gap-2">
                        <BellRing size={16} className="text-[var(--text-secondary)]" />
                        <span className="text-sm font-semibold text-[var(--text-primary)]">Emergency System</span>
                     </div>
                     <span className="text-[10px] font-bold uppercase bg-[var(--text-secondary)] text-white px-2 py-0.5 rounded">Standby</span>
                  </div>
               </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl overflow-hidden shadow-sm flex-1 flex flex-col">
               <div className="p-4 border-b border-[var(--border)] flex justify-between items-center">
                  <h3 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider">
                    Recent Activity
                  </h3>
                  <button className="text-[10px] font-bold text-[var(--primary)] hover:underline">View All</button>
               </div>
               
               <div className="p-4 flex-1 overflow-y-auto space-y-4">
                  {MOCK_RECENT_ACTIVITIES.map((activity, i) => {
                     let Icon = Activity;
                     let colorClass = 'text-[var(--primary)]';
                     let bgClass = 'bg-[var(--primary-subtle)]';

                     if (activity.type === 'SUCCESS') {
                        Icon = CheckCircle2; colorClass = 'text-emerald-500'; bgClass = 'bg-emerald-500/10';
                     } else if (activity.type === 'ERROR') {
                        Icon = AlertTriangle; colorClass = 'text-red-500'; bgClass = 'bg-red-500/10';
                     } else if (activity.type === 'WARNING') {
                        Icon = AlertTriangle; colorClass = 'text-amber-500'; bgClass = 'bg-amber-500/10';
                     }

                     return (
                        <div key={activity.id} className="flex gap-3">
                           <div className="relative">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${bgClass} ${colorClass}`}>
                                 <Icon size={14} />
                              </div>
                              {i !== MOCK_RECENT_ACTIVITIES.length - 1 && (
                                 <div className="absolute top-8 bottom-[-16px] left-1/2 -translate-x-1/2 w-px bg-[var(--border)]"></div>
                              )}
                           </div>
                           <div className="flex-1 pb-1">
                              <h4 className="text-xs font-bold text-[var(--text-primary)] leading-tight">{activity.title}</h4>
                              <p className="text-[11px] text-[var(--text-secondary)] mt-0.5 leading-snug">{activity.description}</p>
                              <div className="flex items-center gap-1 mt-1">
                                 <Clock size={10} className="text-[var(--text-secondary)] opacity-70" />
                                 <span className="text-[9px] text-[var(--text-secondary)] opacity-70">{new Date(activity.timestamp).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</span>
                              </div>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>

         </div>

      </div>
    </div>
  );
}
