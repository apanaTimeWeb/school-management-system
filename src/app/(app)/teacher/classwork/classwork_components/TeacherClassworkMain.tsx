"use client";
import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Calendar, BookOpen, FileText, CheckCircle2, Clock } from 'lucide-react';
import { useTeacherClassworkStore } from '../classwork_store/useTeacherClassworkStore';
import { TEACHER_CLASSWORK_LIST } from '../classwork_constants/TeacherClassworkMockData';
import TeacherClassworkFormModal from './TeacherClassworkFormModal';
import TeacherClassworkFeedbackModal from './TeacherClassworkFeedbackModal';

export default function TeacherClassworkMain() {
  const { openCreateModal, openEditModal, openFeedbackModal } = useTeacherClassworkStore();
  const [filterDate, setFilterDate] = useState('');
  const [filterClass, setFilterClass] = useState('All');
  const [list, setList] = useState(TEACHER_CLASSWORK_LIST);

  const uniqueClasses = ['All', ...Array.from(new Set(TEACHER_CLASSWORK_LIST.map(c => c.class)))];
  
  const filteredList = list.filter(cw => {
    const matchClass = filterClass === 'All' || cw.class === filterClass;
    const matchDate = filterDate === '' || cw.date === filterDate;
    return matchClass && matchDate;
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sort by newest first

  const handleDelete = (id: string) => {
    setList(list.filter(cw => cw.id !== id));
  };

  const handleToggleComplete = (id: string) => {
    setList(list.map(cw => cw.id === id ? { ...cw, isCompleted: !cw.isCompleted } : cw));
  };

  return (
    <div className="flex flex-col h-full w-full max-w-7xl mx-auto">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary">Daily Classwork</h1>
          <p className="text-[14px] text-text-secondary mt-1">Log what you taught in class and maintain your teaching history.</p>
        </div>
        <button 
          onClick={openCreateModal}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-bold text-[14px] rounded-lg hover:bg-primary/90 transition-colors shadow-sm self-start md:self-auto"
        >
          <Plus size={18} /> Add Classwork Log
        </button>
      </div>

      {/* Filters Toolbar */}
      <div className="bg-card border border-border rounded-xl p-4 mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex flex-wrap items-center gap-4 w-full">
          <div className="relative flex-1 sm:flex-none">
            <Calendar className="absolute left-3 top-2.5 text-text-secondary" size={18} />
            <input 
              type="date" 
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="w-full bg-input border border-border rounded-lg pl-10 pr-4 py-2 text-[14px] text-text-primary focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <select 
            value={filterClass}
            onChange={(e) => setFilterClass(e.target.value)}
            className="bg-input border border-border rounded-lg px-4 py-2 text-[14px] text-text-primary focus:outline-none focus:border-primary flex-1 sm:flex-none"
          >
            {uniqueClasses.map(c => <option key={c} value={c}>{c === 'All' ? 'All Classes' : c}</option>)}
          </select>
          
          {(filterDate || filterClass !== 'All') && (
            <button 
              onClick={() => { setFilterDate(''); setFilterClass('All'); }}
              className="text-[13px] font-bold text-text-secondary hover:text-primary transition-colors ml-auto"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>

      {/* Classwork List (History View) */}
      <div className="space-y-4">
        {filteredList.length === 0 ? (
          <div className="py-12 text-center text-text-secondary bg-card border border-border rounded-xl">
            No classwork logs found matching your filters.
          </div>
        ) : (
          filteredList.map((cw) => (
            <div key={cw.id} className="bg-card border border-border rounded-xl p-5 flex flex-col md:flex-row gap-5 hover:border-primary/50 transition-colors group">
              
              {/* Date & Class Block */}
              <div className="md:w-48 flex flex-col shrink-0 border-b md:border-b-0 md:border-r border-border pb-4 md:pb-0 md:pr-5">
                <p className="text-[14px] font-bold text-text-primary mb-1 flex items-center gap-2"><Calendar size={16} className="text-info" /> {cw.date}</p>
                <p className="text-[13px] font-bold text-text-primary mb-3"><span className="text-text-secondary font-normal">Class:</span> {cw.class}</p>
                <div className="mt-auto">
                   <button 
                     onClick={() => handleToggleComplete(cw.id)}
                     className={`w-full py-1.5 px-3 rounded flex items-center justify-center gap-2 text-[11px] font-bold tracking-wider uppercase transition-colors ${
                       cw.isCompleted ? 'bg-success/10 text-success hover:bg-success/20' : 'bg-warning/10 text-warning hover:bg-warning/20'
                     }`}
                   >
                     {cw.isCompleted ? <><CheckCircle2 size={14}/> Completed</> : <><Clock size={14}/> Pending</>}
                   </button>
                </div>
              </div>
              
              {/* Content Block */}
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-2 inline-block ${'isCompleted' in cw && cw.isCompleted ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'}`}>
                      {'isCompleted' in cw && cw.isCompleted ? 'Published to Students' : 'Draft'}
                    </span>
                    <h3 className="text-[16px] font-bold text-text-primary group-hover:text-primary transition-colors">{cw.topic}</h3>
                    <p className="text-[12px] text-text-secondary mt-0.5 flex items-center gap-1"><BookOpen size={14}/> {cw.subject} • {cw.chapter}</p>
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => openEditModal(cw)} className="text-text-secondary hover:text-info transition-colors p-1"><Edit2 size={16} /></button>
                    <button onClick={() => handleDelete(cw.id)} className="text-text-secondary hover:text-danger transition-colors p-1"><Trash2 size={16} /></button>
                  </div>
                </div>
                
                <div className="mt-4 space-y-3">
                  <div>
                    <p className="text-[11px] text-text-secondary uppercase font-bold mb-1 tracking-wider">What was taught?</p>
                    <p className="text-[14px] text-text-primary leading-relaxed">{cw.description}</p>
                  </div>
                  {cw.notes && (
                    <div className="bg-page border border-border p-3 rounded-lg">
                      <p className="text-[11px] text-text-secondary uppercase font-bold mb-1 tracking-wider flex items-center gap-1"><FileText size={12}/> Teacher's Private Notes</p>
                      <p className="text-[13px] text-text-primary italic">{cw.notes}</p>
                    </div>
                  )}
                </div>
                
                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <button onClick={() => openFeedbackModal(cw as any)} className="text-[12px] font-bold text-primary hover:underline flex items-center gap-1">
                    Feedback / Remarks
                  </button>
                </div>
              </div>

            </div>
          ))
        )}
      </div>

      <TeacherClassworkFormModal />
      <TeacherClassworkFeedbackModal />
    </div>
  );
}
