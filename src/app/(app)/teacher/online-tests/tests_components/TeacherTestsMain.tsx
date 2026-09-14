"use client";
import React, { useState } from 'react';
import { Plus, Clock, Calendar, Edit3, BarChart2, PlayCircle, BookOpen, Search } from 'lucide-react';
import { useTeacherTestsStore } from '../tests_store/useTeacherTestsStore';
import { TEACHER_ONLINE_TESTS } from '../tests_constants/TeacherTestsMockData';
import TeacherTestFormModal from './TeacherTestFormModal';
import TeacherTestAnalyticsModal from './TeacherTestAnalyticsModal';

export default function TeacherTestsMain() {
  const { openCreateModal, openEditModal, openAnalyticsModal } = useTeacherTestsStore();
  const [activeTab, setActiveTab] = useState<'All' | 'Active' | 'Completed' | 'Draft'>('All');
  const [openingLiveTest, setOpeningLiveTest] = useState<string | null>(null);

  const filteredTests = TEACHER_ONLINE_TESTS.filter(test => {
    if (activeTab === 'All') return true;
    return test.status === activeTab;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Active': return 'bg-success text-black';
      case 'Upcoming': return 'bg-info text-black';
      case 'Completed': return 'bg-primary text-black';
      case 'Draft': return 'bg-warning text-black';
      default: return 'bg-page text-text-primary';
    }
  };

  return (
    <div className="flex flex-col h-full w-full max-w-7xl mx-auto">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary">Online Tests & Quizzes</h1>
          <p className="text-[14px] text-text-secondary mt-1">Create assessments, schedule them, and analyze student performance.</p>
        </div>
        <button 
          onClick={openCreateModal}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-bold text-[14px] rounded-lg hover:bg-primary/90 transition-colors shadow-sm self-start md:self-auto"
        >
          <Plus size={18} /> Create Quiz
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-6 overflow-x-auto custom-scrollbar pb-2">
        {['All', 'Active', 'Completed', 'Draft'].map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-4 py-2 rounded-lg text-[13px] font-bold transition-colors whitespace-nowrap ${
              activeTab === tab 
              ? 'bg-primary text-black' 
              : 'bg-card border border-border text-text-secondary hover:text-text-primary'
            }`}
          >
            {tab} Quizzes
          </button>
        ))}
      </div>

      {/* Tests Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTests.map((test) => (
          <div key={test.id} className="bg-card border border-border rounded-xl flex flex-col hover:border-primary/50 transition-colors group">
            
            <div className="p-5 border-b border-border bg-black/20 relative">
               <span className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded inline-block mb-3 ${getStatusColor(test.status)}`}>
                 {test.status}
               </span>
               <h3 className="text-[18px] font-bold text-text-primary leading-tight group-hover:text-primary transition-colors mb-2 line-clamp-1">{test.title}</h3>
               <p className="text-[13px] text-text-secondary flex items-center gap-2 font-bold"><BookOpen size={14}/> {test.class} • {test.subject}</p>
            </div>

            <div className="p-5 flex-1 space-y-4">
               <div className="flex items-center justify-between">
                 <div className="flex items-center gap-2 text-[13px] text-text-primary">
                   <Calendar size={16} className="text-text-secondary" />
                   <span className="font-bold">{test.scheduleDate || 'Not Scheduled'}</span>
                 </div>
                 <div className="flex items-center gap-2 text-[13px] text-text-primary">
                   <Clock size={16} className="text-text-secondary" />
                   <span className="font-bold">{test.timeLimitMins} mins</span>
                 </div>
               </div>

               <div className="grid grid-cols-2 gap-3 bg-page border border-border p-3 rounded-lg text-center">
                 <div>
                   <p className="text-[11px] text-text-secondary uppercase font-bold tracking-wider mb-0.5">Total Marks</p>
                   <p className="text-[16px] font-bold text-text-primary">{test.totalMarks}</p>
                 </div>
                 <div>
                   <p className="text-[11px] text-text-secondary uppercase font-bold tracking-wider mb-0.5">Questions</p>
                   <p className="text-[16px] font-bold text-text-primary">{test.totalQuestions}</p>
                 </div>
               </div>
               
               {test.status === 'Completed' && test.attempts && (
                 <div className="flex items-center justify-between text-[13px] bg-success/10 border border-success/20 p-3 rounded-lg text-success font-bold">
                   <span>{test.attempts} Attempts</span>
                   <span>Avg Score: {test.avgScore}</span>
                 </div>
               )}
            </div>

            <div className="px-5 py-4 border-t border-border bg-black/10 flex items-center justify-end gap-3">
              {test.status === 'Draft' || test.status === 'Upcoming' ? (
                <button 
                  onClick={() => openEditModal(test)}
                  className="px-4 py-2 bg-page border border-border text-text-primary text-[13px] font-bold rounded hover:bg-white/5 flex items-center gap-2 transition-colors w-full justify-center"
                >
                  <Edit3 size={16} /> Edit & Publish
                </button>
              ) : test.status === 'Active' ? (
                <button 
                  onClick={() => {
                    setOpeningLiveTest(test.id);
                    setTimeout(() => setOpeningLiveTest(null), 2000);
                  }}
                  disabled={openingLiveTest === test.id}
                  className={`px-4 py-2 ${openingLiveTest === test.id ? 'bg-success/50' : 'bg-success hover:bg-success/90 animate-pulse'} text-black text-[13px] font-bold rounded flex items-center gap-2 transition-colors w-full justify-center disabled:cursor-not-allowed`}
                >
                  {openingLiveTest === test.id ? 'Opening...' : <><PlayCircle size={16} /> Monitor Live Test</>}
                </button>
              ) : (
                <button 
                  onClick={() => openAnalyticsModal(test)}
                  className="px-4 py-2 bg-primary text-white text-[13px] font-bold rounded hover:bg-primary/90 flex items-center gap-2 transition-colors w-full justify-center"
                >
                  <BarChart2 size={16} /> View Analytics
                </button>
              )}
            </div>

          </div>
        ))}
      </div>

      <TeacherTestFormModal />
      <TeacherTestAnalyticsModal />
    </div>
  );
}
