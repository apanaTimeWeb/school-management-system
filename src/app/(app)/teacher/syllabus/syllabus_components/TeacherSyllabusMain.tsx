"use client";
import React, { useState } from 'react';
import { BookOpen, Search, Users, ChevronRight, Activity, UploadCloud, Calendar, CheckCircle2, Clock, XCircle, Plus } from 'lucide-react';
import { useTeacherSyllabusStore } from '../syllabus_store/useTeacherSyllabusStore';
import { TEACHER_SYLLABUS_LIST } from '../syllabus_constants/TeacherSyllabusMockData';
import TeacherSyllabusDetailsModal from './TeacherSyllabusDetailsModal';
import TeacherSyllabusUploadModal from './TeacherSyllabusUploadModal';
import TeacherLessonPlanFormModal from './TeacherLessonPlanFormModal';

export default function TeacherSyllabusMain() {
  const { openDetailsModal, openUploadModal, openLessonPlanModal } = useTeacherSyllabusStore();
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<'syllabus' | 'lesson-plans'>('syllabus');

  // Mock Lesson Plans Data
  const [lessonPlans] = useState([
    { id: 1, type: 'Weekly Plan', date: 'Oct 15 - Oct 20', subject: 'Mathematics', class: 'Class 10 A', status: 'Approved', topic: 'Trigonometry Ratios' },
    { id: 2, type: 'Daily Plan', date: 'Oct 16', subject: 'Science', class: 'Class 9 B', status: 'Pending', topic: 'Atoms and Molecules' },
    { id: 3, type: 'Weekly Plan', date: 'Oct 8 - Oct 13', subject: 'Mathematics', class: 'Class 10 A', status: 'Rejected', topic: 'Coordinate Geometry (Needs revision)' },
  ]);

  const filteredList = TEACHER_SYLLABUS_LIST.filter(s => 
    s.class.toLowerCase().includes(search.toLowerCase()) || 
    s.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full w-full max-w-7xl mx-auto">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary">Syllabus & Lesson Plans</h1>
          <p className="text-[14px] text-text-secondary mt-1">Track academic progress and submit lesson plans for approval.</p>
        </div>
        <div className="flex items-center gap-3 self-start md:self-auto">
          {activeTab === 'syllabus' ? (
            <button 
              onClick={openUploadModal}
              className="flex items-center gap-2 px-4 py-2 bg-page border border-border text-text-primary font-bold text-[14px] rounded-lg hover:bg-white/5 transition-colors shadow-sm"
            >
              <UploadCloud size={18} /> Upload Syllabus
            </button>
          ) : (
            <button 
              onClick={openLessonPlanModal}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-black font-bold text-[14px] rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
            >
              <Plus size={18} /> Create Lesson Plan
            </button>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-border mb-6">
        <button 
          onClick={() => setActiveTab('syllabus')}
          className={`px-4 py-3 text-[14px] font-bold border-b-2 transition-colors ${activeTab === 'syllabus' ? 'border-primary text-primary' : 'border-transparent text-text-secondary hover:text-text-primary'}`}
        >
          Syllabus Tracker
        </button>
        <button 
          onClick={() => setActiveTab('lesson-plans')}
          className={`px-4 py-3 text-[14px] font-bold border-b-2 transition-colors ${activeTab === 'lesson-plans' ? 'border-primary text-primary' : 'border-transparent text-text-secondary hover:text-text-primary'}`}
        >
          Lesson Plans
        </button>
      </div>

      {activeTab === 'syllabus' ? (
        <>
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
              <div key={syllabus.id} className="bg-card border border-border rounded-xl flex flex-col hover:border-primary/50 transition-colors group shadow-sm">
                
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
        </>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessonPlans.map(plan => (
            <div key={plan.id} className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors group shadow-sm flex flex-col">
              <div className="flex justify-between items-start mb-4 border-b border-border pb-4">
                <div>
                  <span className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/20 text-primary mb-2 inline-block">
                    {plan.type}
                  </span>
                  <p className="text-[14px] font-bold text-text-primary flex items-center gap-2"><Calendar size={14} className="text-text-secondary"/> {plan.date}</p>
                </div>
                <div>
                  {plan.status === 'Approved' && <span className="px-2 py-1 bg-success/10 text-success text-[11px] font-bold rounded flex items-center gap-1"><CheckCircle2 size={12}/> Approved</span>}
                  {plan.status === 'Pending' && <span className="px-2 py-1 bg-warning/10 text-warning text-[11px] font-bold rounded flex items-center gap-1"><Clock size={12}/> Pending</span>}
                  {plan.status === 'Rejected' && <span className="px-2 py-1 bg-danger/10 text-danger text-[11px] font-bold rounded flex items-center gap-1"><XCircle size={12}/> Rejected</span>}
                </div>
              </div>
              
              <div className="flex-1 space-y-2 mb-4">
                <p className="text-[16px] font-bold text-text-primary group-hover:text-primary transition-colors">{plan.subject}</p>
                <p className="text-[13px] text-text-secondary flex items-center gap-2"><Users size={14}/> {plan.class}</p>
                <p className="text-[13px] text-text-secondary mt-2 line-clamp-2"><span className="font-bold">Topic:</span> {plan.topic}</p>
              </div>

              <div className="pt-4 border-t border-border flex justify-between items-center">
                <button onClick={openLessonPlanModal} className="text-[12px] font-bold text-primary hover:underline">
                  View / Edit Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <TeacherSyllabusDetailsModal />
      <TeacherSyllabusUploadModal />
      <TeacherLessonPlanFormModal />
    </div>
  );
}
