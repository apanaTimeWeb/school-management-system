"use client";

import React, { useState } from 'react';
import { Users, BookmarkPlus, CheckCircle, Search } from 'lucide-react';
import clsx from 'clsx';

export default function MembersReservations() {
  const [activeTab, setActiveTab] = useState('members');
  const [showToast, setShowToast] = useState(false);

  const handleAction = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Action Completed!
        </div>
      )}

      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('members')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'members' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <Users size={18} /> Library Members
        </button>
        <button onClick={() => setActiveTab('reserve')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'reserve' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <BookmarkPlus size={18} /> Book Reservation
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'members' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Library Memberships</h2>
            
            <div className="flex gap-4 items-center mb-2">
               <div className="flex items-center gap-2 bg-bg-page border border-border px-3 py-2 rounded-lg flex-1">
                 <Search size={16} className="text-text-secondary"/>
                 <input type="text" placeholder="Search Student or Staff ID..." className="bg-transparent border-none outline-none text-sm w-full font-semibold"/>
               </div>
               <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm">Sync from Directory</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {[1, 2].map((m) => (
                 <div key={m} className="bg-card border border-border p-4 rounded-lg flex items-center gap-4 shadow-sm">
                   <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl shrink-0">S</div>
                   <div className="flex-1">
                     <h3 className="font-bold text-sm text-text-primary">Student Name {m}</h3>
                     <p className="text-xs text-text-secondary font-semibold">ID: STU-00{m} • Class 10</p>
                   </div>
                   <div className="flex flex-col items-end gap-1">
                     <span className="bg-success-bg text-success text-[10px] font-bold px-2 py-0.5 rounded uppercase">Active</span>
                     <span className="text-[10px] font-bold text-text-secondary">Quota: 2 Books</span>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        )}

        {activeTab === 'reserve' && (
          <div className="flex flex-col gap-6 fade-in max-w-2xl mx-auto">
             <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2 text-center">Reserve a Book</h2>
             <div className="flex flex-col gap-6 bg-bg-page border border-border p-6 rounded-lg">
                <p className="text-xs text-text-secondary font-medium">If a book is currently issued to someone else, a member can reserve it to be notified upon return.</p>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Book Title</label>
                  <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary">
                    <option>Harry Potter - Vol 1 (Currently Out)</option>
                  </select>
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Member ID (Reserver)</label>
                  <input type="text" placeholder="Enter Member ID" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
                </div>
                
                <button onClick={handleAction} className="w-full bg-info text-white py-2 rounded-lg font-bold text-sm shadow-sm hover:bg-info/90 transition mt-2">
                  Place Reservation
                </button>
             </div>
          </div>
        )}
        
      </div>
    </div>
  );
}
