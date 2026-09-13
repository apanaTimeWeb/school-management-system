"use client";
import React, { useState } from 'react';
import { UserCircle, CheckCircle, XCircle, Search, FileText } from 'lucide-react';
import { STUDENT_LEAVES_MOCK } from '../attendance_constants/TeacherAttendanceMockData';

export default function TeacherAttendanceLeaves() {
  const [leaves, setLeaves] = useState(STUDENT_LEAVES_MOCK);
  const [search, setSearch] = useState('');

  const handleAction = (id: string, action: 'Approved' | 'Rejected') => {
    setLeaves(leaves.map(lv => lv.id === id ? { ...lv, status: action } : lv));
  };

  const filteredLeaves = leaves.filter(lv => 
    lv.studentName.toLowerCase().includes(search.toLowerCase()) || 
    lv.class.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-card border border-border rounded-xl flex flex-col h-[calc(100vh-220px)]">
      
      <div className="p-4 border-b border-border bg-black/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
        <h2 className="text-[16px] font-bold text-text-primary flex items-center gap-2">
          <FileText size={18} className="text-primary"/> Student Leave Applications
        </h2>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-2.5 text-text-secondary" size={16} />
          <input 
            type="text" 
            placeholder="Search student or class..." 
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-input border border-border rounded-md pl-9 pr-3 py-2 text-[13px] text-text-primary focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
        <div className="space-y-4">
          {filteredLeaves.map((leave) => (
            <div key={leave.id} className="bg-page border border-border rounded-lg p-5 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-primary/50 transition-colors">
               
               <div className="flex items-start gap-4 flex-1">
                 <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                   <UserCircle size={24} />
                 </div>
                 <div>
                   <h3 className="text-[16px] font-bold text-text-primary">{leave.studentName}</h3>
                   <p className="text-[13px] text-text-secondary mt-1">Class: {leave.class} • Roll: {leave.rollNo}</p>
                   <div className="mt-3 bg-input px-3 py-2 rounded border border-border text-[13px]">
                     <span className="font-bold text-text-primary block mb-1">{leave.type} ({leave.fromDate} to {leave.toDate})</span>
                     <span className="text-text-secondary">Reason: {leave.reason}</span>
                   </div>
                 </div>
               </div>

               <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
                 <span className={`px-3 py-1 text-[12px] font-bold uppercase tracking-wider rounded border ${
                   leave.status === 'Approved' ? 'bg-success/20 text-success border-success/30' :
                   leave.status === 'Rejected' ? 'bg-danger/20 text-danger border-danger/30' :
                   'bg-warning/20 text-warning border-warning/30'
                 }`}>
                   {leave.status}
                 </span>

                 {leave.status === 'Pending' && (
                   <div className="flex items-center gap-2">
                     <button onClick={() => handleAction(leave.id, 'Approved')} className="flex items-center gap-1.5 px-4 py-2 bg-success/10 text-success border border-success/30 hover:bg-success hover:text-black rounded-lg text-[13px] font-bold transition-colors">
                       <CheckCircle size={16}/> Approve
                     </button>
                     <button onClick={() => handleAction(leave.id, 'Rejected')} className="flex items-center gap-1.5 px-4 py-2 bg-danger/10 text-danger border border-danger/30 hover:bg-danger hover:text-white rounded-lg text-[13px] font-bold transition-colors">
                       <XCircle size={16}/> Reject
                     </button>
                   </div>
                 )}
               </div>

            </div>
          ))}

          {filteredLeaves.length === 0 && (
            <div className="text-center py-12 text-text-secondary">
              <p>No leave applications found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
