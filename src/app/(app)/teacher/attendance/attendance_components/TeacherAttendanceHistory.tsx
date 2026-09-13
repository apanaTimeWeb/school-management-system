"use client";
import React from 'react';
import { Edit3, CheckCircle2, XCircle, Clock, CalendarOff } from 'lucide-react';
import { useTeacherAttendanceStore } from '../attendance_store/useTeacherAttendanceStore';
import { TEACHER_ATTENDANCE_HISTORY } from '../attendance_constants/TeacherAttendanceMockData';

export default function TeacherAttendanceHistory() {
  const { openCorrectionModal } = useTeacherAttendanceStore();

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden flex flex-col h-full">
      <div className="p-4 border-b border-border bg-black/20 flex items-center justify-between">
        <h3 className="text-[15px] font-bold text-text-primary">Attendance Submission History</h3>
      </div>
      
      <div className="flex-1 overflow-x-auto custom-scrollbar p-4">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-bold text-text-secondary uppercase tracking-wider">
              <th className="p-4 w-32">Date</th>
              <th className="p-4">Class</th>
              <th className="p-4">Type</th>
              <th className="p-4 text-center">Summary Stats</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {TEACHER_ATTENDANCE_HISTORY.map((hist) => (
              <tr key={hist.id} className="border-b border-border/50 hover:bg-white/5 transition-colors">
                <td className="p-4 text-[13px] font-bold text-text-primary">
                  {hist.date}
                  <span className="block text-[11px] text-text-secondary mt-1 font-normal">Submitted: {hist.submittedAt}</span>
                </td>
                <td className="p-4 text-[14px] font-bold text-text-primary">{hist.class}</td>
                <td className="p-4 text-[13px] text-text-secondary">{hist.type}</td>
                <td className="p-4">
                  <div className="flex items-center justify-center gap-3">
                    <span className="flex items-center gap-1 text-[12px] font-bold text-success"><CheckCircle2 size={14}/> {hist.present}</span>
                    <span className="flex items-center gap-1 text-[12px] font-bold text-danger"><XCircle size={14}/> {hist.absent}</span>
                    <span className="flex items-center gap-1 text-[12px] font-bold text-warning"><Clock size={14}/> {hist.late}</span>
                    <span className="flex items-center gap-1 text-[12px] font-bold text-info"><CalendarOff size={14}/> {hist.leave}</span>
                  </div>
                </td>
                <td className="p-4 text-right">
                   <button 
                     onClick={() => openCorrectionModal(hist.id)}
                     className="px-3 py-1.5 bg-page border border-border text-text-primary text-[12px] font-bold rounded hover:border-info hover:text-info transition-colors flex items-center justify-end gap-1.5 ml-auto"
                   >
                     <Edit3 size={14} /> Request Correction
                   </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
