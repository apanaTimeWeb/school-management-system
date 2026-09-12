"use client";

import React, { useState } from 'react';
import { Users, Search, GraduationCap, UserCheck, Briefcase } from 'lucide-react';
import clsx from 'clsx';

export default function PeopleSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('All');
  
  const results = [
    { id: 'STU-001', name: 'Aarav Sharma', type: 'Student', desc: 'Class 10-A', icon: GraduationCap },
    { id: 'PAR-089', name: 'Raj Sharma', type: 'Parent', desc: 'Father of Aarav Sharma', icon: Users },
    { id: 'TCH-04', name: 'Ramesh Singh', type: 'Teacher', desc: 'Mathematics Dept.', icon: UserCheck },
    { id: 'STF-12', name: 'Sunita Verma', type: 'Staff', desc: 'Front Desk Admin', icon: Briefcase },
  ];

  const filtered = results.filter(r => 
    (filterType === 'All' || r.type === filterType) &&
    (r.name.toLowerCase().includes(searchQuery.toLowerCase()) || r.id.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="flex flex-col gap-6 h-full fade-in relative">
      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6 flex items-center gap-2">
          <Users size={20} className="text-primary"/> Global People Search
        </h2>
        
        <div className="flex flex-col gap-6 max-w-3xl mx-auto w-full">
           <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1 relative w-full">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"/>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e)=>setSearchQuery(e.target.value)}
                  placeholder="Search by ID, Name, or Phone..." 
                  className="w-full bg-bg-input border border-border rounded-full pl-12 pr-4 py-3 text-sm outline-none focus:border-primary font-bold shadow-sm" 
                />
              </div>
              <select 
                value={filterType} 
                onChange={(e)=>setFilterType(e.target.value)} 
                className="bg-bg-input border border-border rounded-full px-4 py-3 text-sm outline-none focus:border-primary font-bold shadow-sm md:w-48 w-full"
              >
                <option value="All">All Roles</option>
                <option value="Student">Student</option>
                <option value="Parent">Parent</option>
                <option value="Teacher">Teacher</option>
                <option value="Staff">Staff</option>
              </select>
           </div>

           <div className="flex flex-col gap-3 mt-4">
              {filtered.length === 0 ? (
                <div className="text-center py-10 opacity-50 font-bold text-sm">No results found for "{searchQuery}"</div>
              ) : (
                filtered.map(res => (
                  <div key={res.id} className="bg-bg-page border border-border p-4 rounded-lg flex items-center justify-between hover:border-primary transition cursor-pointer shadow-sm">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                          <res.icon size={18}/>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-black text-primary">{res.id}</span>
                            <span className={clsx("text-[10px] font-bold px-2 py-0.5 rounded uppercase", 
                              res.type === 'Student' ? 'bg-info-bg text-info' : 
                              res.type === 'Teacher' ? 'bg-warning-bg text-warning' : 
                              res.type === 'Parent' ? 'bg-success-bg text-success' : 'bg-danger-bg text-danger'
                            )}>{res.type}</span>
                          </div>
                          <h4 className="font-bold text-sm">{res.name}</h4>
                          <p className="text-xs text-text-secondary font-semibold">{res.desc}</p>
                        </div>
                     </div>
                     <button className="text-xs font-bold bg-card border border-border px-3 py-1.5 rounded hover:border-primary">View Profile</button>
                  </div>
                ))
              )}
           </div>
        </div>
      </div>
    </div>
  );
}
