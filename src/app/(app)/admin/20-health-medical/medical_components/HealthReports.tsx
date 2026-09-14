"use client";

import React from 'react';
import { Activity, Download, Heart } from 'lucide-react';

export default function HealthReports() {
  return (
    <div className="flex flex-col gap-6 h-full fade-in">
      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6 flex items-center gap-2">
          <Activity size={20} className="text-primary"/> Health Analytics & Reports
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-col justify-center text-center">
            <span className="text-xs font-bold text-text-secondary uppercase mb-1">Checkups Completed</span>
            <span className="text-3xl font-black text-primary">850</span>
          </div>
          <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-col justify-center text-center">
            <span className="text-xs font-bold text-text-secondary uppercase mb-1">Students Underweight</span>
            <span className="text-3xl font-black text-warning">42</span>
          </div>
          <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-col justify-center text-center">
            <span className="text-xs font-bold text-text-secondary uppercase mb-1">Students Obese</span>
            <span className="text-3xl font-black text-danger">18</span>
          </div>
          <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-col justify-center text-center">
            <span className="text-xs font-bold text-text-secondary uppercase mb-1">Sick Room Visits (Month)</span>
            <span className="text-3xl font-black text-info">35</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="border border-border rounded-lg p-5 bg-card shadow-sm">
             <h3 className="font-bold text-sm mb-4">Print Health Cards</h3>
             <p className="text-xs text-text-secondary font-medium mb-4">Generate and download official PDF Health Cards for students. These cards include BMI data, blood group, allergies, and emergency contacts to be kept in student bags.</p>
             
             <div className="flex flex-col gap-2">
               <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary font-bold">
                 <option>Class 10 - Section A</option>
                 <option>Class 10 - Section B</option>
               </select>
               <button className="bg-primary text-black py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-primary-hover flex items-center justify-center gap-2">
                 <Download size={16}/> Download Class Batch (PDF)
               </button>
             </div>
           </div>

           <div className="border border-border rounded-lg p-5 bg-card shadow-sm flex flex-col items-center text-center justify-center">
              <Heart size={48} className="text-text-secondary mb-3 opacity-50"/>
              <h3 className="font-bold text-sm">Detailed Analytics Engine</h3>
              <p className="text-xs text-text-secondary font-medium mt-2 max-w-sm">Use the core reports module to run advanced queries on student health data, such as identifying all students with severe peanut allergies across the campus.</p>
           </div>
        </div>

      </div>
    </div>
  );
}
