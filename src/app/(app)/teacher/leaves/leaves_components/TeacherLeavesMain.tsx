"use client";
import React, { useState } from 'react';
import { Plus, CalendarOff, CheckCircle2, XCircle, Clock, FileText, Search, Paperclip, MessageSquare, Fingerprint, LogIn, LogOut } from 'lucide-react';
import { useTeacherLeavesStore, LeaveStatus } from '../leaves_store/useTeacherLeavesStore';
import TeacherApplyLeaveModal from './TeacherApplyLeaveModal';

export default function TeacherLeavesMain() {
  const { openApplyLeaveModal, leavesList, punchLogs, punchIn, punchOut } = useTeacherLeavesStore();
  const [activeTab, setActiveTab] = useState<'All' | LeaveStatus | 'Punch Log'>('All');

  const filteredLeaves = leavesList.filter(leave => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Punch Log') return false;
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
  const totalLeaves = leavesList.length;
  const approvedLeaves = leavesList.filter(l => l.status === 'Approved').length;
  const pendingLeaves = leavesList.filter(l => l.status === 'Pending').length;

  const todayStr = new Date().toLocaleDateString('en-GB');
  const todayLog = punchLogs.find(l => l.date === todayStr);
  const canPunchIn = !todayLog || !todayLog.inTime;
  const canPunchOut = todayLog && todayLog.inTime && !todayLog.outTime;

  return (
    <div className="flex flex-col h-full w-full max-w-7xl mx-auto">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary">Leave Management</h1>
          <p className="text-[14px] text-text-secondary mt-1">Apply for leaves and track your application status & history.</p>
        </div>
        <button 
          onClick={openApplyLeaveModal}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-bold text-[14px] rounded-lg hover:bg-primary/90 transition-colors shadow-sm self-start md:self-auto"
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
          {['All', 'Pending', 'Approved', 'Rejected', 'Punch Log'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-5 py-2 rounded-lg text-[13px] font-bold transition-colors whitespace-nowrap ${
                activeTab === tab 
                ? 'bg-primary text-white shadow-sm' 
                : 'bg-page border border-border text-text-secondary hover:text-text-primary hover:bg-white/5'
              }`}
            >
              {tab === 'Punch Log' ? tab : `${tab} Leaves`}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'Punch Log' ? (
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-border pb-6">
            <div>
              <h2 className="text-[18px] font-bold text-text-primary flex items-center gap-2"><Fingerprint size={20} className="text-primary"/> Attendance Punch Log</h2>
              <p className="text-[13px] text-text-secondary mt-1">Manual punch allowed as fallback for biometric sync.</p>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={punchIn}
                disabled={!canPunchIn}
                className={`flex items-center gap-2 px-4 py-2 font-bold text-[13px] rounded-lg transition-colors ${canPunchIn ? 'bg-success text-white hover:bg-success/90' : 'bg-input text-text-secondary cursor-not-allowed'}`}
              >
                <LogIn size={16} /> Punch In
              </button>
              <button 
                onClick={punchOut}
                disabled={!canPunchOut}
                className={`flex items-center gap-2 px-4 py-2 font-bold text-[13px] rounded-lg transition-colors ${canPunchOut ? 'bg-warning text-black hover:bg-warning/90' : 'bg-input text-text-secondary cursor-not-allowed'}`}
              >
                <LogOut size={16} /> Punch Out
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-border bg-page">
                  <th className="py-3 px-4 text-[12px] font-bold text-text-secondary uppercase tracking-wider">Date</th>
                  <th className="py-3 px-4 text-[12px] font-bold text-text-secondary uppercase tracking-wider">Punch In</th>
                  <th className="py-3 px-4 text-[12px] font-bold text-text-secondary uppercase tracking-wider">Punch Out</th>
                  <th className="py-3 px-4 text-[12px] font-bold text-text-secondary uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody>
                {punchLogs.map((log) => (
                  <tr key={log.id} className="border-b border-border/50 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 text-[14px] font-bold text-text-primary">{log.date}</td>
                    <td className="py-4 px-4 text-[14px] text-text-primary">{log.inTime || '--:--'}</td>
                    <td className="py-4 px-4 text-[14px] text-text-primary">{log.outTime || '--:--'}</td>
                    <td className="py-4 px-4">
                      <span className={`px-2 py-1 text-[11px] font-bold rounded uppercase tracking-wider ${
                        log.status === 'Present' ? 'bg-success/20 text-success' :
                        log.status === 'Absent' ? 'bg-danger/20 text-danger' :
                        'bg-warning/20 text-warning'
                      }`}>
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
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
      )}

      <TeacherApplyLeaveModal />
    </div>
  );
}
