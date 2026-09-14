"use client";
import React, { useState } from 'react';
import { Plus, Edit2, Trash2, FileText, Video, Link as LinkIcon, FileCheck, Search, Filter } from 'lucide-react';
import { useTeacherMaterialStore } from '../material_store/useTeacherMaterialStore';
import { TEACHER_MATERIAL_LIST } from '../material_constants/TeacherMaterialMockData';
import TeacherMaterialFormModal from './TeacherMaterialFormModal';
import TeacherMaterialAnalyticsModal from './TeacherMaterialAnalyticsModal';

export default function TeacherMaterialMain() {
  const { openCreateModal, openEditModal, openAnalyticsModal } = useTeacherMaterialStore();
  const [filterClass, setFilterClass] = useState('All');
  const [filterSubject, setFilterSubject] = useState('All');
  const [search, setSearch] = useState('');
  const [materialList, setMaterialList] = useState(TEACHER_MATERIAL_LIST);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const uniqueClasses = ['All', ...Array.from(new Set(TEACHER_MATERIAL_LIST.map(m => m.class)))];
  const uniqueSubjects = ['All', ...Array.from(new Set(TEACHER_MATERIAL_LIST.map(m => m.subject)))];
  
  const filteredList = materialList.filter(m => {
    const matchClass = filterClass === 'All' || m.class === filterClass;
    const matchSubject = filterSubject === 'All' || m.subject === filterSubject;
    const matchSearch = m.title.toLowerCase().includes(search.toLowerCase()) || m.chapter.toLowerCase().includes(search.toLowerCase());
    return matchClass && matchSubject && matchSearch;
  });

  const handleDelete = (id: string) => {
    setMaterialList(materialList.filter(m => m.id !== id));
  };

  const getIcon = (type: string) => {
    switch(type) {
      case 'PDF': return <FileText size={20} className="text-danger" />;
      case 'Video': return <Video size={20} className="text-info" />;
      case 'Link': return <LinkIcon size={20} className="text-primary" />;
      default: return <FileCheck size={20} className="text-success" />;
    }
  };

  return (
    <div className="flex flex-col h-full w-full max-w-7xl mx-auto">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary">Study Material</h1>
          <p className="text-[14px] text-text-secondary mt-1">Upload and manage chapter-wise notes, PDFs, videos, and links.</p>
        </div>
        <button 
          onClick={openCreateModal}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-bold text-[14px] rounded-lg hover:bg-primary/90 transition-colors shadow-sm self-start md:self-auto"
        >
          <Plus size={18} /> Add Material
        </button>
      </div>

      {/* Filters Toolbar */}
      <div className="bg-card border border-border rounded-xl p-4 mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-2.5 text-text-secondary" size={18} />
          <input 
            type="text" 
            placeholder="Search title or chapter..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-input border border-border rounded-lg pl-10 pr-4 py-2 text-[14px] text-text-primary focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <Filter size={18} className="text-text-secondary hidden sm:block" />
          <select 
            value={filterClass}
            onChange={(e) => setFilterClass(e.target.value)}
            className="bg-input border border-border rounded-lg px-4 py-2 text-[14px] text-text-primary focus:outline-none focus:border-primary flex-1 sm:flex-none"
          >
            {uniqueClasses.map(c => <option key={c} value={c}>{c === 'All' ? 'All Classes' : c}</option>)}
          </select>
          <select 
            value={filterSubject}
            onChange={(e) => setFilterSubject(e.target.value)}
            className="bg-input border border-border rounded-lg px-4 py-2 text-[14px] text-text-primary focus:outline-none focus:border-primary flex-1 sm:flex-none"
          >
            {uniqueSubjects.map(s => <option key={s} value={s}>{s === 'All' ? 'All Subjects' : s}</option>)}
          </select>
        </div>
      </div>

      {/* Material Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredList.length === 0 ? (
          <div className="col-span-full py-12 text-center text-text-secondary bg-card border border-border rounded-xl">
            No study material found matching your filters.
          </div>
        ) : (
          filteredList.map((mat) => (
            <div key={mat.id} className="bg-card border border-border rounded-xl flex flex-col hover:border-primary/50 transition-all duration-300 group shadow-sm hover:shadow-lg">
              
              <div className="p-5 border-b border-border flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-page border border-border group-hover:bg-black/30 transition-colors">
                    {getIcon(mat.type)}
                  </div>
                  <div>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-1 inline-block ${mat.isPublished ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'}`}>
                      {mat.isPublished ? 'Published' : 'Draft'}
                    </span>
                    <p className="text-[12px] text-text-secondary font-medium">{mat.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => openEditModal(mat as any)} className="text-text-secondary hover:text-info transition-colors p-1"><Edit2 size={16} /></button>
                  <button onClick={() => handleDelete(mat.id)} className="text-text-secondary hover:text-danger transition-colors p-1"><Trash2 size={16} /></button>
                </div>
              </div>
              
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-[16px] font-bold text-text-primary group-hover:text-primary transition-colors line-clamp-2 mb-2">{mat.title}</h3>
                <p className="text-[13px] font-semibold text-text-secondary mb-3">{mat.chapter}</p>
                <p className="text-[13px] text-text-secondary line-clamp-2 mb-4 flex-1">{mat.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-page border border-border rounded text-[11px] font-bold text-text-primary">{mat.class}</span>
                  <span className="px-2 py-1 bg-info/10 border border-info/20 rounded text-[11px] font-bold text-info">{mat.subject}</span>
                </div>
                
                <div className="flex justify-between items-center text-[11px] text-text-secondary pt-4 border-t border-border">
                  <span>Uploaded: {mat.uploadedAt}</span>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => {
                        setDownloadingId(mat.id);
                        setTimeout(() => setDownloadingId(null), 1500);
                      }} 
                      disabled={downloadingId === mat.id}
                      className="font-bold text-primary hover:underline disabled:opacity-50 disabled:no-underline disabled:cursor-not-allowed flex items-center gap-1"
                    >
                      {downloadingId === mat.id ? 'Opening...' : (mat.type === 'Link' ? 'Open Link' : 'Download')}
                    </button>
                    <button onClick={() => openAnalyticsModal(mat as any)} className="font-bold text-info hover:underline">
                      Track Views
                    </button>
                  </div>
                </div>
              </div>

            </div>
          ))
        )}
      </div>

      <TeacherMaterialFormModal />
      <TeacherMaterialAnalyticsModal />
    </div>
  );
}
