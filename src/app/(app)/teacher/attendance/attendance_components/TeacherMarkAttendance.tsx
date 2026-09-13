"use client";
import React, { useState } from 'react';
import { Calendar, Users, ChevronRight, CheckCircle2, XCircle, Clock, CalendarOff, Save } from 'lucide-react';
import { useTeacherAttendanceStore } from '../attendance_store/useTeacherAttendanceStore';
import { TEACHER_ATTENDANCE_CLASSES, TEACHER_ATTENDANCE_STUDENTS } from '../attendance_constants/TeacherAttendanceMockData';

export default function TeacherMarkAttendance() {
  const { selectedClassId, setSelectedClassId, selectedDate, setSelectedDate } = useTeacherAttendanceStore();
  
  // Local state to manage attendance toggles before submission
  const [attendanceState, setAttendanceState] = useState<Record<string, string>>({});

  const handleMark = (studentId: string, status: string) => {
    setAttendanceState(prev => ({ ...prev, [studentId]: status }));
  };

  const handleSubmit = () => {
    // Mock submit
    window.dispatchEvent(new CustomEvent('open-teacher-coming-soon', { detail: 'Attendance submitted successfully.' }));
    setSelectedClassId(null);
  };

  if (!selectedClassId) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {TEACHER_ATTENDANCE_CLASSES.map((cls) => (
          <div 
            key={cls.id}
            onClick={() => setSelectedClassId(cls.id)}
            className="bg-card border border-border rounded-xl p-5 cursor-pointer group hover:border-primary/50 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-[18px] font-bold text-text-primary group-hover:text-primary transition-colors">{cls.name}</h3>
                <p className="text-[13px] text-text-secondary mt-1">{cls.type}</p>
              </div>
              <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider ${
                cls.status === 'Submitted' ? 'bg-success/20 text-success border border-success/30' : 'bg-warning/20 text-warning border border-warning/30'
              }`}>
                {cls.status}
              </span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-[13px] text-text-secondary">
                <Users size={16} /> {cls.strength} Students
              </div>
              <div className="flex items-center text-[13px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity gap-1">
                Mark Now <ChevronRight size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const currentClass = TEACHER_ATTENDANCE_CLASSES.find(c => c.id === selectedClassId);

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden flex flex-col h-full">
      
      {/* Header & Controls */}
      <div className="p-4 border-b border-border bg-black/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <button onClick={() => setSelectedClassId(null)} className="text-[12px] text-text-secondary hover:text-primary mb-1 transition-colors flex items-center gap-1">
            <ChevronRight size={14} className="rotate-180" /> Back to Classes
          </button>
          <h2 className="text-[18px] font-bold text-text-primary">
            {currentClass?.name} <span className="text-text-secondary font-normal text-[14px]">({currentClass?.type})</span>
          </h2>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Calendar className="absolute left-3 top-2.5 text-text-secondary" size={16} />
            <input 
              type="date" 
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="bg-input border border-border rounded-lg pl-9 pr-3 py-2 text-[13px] text-text-primary focus:outline-none focus:border-primary"
            />
          </div>
          <button onClick={handleSubmit} className="px-4 py-2 bg-primary text-black font-bold text-[13px] rounded-lg hover:bg-primary/90 flex items-center gap-2">
            <Save size={16} /> Submit
          </button>
        </div>
      </div>

      {/* Roster Table */}
      <div className="flex-1 overflow-x-auto custom-scrollbar p-4">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-bold text-text-secondary uppercase tracking-wider">
              <th className="p-3 w-16 text-center">Roll</th>
              <th className="p-3">Student Name</th>
              <th className="p-3 w-32 text-center">Attd %</th>
              <th className="p-3 w-[400px]">Mark Status</th>
            </tr>
          </thead>
          <tbody>
            {TEACHER_ATTENDANCE_STUDENTS.map((student) => {
              const currentStatus = attendanceState[student.id] || student.status;
              return (
                <tr key={student.id} className="border-b border-border/50 hover:bg-white/5 transition-colors">
                  <td className="p-3 text-[14px] font-bold text-text-secondary text-center">{student.rollNo}</td>
                  <td className="p-3 font-bold text-text-primary">{student.name}</td>
                  <td className="p-3 text-center">
                    <span className={`text-[13px] font-bold ${student.attendancePercentage >= 75 ? 'text-success' : 'text-danger'}`}>
                      {student.attendancePercentage}%
                    </span>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => handleMark(student.id, 'Present')}
                        className={`flex-1 py-1.5 flex justify-center items-center gap-1.5 rounded text-[12px] font-bold transition-all border ${
                          currentStatus === 'Present' ? 'bg-success/20 text-success border-success/40' : 'bg-page border-border text-text-secondary hover:border-success/40 hover:text-success'
                        }`}
                      >
                        <CheckCircle2 size={14} /> P
                      </button>
                      <button 
                        onClick={() => handleMark(student.id, 'Absent')}
                        className={`flex-1 py-1.5 flex justify-center items-center gap-1.5 rounded text-[12px] font-bold transition-all border ${
                          currentStatus === 'Absent' ? 'bg-danger/20 text-danger border-danger/40' : 'bg-page border-border text-text-secondary hover:border-danger/40 hover:text-danger'
                        }`}
                      >
                        <XCircle size={14} /> A
                      </button>
                      <button 
                        onClick={() => handleMark(student.id, 'Late')}
                        className={`flex-1 py-1.5 flex justify-center items-center gap-1.5 rounded text-[12px] font-bold transition-all border ${
                          currentStatus === 'Late' ? 'bg-warning/20 text-warning border-warning/40' : 'bg-page border-border text-text-secondary hover:border-warning/40 hover:text-warning'
                        }`}
                      >
                        <Clock size={14} /> L
                      </button>
                      <button 
                        onClick={() => handleMark(student.id, 'Leave')}
                        className={`flex-1 py-1.5 flex justify-center items-center gap-1.5 rounded text-[12px] font-bold transition-all border ${
                          currentStatus === 'Leave' ? 'bg-info/20 text-info border-info/40' : 'bg-page border-border text-text-secondary hover:border-info/40 hover:text-info'
                        }`}
                      >
                        <CalendarOff size={14} /> Lv
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </div>
  );
}
