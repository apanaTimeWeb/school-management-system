"use client";

import React, { useState } from 'react';
import { Stethoscope, FilePlus, Search, CheckCircle } from 'lucide-react';

export default function HealthCheckups() {
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col gap-6 h-full fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Checkup Logged Successfully!
        </div>
      )}

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6 flex items-center gap-2">
          <Stethoscope size={20} className="text-primary"/> Annual Routine Health Checkups
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="w-full lg:w-1/2 bg-bg-page border border-border rounded-lg p-5 flex flex-col gap-4">
             <h3 className="font-bold text-sm flex items-center gap-2">
               <FilePlus size={16} className="text-primary"/> Log New Checkup Entry
             </h3>
             
             <div className="flex flex-col gap-1.5">
               <label className="text-xs font-semibold text-text-secondary">Student ID / Name</label>
               <div className="relative">
                 <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"/>
                 <input type="text" placeholder="Search student..." className="w-full bg-bg-input border border-border rounded-md pl-9 pr-3 py-2 text-sm outline-none focus:border-primary" />
               </div>
             </div>

             <div className="grid grid-cols-2 gap-4">
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-semibold text-text-secondary">Height (cm)</label>
                 <input type="number" placeholder="150" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
               </div>
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-semibold text-text-secondary">Weight (kg)</label>
                 <input type="number" placeholder="45" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
               </div>
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-semibold text-text-secondary">Vision (L/R)</label>
                 <input type="text" placeholder="e.g. 6/6, 6/9" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
               </div>
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-semibold text-text-secondary">Dental Status</label>
                 <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary">
                   <option>Healthy</option>
                   <option>Cavities Found</option>
                   <option>Braces/Orthodontic</option>
                 </select>
               </div>
             </div>

             <div className="flex flex-col gap-1.5">
               <label className="text-xs font-semibold text-text-secondary">Doctor's Remarks</label>
               <input type="text" placeholder="Any specific advice..." className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
             </div>
             
             <button onClick={handleSave} className="bg-primary text-black px-4 py-2.5 rounded-lg text-sm font-bold shadow-sm hover:bg-primary-hover transition flex items-center justify-center gap-2 mt-2">
               Save Checkup Record
             </button>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <h3 className="font-bold text-sm text-text-primary">Recent Checkup Logs</h3>
            
            <div className="bg-card border border-border rounded-lg overflow-hidden">
               <table className="w-full text-left">
                 <thead className="bg-bg-page text-xs text-text-secondary">
                   <tr>
                     <th className="p-3 font-bold border-b border-border">Student</th>
                     <th className="p-3 font-bold border-b border-border">BMI Status</th>
                     <th className="p-3 font-bold border-b border-border">Date</th>
                   </tr>
                 </thead>
                 <tbody className="text-sm font-semibold">
                   <tr>
                     <td className="p-3 border-b border-border">Aarav Sharma</td>
                     <td className="p-3 border-b border-border"><span className="text-success bg-success-bg px-2 py-0.5 rounded text-[10px] uppercase font-bold">Normal</span></td>
                     <td className="p-3 border-b border-border text-xs">Today</td>
                   </tr>
                   <tr>
                     <td className="p-3 border-b border-border">Sneha Gupta</td>
                     <td className="p-3 border-b border-border"><span className="text-warning bg-warning-bg px-2 py-0.5 rounded text-[10px] uppercase font-bold">Underweight</span></td>
                     <td className="p-3 border-b border-border text-xs">Yesterday</td>
                   </tr>
                 </tbody>
               </table>
            </div>
            
            <div className="mt-4 bg-info-bg/30 border border-info/30 p-4 rounded-lg">
               <h4 className="font-bold text-info text-sm">BMI is auto-calculated!</h4>
               <p className="text-xs font-semibold text-text-secondary mt-1">When height and weight are entered, the system automatically tags the BMI status (Underweight, Normal, Overweight, Obese).</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
