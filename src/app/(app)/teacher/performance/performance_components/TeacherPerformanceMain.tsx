"use client";
import React, { useState } from 'react';
import { Search, AlertTriangle, TrendingUp, User, ArrowRight, BarChart2 } from 'lucide-react';
import { useTeacherPerformanceStore } from '../performance_store/useTeacherPerformanceStore';
import { TEACHER_PERFORMANCE_STUDENTS } from '../performance_constants/TeacherPerformanceMockData';
import TeacherStudentPerformanceModal from './TeacherStudentPerformanceModal';

export default function TeacherPerformanceMain() {
  const { openPerformanceModal } = useTeacherPerformanceStore();
  const [search, setSearch] = useState('');
  const [filterClass, setFilterClass] = useState('All');

  const uniqueClasses = ['All', ...Array.from(new Set(TEACHER_PERFORMANCE_STUDENTS.map(s => s.class)))];

  const filteredStudents = TEACHER_PERFORMANCE_STUDENTS.filter(s => {
    const matchClass = filterClass === 'All' || s.class === filterClass;
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.rollNo.toString() === search;
    return matchClass && matchSearch;
  });

  const weakStudents = filteredStudents.filter(s => s.isWeakStudent);
  const otherStudents = filteredStudents.filter(s => !s.isWeakStudent);

  return (
    <div className="flex flex-col h-full w-full max-w-7xl mx-auto">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary">Student Performance Tracker</h1>
          <p className="text-[14px] text-text-secondary mt-1">Track individual growth, spot weak students, and monitor academic trends.</p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-4 mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-2.5 text-text-secondary" size={18} />
          <input 
            type="text" 
            placeholder="Search by student name or roll no..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-input border border-border rounded-lg pl-10 pr-4 py-2 text-[14px] text-text-primary focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <select 
          value={filterClass}
          onChange={(e) => setFilterClass(e.target.value)}
          className="w-full sm:w-auto bg-input border border-border rounded-lg px-4 py-2 text-[14px] text-text-primary focus:outline-none focus:border-primary"
        >
          {uniqueClasses.map(c => <option key={c} value={c}>{c === 'All' ? 'All Assigned Classes' : c}</option>)}
        </select>
      </div>

      {/* Weak Students Priority Section */}
      {weakStudents.length > 0 && (
        <div className="mb-8">
           <h2 className="text-[16px] font-bold text-danger flex items-center gap-2 mb-4">
             <AlertTriangle size={20} /> Needs Immediate Attention (Weak Students)
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
             {weakStudents.map(student => (
               <div key={student.id} className="bg-danger/5 border border-danger/20 rounded-xl p-5 hover:bg-danger/10 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-danger/20 flex items-center justify-center text-danger font-bold text-[14px]">{student.rollNo}</div>
                      <div>
                        <h3 className="text-[15px] font-bold text-text-primary">{student.name}</h3>
                        <p className="text-[12px] text-text-secondary">{student.class} • {student.subject}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-[13px] text-text-primary mb-4 flex items-center gap-2">
                    <span className="font-bold text-danger">Grade {student.overallGrade}</span>
                    <span className="text-border">|</span>
                    <span className="text-text-secondary">{student.improvementStatus}</span>
                  </div>
                  <button 
                    onClick={() => openPerformanceModal(student)}
                    className="w-full py-2 bg-page border border-danger/30 text-danger text-[13px] font-bold rounded flex items-center justify-center gap-2 hover:bg-danger hover:text-black transition-colors"
                  >
                    View Analytics <ArrowRight size={16} />
                  </button>
               </div>
             ))}
           </div>
        </div>
      )}

      {/* All Other Students */}
      <div>
         <h2 className="text-[16px] font-bold text-text-primary flex items-center gap-2 mb-4">
           <User size={20} className="text-primary" /> Regular Tracking
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
           {otherStudents.map(student => (
             <div key={student.id} className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors group">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-input flex items-center justify-center text-text-secondary font-bold text-[14px] group-hover:text-primary transition-colors">{student.rollNo}</div>
                    <div>
                      <h3 className="text-[15px] font-bold text-text-primary group-hover:text-primary transition-colors">{student.name}</h3>
                      <p className="text-[12px] text-text-secondary">{student.class} • {student.subject}</p>
                    </div>
                  </div>
                  <span className="text-[18px] font-black text-success">{student.overallGrade}</span>
                </div>
                <div className="flex justify-between items-center text-[12px] text-text-secondary mb-4 bg-page p-2 rounded-lg border border-border">
                   <div className="text-center w-full border-r border-border">
                     <span className="block font-bold text-text-primary">{student.assignmentCompletion}%</span>
                     Assignments
                   </div>
                   <div className="text-center w-full">
                     <span className={`block font-bold ${student.improvementStatus === 'Improving' ? 'text-success' : 'text-warning'}`}>
                       {student.improvementStatus}
                     </span>
                     Trend
                   </div>
                </div>
                <button 
                  onClick={() => openPerformanceModal(student)}
                  className="w-full py-2 bg-primary/10 text-primary text-[13px] font-bold rounded flex items-center justify-center gap-2 hover:bg-primary hover:text-black transition-colors"
                >
                  <BarChart2 size={16} /> Track Performance
                </button>
             </div>
           ))}
           {otherStudents.length === 0 && weakStudents.length === 0 && (
             <div className="col-span-full py-10 text-center text-text-secondary bg-card rounded-xl border border-border">
               No students found.
             </div>
           )}
         </div>
      </div>

      <TeacherStudentPerformanceModal />
    </div>
  );
}
