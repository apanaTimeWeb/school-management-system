"use client";
import React, { useState } from 'react';
import { Plus, Edit2, Trash2, FileText, Calendar as CalendarIcon, Users, CheckCircle, Clock } from 'lucide-react';
import { useTeacherAssignmentsStore, HomeworkData } from '../assignments_store/useTeacherAssignmentsStore';
import { TEACHER_HOMEWORK_LIST } from '../assignments_constants/TeacherAssignmentsMockData';
import TeacherHomeworkFormModal from './TeacherHomeworkFormModal';
import TeacherSubmissionViewModal from './TeacherSubmissionViewModal';
import TeacherReviewSubmissionModal from './TeacherReviewSubmissionModal';

export default function TeacherAssignmentsMain() {
  const { openCreateModal, openEditModal, openSubmissionModal } = useTeacherAssignmentsStore();
  const [filterClass, setFilterClass] = useState('All');

  const uniqueClasses = ['All', ...Array.from(new Set(TEACHER_HOMEWORK_LIST.map(h => h.class)))];
  
  const [list, setList] = useState(TEACHER_HOMEWORK_LIST);

  const filteredList = filterClass === 'All' 
    ? list 
    : list.filter(h => h.class === filterClass);

  const handleDelete = (id: string) => {
    setList(list.filter(h => h.id !== id));
  };

  return (
    <div className="flex flex-col h-full w-full max-w-7xl mx-auto">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary">Assignments & Projects</h1>
          <p className="text-[14px] text-text-secondary mt-1">Create assignments, review submissions, and generate reports.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-teacher-coming-soon', { detail: 'Downloading Assignment Report PDF...' }))}
            className="flex items-center gap-2 px-4 py-2 bg-page border border-border text-text-primary font-bold text-[14px] rounded-lg hover:bg-white/5 transition-colors"
          >
            <FileText size={18} /> Assignment Report
          </button>
        
        <div className="flex items-center gap-3">
          <select 
            value={filterClass}
            onChange={(e) => setFilterClass(e.target.value)}
            className="bg-input border border-border rounded-lg px-4 py-2 text-[14px] text-text-primary focus:outline-none focus:border-primary"
          >
            {uniqueClasses.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <button 
            onClick={openCreateModal}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-black font-bold text-[14px] rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
          >
            <Plus size={18} /> Create New
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredList.map((hw) => (
          <div key={hw.id} className="bg-card border border-border rounded-xl flex flex-col hover:border-primary/50 transition-colors group">
            {/* Card Header */}
            <div className="p-5 border-b border-border bg-black/20">
              <div className="flex justify-between items-start mb-2">
                <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${hw.isPublished ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'}`}>
                  {hw.isPublished ? 'Published' : 'Draft'}
                </span>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => openEditModal(hw)} className="text-text-secondary hover:text-info transition-colors p-1"><Edit2 size={16} /></button>
                  <button onClick={() => handleDelete(hw.id)} className="text-text-secondary hover:text-danger transition-colors p-1"><Trash2 size={16} /></button>
                </div>
              </div>
              <h3 className="text-[16px] font-bold text-text-primary group-hover:text-primary transition-colors line-clamp-1">{hw.title}</h3>
              <p className="text-[13px] text-text-secondary mt-1 flex items-center gap-2"><FileText size={14} className="text-primary"/> {hw.subject}</p>
            </div>
            
            {/* Card Body */}
            <div className="p-5 flex-1">
              <p className="text-[13px] text-text-secondary line-clamp-2 mb-4">{hw.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-[12px] text-text-primary">
                  <Users size={14} className="text-text-secondary" /> <span className="font-bold">{hw.class}</span>
                </div>
                <div className="flex items-center gap-2 text-[12px] text-text-primary">
                  <CalendarIcon size={14} className="text-text-secondary" /> Due: <span className="font-bold text-warning">{hw.dueDate}</span>
                </div>
              </div>
            </div>

            {/* Card Footer - Stats */}
            <div className="px-5 py-4 border-t border-border bg-page flex items-center justify-between cursor-pointer group/footer hover:bg-white/5" onClick={() => openSubmissionModal(hw)}>
              <div className="flex gap-4">
                <div className="text-center">
                  <p className="text-[10px] text-text-secondary uppercase mb-0.5">Total</p>
                  <p className="text-[14px] font-bold text-text-primary">{hw.stats.total}</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] text-success uppercase mb-0.5 flex items-center gap-1"><CheckCircle size={10}/> Done</p>
                  <p className="text-[14px] font-bold text-success">{hw.stats.completed}</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] text-warning uppercase mb-0.5 flex items-center gap-1"><Clock size={10}/> Pend</p>
                  <p className="text-[14px] font-bold text-warning">{hw.stats.pending}</p>
                </div>
              </div>
              <span className="text-[12px] font-bold text-primary opacity-0 group-hover/footer:opacity-100 transition-opacity">View Details</span>
            </div>
          </div>
        ))}
      </div>

      <TeacherHomeworkFormModal />
      <TeacherSubmissionViewModal />
      <TeacherReviewSubmissionModal />
    </div>
  );
}
