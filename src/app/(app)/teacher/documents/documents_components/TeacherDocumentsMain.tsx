"use client";
import React, { useState } from 'react';
import { FileText, Plus, Search, BookOpen, Layers, File, FileDown, Lock, ShieldAlert } from 'lucide-react';
import { useTeacherDocumentsStore, DocumentCategory } from '../documents_store/useTeacherDocumentsStore';
import TeacherUploadDocumentModal from './TeacherUploadDocumentModal';

export default function TeacherDocumentsMain() {
  const { openUploadModal, documentsList } = useTeacherDocumentsStore();
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState<'All' | DocumentCategory | 'Confidential'>('All');

  const filteredDocs = documentsList.filter(doc => {
    if (filterCategory === 'Confidential') return false; // Handled separately
    const matchSearch = doc.title.toLowerCase().includes(search.toLowerCase()) || doc.subject.toLowerCase().includes(search.toLowerCase());
    const matchCat = filterCategory === 'All' || doc.category === filterCategory;
    return matchSearch && matchCat;
  });

  const getCategoryIcon = (category: DocumentCategory) => {
    switch(category) {
      case 'Lesson Plan': return <BookOpen size={16} className="text-primary"/>;
      case 'Notes': return <FileText size={16} className="text-info"/>;
      case 'Study Material': return <Layers size={16} className="text-warning"/>;
      case 'Assigned Document': return <File size={16} className="text-success"/>;
    }
  };

  const getFileTypeColor = (type: string) => {
    switch(type) {
      case 'PDF': return 'bg-danger/20 text-danger border-danger/20';
      case 'DOCX': return 'bg-info/20 text-info border-info/20';
      case 'PPTX': return 'bg-warning/20 text-warning border-warning/20';
      case 'XLSX': return 'bg-success/20 text-success border-success/20';
      default: return 'bg-primary/20 text-primary border-primary/20';
    }
  };

  return (
    <div className="flex flex-col h-full w-full max-w-7xl mx-auto">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
             <FileText className="text-primary" size={24}/> Document Center
          </h1>
          <p className="text-[14px] text-text-secondary mt-1">Manage lesson plans, study materials, and access assigned documents.</p>
        </div>
        <button 
          onClick={openUploadModal}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-black font-bold text-[14px] rounded-lg hover:bg-primary/90 transition-colors shadow-sm self-start md:self-auto"
        >
          <Plus size={18} /> Upload Document
        </button>
      </div>

      <div className="bg-card border border-border rounded-xl p-4 mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-2.5 text-text-secondary" size={18} />
          <input 
            type="text" 
            placeholder="Search documents by title or subject..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-input border border-border rounded-lg pl-10 pr-4 py-2 text-[14px] text-text-primary focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar w-full sm:w-auto pb-1 sm:pb-0">
          {['All', 'Lesson Plan', 'Notes', 'Study Material', 'Assigned Document', 'Confidential'].map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilterCategory(cat as any)}
              className={`px-4 py-1.5 rounded-lg text-[13px] font-bold transition-colors whitespace-nowrap flex items-center gap-2 ${
                filterCategory === cat 
                ? (cat === 'Confidential' ? 'bg-danger text-white' : 'bg-primary text-black') 
                : (cat === 'Confidential' ? 'bg-page border border-danger/50 text-danger hover:bg-danger/10' : 'bg-page border border-border text-text-secondary hover:text-text-primary')
              }`}
            >
              {cat === 'Confidential' && <Lock size={14}/>} {cat}
            </button>
          ))}
        </div>
      </div>

      {filterCategory === 'Confidential' ? (
        <div className="bg-danger/5 border border-danger/20 rounded-xl p-10 flex flex-col items-center justify-center text-center">
          <ShieldAlert size={64} className="text-danger mb-4 animate-pulse" />
          <h2 className="text-[20px] font-bold text-danger mb-2">Restricted Access</h2>
          <p className="text-[14px] text-text-primary max-w-md">
            Teachers do not have authorization to view confidential student records or administrative documents. If you require access, please contact the Principal's office.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((doc) => (
            <div key={doc.id} className="bg-card border border-border rounded-xl flex flex-col hover:border-primary/50 transition-colors group">
              
              <div className="p-5 flex-1">
                 <div className="flex items-start justify-between mb-4">
                   <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-[14px] border ${getFileTypeColor(doc.fileType)}`}>
                     {doc.fileType}
                   </div>
                   <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-text-secondary bg-input px-2 py-1 rounded border border-border">
                     {getCategoryIcon(doc.category)} {doc.category}
                   </span>
                 </div>
                 
                 <h3 className="text-[16px] font-bold text-text-primary group-hover:text-primary transition-colors line-clamp-2">{doc.title}</h3>
                 <p className="text-[13px] text-text-secondary mt-2">Class: {doc.class} • {doc.subject}</p>
                 
                 {doc.uploadedBy && (
                   <p className="text-[11px] font-bold text-info bg-info/10 px-2 py-1 rounded inline-block mt-3 border border-info/20">
                     Assigned By: {doc.uploadedBy}
                   </p>
                 )}
              </div>

              <div className="px-5 py-3 border-t border-border bg-black/10 flex items-center justify-between">
                 <div className="flex flex-col text-[11px] text-text-secondary">
                   <span>Uploaded: {doc.uploadDate}</span>
                   <span>Size: {doc.fileSize}</span>
                 </div>
                 <button className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-black transition-colors">
                   <FileDown size={16}/>
                 </button>
              </div>

            </div>
          ))}

          {filteredDocs.length === 0 && (
            <div className="col-span-full py-16 text-center text-text-secondary bg-card rounded-xl border border-border">
              <FileText size={48} className="mx-auto mb-4 opacity-50" />
              <p className="text-[16px] font-bold text-text-primary">No Documents Found</p>
              <p className="text-[13px] mt-1">Try adjusting your filters or upload a new document.</p>
            </div>
          )}
        </div>
      )}

      <TeacherUploadDocumentModal />
    </div>
  );
}
