"use client";
import React from 'react';
import { X, Search, UserCircle } from 'lucide-react';
import { useTeacherClassesStore } from '../classes_store/useTeacherClassesStore';
import { TEACHER_CLASSES_LIST } from '../classes_constants/TeacherClassesMockData';

export default function TeacherClassDetailsModal() {
  const { isClassDetailsModalOpen, closeClassDetailsModal, selectedClassId, openStudentProfileModal } = useTeacherClassesStore();

  if (!isClassDetailsModalOpen || !selectedClassId) return null;

  const classData = TEACHER_CLASSES_LIST.find(c => c.id === selectedClassId);
  if (!classData) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="w-full max-w-3xl bg-bg-main h-full shadow-2xl flex flex-col border-l border-border animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="px-6 py-4 bg-card border-b border-border flex items-center justify-between">
          <div>
            <h2 className="text-[18px] font-bold text-text-primary">
              Class {classData.class} {classData.section} - {classData.subject}
            </h2>
            <p className="text-[13px] text-text-secondary mt-1">Student Roster & Overview</p>
          </div>
          <button 
            onClick={closeClassDetailsModal}
            className="p-2 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Toolbar */}
        <div className="p-4 border-b border-border bg-black/20 flex gap-4 items-center justify-between">
           <div className="relative w-64">
             <Search className="absolute left-3 top-2.5 text-text-secondary" size={16} />
             <input type="text" placeholder="Search student..." className="w-full bg-input border border-border rounded-md pl-9 pr-3 py-2 text-[13px] text-text-primary focus:outline-none focus:border-info" />
           </div>
           <button onClick={(e) => { window.dispatchEvent(new CustomEvent('open-teacher-coming-soon', { detail: 'Export feature is coming soon' }))}} className="px-4 py-2 bg-page border border-border rounded text-[13px] text-text-primary hover:bg-white/5 font-semibold">
             Export List
           </button>
        </div>

        {/* Student List */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
                  <th className="p-4 w-20 text-center">Roll No</th>
                  <th className="p-4">Student Name</th>
                  <th className="p-4 text-center">Attendance</th>
                  <th className="p-4 text-center">Performance</th>
                  <th className="p-4 text-right w-24">Action</th>
                </tr>
              </thead>
              <tbody>
                {classData.students.map((student) => (
                  <tr key={student.id} className="border-b border-border/50 hover:bg-white/5 transition-colors">
                    <td className="p-4 text-[14px] font-bold text-text-secondary text-center">{student.rollNo}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center text-text-secondary">
                          <UserCircle size={18} />
                        </div>
                        <div>
                          <p className="text-[14px] font-bold text-text-primary">{student.name}</p>
                          <p className="text-[11px] text-text-secondary">{student.gender}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <span className={`text-[13px] font-bold ${student.attendance >= 75 ? 'text-success' : 'text-danger'}`}>{student.attendance}%</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-[13px] font-bold text-warning">{student.performance}%</span>
                    </td>
                    <td className="p-4 text-right">
                       <button onClick={() => openStudentProfileModal(student.id)} className="text-[12px] font-bold text-info hover:underline">
                         View Profile
                       </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
