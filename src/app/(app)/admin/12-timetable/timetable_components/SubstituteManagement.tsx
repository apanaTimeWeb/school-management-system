"use client";

import React, { useState } from 'react';
import { UserMinus, Search, UserPlus, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

export default function SubstituteManagement() {
  const [date, setDate] = useState('2026-10-15');
  const [absentTeacher, setAbsentTeacher] = useState('');
  const [freeTeachers, setFreeTeachers] = useState<{name:string, dept:string}[]>([]);
  const [showToast, setShowToast] = useState(false);

  const handleSearchFreeTeachers = () => {
    if(!absentTeacher) return;
    setFreeTeachers([
      { name: 'Mike Johnson', dept: 'English' },
      { name: 'Emily Davis', dept: 'Science' },
    ]);
  };

  const handleAssign = () => {
    setShowToast(true);
    setFreeTeachers([]);
    setAbsentTeacher('');
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col gap-6 h-full fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Substitute Assigned Successfully!
        </div>
      )}

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6 flex items-center gap-2">
          <UserMinus size={20} className="text-warning"/> Substitute Teacher Allocation
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-sm uppercase text-text-secondary">Step 1: Identify Absent Teacher</h3>
            
            <div className="bg-bg-page border border-border rounded-lg p-5 flex flex-col gap-4">
               <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Date</label>
                  <input type="date" value={date} onChange={e=>setDate(e.target.value)} className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
               </div>
               <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Absent Teacher</label>
                  <select value={absentTeacher} onChange={e=>setAbsentTeacher(e.target.value)} className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary">
                    <option value="">Select Teacher...</option>
                    <option value="T1">John Doe (Maths) - 3 Periods</option>
                    <option value="T2">Anna Lee (History) - 4 Periods</option>
                  </select>
               </div>
               <button onClick={handleSearchFreeTeachers} disabled={!absentTeacher} className="mt-2 bg-primary text-white px-4 py-2.5 rounded-lg text-sm font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition flex items-center justify-center gap-2 disabled:opacity-50">
                 <Search size={16}/> Find Free Teachers
               </button>
            </div>
            
            {absentTeacher && (
              <div className="border border-warning/30 bg-warning-bg rounded-lg p-4">
                <h4 className="font-bold text-sm text-warning mb-2">Affected Periods for Selected Teacher</h4>
                <ul className="text-xs font-semibold text-text-primary space-y-2">
                  <li className="flex justify-between border-b border-warning/20 pb-1"><span>Period 1</span> <span className="text-warning">Class 10-A</span></li>
                  <li className="flex justify-between border-b border-warning/20 pb-1"><span>Period 3</span> <span className="text-warning">Class 9-B</span></li>
                  <li className="flex justify-between pb-1"><span>Period 5</span> <span className="text-warning">Class 11-Sci</span></li>
                </ul>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-sm uppercase text-text-secondary">Step 2: Assign Free Teacher</h3>
            
            {freeTeachers.length > 0 ? (
              <div className="flex flex-col gap-3 fade-in">
                <p className="text-xs font-bold text-success mb-2">Found {freeTeachers.length} teachers with free periods matching the requirement.</p>
                {freeTeachers.map((t, idx) => (
                  <div key={idx} className="bg-card border border-border p-4 rounded-lg flex justify-between items-center hover:border-primary transition">
                    <div>
                      <h4 className="font-bold text-sm text-text-primary">{t.name}</h4>
                      <p className="text-xs text-text-secondary font-semibold">{t.dept} Department</p>
                    </div>
                    <button onClick={handleAssign} className="bg-success/10 text-success border border-success/20 px-3 py-1.5 rounded-md text-xs font-bold hover:bg-success hover:text-white transition flex items-center gap-1">
                      <UserPlus size={14}/> Assign
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-bg-page border border-border rounded-lg p-10 flex flex-col items-center justify-center text-center opacity-70 h-[250px]">
                <Search size={40} className="text-text-secondary mb-3"/>
                <p className="text-sm font-bold text-text-secondary">Select an absent teacher and search<br/>to view available substitutes.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
