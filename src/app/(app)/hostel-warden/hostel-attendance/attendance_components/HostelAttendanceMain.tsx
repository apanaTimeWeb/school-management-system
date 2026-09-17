"use client";

import React, { useState } from 'react';
import { 
  ClipboardCheck, Search, Filter, CheckCircle2, 
  XCircle, Clock, CalendarDays, Fingerprint, MapPin, 
  User, Send, BellDot, BedDouble, Plus
} from 'lucide-react';
import { MOCK_ATTENDANCE_RECORDS, MOCK_ATTENDANCE_SUMMARY } from '../attendance_constants/attendance.constants';

export default function HostelAttendanceMain() {
  const [searchTerm, setSearchTerm] = useState('');
  const [attendanceType, setAttendanceType] = useState('Night');
  const [date, setDate] = useState(MOCK_ATTENDANCE_SUMMARY.date);

  const filteredRecords = MOCK_ATTENDANCE_RECORDS.filter(r => 
    (r.studentName.toLowerCase().includes(searchTerm.toLowerCase()) || r.studentId.toLowerCase().includes(searchTerm.toLowerCase())) &&
    r.type === attendanceType
  );

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Present': return 'text-emerald-600 bg-emerald-500/10 border-emerald-500/20';
      case 'Absent': return 'text-red-600 bg-red-500/10 border-red-500/20';
      case 'Leave': return 'text-purple-600 bg-purple-500/10 border-purple-500/20';
      case 'Outing': return 'text-amber-600 bg-amber-500/10 border-amber-500/20';
      default: return 'text-gray-600 bg-gray-500/10 border-gray-500/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'Present': return <CheckCircle2 size={14} />;
      case 'Absent': return <XCircle size={14} />;
      case 'Leave': return <CalendarDays size={14} />;
      case 'Outing': return <Clock size={14} />;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0 shadow-sm">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <ClipboardCheck className="text-orange-500" size={24} /> Hostel Attendance
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Track daily attendance, biometric logs, and absentee alerts.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
           <div className="flex gap-2 bg-[var(--bg-input)] p-1 rounded-lg border border-[var(--border)]">
              {['Morning', 'Evening', 'Night'].map(type => (
                 <button 
                    key={type}
                    onClick={() => setAttendanceType(type)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors ${attendanceType === type ? 'bg-[var(--bg-card)] text-orange-600 shadow-sm' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
                 >
                    {type}
                 </button>
              ))}
           </div>
           <input 
              type="date" 
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-[var(--bg-input)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] focus:border-orange-500 outline-none"
           />
           <button className="flex items-center justify-center gap-2 px-4 py-2 bg-orange-600 text-white text-sm font-bold rounded-lg shadow-sm hover:bg-orange-700 transition-colors shrink-0">
              <Plus size={16} /> Mark Attendance
           </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
         <div className="bg-[var(--bg-card)] border border-[var(--border)] p-4 rounded-xl shadow-sm text-center">
            <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)]">Total Strength</span>
            <p className="text-2xl font-black text-[var(--text-primary)] mt-1">{MOCK_ATTENDANCE_SUMMARY.totalStudents}</p>
         </div>
         <div className="bg-[rgba(16,185,129,0.05)] border border-emerald-500/20 p-4 rounded-xl shadow-sm text-center">
            <span className="text-[10px] uppercase font-bold text-emerald-600/70">Present</span>
            <p className="text-2xl font-black text-emerald-600 mt-1">{MOCK_ATTENDANCE_SUMMARY.present}</p>
         </div>
         <div className="bg-[rgba(239,68,68,0.05)] border border-red-500/20 p-4 rounded-xl shadow-sm text-center">
            <span className="text-[10px] uppercase font-bold text-red-600/70">Absent</span>
            <p className="text-2xl font-black text-red-600 mt-1">{MOCK_ATTENDANCE_SUMMARY.absent}</p>
         </div>
         <div className="bg-[rgba(168,85,247,0.05)] border border-purple-500/20 p-4 rounded-xl shadow-sm text-center">
            <span className="text-[10px] uppercase font-bold text-purple-600/70">On Leave</span>
            <p className="text-2xl font-black text-purple-600 mt-1">{MOCK_ATTENDANCE_SUMMARY.leave}</p>
         </div>
         <div className="bg-[rgba(245,158,11,0.05)] border border-amber-500/20 p-4 rounded-xl shadow-sm text-center">
            <span className="text-[10px] uppercase font-bold text-amber-600/70">On Outing</span>
            <p className="text-2xl font-black text-amber-600 mt-1">{MOCK_ATTENDANCE_SUMMARY.outing}</p>
         </div>
      </div>

      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
         <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={16} />
            <input 
               type="text" 
               placeholder="Search by student or ID..." 
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-lg pl-9 pr-4 py-2 text-sm focus:border-orange-500 outline-none transition-colors"
            />
         </div>
         <button className="px-4 py-2 bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-primary)] font-bold text-sm rounded-lg hover:bg-[var(--bg-input)] transition-colors flex items-center gap-2">
            <BellDot size={16} className="text-red-500" /> Send Alerts to All Absentees
         </button>
      </div>

      {/* Attendance List */}
      <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl shadow-sm overflow-hidden">
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="bg-[var(--bg-input)] border-b border-[var(--border)] text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">
                     <th className="p-4 font-bold">Student Name</th>
                     <th className="p-4 font-bold">Room / Bed</th>
                     <th className="p-4 font-bold">Attendance Status</th>
                     <th className="p-4 font-bold">Biometric Log</th>
                     <th className="p-4 font-bold">Late Entry</th>
                     <th className="p-4 font-bold">Parent Alert</th>
                     <th className="p-4 font-bold text-right">Action</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-[var(--border)]">
                  {filteredRecords.map(record => (
                     <tr key={record.id} className="hover:bg-[var(--bg-input)] transition-colors group">
                        
                        <td className="p-4">
                           <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-orange-500/10 text-orange-600 flex items-center justify-center font-bold text-xs shrink-0">
                                 {record.studentName.charAt(0)}
                              </div>
                              <div>
                                 <p className="font-bold text-[14px] text-[var(--text-primary)]">{record.studentName}</p>
                                 <p className="text-[11px] text-[var(--text-secondary)]">{record.studentId}</p>
                              </div>
                           </div>
                        </td>

                        <td className="p-4">
                           <div className="flex items-center gap-1.5 text-sm font-medium text-[var(--text-primary)]">
                              <MapPin size={14} className="text-[var(--text-secondary)]" /> 
                              Rm {record.roomNumber} &bull; Bed {record.bedNumber}
                           </div>
                        </td>

                        <td className="p-4">
                           <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${getStatusColor(record.status)}`}>
                              {getStatusIcon(record.status)} {record.status}
                           </span>
                        </td>

                        <td className="p-4">
                           {record.isBiometric ? (
                              <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-500/10 px-2 py-1 rounded w-fit border border-emerald-500/20">
                                 <Fingerprint size={12} /> Verified
                              </span>
                           ) : (
                              <span className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] font-medium">
                                 <User size={12} /> Manual Entry
                              </span>
                           )}
                        </td>

                        <td className="p-4">
                           {record.lateEntry ? (
                              <span className="flex flex-col">
                                 <span className="text-xs font-bold text-red-600 flex items-center gap-1"><Clock size={12}/> Late</span>
                                 <span className="text-[10px] text-red-500/70">{record.lateEntryTime}</span>
                              </span>
                           ) : (
                              <span className="text-xs text-[var(--text-secondary)]">-</span>
                           )}
                        </td>

                        <td className="p-4">
                           {record.status === 'Absent' && (
                              record.parentAlertSent ? (
                                 <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                                    <CheckCircle2 size={12} /> Alert Sent
                                 </span>
                              ) : (
                                 <button className="flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-white border border-red-500/30 bg-red-500/10 hover:bg-red-500 px-2 py-1 rounded transition-colors">
                                    <Send size={12} /> Send Alert
                                 </button>
                              )
                           )}
                           {record.status !== 'Absent' && <span className="text-xs text-[var(--text-secondary)]">-</span>}
                        </td>

                        <td className="p-4 text-right">
                           <button className="text-[var(--text-secondary)] hover:text-orange-500 text-xs font-bold underline transition-colors opacity-0 group-hover:opacity-100">
                              Edit
                           </button>
                        </td>

                     </tr>
                  ))}
                  
                  {filteredRecords.length === 0 && (
                     <tr>
                        <td colSpan={7} className="p-8 text-center text-[var(--text-secondary)]">
                           <ClipboardCheck size={40} className="opacity-20 mx-auto mb-3" />
                           <p className="font-medium text-lg">No attendance records found</p>
                        </td>
                     </tr>
                  )}
               </tbody>
            </table>
         </div>
      </div>

    </div>
  );
}
