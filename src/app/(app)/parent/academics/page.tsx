"use client";

import React, { useState } from 'react';
import { 
  BookOpen, Users, ChevronDown, CheckCircle2, FileText, Download, 
  TrendingUp, Award, CalendarDays, LineChart, FileDown, Eye
} from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';

// Mock Data
const childrenList = [
  { id: 'c1', name: 'Aarav Kumar', class: 'Class 5', section: 'A', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&backgroundColor=b6e3f4' },
  { id: 'c2', name: 'Riya Kumar', class: 'Class 8', section: 'B', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=f4b6e3' },
];

const academicData = {
  'c1': {
    subjects: [
      { name: 'Mathematics', teacher: 'Mr. Sharma', progress: 85, syllabus: 'math_syl_5.pdf' },
      { name: 'Science', teacher: 'Mrs. Verma', progress: 78, syllabus: 'sci_syl_5.pdf' },
      { name: 'English', teacher: 'Ms. Davis', progress: 92, syllabus: 'eng_syl_5.pdf' },
      { name: 'Hindi', teacher: 'Mr. Gupta', progress: 88, syllabus: 'hin_syl_5.pdf' },
    ],
    history: [
      { year: '2022-2023', class: 'Class 4', grade: 'A', percentage: '89%' },
      { year: '2021-2022', class: 'Class 3', grade: 'A+', percentage: '94%' },
    ],
    curriculum: 'CBSE - Primary Curriculum 2023'
  },
  'c2': {
    subjects: [
      { name: 'Mathematics', teacher: 'Mr. Rajesh', progress: 75, syllabus: 'math_syl_8.pdf' },
      { name: 'Physics', teacher: 'Dr. Singh', progress: 82, syllabus: 'phy_syl_8.pdf' },
      { name: 'Chemistry', teacher: 'Mrs. Patel', progress: 68, syllabus: 'chem_syl_8.pdf' },
      { name: 'English', teacher: 'Ms. Davis', progress: 90, syllabus: 'eng_syl_8.pdf' },
      { name: 'History', teacher: 'Mr. Mehta', progress: 85, syllabus: 'his_syl_8.pdf' },
    ],
    history: [
      { year: '2022-2023', class: 'Class 7', grade: 'B+', percentage: '78%' },
      { year: '2021-2022', class: 'Class 6', grade: 'A', percentage: '85%' },
    ],
    curriculum: 'CBSE - Secondary Curriculum 2023'
  }
};

export default function ChildAcademicsPage() {
  const [selectedChildId, setSelectedChildId] = useState(childrenList[0].id);
  const [showChildSwitcher, setShowChildSwitcher] = useState(false);

  const childInfo = childrenList.find(c => c.id === selectedChildId)!;
  const childAcademics = academicData[selectedChildId as keyof typeof academicData];

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header & Child Switcher */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-border shadow-sm">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">Academic Profile</h1>
          <p className="text-text-secondary text-sm mt-1">Track subjects, syllabus, and academic progress.</p>
        </div>
        
        {/* Child Switcher Dropdown */}
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left/Main Column: Subjects & Progress */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Progress Overview Card */}
          <div className="bg-white rounded-2xl border border-border p-6 shadow-sm overflow-hidden relative">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full -z-0"></div>
             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                   <h2 className="text-lg font-bold text-text-primary flex items-center gap-2 mb-2">
                     <TrendingUp className="text-blue-500" size={20} /> Overall Academic Progress
                   </h2>
                   <p className="text-sm text-text-secondary">Consistent performance throughout the current session.</p>
                </div>
                <div className="flex-shrink-0 relative w-24 h-24 flex items-center justify-center">
                   <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                     <path className="text-page stroke-current" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                     <path className="text-emerald-500 stroke-current" strokeDasharray="85, 100" strokeWidth="3" strokeLinecap="round" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                   </svg>
                   <div className="absolute inset-0 flex items-center justify-center flex-col">
                     <span className="text-xl font-extrabold text-emerald-600">85%</span>
                   </div>
                </div>
             </div>
          </div>

          {/* Subjects, Teachers & Syllabus Grid */}
          <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
            <div className="px-6 py-4 border-b border-border bg-page/50 flex justify-between items-center">
              <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
                <BookOpen className="text-pink-500" size={20} /> Enrolled Subjects
              </h3>
              <span className="text-xs font-bold bg-pink-100 text-pink-700 px-3 py-1 rounded-full">{childAcademics.subjects.length} Subjects</span>
            </div>
            
            <div className="divide-y divide-border">
              {childAcademics.subjects.map((sub, idx) => (
                <div key={idx} className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-page/30 transition-colors">
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 flex items-center justify-center text-indigo-500 text-xl font-bold flex-shrink-0">
                      {sub.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-text-primary text-base">{sub.name}</h4>
                      <p className="text-sm font-semibold text-text-secondary flex items-center gap-1 mt-1">
                        <Users size={14} className="text-text-tertiary" /> {sub.teacher}
                      </p>
                    </div>
                  </div>

                  <div className="flex-1 w-full md:max-w-xs md:mx-auto">
                     <div className="flex justify-between text-xs font-bold mb-1">
                       <span className="text-text-tertiary">Course Completion</span>
                       <span className={sub.progress >= 80 ? "text-emerald-500" : "text-orange-500"}>{sub.progress}%</span>
                     </div>
                     <div className="h-2 w-full bg-page rounded-full overflow-hidden">
                       <div 
                         className={clsx("h-full rounded-full", sub.progress >= 80 ? "bg-emerald-500" : "bg-orange-500")}
                         style={{ width: `${sub.progress}%` }}
                       ></div>
                     </div>
                  </div>

                  <div className="flex items-center gap-2 w-full md:w-auto mt-2 md:mt-0">
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-3 py-2 bg-white border border-border rounded-lg text-xs font-bold text-text-secondary hover:text-pink-600 hover:border-pink-200 transition-colors shadow-sm">
                      <Eye size={14} /> View
                    </button>
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-3 py-2 bg-white border border-border rounded-lg text-xs font-bold text-text-secondary hover:text-blue-600 hover:border-blue-200 transition-colors shadow-sm">
                      <FileDown size={14} /> Syllabus
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>

        {/* Right Column: Curriculum & History */}
        <div className="space-y-6">
          
          {/* Curriculum Info */}
          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-6 text-white shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -z-0"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md mb-4 border border-white/30">
                <FileText size={24} className="text-white" />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-purple-200 mb-1">Current Curriculum</h3>
              <p className="text-lg font-bold mb-4">{childAcademics.curriculum}</p>
              <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-white text-indigo-600 rounded-xl font-bold text-sm hover:bg-page transition-colors">
                <Download size={16} /> Download Full Syllabus
              </button>
            </div>
          </div>

          {/* Academic History */}
          <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
            <div className="px-6 py-4 border-b border-border bg-page/50 flex items-center gap-2">
              <Award className="text-orange-500" size={18} />
              <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider">Academic History</h3>
            </div>
            <div className="p-4 space-y-3">
              {childAcademics.history.map((hist, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 border border-border rounded-xl bg-white hover:border-orange-200 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center border border-orange-100 group-hover:bg-orange-100 transition-colors">
                      <CalendarDays size={16} className="text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-primary">{hist.year}</p>
                      <p className="text-xs text-text-secondary">{hist.class}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-extrabold text-orange-600">{hist.grade}</p>
                    <p className="text-[10px] font-bold text-text-tertiary">{hist.percentage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Graphical representation prompt */}
          <div className="bg-white rounded-2xl border border-border p-6 shadow-sm text-center">
             <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-3">
                <LineChart size={24} className="text-pink-500" />
             </div>
             <h4 className="text-sm font-bold text-text-primary mb-1">Detailed Analytics</h4>
             <p className="text-xs text-text-secondary mb-4">View graphical analysis of term-wise performance and subject comparison.</p>
             <button className="text-sm font-bold text-pink-600 hover:text-pink-700 transition-colors">View Analytics Dashboard &rarr;</button>
          </div>

        </div>

      </div>
    </div>
  );
}
