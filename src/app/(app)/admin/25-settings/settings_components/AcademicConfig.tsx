"use client";

import React, { useState } from 'react';
import { BookOpen, UserCheck, ClipboardList, CheckCircle, Save } from 'lucide-react';

export default function AcademicConfig() {
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col gap-6 h-full fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Configuration Updated!
        </div>
      )}

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6 flex items-center gap-2">
          <BookOpen size={20} className="text-primary"/> Academic & Exam Settings
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="flex flex-col gap-6">
             {/* Academic Term */}
             <div className="bg-bg-page border border-border p-5 rounded-lg flex flex-col gap-4 shadow-sm">
                <h3 className="font-bold text-sm flex items-center gap-2 border-b border-border pb-2"><BookOpen size={16}/> Active Academic Year</h3>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Current Session</label>
                  <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary font-bold">
                    <option>2025 - 2026</option>
                    <option>2024 - 2025</option>
                  </select>
                </div>
                
                <p className="text-[10px] text-danger font-bold uppercase mt-2">* Warning: Changing the active session will change the default view for all users across the ERP.</p>
             </div>

             {/* Attendance Thresholds */}
             <div className="bg-bg-page border border-border p-5 rounded-lg flex flex-col gap-4 shadow-sm">
                <h3 className="font-bold text-sm flex items-center gap-2 border-b border-border pb-2"><UserCheck size={16}/> Attendance Settings</h3>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Minimum Attendance Required (%)</label>
                  <input type="number" defaultValue="75" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary font-bold" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Auto-Absent Cutoff Time</label>
                  <input type="time" defaultValue="09:30" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary font-bold" />
                </div>
             </div>
          </div>

          <div className="flex flex-col gap-6">
             {/* Exam Settings */}
             <div className="bg-bg-page border border-border p-5 rounded-lg flex flex-col gap-4 shadow-sm h-full">
                <h3 className="font-bold text-sm flex items-center gap-2 border-b border-border pb-2"><ClipboardList size={16}/> Examination Settings</h3>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Grading System</label>
                  <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary font-bold">
                    <option>CBSE (CGPA - 10 Point Scale)</option>
                    <option>State Board (Percentage %)</option>
                    <option>Letter Grades (A, B, C, D, F)</option>
                  </select>
                </div>
                
                <div className="flex flex-col gap-1.5 mt-2">
                  <label className="text-xs font-bold text-text-secondary uppercase">Pass Mark Threshold (%)</label>
                  <input type="number" defaultValue="33" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary font-bold" />
                </div>

                <div className="flex items-center gap-2 mt-4 bg-card border border-border p-3 rounded">
                  <input type="checkbox" id="showRank" className="accent-primary w-4 h-4" defaultChecked/>
                  <label htmlFor="showRank" className="text-sm font-bold text-text-primary">Display Student Rank on Marksheet</label>
                </div>
                <div className="flex items-center gap-2 mt-2 bg-card border border-border p-3 rounded">
                  <input type="checkbox" id="lockMarks" className="accent-primary w-4 h-4" defaultChecked/>
                  <label htmlFor="lockMarks" className="text-sm font-bold text-text-primary">Lock Marks after Result Declaration</label>
                </div>
                
                <button onClick={handleSave} className="w-full bg-primary text-black py-3 rounded-lg text-sm font-bold shadow-sm hover:bg-primary-hover transition flex items-center justify-center gap-2 mt-auto">
                  <Save size={16}/> Save Configurations
                </button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
