"use client";

import React, { useState } from 'react';
import { FileText, Search, Download, Eye, FileBadge } from 'lucide-react';

export default function DocumentSearch() {
  const [searchQuery, setSearchQuery] = useState('');

  const results = [
    { id: 'CERT-2026-1001', student: 'Aarav Sharma (STU-001)', type: 'Bonafide Certificate', date: '10-Oct-2025' },
    { id: 'KYC-DOC-089', student: 'Sneha Gupta (STU-022)', type: 'Aadhar Card (Document)', date: '12-Oct-2025' },
  ];

  return (
    <div className="flex flex-col gap-6 h-full fade-in relative">
      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6 flex items-center gap-2">
          <FileText size={20} className="text-danger"/> Document & Certificate Search
        </h2>
        
        <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full">
           
           <div className="flex flex-col md:flex-row gap-4 items-center bg-bg-page border border-border p-4 rounded-xl shadow-sm">
              <div className="flex-1 relative w-full">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"/>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e)=>setSearchQuery(e.target.value)}
                  placeholder="Search Certificate Serial No, Document Name, or Student ID..." 
                  className="w-full bg-bg-input border border-border rounded-lg pl-12 pr-4 py-3 text-sm outline-none focus:border-danger font-bold" 
                />
              </div>
           </div>

           <div className="flex flex-col gap-3 mt-4">
             {results.map((res, i) => (
               <div key={i} className="bg-bg-page border border-border p-4 rounded-lg flex justify-between items-center shadow-sm hover:border-danger transition">
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 bg-danger/10 text-danger rounded flex items-center justify-center">
                       {res.type.includes('Certificate') ? <FileBadge size={18}/> : <FileText size={18}/>}
                     </div>
                     <div>
                       <div className="flex items-center gap-2 mb-1">
                         <span className="text-xs font-black text-danger">{res.id}</span>
                         <span className="text-[10px] text-text-secondary font-bold bg-card border border-border px-1.5 rounded">{res.date}</span>
                       </div>
                       <h4 className="font-bold text-sm">{res.type}</h4>
                       <p className="text-xs font-semibold text-text-secondary">{res.student}</p>
                     </div>
                  </div>
                  <div className="flex gap-2">
                     <button className="bg-card border border-border p-2 rounded text-text-secondary hover:text-primary transition"><Eye size={16}/></button>
                     <button className="bg-card border border-border p-2 rounded text-text-secondary hover:text-primary transition"><Download size={16}/></button>
                  </div>
               </div>
             ))}
           </div>

        </div>
      </div>
    </div>
  );
}
