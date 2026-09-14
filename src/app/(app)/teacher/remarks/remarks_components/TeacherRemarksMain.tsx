"use client";
import React, { useState } from 'react';
import { Plus, Search, MessageSquare, TrendingUp, BookOpen, UserCheck, Calendar, Users, Star, AlertCircle, Info } from 'lucide-react';
import { useTeacherRemarksStore, RemarkCategory, RemarkSentiment } from '../remarks_store/useTeacherRemarksStore';
import TeacherAddRemarkModal from './TeacherAddRemarkModal';

export default function TeacherRemarksMain() {
  const { openAddRemarkModal, remarksList } = useTeacherRemarksStore();
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState<'All' | RemarkCategory>('All');

  const filteredRemarks = remarksList.filter(rem => {
    const matchSearch = rem.studentName.toLowerCase().includes(search.toLowerCase()) || rem.rollNo.includes(search);
    const matchCat = filterCategory === 'All' || rem.category === filterCategory;
    return matchSearch && matchCat;
  });

  const getCategoryIcon = (category: RemarkCategory) => {
    switch(category) {
      case 'Academic': return <BookOpen size={16} className="text-primary"/>;
      case 'Homework': return <FileTextIcon className="text-warning"/>; // Using custom div for icon below
      case 'Behaviour': return <UserCheck size={16} className="text-info"/>;
      case 'Attendance': return <Calendar size={16} className="text-primary"/>;
      case 'Progress': return <TrendingUp size={16} className="text-success"/>;
      case 'Parent Meeting': return <Users size={16} className="text-primary"/>;
      default: return <MessageSquare size={16} className="text-text-secondary"/>;
    }
  };

  const getSentimentBadge = (sentiment: RemarkSentiment) => {
    switch(sentiment) {
      case 'Positive': return <span className="flex items-center gap-1 bg-success/20 text-success px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider border border-success/20"><Star size={12}/> Positive</span>;
      case 'Needs Improvement': return <span className="flex items-center gap-1 bg-danger/20 text-danger px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider border border-danger/20"><AlertCircle size={12}/> Needs Improvement</span>;
      case 'Neutral': return <span className="flex items-center gap-1 bg-info/20 text-info px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider border border-info/20"><Info size={12}/> Neutral</span>;
    }
  };

  return (
    <div className="flex flex-col h-full w-full max-w-7xl mx-auto">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
             Student Remarks
          </h1>
          <p className="text-[14px] text-text-secondary mt-1">Log feedback and academic/behavioural remarks for your students.</p>
        </div>
        <button 
          onClick={openAddRemarkModal}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-black font-bold text-[14px] rounded-lg hover:bg-primary/90 transition-colors shadow-sm self-start md:self-auto"
        >
          <Plus size={18} /> Add New Remark
        </button>
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
        <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar w-full sm:w-auto pb-1 sm:pb-0">
          {['All', 'Academic', 'Homework', 'Behaviour', 'Attendance', 'Progress', 'Parent Meeting'].map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilterCategory(cat as any)}
              className={`px-4 py-1.5 rounded-lg text-[13px] font-bold transition-colors whitespace-nowrap ${
                filterCategory === cat 
                ? 'bg-primary text-black' 
                : 'bg-page border border-border text-text-secondary hover:text-text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRemarks.map((rem) => (
          <div key={rem.id} className="bg-card border border-border rounded-xl flex flex-col hover:border-primary/50 transition-colors">
            
            <div className="p-5 border-b border-border bg-black/10 flex items-start justify-between">
               <div>
                 <h3 className="text-[16px] font-bold text-text-primary">{rem.studentName}</h3>
                 <p className="text-[12px] text-text-secondary mt-1">Roll No: {rem.rollNo} • {rem.class}</p>
               </div>
               {getSentimentBadge(rem.sentiment)}
            </div>

            <div className="p-5 flex-1 space-y-4">
               <div className="flex items-center gap-2 px-3 py-1.5 bg-input border border-border rounded-lg text-[13px] font-bold text-text-primary w-fit">
                 {getCategoryIcon(rem.category)} {rem.category} Remark
               </div>

               <div>
                 <p className="text-[12px] font-bold text-text-secondary uppercase mb-1">Feedback Description</p>
                 <p className="text-[14px] text-text-primary leading-relaxed">
                   "{rem.description}"
                 </p>
               </div>

            </div>

            <div className="px-5 py-3 border-t border-border bg-black/20 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider">
               <span className="text-text-secondary flex items-center gap-1"><Calendar size={12}/> {rem.date}</span>
               {rem.sharedWithParents ? (
                 <span className="text-primary">Visible to Parents</span>
               ) : (
                 <span className="text-text-secondary opacity-50">Private Remark</span>
               )}
            </div>

          </div>
        ))}

        {filteredRemarks.length === 0 && (
          <div className="col-span-full py-16 text-center text-text-secondary bg-card rounded-xl border border-border">
            <MessageSquare size={48} className="mx-auto mb-4 opacity-50" />
            <p className="text-[16px] font-bold text-text-primary">No Remarks Found</p>
            <p className="text-[13px] mt-1">You haven't logged any remarks in this category.</p>
          </div>
        )}
      </div>

      <TeacherAddRemarkModal />
    </div>
  );
}

// Helper icon
const FileTextIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
);
