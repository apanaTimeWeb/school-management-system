"use client";
import React, { useState } from 'react';
import { Plus, CalendarOff, CheckCircle2, XCircle, Clock, FileText, Search, Paperclip, MessageSquare } from 'lucide-react';
import { useTeacherLeavesStore, LeaveStatus } from '../leaves_store/useTeacherLeavesStore';
import { TEACHER_LEAVES_MOCK } from '../leaves_constants/TeacherLeavesMockData';
import TeacherApplyLeaveModal from './TeacherApplyLeaveModal';

export default function TeacherLeavesMain() {
  const { openApplyLeaveModal } = useTeacherLeavesStore();
  const [activeTab, setActiveTab] = useState<'All' | LeaveStatus>('All');

  const filteredLeaves = TEACHER_LEAVES_MOCK.filter(leave => {
    if (activeTab === 'All') return true;
    return leave.status === activeTab;
  });

  const getStatusBadge = (status: LeaveStatus) => {
    switch(status) {
      case 'Approved': return <span className="flex items-center gap-1.5 px-3 py-1 bg-success/20 text-success text-[11px] font-bold uppercase tracking-wider rounded"><CheckCircle2 size={14}/> Approved</span>;
      case 'Rejected': return <span className="flex items-center gap-1.5 px-3 py-1 bg-danger/20 text-danger text-[11px] font-bold uppercase tracking-wider rounded"><XCircle size={14}/> Rejected</span>;
      case 'Pending': return <span className="flex items-center gap-1.5 px-3 py-1 bg-warning/20 text-warning text-[11px] font-bold uppercase tracking-wider rounded animate-pulse"><Clock size={14}/> Pending</span>;
    }
  };

  // Quick stats
  const totalLeaves = TEACHER_LEAVES_MOCK.length;
  const approvedLeaves = TEACHER_LEAVES_MOCK.filter(l => l.status === 'Approved').length;
  const pendingLeaves = TEACHER_LEAVES_MOCK.filter(l => l.status === 'Pending').length;

  return (
    <div className="flex flex-col h-full w-full max-w-7xl mx-auto">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary">Leave Management</h1>
          <p className="text-[14px] text-text-secondary mt-1">Apply for leaves and track your application status & history.</p>
        </div>
        <button 
          onClick={openApplyLeaveModal}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-black font-bold text-[14px] rounded-lg hover:bg-primary/90 transition-colors shadow-sm self-start md:self-auto"
        >
          <Plus size={18} /> Apply Leave
        </button>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
        <div className="bg-card border border-border p-4 rounded-xl flex items-center justify-between">
          <div>
            <p className="text-[12px] text-text-secondary uppercase tracking-wider font-bold mb-1">Total Leaves</p>
            <p className="text-[24px] font-black text-text-primary leading-none">{totalLeaves}</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-input flex items-center justify-center text-text-secondary"><FileText size={24}/></div>
        </div>
        <div className="bg-card border border-border p-4 rounded-xl flex items-center justify-between">
          <div>
            <p className="text-[12px] text-text-secondary uppercase tracking-wider font-bold mb-1">Approved</p>
            <p className="text-[24px] font-black text-success leading-none">{approvedLeaves}</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center text-success"><CheckCircle2 size={24}/></div>
        </div>
        <div className="bg-card border border-border p-4 rounded-xl flex items-center justify-between">
          <div>
            <p className="text-[12px] text-text-secondary uppercase tracking-wider font-bold mb-1">Pending Approval</p>
            <p className="text-[24px] font-black text-warning leading-none">{pendingLeaves}</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center text-warning"><Clock size={24}/></div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-4 mb-6">
        <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-1">
          {['All', 'Pending', 'Approved', 'Rejected'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-5 py-2 rounded-lg text-[13px] font-bold transition-colors whitespace-nowrap ${
                activeTab === tab 
                ? 'bg-primary text-black shadow-sm' 
                : 'bg-page border border-border text-text-secondary hover:text-text-primary hover:bg-white/5'
              }`}
            >
              {tab} Leaves
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredLeaves.map((leave) => (
          <div key={leave.id} className="bg-card border border-border rounded-xl flex flex-col hover:border-primary/50 transition-colors">
             
             <div className="p-5 border-b border-border flex items-start justify-between bg-black/10">
               <div>
                 <h3 className="text-[16px] font-bold text-text-primary flex items-center gap-2 mb-1">
                   <CalendarOff size={16} className="text-primary"/> {leave.type}
                 </h3>
                 <p className="text-[12px] text-text-secondary font-bold">Applied On: {leave.appliedOn}</p>
               </div>
               {getStatusBadge(leave.status)}
             </div>

             <div className="p-5 flex-1 space-y-4">
                <div className="flex items-center gap-4 bg-page border border-border p-3 rounded-lg">
                  <div className="flex-1">
                    <p className="text-[11px] text-text-secondary uppercase font-bold tracking-wider mb-1">From Date</p>
                    <p className="text-[14px] font-bold text-text-primary">{leave.fromDate}</p>
                  </div>
                  <div className="w-px h-8 bg-border"></div>
                  <div className="flex-1">
                    <p className="text-[11px] text-text-secondary uppercase font-bold tracking-wider mb-1">To Date</p>
                    <p className="text-[14px] font-bold text-text-primary">{leave.toDate}</p>
                  </div>
                </div>

                <div>
                  <p className="text-[12px] font-bold text-text-primary mb-1">Reason:</p>
                  <p className="text-[13px] text-text-secondary leading-relaxed bg-input p-3 rounded-lg border border-border/50">{leave.reason}</p>
                </div>

                {leave.attachment && (
                  <div className="flex items-center gap-2 text-[12px] text-info bg-info/10 p-2 rounded-lg border border-info/20 font-bold w-fit">
                    <Paperclip size={14} /> Attachment Included ({leave.attachment})
                  </div>
                )}
             </div>

             {leave.adminRemarks && (
               <div className={`p-4 border-t border-border ${leave.status === 'Approved' ? 'bg-success/5' : 'bg-danger/5'}`}>
                 <p className="text-[11px] font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5 text-text-secondary">
                   <MessageSquare size={14}/> Principal Remarks
                 </p>
                 <p className={`text-[13px] font-bold ${leave.status === 'Approved' ? 'text-success' : 'text-danger'}`}>
                   "{leave.adminRemarks}"
                 </p>
               </div>
             )}
          </div>
        ))}

        {filteredLeaves.length === 0 && (
          <div className="col-span-full py-16 text-center text-text-secondary bg-card rounded-xl border border-border">
            <CalendarOff size={48} className="mx-auto mb-4 opacity-50" />
            <p className="text-[16px] font-bold text-text-primary">No Leave Records Found</p>
            <p className="text-[13px] mt-1">You haven't applied for any leaves in this category.</p>
          </div>
        )}
      </div>

      <TeacherApplyLeaveModal />
    </div>
  );
}
