"use client";
import React, { useState } from 'react';
import { BookOpen, Search, Users, ChevronRight, Activity } from 'lucide-react';
import { useTeacherSyllabusStore } from '../syllabus_store/useTeacherSyllabusStore';
import { TEACHER_SYLLABUS_LIST } from '../syllabus_constants/TeacherSyllabusMockData';
import TeacherSyllabusDetailsModal from './TeacherSyllabusDetailsModal';

export default function TeacherSyllabusMain() {
  const { openDetailsModal } = useTeacherSyllabusStore();
  const [search, setSearch] = useState('');

  const filteredList = TEACHER_SYLLABUS_LIST.filter(s => 
    s.class.toLowerCase().includes(search.toLowerCase()) || 
    s.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full w-full max-w-7xl mx-auto">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary">Syllabus & Academic Progress</h1>
          <p className="text-[14px] text-text-secondary mt-1">Track chapter-wise and topic-wise completion status for your classes.</p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-4 mb-6">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-2.5 text-text-secondary" size={18} />
          <input 
            type="text" 
            placeholder="Search by class or subject..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-input border border-border rounded-lg pl-10 pr-4 py-2 text-[14px] text-text-primary focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredList.map((syllabus) => (
          <div key={syllabus.id} className="bg-card border border-border rounded-xl flex flex-col hover:border-primary/50 transition-colors group">
            
            <div className="p-5 border-b border-border bg-black/20">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-[18px] font-bold text-text-primary group-hover:text-primary transition-colors flex items-center gap-2"><BookOpen size={18} /> {syllabus.subject}</h3>
                  <p className="text-[13px] text-text-secondary mt-1 flex items-center gap-1.5"><Users size={14}/> {syllabus.class}</p>
                </div>
                <div className="text-right">
                  <span className="text-[24px] font-bold text-success">{syllabus.overallProgress}%</span>
                  <p className="text-[10px] text-text-secondary uppercase tracking-wider font-bold">Overall Progress</p>
                </div>
              </div>
            </div>
            
            <div className="p-5 flex-1">
              {/* Progress Bar */}
              <div className="w-full h-2.5 bg-input rounded-full overflow-hidden mb-6">
                 <div className="h-full bg-success transition-all duration-500" style={{ width: `${syllabus.overallProgress}%` }}></div>
              </div>

              <div className="space-y-3">
                <p className="text-[12px] font-bold text-text-secondary uppercase tracking-wider mb-2">Chapters Summary</p>
                {syllabus.chapters.slice(0, 3).map((ch) => (
                  <div key={ch.id} className="flex items-center justify-between text-[13px]">
                    <span className="text-text-primary line-clamp-1 flex-1 pr-4">{ch.name}</span>
                    <span className={`font-bold ${ch.progressPercent === 100 ? 'text-success' : ch.progressPercent > 0 ? 'text-warning' : 'text-text-secondary'}`}>
                      {ch.progressPercent}%
                    </span>
                  </div>
                ))}
                {syllabus.chapters.length > 3 && (
                  <p className="text-[12px] text-text-secondary italic">+{syllabus.chapters.length - 3} more chapters</p>
                )}
              </div>
            </div>

            <div 
              onClick={() => openDetailsModal(syllabus)}
              className="px-5 py-4 border-t border-border bg-page flex items-center justify-between cursor-pointer group/footer hover:bg-white/5 transition-colors"
            >
               <span className="flex items-center gap-2 text-[13px] font-bold text-text-primary"><Activity size={16} /> Manage Syllabus Tracker</span>
               <ChevronRight size={18} className="text-primary transform group-hover/footer:translate-x-1 transition-transform" />
            </div>

          </div>
        ))}
      </div>

      <TeacherSyllabusDetailsModal />
    </div>
  );
}
