"use client";

import React, { useState } from 'react';
import { HeartPulse, Search, Save, AlertTriangle, CheckCircle, Activity } from 'lucide-react';
import clsx from 'clsx';

export default function MedicalProfile() {
  const [activeSubTab, setActiveSubTab] = useState('view');
  const [showToast, setShowToast] = useState(false);
  const [searchId, setSearchId] = useState('');

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col gap-6 h-full fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Medical Profile Updated!
        </div>
      )}

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6 flex items-center gap-2">
          <HeartPulse size={20} className="text-primary"/> Student Medical Profiles
        </h2>
        
        <div className="flex gap-4 mb-6 border-b border-border pb-2">
           <button onClick={()=>setActiveSubTab('view')} className={clsx("text-sm font-bold pb-2 border-b-2 transition", activeSubTab==='view' ? "border-primary text-primary" : "border-transparent text-text-secondary hover:text-text-primary")}>Search & View Profile</button>
           <button onClick={()=>setActiveSubTab('edit')} className={clsx("text-sm font-bold pb-2 border-b-2 transition", activeSubTab==='edit' ? "border-primary text-primary" : "border-transparent text-text-secondary hover:text-text-primary")}>Update Medical Records</button>
        </div>

        {activeSubTab === 'view' && (
          <div className="flex flex-col gap-6 fade-in max-w-3xl">
             <div className="flex items-center gap-2 bg-bg-page border border-border px-3 py-2 rounded-lg">
               <Search size={16} className="text-text-secondary"/>
               <input type="text" value={searchId} onChange={(e)=>setSearchId(e.target.value)} placeholder="Search Student ID (e.g. STU-001)..." className="bg-transparent border-none outline-none text-sm w-full font-semibold"/>
             </div>

             {searchId && (
               <div className="bg-bg-page border border-border p-6 rounded-lg shadow-sm fade-in">
                  <div className="flex justify-between items-start mb-6 border-b border-border pb-4">
                    <div className="flex items-center gap-4">
                       <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-2xl">A</div>
                       <div>
                         <h3 className="font-bold text-lg">Aarav Sharma</h3>
                         <p className="text-xs text-text-secondary font-semibold">STU-001 • Class 10-A • DOB: 14-Aug-2010</p>
                       </div>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-danger-bg text-danger w-12 h-12 rounded-lg font-black text-xl border border-danger/30 shadow-sm">
                      O+
                      <span className="text-[8px] uppercase tracking-widest font-bold">Blood</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="flex flex-col gap-3">
                        <div className="bg-warning-bg/30 border border-warning/30 p-4 rounded-lg">
                           <h4 className="font-bold text-sm text-warning flex items-center gap-2"><AlertTriangle size={16}/> Known Allergies</h4>
                           <ul className="list-disc list-inside text-xs font-semibold mt-2 text-text-primary">
                             <li>Peanuts (Severe)</li>
                             <li>Dust Mites (Mild)</li>
                           </ul>
                        </div>
                        <div className="bg-card border border-border p-4 rounded-lg">
                           <h4 className="font-bold text-sm flex items-center gap-2"><Activity size={16}/> Chronic Medical Conditions</h4>
                           <p className="text-xs font-semibold mt-2 text-text-secondary">Asthma (Requires Inhaler during sports)</p>
                        </div>
                     </div>
                     
                     <div className="flex flex-col gap-3">
                        <div className="bg-card border border-border p-4 rounded-lg h-full">
                           <h4 className="font-bold text-sm border-b border-border pb-2 mb-2">Emergency Contacts</h4>
                           <div className="flex flex-col gap-2 text-xs font-semibold">
                             <div className="flex justify-between">
                               <span className="text-text-secondary">Father (Raj Sharma)</span>
                               <span>+91 9876543210</span>
                             </div>
                             <div className="flex justify-between">
                               <span className="text-text-secondary">Mother (Priya Sharma)</span>
                               <span>+91 9988776655</span>
                             </div>
                             <div className="flex justify-between mt-2 pt-2 border-t border-border">
                               <span className="text-danger">Family Doctor (Dr. Gupta)</span>
                               <span>+91 1122334455</span>
                             </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
             )}
          </div>
        )}

        {activeSubTab === 'edit' && (
          <div className="bg-bg-page border border-border rounded-lg p-5 flex flex-col gap-4 max-w-3xl fade-in">
             <div className="flex flex-col gap-1.5 mb-2">
               <label className="text-xs font-bold text-text-secondary uppercase">Select Student to Update</label>
               <input type="text" placeholder="Enter Student ID..." className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary font-bold" />
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-semibold text-text-secondary">Blood Group</label>
                 <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary">
                   <option>A+</option><option>A-</option><option>B+</option><option>B-</option>
                   <option>O+</option><option>O-</option><option>AB+</option><option>AB-</option>
                 </select>
               </div>
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-semibold text-text-secondary">Height & Weight</label>
                 <div className="flex gap-2">
                   <input type="text" placeholder="Height (cm)" className="w-1/2 bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
                   <input type="text" placeholder="Weight (kg)" className="w-1/2 bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
                 </div>
               </div>
               <div className="flex flex-col gap-1.5 md:col-span-2">
                 <label className="text-xs font-semibold text-text-secondary">Allergies (Comma separated)</label>
                 <input type="text" placeholder="e.g. Peanuts, Dust, Penicillin" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
               </div>
               <div className="flex flex-col gap-1.5 md:col-span-2">
                 <label className="text-xs font-semibold text-text-secondary">Medical Conditions / Ongoing Medications</label>
                 <textarea rows={2} className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary resize-none"></textarea>
               </div>
             </div>
             
             <button onClick={handleSave} className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition flex items-center justify-center gap-2 mt-4">
               <Save size={16}/> Save Medical Record
             </button>
          </div>
        )}
      </div>
    </div>
  );
}
