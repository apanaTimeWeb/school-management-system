"use client";
import React, { useState } from 'react';
import { Search, Filter, UserCircle, Activity } from 'lucide-react';
import { useTeacherStudentsStore } from '../students_store/useTeacherStudentsStore';
import { TEACHER_ASSIGNED_STUDENTS } from '../students_constants/TeacherStudentsMockData';
import TeacherStudentProfileModal from './TeacherStudentProfileModal';

export default function TeacherStudentsMain() {
  const { openStudentProfileModal, selectedClassFilter, setSelectedClassFilter } = useTeacherStudentsStore();
  const [search, setSearch] = useState('');

  const uniqueClasses = ['All Classes', ...Array.from(new Set(TEACHER_ASSIGNED_STUDENTS.map(s => s.class)))];

  const filteredStudents = TEACHER_ASSIGNED_STUDENTS.filter(s => {
    const matchClass = selectedClassFilter === 'All Classes' || s.class === selectedClassFilter;
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.rollNo.toString().includes(search);
    return matchClass && matchSearch;
  });

  return (
    <div className="flex flex-col h-full w-full">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary">Student Management</h1>
          <p className="text-[14px] text-text-secondary mt-1">Access profiles and records for students in your assigned classes.</p>
        </div>
      </div>

      {/* Filters Toolbar */}
      <div className="bg-card border border-border rounded-xl p-4 mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-2.5 text-text-secondary" size={18} />
          <input 
            type="text" 
            placeholder="Search by name or roll no..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-input border border-border rounded-lg pl-10 pr-4 py-2 text-[14px] text-text-primary focus:outline-none focus:border-info transition-colors"
          />
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Filter size={18} className="text-text-secondary hidden sm:block" />
          <select 
            value={selectedClassFilter}
            onChange={(e) => setSelectedClassFilter(e.target.value)}
            className="bg-input border border-border rounded-lg px-4 py-2 text-[14px] text-text-primary focus:outline-none focus:border-info w-full sm:w-auto"
          >
            {uniqueClasses.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      {/* Student List */}
      <div className="bg-card border border-border rounded-xl overflow-hidden flex-1">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-primary/5 border-b border-border text-[13px] font-bold text-text-secondary uppercase tracking-wider">
                <th className="p-4 w-20 text-center">Roll</th>
                <th className="p-4">Student Info</th>
                <th className="p-4 text-center">Class</th>
                <th className="p-4 text-center">Attendance</th>
                <th className="p-4 text-center">Avg Marks</th>
                <th className="p-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length === 0 ? (
                <tr><td colSpan={6} className="p-8 text-center text-text-secondary">No students found matching your criteria.</td></tr>
              ) : (
                filteredStudents.map((student) => (
                  <tr key={student.id} className="border-b border-border/50 hover:bg-white/5 transition-colors group">
                    <td className="p-4 text-[14px] font-bold text-text-secondary text-center">{student.rollNo}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-info/10 flex items-center justify-center text-info shrink-0">
                          <UserCircle size={20} />
                        </div>
                        <div>
                          <p className="text-[14px] font-bold text-text-primary group-hover:text-info transition-colors">{student.name}</p>
                          <p className="text-[12px] text-text-secondary">{student.gender} • Parent: {student.parentName}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <span className="px-2.5 py-1 rounded-md text-[12px] font-bold bg-page border border-border">{student.class}</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className={`text-[13px] font-bold flex items-center justify-center gap-1.5 ${student.attendance >= 75 ? 'text-success' : 'text-danger'}`}>
                        <Activity size={14} /> {student.attendance}%
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-[14px] font-bold text-warning">{student.avgMarks}%</span>
                    </td>
                    <td className="p-4 text-right">
                       <button 
                         onClick={() => openStudentProfileModal(student.id)} 
                         className="px-4 py-2 bg-info/10 text-info text-[13px] font-bold rounded-lg hover:bg-info hover:text-white transition-colors"
                       >
                         View Details
                       </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <TeacherStudentProfileModal />
    </div>
  );
}
