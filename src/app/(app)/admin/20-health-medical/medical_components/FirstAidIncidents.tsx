"use client";

import React, { useState } from 'react';
import { Ambulance, Bandage, PhoneCall, CheckCircle } from 'lucide-react';

export default function FirstAidIncidents() {
  const [showToast, setShowToast] = useState(false);

  const handleAction = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col gap-6 h-full fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Incident Recorded!
        </div>
      )}

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <div className="flex justify-between items-center border-b border-border pb-4 mb-6">
           <h2 className="text-xl font-bold text-danger flex items-center gap-2">
             <Ambulance size={20}/> Medical Incidents & First Aid
           </h2>
           <button className="bg-danger text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-danger/90 flex items-center gap-2 transition animate-pulse">
             <PhoneCall size={16}/> Emergency Call Mode
           </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="bg-danger-bg/20 border border-danger/30 p-6 rounded-lg flex flex-col gap-4">
             <h3 className="font-bold text-sm flex items-center gap-2"><Bandage size={16} className="text-danger"/> Log New Injury / Illness</h3>
             
             <div className="flex flex-col gap-1.5">
               <label className="text-xs font-bold text-text-secondary uppercase">Student/Staff ID</label>
               <input type="text" placeholder="Enter ID..." className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-danger font-bold" />
             </div>
             
             <div className="flex flex-col gap-1.5">
               <label className="text-xs font-bold text-text-secondary uppercase">Type of Incident</label>
               <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-danger font-bold">
                 <option>Sports Injury (Sprain/Fracture)</option>
                 <option>Fever / Illness</option>
                 <option>Fainting / Dizziness</option>
                 <option>Minor Cuts / Bruises</option>
               </select>
             </div>

             <div className="flex flex-col gap-1.5">
               <label className="text-xs font-bold text-text-secondary uppercase">First Aid Administered</label>
               <textarea rows={2} className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-danger resize-none" placeholder="e.g. Cleaned wound, applied band-aid, given ORS..."></textarea>
             </div>
             
             <div className="flex items-center gap-2 mt-2">
               <input type="checkbox" id="notifyParent" className="accent-danger w-4 h-4" defaultChecked/>
               <label htmlFor="notifyParent" className="text-sm font-bold text-text-primary">Auto-notify Emergency Contact (SMS)</label>
             </div>

             <button onClick={handleAction} className="w-full bg-danger text-white py-3 rounded-lg font-bold shadow-sm hover:bg-danger/90 transition mt-2">
               Record Incident
             </button>
          </div>

          <div className="flex flex-col gap-4">
             <h3 className="font-bold text-sm text-text-primary border-b border-border pb-2">Recent Logs</h3>
             
             <div className="flex flex-col gap-3">
               <div className="bg-card border border-border p-4 rounded-lg shadow-sm">
                 <div className="flex justify-between items-center mb-2">
                   <h4 className="font-bold text-sm">Kabir Singh (11-A)</h4>
                   <span className="text-xs font-semibold text-text-secondary">Today, 10:30 AM</span>
                 </div>
                 <p className="text-xs font-semibold text-danger">Sports Injury - Sprained Ankle</p>
                 <p className="text-xs text-text-secondary mt-1">Ice pack applied. Parents notified to pick him up.</p>
               </div>
               <div className="bg-card border border-border p-4 rounded-lg shadow-sm">
                 <div className="flex justify-between items-center mb-2">
                   <h4 className="font-bold text-sm">Riya Das (5-C)</h4>
                   <span className="text-xs font-semibold text-text-secondary">Yesterday, 1:15 PM</span>
                 </div>
                 <p className="text-xs font-semibold text-warning">Fever / Illness</p>
                 <p className="text-xs text-text-secondary mt-1">Rested in sick room. Temp: 101F. Given Paracetamol as per profile consent.</p>
               </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
