"use client";

import React, { useState } from 'react';
import { 
  Utensils, Coffee, Search, Filter, ScanLine, 
  Trash2, User, Users, Leaf, Drumstick, CheckCircle2, 
  XCircle, FileText, CalendarDays, PieChart
} from 'lucide-react';
import { 
  MOCK_DAILY_MENU, MOCK_MESS_ATTENDANCE, MOCK_MESS_ANALYTICS, MOCK_MESS_MEETINGS 
} from '../mess_constants/mess.constants';

export default function MessDiningMain() {
  const [activeTab, setActiveTab] = useState<'ATTENDANCE' | 'MENU' | 'COMMITTEE'>('ATTENDANCE');
  const [searchTerm, setSearchTerm] = useState('');
  
  const todayMenu = MOCK_DAILY_MENU.find(m => m.day === 'Monday') || MOCK_DAILY_MENU[0];

  const filteredAttendance = MOCK_MESS_ATTENDANCE.filter(a => 
    a.studentName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    a.studentId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getDietBadge = (diet: string) => {
    switch(diet) {
      case 'Veg': return <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20"><Leaf size={10}/> Veg</span>;
      case 'Non-Veg': return <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-rose-600 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20"><Drumstick size={10}/> Non-Veg</span>;
      case 'Jain': return <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-amber-600 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20"><Leaf size={10}/> Jain</span>;
      default: return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'SCANNED': return <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-blue-600 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20"><CheckCircle2 size={10}/> Scanned</span>;
      case 'EXEMPTED': return <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-purple-600 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20"><CalendarDays size={10}/> Exempted</span>;
      case 'MISSED': return <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-red-600 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20"><XCircle size={10}/> Missed</span>;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0 shadow-sm">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <Utensils className="text-amber-500" size={24} /> Mess & Dining
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Manage daily menus, meal scanning, diets, and food wastage tracking.
          </p>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex bg-[var(--bg-input)] p-1 rounded-lg border border-[var(--border)] w-full md:w-auto">
           <button 
              onClick={() => setActiveTab('ATTENDANCE')}
              className={`flex-1 md:flex-none px-4 py-2 text-xs font-bold rounded-md transition-colors ${activeTab === 'ATTENDANCE' ? 'bg-[var(--bg-card)] text-amber-600 shadow-sm' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
           >
              Meal Scanning
           </button>
           <button 
              onClick={() => setActiveTab('MENU')}
              className={`flex-1 md:flex-none px-4 py-2 text-xs font-bold rounded-md transition-colors ${activeTab === 'MENU' ? 'bg-[var(--bg-card)] text-amber-600 shadow-sm' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
           >
              Daily Menu
           </button>
           <button 
              onClick={() => setActiveTab('COMMITTEE')}
              className={`flex-1 md:flex-none px-4 py-2 text-xs font-bold rounded-md transition-colors ${activeTab === 'COMMITTEE' ? 'bg-[var(--bg-card)] text-amber-600 shadow-sm' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
           >
              Committee
           </button>
        </div>
      </div>

      {activeTab === 'ATTENDANCE' && (
         <>
            {/* Analytics Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               <div className="bg-[var(--bg-card)] border border-[var(--border)] p-4 rounded-xl shadow-sm flex items-center justify-between">
                  <div>
                     <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] block mb-1">Total Meals Prepared</span>
                     <span className="text-2xl font-black text-[var(--text-primary)]">{MOCK_MESS_ANALYTICS.totalMealsPrepared}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center">
                     <Utensils size={20} />
                  </div>
               </div>
               <div className="bg-[rgba(16,185,129,0.05)] border border-emerald-500/20 p-4 rounded-xl shadow-sm flex items-center justify-between">
                  <div>
                     <span className="text-[10px] uppercase font-bold text-emerald-600/70 block mb-1">Meals Consumed (Scanned)</span>
                     <span className="text-2xl font-black text-emerald-600">{MOCK_MESS_ANALYTICS.mealsConsumed}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                     <ScanLine size={20} />
                  </div>
               </div>
               <div className="bg-[rgba(239,68,68,0.05)] border border-red-500/20 p-4 rounded-xl shadow-sm flex items-center justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
                  <div className="relative z-10">
                     <span className="text-[10px] uppercase font-bold text-red-600/70 block mb-1">Food Wastage</span>
                     <span className="text-2xl font-black text-red-600">{MOCK_MESS_ANALYTICS.foodWastageKg} <span className="text-sm font-bold">Kg</span></span>
                  </div>
                  <div className="relative z-10 w-10 h-10 rounded-full bg-red-500/10 text-red-600 flex items-center justify-center">
                     <Trash2 size={20} />
                  </div>
               </div>
            </div>

            {/* Scanning Area */}
            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl shadow-sm overflow-hidden flex flex-col">
               <div className="p-4 border-b border-[var(--border)] flex flex-col sm:flex-row justify-between items-center gap-4 bg-[rgba(245,158,11,0.03)]">
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                     <div className="relative flex-1 sm:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={16} />
                        <input 
                           type="text" 
                           placeholder="Search student or scan ID..." 
                           value={searchTerm}
                           onChange={(e) => setSearchTerm(e.target.value)}
                           className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-lg pl-9 pr-4 py-2 text-sm focus:border-amber-500 outline-none transition-colors"
                        />
                     </div>
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto">
                     <button className="flex-1 sm:flex-none px-4 py-2 bg-[var(--bg-input)] border border-[var(--border)] text-[var(--text-primary)] font-bold text-sm rounded-lg hover:bg-[var(--bg-card)] transition-colors flex items-center justify-center gap-2">
                        <Users size={16} className="text-purple-500" /> Add Guest Meal
                     </button>
                     <button className="flex-1 sm:flex-none px-4 py-2 bg-amber-600 text-white font-bold text-sm rounded-lg hover:bg-amber-700 transition-colors flex items-center justify-center gap-2">
                        <ScanLine size={16} /> Scan Meal
                     </button>
                  </div>
               </div>

               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                     <thead>
                        <tr className="bg-[var(--bg-input)] border-b border-[var(--border)] text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">
                           <th className="p-4 font-bold">Student / Guest</th>
                           <th className="p-4 font-bold">Meal Type</th>
                           <th className="p-4 font-bold">Diet Preference</th>
                           <th className="p-4 font-bold">Status</th>
                           <th className="p-4 font-bold">Time Scanned</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-[var(--border)]">
                        {filteredAttendance.map(record => (
                           <tr key={record.id} className="hover:bg-[var(--bg-input)] transition-colors group">
                              <td className="p-4">
                                 <div className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${record.isGuest ? 'bg-purple-500/10 text-purple-600' : 'bg-amber-500/10 text-amber-600'}`}>
                                       {record.isGuest ? <Users size={14} /> : record.studentName.charAt(0)}
                                    </div>
                                    <div>
                                       <p className="font-bold text-[14px] text-[var(--text-primary)] flex items-center gap-2">
                                          {record.studentName}
                                          {record.isGuest && <span className="text-[9px] bg-purple-500/10 text-purple-600 border border-purple-500/20 px-1.5 py-0.5 rounded uppercase">Guest</span>}
                                       </p>
                                       <p className="text-[11px] text-[var(--text-secondary)]">{record.studentId}</p>
                                    </div>
                                 </div>
                              </td>
                              <td className="p-4">
                                 <span className="font-semibold text-sm text-[var(--text-primary)]">{record.mealType}</span>
                              </td>
                              <td className="p-4">
                                 {getDietBadge(record.dietPreference)}
                              </td>
                              <td className="p-4">
                                 {getStatusBadge(record.status)}
                              </td>
                              <td className="p-4">
                                 {record.scannedTime ? (
                                    <span className="text-sm font-semibold text-[var(--text-primary)]">{record.scannedTime}</span>
                                 ) : (
                                    <span className="text-xs text-[var(--text-secondary)]">-</span>
                                 )}
                              </td>
                           </tr>
                        ))}
                        {filteredAttendance.length === 0 && (
                           <tr>
                              <td colSpan={5} className="p-8 text-center text-[var(--text-secondary)]">
                                 <ScanLine size={40} className="opacity-20 mx-auto mb-3" />
                                 <p className="font-medium text-lg">No records found</p>
                              </td>
                           </tr>
                        )}
                     </tbody>
                  </table>
               </div>
            </div>
         </>
      )}

      {activeTab === 'MENU' && (
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Today's Menu Highlight */}
            <div className="bg-amber-50 dark:bg-amber-500/5 border border-amber-200 dark:border-amber-500/20 rounded-2xl p-6 relative overflow-hidden shadow-sm">
               <div className="absolute -top-10 -right-10 opacity-[0.03] text-amber-500">
                  <Utensils size={200} />
               </div>
               <div className="relative z-10">
                  <div className="flex items-center gap-2 text-amber-600 mb-6">
                     <CalendarDays size={20} />
                     <h2 className="text-xl font-bold uppercase tracking-wider">Menu for {todayMenu.day}</h2>
                  </div>
                  
                  <div className="space-y-4">
                     <div className="bg-white dark:bg-black/20 p-4 rounded-xl border border-amber-100 dark:border-amber-500/10 shadow-sm flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-500/20 text-amber-600 flex items-center justify-center shrink-0">
                           <Coffee size={20} />
                        </div>
                        <div>
                           <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1">Breakfast</h3>
                           <p className="font-bold text-[var(--text-primary)]">{todayMenu.breakfast}</p>
                        </div>
                     </div>
                     <div className="bg-white dark:bg-black/20 p-4 rounded-xl border border-amber-100 dark:border-amber-500/10 shadow-sm flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-500/20 text-orange-600 flex items-center justify-center shrink-0">
                           <Utensils size={20} />
                        </div>
                        <div>
                           <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1">Lunch</h3>
                           <p className="font-bold text-[var(--text-primary)]">{todayMenu.lunch}</p>
                        </div>
                     </div>
                     <div className="bg-white dark:bg-black/20 p-4 rounded-xl border border-amber-100 dark:border-amber-500/10 shadow-sm flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 flex items-center justify-center shrink-0">
                           <Leaf size={20} />
                        </div>
                        <div>
                           <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1">Snacks</h3>
                           <p className="font-bold text-[var(--text-primary)]">{todayMenu.snacks}</p>
                        </div>
                     </div>
                     <div className="bg-white dark:bg-black/20 p-4 rounded-xl border border-amber-100 dark:border-amber-500/10 shadow-sm flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-600 flex items-center justify-center shrink-0">
                           <Utensils size={20} />
                        </div>
                        <div>
                           <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1">Dinner</h3>
                           <p className="font-bold text-[var(--text-primary)]">{todayMenu.dinner}</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Full Weekly Menu List placeholder */}
            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl shadow-sm p-6">
               <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg text-[var(--text-primary)]">Weekly Schedule</h3>
                  <button className="text-amber-600 hover:underline text-sm font-bold">Edit Menu</button>
               </div>
               <div className="space-y-2">
                  {MOCK_DAILY_MENU.map(menu => (
                     <div key={menu.id} className="p-3 border border-[var(--border)] rounded-lg hover:bg-[var(--bg-input)] transition-colors cursor-pointer flex justify-between items-center">
                        <span className="font-bold text-[var(--text-primary)]">{menu.day}</span>
                        <span className="text-xs text-[var(--text-secondary)]">View Details</span>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      )}

      {activeTab === 'COMMITTEE' && (
         <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6 border-b border-[var(--border)] pb-4">
               <h2 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <Users className="text-blue-500" /> Mess Committee Meetings
               </h2>
               <button className="px-4 py-2 bg-blue-600 text-white font-bold text-sm rounded-lg hover:bg-blue-700 transition-colors">
                  Log New Meeting
               </button>
            </div>

            <div className="space-y-4">
               {MOCK_MESS_MEETINGS.map(mtg => (
                  <div key={mtg.id} className="p-5 border border-[var(--border)] bg-[var(--bg-input)] rounded-xl hover:border-blue-500/30 transition-colors">
                     <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-lg text-[var(--text-primary)]">{mtg.agenda}</h3>
                        <span className="text-xs font-bold text-[var(--text-secondary)] bg-[var(--bg-card)] px-2 py-1 rounded border border-[var(--border)]">
                           {new Date(mtg.date).toLocaleDateString('en-GB')}
                        </span>
                     </div>
                     <div className="mb-4">
                        <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] block mb-1">Meeting Minutes</span>
                        <p className="text-sm text-[var(--text-primary)] italic leading-relaxed">"{mtg.minutes}"</p>
                     </div>
                     <div>
                        <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] block mb-1">Action Items</span>
                        <ul className="list-disc pl-5 text-sm text-[var(--text-primary)] space-y-1">
                           {mtg.actionItems.map((item, i) => (
                              <li key={i}>{item}</li>
                           ))}
                        </ul>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      )}

    </div>
  );
}
