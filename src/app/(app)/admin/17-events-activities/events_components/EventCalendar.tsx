"use client";

import React, { useState } from 'react';
import { CalendarDays, Plus, Trophy, Music, Palette, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

export default function EventCalendar() {
  const [activeTab, setActiveTab] = useState('list');
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const upcomingEvents = [
    { id: 1, name: 'Annual Sports Meet 2026', date: 'Oct 15 - Oct 17', type: 'Sports', icon: Trophy, color: 'text-success', bg: 'bg-success/10 border-success/30' },
    { id: 2, name: 'Inter-School Debate', date: 'Oct 22', type: 'Competitions', icon: Palette, color: 'text-info', bg: 'bg-info/10 border-info/30' },
    { id: 3, name: 'Diwali Cultural Fest', date: 'Nov 05', type: 'Cultural', icon: Music, color: 'text-warning', bg: 'bg-warning/10 border-warning/30' },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Event Created Successfully!
        </div>
      )}

      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('list')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'list' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <CalendarDays size={18} /> Events Calendar
        </button>
        <button onClick={() => setActiveTab('create')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'create' ? 'bg-success/10 text-success' : 'text-text-secondary hover:bg-bg-page')}>
          <Plus size={18} /> Create New Event
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'list' && (
          <div className="flex flex-col gap-6 fade-in">
             <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2 flex items-center gap-2">
               <CalendarDays size={20}/> Upcoming School Events
             </h2>
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
               {upcomingEvents.map(evt => (
                 <div key={evt.id} className={clsx("border p-5 rounded-lg flex items-center gap-4 transition shadow-sm", evt.bg)}>
                    <div className={clsx("w-12 h-12 rounded-full flex items-center justify-center bg-card", evt.color)}>
                      <evt.icon size={24}/>
                    </div>
                    <div>
                      <span className={clsx("text-[10px] font-bold uppercase", evt.color)}>{evt.type}</span>
                      <h3 className="font-bold text-text-primary text-sm">{evt.name}</h3>
                      <p className="text-xs text-text-secondary font-semibold mt-1">Date: {evt.date}</p>
                    </div>
                 </div>
               ))}
             </div>
             
             <div className="mt-6 border border-border rounded-lg p-5 bg-bg-page opacity-70">
                <h3 className="font-bold text-sm mb-3">Calendar Month View Placeholder</h3>
                <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-text-secondary">
                  <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
                </div>
                <div className="grid grid-cols-7 gap-2 mt-2 h-32">
                   {[...Array(31)].map((_, i) => (
                     <div key={i} className="border border-border rounded flex items-center justify-center text-xs bg-card">
                       {i + 1}
                       {i === 14 && <div className="absolute w-2 h-2 rounded-full bg-success translate-x-2 -translate-y-2"></div>}
                     </div>
                   ))}
                </div>
             </div>
          </div>
        )}

        {activeTab === 'create' && (
          <div className="flex flex-col gap-6 fade-in max-w-2xl mx-auto">
             <h2 className="text-xl font-bold text-success border-b border-success/30 pb-2 text-center">Create Event / Competition</h2>
             
             <div className="bg-bg-page border border-border p-6 rounded-lg flex flex-col gap-4">
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-bold text-text-secondary uppercase">Event Name</label>
                 <input type="text" placeholder="e.g. Science Fair 2026" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-success font-bold" />
               </div>
               
               <div className="grid grid-cols-2 gap-4">
                 <div className="flex flex-col gap-1.5">
                   <label className="text-xs font-bold text-text-secondary uppercase">Event Category</label>
                   <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-success font-bold">
                     <option>Annual Function</option>
                     <option>Sports</option>
                     <option>Cultural Activities</option>
                     <option>Competitions</option>
                   </select>
                 </div>
                 <div className="flex flex-col gap-1.5">
                   <label className="text-xs font-bold text-text-secondary uppercase">Date</label>
                   <input type="date" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-success font-bold" />
                 </div>
               </div>

               <div className="flex items-center gap-2 mt-2">
                 <input type="checkbox" id="regRequired" className="accent-success w-4 h-4"/>
                 <label htmlFor="regRequired" className="text-sm font-semibold text-text-primary">Require Registration from Students</label>
               </div>
               
               <button onClick={handleSave} className="w-full bg-success text-white py-3 rounded-lg font-bold shadow-sm hover:bg-success/90 transition mt-2">
                 Publish Event to Calendar
               </button>
             </div>
          </div>
        )}
      </div>
    </div>
  );
}
