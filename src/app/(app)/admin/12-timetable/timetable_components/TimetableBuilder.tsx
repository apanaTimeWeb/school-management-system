"use client";

import React, { useState } from 'react';
import { Settings, Save, AlertTriangle, CheckCircle, Plus } from 'lucide-react';
import clsx from 'clsx';

export default function TimetableBuilder() {
  const [isPublished, setIsPublished] = useState(false);
  const [conflicts, setConflicts] = useState<string[]>([]);
  const [showToast, setShowToast] = useState(false);

  const handleValidate = () => {
    // Simulate finding a conflict
    setConflicts(['Teacher John Doe is double-booked on Monday, Period 2', 'Room 101 is double-booked on Wednesday, Period 4']);
  };

  const handlePublish = () => {
    if(conflicts.length > 0) {
      alert("Please resolve conflicts before publishing!");
      return;
    }
    setIsPublished(!isPublished);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const resolveConflict = () => {
    setConflicts([]);
  };

  return (
    <div className="flex flex-col gap-6 h-full fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Timetable {isPublished ? 'Published' : 'Unpublished'} Successfully!
        </div>
      )}

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <div className="flex justify-between items-center border-b border-border pb-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-text-primary">Timetable Builder & Allocator</h2>
            <p className="text-xs text-text-secondary mt-1">Assign subjects, teachers, and rooms to periods. Validate before publishing.</p>
          </div>
          <div className="flex gap-2">
            <span className={clsx("px-3 py-1.5 rounded text-xs font-bold uppercase flex items-center gap-2 border", isPublished ? "bg-success-bg text-success border-success/30" : "bg-warning-bg text-warning border-warning/30")}>
               Status: {isPublished ? 'Published (Live)' : 'Draft Mode'}
            </span>
          </div>
        </div>

        <div className="bg-bg-page border border-border p-4 rounded-lg flex gap-4 mb-6">
           <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary w-48 font-semibold">
              <option>Class 10 - Section A</option>
              <option>Class 9 - Section B</option>
           </select>
           <button className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-md font-bold text-sm hover:bg-primary hover:text-white transition">
              Load Draft
           </button>
        </div>

        {/* Builder Matrix Simulation */}
        <div className="border border-border rounded-lg p-5 mb-6 opacity-70 cursor-not-allowed relative group overflow-hidden">
           <div className="absolute inset-0 bg-bg-page/50 backdrop-blur-[1px] flex items-center justify-center z-10">
              <div className="bg-card px-6 py-3 rounded-xl shadow-lg font-bold flex items-center gap-2 border border-border">
                <Settings className="animate-spin text-primary"/> Interactive Matrix Builder active in detailed view
              </div>
           </div>
           <div className="grid grid-cols-4 gap-4">
             {[1,2,3,4].map(i=>(
               <div key={i} className="h-24 bg-bg-input border border-border rounded-md border-dashed flex flex-col items-center justify-center text-text-secondary">
                 <Plus size={24}/>
                 <span className="text-xs font-bold mt-1">Assign Period {i}</span>
               </div>
             ))}
           </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
             <h3 className="font-bold text-sm mb-3">Conflict Detection</h3>
             {conflicts.length > 0 ? (
               <div className="bg-danger-bg border border-danger/30 p-4 rounded-lg flex flex-col gap-3">
                 <div className="flex items-center gap-2 text-danger font-bold text-sm">
                   <AlertTriangle size={18}/> Conflicts Found ({conflicts.length})
                 </div>
                 <ul className="list-disc pl-5 text-xs text-danger font-medium space-y-1">
                   {conflicts.map((c, i) => <li key={i}>{c}</li>)}
                 </ul>
                 <button onClick={resolveConflict} className="bg-danger text-white px-4 py-1.5 rounded-md text-xs font-bold self-start hover:bg-danger/90">Auto-Resolve (Test)</button>
               </div>
             ) : (
               <div className="bg-success-bg border border-success/30 p-4 rounded-lg flex items-center gap-2 text-success font-bold text-sm">
                 <CheckCircle size={18}/> No conflicts detected! Safe to publish.
               </div>
             )}
          </div>
          
          <div className="w-full lg:w-72 flex flex-col gap-3 justify-end">
             <button onClick={handleValidate} className="w-full bg-bg-page border border-border text-text-primary px-4 py-2.5 rounded-lg text-sm font-bold shadow-sm hover:border-primary transition">
               Run Conflict Check
             </button>
             <button 
               onClick={handlePublish}
               className={clsx("w-full px-4 py-2.5 rounded-lg text-sm font-bold shadow-sm transition flex items-center justify-center gap-2", isPublished ? "bg-warning text-white hover:bg-warning/90" : "bg-success text-white hover:bg-success/90")}
             >
               <Save size={16}/> {isPublished ? 'Unpublish Timetable' : 'Publish Timetable'}
             </button>
          </div>
        </div>

      </div>
    </div>
  );
}
