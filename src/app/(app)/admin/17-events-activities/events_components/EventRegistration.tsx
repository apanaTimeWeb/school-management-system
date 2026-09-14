"use client";

import React, { useState } from 'react';
import { Users, UserPlus, CheckCircle, Search } from 'lucide-react';

export default function EventRegistration() {
  const [showToast, setShowToast] = useState(false);

  const handleRegister = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col gap-6 h-full fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Participant Registered!
        </div>
      )}

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6 flex items-center gap-2">
          <Users size={20} className="text-primary"/> Event Registration & Participants
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="w-full lg:w-1/2 bg-bg-page border border-border rounded-lg p-5 flex flex-col gap-4">
             <h3 className="font-bold text-sm flex items-center gap-2">
               <UserPlus size={16} className="text-primary"/> Manual Registration
             </h3>
             
             <div className="flex flex-col gap-1.5">
               <label className="text-xs font-semibold text-text-secondary">Select Event</label>
               <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary">
                 <option>Annual Sports Meet 2026 - 100m Sprint</option>
                 <option>Inter-School Debate</option>
               </select>
             </div>

             <div className="flex flex-col gap-1.5">
               <label className="text-xs font-semibold text-text-secondary">Student ID / Name</label>
               <div className="relative">
                 <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"/>
                 <input type="text" placeholder="Search student..." className="w-full bg-bg-input border border-border rounded-md pl-9 pr-3 py-2 text-sm outline-none focus:border-primary" />
               </div>
             </div>
             
             <button onClick={handleRegister} className="bg-primary text-black px-4 py-2.5 rounded-lg text-sm font-bold shadow-sm hover:bg-primary-hover transition flex items-center justify-center gap-2 mt-2">
               Confirm Registration
             </button>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <h3 className="font-bold text-sm text-text-primary">Registered Participants List</h3>
            
            <div className="bg-card border border-border rounded-lg overflow-hidden">
               <table className="w-full text-left">
                 <thead className="bg-bg-page text-xs text-text-secondary">
                   <tr>
                     <th className="p-3 font-bold border-b border-border">Student</th>
                     <th className="p-3 font-bold border-b border-border">Class</th>
                     <th className="p-3 font-bold border-b border-border">Event</th>
                   </tr>
                 </thead>
                 <tbody className="text-sm font-semibold">
                   <tr>
                     <td className="p-3 border-b border-border">Aarav Sharma</td>
                     <td className="p-3 border-b border-border">10-A</td>
                     <td className="p-3 border-b border-border">100m Sprint</td>
                   </tr>
                   <tr>
                     <td className="p-3 border-b border-border">Sneha Gupta</td>
                     <td className="p-3 border-b border-border">9-B</td>
                     <td className="p-3 border-b border-border">Debate</td>
                   </tr>
                 </tbody>
               </table>
            </div>
            
            <button className="bg-bg-page border border-border text-sm font-bold py-2 rounded-lg hover:border-primary transition">
              Download Participant List (Excel)
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
