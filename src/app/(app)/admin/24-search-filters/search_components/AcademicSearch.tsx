"use client";

import React, { useState } from 'react';
import { BookOpen, Search, UserCheck, CheckSquare, ClipboardList } from 'lucide-react';
import clsx from 'clsx';

export default function AcademicSearch() {
  const [searchType, setSearchType] = useState('admission');

  return (
    <div className="flex flex-col gap-6 h-full fade-in relative">
      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6 flex items-center gap-2">
          <BookOpen size={20} className="text-primary"/> Academic Records Search
        </h2>
        
        <div className="flex flex-col gap-6 max-w-3xl mx-auto w-full">
           
           <div className="flex bg-bg-page border border-border rounded-lg p-1 w-full shadow-sm mx-auto">
             <button onClick={()=>setSearchType('admission')} className={clsx("flex-1 py-2 text-sm font-bold rounded flex justify-center items-center gap-2 transition", searchType==='admission'?'bg-card shadow text-primary':'text-text-secondary hover:text-text-primary')}><UserCheck size={16}/> Admissions</button>
             <button onClick={()=>setSearchType('attendance')} className={clsx("flex-1 py-2 text-sm font-bold rounded flex justify-center items-center gap-2 transition", searchType==='attendance'?'bg-card shadow text-info':'text-text-secondary hover:text-text-primary')}><CheckSquare size={16}/> Attendance</button>
             <button onClick={()=>setSearchType('exam')} className={clsx("flex-1 py-2 text-sm font-bold rounded flex justify-center items-center gap-2 transition", searchType==='exam'?'bg-card shadow text-warning':'text-text-secondary hover:text-text-primary')}><ClipboardList size={16}/> Exams & Marks</button>
           </div>

           <div className="relative w-full shadow-sm mt-4">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"/>
              <input 
                type="text" 
                placeholder={`Search ${searchType} records by ID or Keyword...`}
                className={clsx("w-full bg-bg-input border rounded-lg pl-12 pr-4 py-3 text-sm outline-none font-bold transition", 
                  searchType==='admission' ? 'border-primary/50 focus:border-primary' :
                  searchType==='attendance' ? 'border-info/50 focus:border-info' : 'border-warning/50 focus:border-warning'
                )} 
              />
           </div>

           <div className="bg-bg-page border border-border p-8 rounded-lg flex flex-col items-center justify-center text-center opacity-70 mt-4">
              <Search size={48} className="text-text-secondary mb-3"/>
              <h3 className="font-bold text-sm">Enter a query to begin searching</h3>
              <p className="text-xs font-semibold text-text-secondary mt-1">
                {searchType === 'admission' && "Search through all past and present admission forms by Application ID, Name, or Phone."}
                {searchType === 'attendance' && "Search daily attendance registers by Student ID and Date to view exact in/out times."}
                {searchType === 'exam' && "Search exam marksheets, subject scores, or specific test records."}
              </p>
           </div>

        </div>
      </div>
    </div>
  );
}
