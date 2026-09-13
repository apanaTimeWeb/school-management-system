"use client";
import React, { useState } from 'react';
import { Calendar, Clock, BookOpen, AlertCircle, Edit3, ArrowRight, FileText } from 'lucide-react';
import { useTeacherExaminationsStore } from '../examinations_store/useTeacherExaminationsStore';
import { TEACHER_EXAMS_LIST } from '../examinations_constants/TeacherExaminationsMockData';
import TeacherMarksEntryModal from './TeacherMarksEntryModal';
import TeacherMarksCorrectionModal from './TeacherMarksCorrectionModal';

export default function TeacherExaminationsMain() {
  const { openMarksEntry, openCorrectionModal } = useTeacherExaminationsStore();
  const [activeTab, setActiveTab] = useState<'all' | 'pending'>('all');

  const filteredExams = activeTab === 'all' 
    ? TEACHER_EXAMS_LIST 
    : TEACHER_EXAMS_LIST.filter(e => e.status === 'Marks Entry Open');

  return (
    <div className="flex flex-col h-full w-full max-w-7xl mx-auto">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary">Examinations & Marks</h1>
          <p className="text-[14px] text-text-secondary mt-1">View exam schedules, syllabi, and submit marks for your assigned subjects.</p>
        </div>
        
        {/* Tab Controls */}
        <div className="flex items-center bg-black/20 p-1 rounded-lg border border-white/5">
          <button 
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-[13px] font-bold rounded-md transition-colors ${activeTab === 'all' ? 'bg-primary text-black shadow-sm' : 'text-text-secondary hover:text-text-primary'}`}
          >
            All Assigned Exams
          </button>
          <button 
            onClick={() => setActiveTab('pending')}
            className={`px-4 py-2 text-[13px] font-bold rounded-md transition-colors ${activeTab === 'pending' ? 'bg-primary text-black shadow-sm' : 'text-text-secondary hover:text-text-primary'}`}
          >
            Pending Marks Entry
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredExams.map((exam) => (
          <div key={exam.id} className="bg-card border border-border rounded-xl flex flex-col hover:border-primary/50 transition-colors group">
            
            {/* Card Header */}
            <div className="p-5 border-b border-border bg-black/20 relative overflow-hidden">
               {/* Status Badge Ribbon */}
               <div className={`absolute top-4 right-[-30px] w-[120px] text-center text-[10px] font-bold uppercase tracking-wider py-1 transform rotate-45 ${
                 exam.status === 'Marks Entry Open' ? 'bg-warning text-black' : 
                 exam.status === 'Submitted' ? 'bg-success text-black' : 'bg-info text-black'
               }`}>
                 {exam.status === 'Marks Entry Open' ? 'Entry Open' : exam.status}
               </div>

               <p className="text-[12px] font-bold text-primary mb-1">{exam.class}</p>
               <h3 className="text-[18px] font-bold text-text-primary w-[85%] leading-tight group-hover:text-primary transition-colors">{exam.name}</h3>
               <p className="text-[13px] text-text-secondary mt-1 flex items-center gap-2"><BookOpen size={14}/> {exam.subject}</p>
            </div>

            {/* Exam Details */}
            <div className="p-5 flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="space-y-3">
                 <div className="flex items-center gap-3 text-[13px]">
                   <Calendar size={16} className="text-text-secondary"/>
                   <span className="font-bold text-text-primary">{exam.date}</span>
                 </div>
                 <div className="flex items-center gap-3 text-[13px]">
                   <Clock size={16} className="text-text-secondary"/>
                   <span className="font-bold text-text-primary">{exam.time}</span>
                 </div>
               </div>
               
               <div className="space-y-2 bg-page border border-border p-3 rounded-lg">
                 <p className="text-[10px] text-text-secondary uppercase font-bold tracking-wider">Max Marks</p>
                 <div className="flex gap-4 text-[12px] font-bold text-text-primary">
                    {exam.totalTheory > 0 && <span>Theory: {exam.totalTheory}</span>}
                    {exam.totalPractical > 0 && <span>Prac: {exam.totalPractical}</span>}
                    {exam.totalInternal > 0 && <span>Int: {exam.totalInternal}</span>}
                 </div>
               </div>
            </div>

            {/* Instructions & Syllabus */}
            <div className="px-5 pb-5">
               <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 text-[12px]">
                 <p className="font-bold text-primary mb-1 flex items-center gap-1.5"><FileText size={14}/> Exam Syllabus</p>
                 <p className="text-text-primary leading-relaxed">{exam.syllabus}</p>
               </div>
               <div className="bg-warning/5 border border-warning/20 rounded-lg p-3 text-[12px] mt-3">
                 <p className="font-bold text-warning mb-1 flex items-center gap-1.5"><AlertCircle size={14}/> Instructions</p>
                 <p className="text-text-primary leading-relaxed">{exam.instructions}</p>
               </div>
            </div>

            {/* Actions */}
            <div className="mt-auto px-5 py-4 border-t border-border bg-black/10 flex items-center justify-end">
              {exam.status === 'Upcoming' && (
                <span className="text-[12px] font-bold text-text-secondary">Marks Entry will open on {exam.date}</span>
              )}
              {exam.status === 'Marks Entry Open' && (
                <button 
                  onClick={() => openMarksEntry(exam)}
                  className="px-4 py-2 bg-primary text-black text-[13px] font-bold rounded hover:bg-primary/90 flex items-center gap-2 transition-colors"
                >
                  Enter Marks <ArrowRight size={16} />
                </button>
              )}
              {exam.status === 'Submitted' && (
                <div className="flex items-center gap-3 w-full justify-between">
                  <span className="text-[12px] font-bold text-success flex items-center gap-1"><CheckCircle2 size={14}/> Marks Submitted</span>
                  <button 
                    onClick={() => openCorrectionModal(exam)}
                    className="px-3 py-1.5 bg-page border border-border text-text-primary text-[12px] font-bold rounded hover:border-info hover:text-info flex items-center gap-1.5 transition-colors"
                  >
                    <Edit3 size={14} /> Request Correction
                  </button>
                </div>
              )}
            </div>

          </div>
        ))}
      </div>

      <TeacherMarksEntryModal />
      <TeacherMarksCorrectionModal />
    </div>
  );
}
