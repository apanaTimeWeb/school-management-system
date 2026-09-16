"use client";

import React, { useState } from 'react';
import { 
  FileVideo, ChevronDown, CheckCircle2, FileText, Link as LinkIcon, 
  Download, Play, BookOpen, FolderOpen, ExternalLink
} from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';

// Mock Data
const childrenList = [
  { id: 'c1', name: 'Aarav Kumar', class: 'Class 5', section: 'A', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&backgroundColor=b6e3f4' },
  { id: 'c2', name: 'Riya Kumar', class: 'Class 8', section: 'B', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=f4b6e3' },
];

const studyMaterialData = {
  'c1': {
    subjects: ['Mathematics', 'Science', 'English', 'Hindi'],
    materials: [
      { id: 1, subject: 'Science', chapter: 'Chapter 5: Human Body', title: 'Digestive System Overview', type: 'video', date: '10 Oct', size: '12 mins', url: '#' },
      { id: 2, subject: 'Science', chapter: 'Chapter 5: Human Body', title: 'Class Notes - Human Body', type: 'pdf', date: '09 Oct', size: '2.4 MB', url: '#' },
      { id: 3, subject: 'Mathematics', chapter: 'Chapter 4: Fractions', title: 'Fractions Worksheet', type: 'document', date: '05 Oct', size: '1.1 MB', url: '#' },
      { id: 4, subject: 'English', chapter: 'Grammar', title: 'Interactive Grammar Quiz', type: 'link', date: '01 Oct', size: 'External', url: '#' },
      { id: 5, subject: 'Mathematics', chapter: 'Chapter 4: Fractions', title: 'Understanding Fractions (Part 1)', type: 'video', date: '28 Sep', size: '15 mins', url: '#' },
    ]
  },
  'c2': {
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'History', 'English'],
    materials: [
      { id: 6, subject: 'Physics', chapter: 'Chapter 8: Motion', title: 'Laws of Motion - Lecture 1', type: 'video', date: '12 Oct', size: '45 mins', url: '#' },
      { id: 7, subject: 'Physics', chapter: 'Chapter 8: Motion', title: 'Motion Formulas Cheat Sheet', type: 'pdf', date: '10 Oct', size: '800 KB', url: '#' },
      { id: 8, subject: 'History', chapter: 'Chapter 3: The French Revolution', title: 'Timeline of Events', type: 'document', date: '08 Oct', size: '1.5 MB', url: '#' },
      { id: 9, subject: 'Chemistry', chapter: 'Chapter 2: Acids & Bases', title: 'Virtual Lab: Titration', type: 'link', date: '05 Oct', size: 'External', url: '#' },
    ]
  }
};

export default function StudyMaterialPage() {
  const [selectedChildId, setSelectedChildId] = useState(childrenList[0].id);
  const [showChildSwitcher, setShowChildSwitcher] = useState(false);
  
  const childInfo = childrenList.find(c => c.id === selectedChildId)!;
  const currentData = studyMaterialData[selectedChildId as keyof typeof studyMaterialData];
  
  const [selectedSubject, setSelectedSubject] = useState(currentData.subjects[0]);

  // Update selected subject if child changes
  React.useEffect(() => {
    setSelectedSubject(currentData.subjects[0]);
  }, [selectedChildId, currentData.subjects]);

  const filteredMaterials = currentData.materials.filter(m => m.subject === selectedSubject);
  
  // Group by chapter
  const groupedByChapter = filteredMaterials.reduce((acc, curr) => {
    if (!acc[curr.chapter]) acc[curr.chapter] = [];
    acc[curr.chapter].push(curr);
    return acc;
  }, {} as Record<string, typeof filteredMaterials>);

  const getTypeStyle = (type: string) => {
    switch(type) {
      case 'video': return { icon: <Play size={18}/>, color: 'bg-red-50 text-red-600 border-red-200 hover:bg-red-500 hover:text-white hover:border-red-500', bg: 'bg-red-500' };
      case 'pdf': return { icon: <FileText size={18}/>, color: 'bg-orange-50 text-orange-600 border-orange-200 hover:bg-orange-500 hover:text-white hover:border-orange-500', bg: 'bg-orange-500' };
      case 'document': return { icon: <FileText size={18}/>, color: 'bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-500 hover:text-white hover:border-blue-500', bg: 'bg-blue-500' };
      case 'link': return { icon: <LinkIcon size={18}/>, color: 'bg-purple-50 text-purple-600 border-purple-200 hover:bg-purple-500 hover:text-white hover:border-purple-500', bg: 'bg-purple-500' };
      default: return { icon: <FileText size={18}/>, color: 'bg-slate-50 text-slate-600 border-slate-200', bg: 'bg-slate-500' };
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header & Child Switcher */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-border shadow-sm">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">Study Material</h1>
          <p className="text-text-secondary text-sm mt-1">Access chapter-wise notes, videos, PDFs, and links.</p>
        </div>
        
        <div className="relative z-30">
          <button 
            onClick={() => setShowChildSwitcher(!showChildSwitcher)}
            className="flex items-center gap-3 px-4 py-2 bg-pink-50 border border-pink-200 rounded-xl hover:bg-pink-100 transition-colors focus:outline-none"
          >
            <img src={childInfo.avatar} alt={childInfo.name} className="w-8 h-8 rounded-full border border-pink-300" />
            <div className="text-left">
              <p className="text-sm font-bold text-pink-700 leading-none">{childInfo.name}</p>
              <p className="text-[10px] font-bold text-pink-500 uppercase mt-1">{childInfo.class} - {childInfo.section}</p>
            </div>
            <ChevronDown size={16} className={clsx("text-pink-600 transition-transform", showChildSwitcher && "rotate-180")} />
          </button>
          
          {showChildSwitcher && (
            <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-border rounded-xl shadow-xl overflow-hidden animate-[fadeIn_0.15s_ease-out]">
              {childrenList.map((child) => (
                <button
                  key={child.id}
                  onClick={() => { setSelectedChildId(child.id); setShowChildSwitcher(false); }}
                  className={clsx(
                    "w-full flex items-center justify-between px-4 py-3 text-left transition-colors hover:bg-page",
                    selectedChildId === child.id ? "bg-pink-50 border-l-4 border-pink-500" : "border-l-4 border-transparent"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <img src={child.avatar} alt={child.name} className="w-8 h-8 rounded-full bg-page border border-border" />
                    <div>
                      <p className="text-sm font-bold text-text-primary">{child.name}</p>
                      <p className="text-xs text-text-secondary">{child.class} - {child.section}</p>
                    </div>
                  </div>
                  {selectedChildId === child.id && <CheckCircle2 size={16} className="text-pink-500" />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Sidebar for Subjects */}
        <div className="lg:col-span-1 space-y-4">
           <h3 className="text-xs font-bold uppercase tracking-wider text-text-tertiary px-2">Select Subject</h3>
           <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 custom-scrollbar">
             {currentData.subjects.map((sub, idx) => (
               <button
                 key={idx}
                 onClick={() => setSelectedSubject(sub)}
                 className={clsx(
                   "flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all whitespace-nowrap lg:whitespace-normal text-left",
                   selectedSubject === sub 
                    ? "bg-pink-500 text-white shadow-md shadow-pink-500/20" 
                    : "bg-white border border-border text-text-secondary hover:text-pink-600 hover:border-pink-200"
                 )}
               >
                 <BookOpen size={18} className={clsx(selectedSubject === sub ? "opacity-100" : "opacity-50")} />
                 {sub}
               </button>
             ))}
           </div>
        </div>

        {/* Content Area for Chapters & Materials */}
        <div className="lg:col-span-3 space-y-6">
          
          {Object.keys(groupedByChapter).length === 0 ? (
            <div className="bg-white rounded-2xl border border-border p-12 text-center flex flex-col items-center shadow-sm">
               <div className="w-16 h-16 bg-page rounded-full flex items-center justify-center mb-4">
                 <FolderOpen size={32} className="text-text-tertiary opacity-50" />
               </div>
               <h3 className="text-lg font-bold text-text-primary mb-1">No Material Found</h3>
               <p className="text-sm text-text-secondary">Teachers haven't uploaded any study material for {selectedSubject} yet.</p>
            </div>
          ) : (
            Object.entries(groupedByChapter).map(([chapter, materials], idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm animate-[fadeIn_0.3s_ease-out]">
                
                <div className="px-6 py-4 border-b border-border bg-page/50 flex items-center gap-3">
                  <FolderOpen size={20} className="text-indigo-500" />
                  <h2 className="text-lg font-extrabold text-text-primary">{chapter}</h2>
                  <span className="ml-auto bg-white border border-border px-3 py-1 rounded-full text-xs font-bold text-text-secondary shadow-sm">
                    {materials.length} Items
                  </span>
                </div>

                <div className="divide-y divide-border">
                  {materials.map((mat) => {
                    const style = getTypeStyle(mat.type);
                    return (
                      <div key={mat.id} className="p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-page/30 transition-colors group">
                        
                        <div className="flex items-start gap-4">
                          <div className={clsx(
                            "w-12 h-12 rounded-xl flex items-center justify-center border shadow-sm transition-colors",
                            style.color
                          )}>
                             {style.icon}
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className={clsx("px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider text-white", style.bg)}>
                                {mat.type}
                              </span>
                            </div>
                            <h4 className="font-bold text-text-primary text-base group-hover:text-pink-600 transition-colors">{mat.title}</h4>
                            <p className="text-xs font-semibold text-text-tertiary mt-1 flex items-center gap-3">
                              <span>Uploaded: {mat.date}</span>
                              <span className="w-1 h-1 rounded-full bg-border"></span>
                              <span>{mat.size}</span>
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mt-2 md:mt-0 w-full md:w-auto">
                           {mat.type === 'video' && (
                             <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-red-50 text-red-600 hover:bg-red-600 hover:text-white border border-red-200 hover:border-red-600 rounded-xl text-sm font-bold transition-all shadow-sm">
                               <Play size={16}/> Watch
                             </button>
                           )}
                           {(mat.type === 'pdf' || mat.type === 'document') && (
                             <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white text-text-secondary hover:text-indigo-600 border border-border hover:border-indigo-200 rounded-xl text-sm font-bold transition-all shadow-sm group/btn">
                               <Download size={16} className="group-hover/btn:scale-110 transition-transform"/> Download
                             </button>
                           )}
                           {mat.type === 'link' && (
                             <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-purple-50 text-purple-600 hover:bg-purple-600 hover:text-white border border-purple-200 hover:border-purple-600 rounded-xl text-sm font-bold transition-all shadow-sm">
                               <ExternalLink size={16}/> Open Link
                             </button>
                           )}
                        </div>

                      </div>
                    )
                  })}
                </div>

              </div>
            ))
          )}

        </div>
      </div>
    </div>
  );
}
