"use client";

import React, { useState } from 'react';
import { 
  BookOpen, ChevronDown, CheckCircle2, Clock, CalendarDays, 
  Paperclip, UserSquare2, AlertCircle, FileText, Download, Check
} from 'lucide-react';
import clsx from 'clsx';

// Mock Data
const childrenList = [
  { id: 'c1', name: 'Aarav Kumar', class: 'Class 5', section: 'A', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&backgroundColor=b6e3f4' },
  { id: 'c2', name: 'Riya Kumar', class: 'Class 8', section: 'B', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=f4b6e3' },
];

const homeworkData = {
  'c1': [
    { id: 1, subject: 'Mathematics', teacher: 'Mr. Raj', description: 'Complete Exercise 4.2 from the NCERT textbook. Solve all word problems.', assignedDate: '10 Oct, 2023', dueDate: '12 Oct, 2023', status: 'pending', attachment: 'maths_ex_4.2.pdf', urgency: 'high' },
    { id: 2, subject: 'Science', teacher: 'Mrs. Verma', description: 'Read Chapter 5: Human Body. Answer the questions at the end of the chapter in your notebook.', assignedDate: '09 Oct, 2023', dueDate: '13 Oct, 2023', status: 'pending', attachment: null, urgency: 'medium' },
    { id: 3, subject: 'English', teacher: 'Ms. Davis', description: 'Write an essay on "My Favorite Festival" (250 words).', assignedDate: '08 Oct, 2023', dueDate: '09 Oct, 2023', status: 'completed', attachment: 'essay_format.pdf' },
    { id: 4, subject: 'Hindi', teacher: 'Mr. Gupta', description: 'Memorize the poem on page 42 for recitation tomorrow.', assignedDate: '07 Oct, 2023', dueDate: '08 Oct, 2023', status: 'completed', attachment: null },
  ],
  'c2': [
    { id: 5, subject: 'Physics', teacher: 'Dr. Singh', description: 'Solve the numericals on Force and Motion (Q1 to Q15).', assignedDate: '10 Oct, 2023', dueDate: '11 Oct, 2023', status: 'pending', attachment: 'physics_worksheet.pdf', urgency: 'high' },
    { id: 6, subject: 'Chemistry', teacher: 'Mrs. Patel', description: 'Complete the lab manual observations for the acid-base titration experiment.', assignedDate: '09 Oct, 2023', dueDate: '14 Oct, 2023', status: 'pending', attachment: null, urgency: 'low' },
    { id: 7, subject: 'History', teacher: 'Mr. Mehta', description: 'Read Chapter 4 and make notes on the French Revolution.', assignedDate: '05 Oct, 2023', dueDate: '07 Oct, 2023', status: 'completed', attachment: 'notes_guide.pdf' },
  ]
};

export default function HomeworkPage() {
  const [selectedChildId, setSelectedChildId] = useState(childrenList[0].id);
  const [showChildSwitcher, setShowChildSwitcher] = useState(false);
  const [activeTab, setActiveTab] = useState<'pending' | 'completed'>('pending');

  const childInfo = childrenList.find(c => c.id === selectedChildId)!;
  const allHomework = homeworkData[selectedChildId as keyof typeof homeworkData];
  const displayedHomework = allHomework.filter(hw => hw.status === activeTab);

  const getSubjectStyle = (subject: string) => {
    const s = subject.toLowerCase();
    if (s.includes('math')) return 'from-blue-500 to-blue-600 bg-blue-50 text-blue-700';
    if (s.includes('sci') || s.includes('phy') || s.includes('chem')) return 'from-emerald-500 to-emerald-600 bg-emerald-50 text-emerald-700';
    if (s.includes('eng') || s.includes('hin')) return 'from-purple-500 to-purple-600 bg-purple-50 text-purple-700';
    if (s.includes('his') || s.includes('geo')) return 'from-orange-500 to-orange-600 bg-orange-50 text-orange-700';
    return 'from-pink-500 to-pink-600 bg-pink-50 text-pink-700';
  };

  const getUrgencyBadge = (urgency?: string) => {
    if (urgency === 'high') return <span className="px-2 py-0.5 bg-red-100 text-red-600 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><AlertCircle size={10}/> Due Soon</span>;
    if (urgency === 'medium') return <span className="px-2 py-0.5 bg-orange-100 text-orange-600 rounded-md text-[10px] font-bold uppercase tracking-wider">Upcoming</span>;
    return <span className="px-2 py-0.5 bg-blue-100 text-blue-600 rounded-md text-[10px] font-bold uppercase tracking-wider">Next Week</span>;
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header & Child Switcher */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-border shadow-sm">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">Homework Monitor</h1>
          <p className="text-text-secondary text-sm mt-1">Track your child's daily assignments and progress.</p>
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

      {/* Main Content Area */}
      <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm min-h-[500px]">
        
        {/* Tabs */}
        <div className="flex border-b border-border bg-page/30 overflow-x-auto custom-scrollbar">
          <button 
            onClick={() => setActiveTab('pending')}
            className={clsx(
              "flex items-center gap-2 px-6 py-4 font-bold text-sm transition-all whitespace-nowrap border-b-2",
              activeTab === 'pending' ? "border-pink-500 text-pink-600 bg-white" : "border-transparent text-text-secondary hover:text-text-primary hover:bg-white/50"
            )}
          >
            <Clock size={18} /> Pending Homework
            <span className={clsx("ml-1 px-2 py-0.5 rounded-full text-xs", activeTab === 'pending' ? "bg-pink-100 text-pink-700" : "bg-page text-text-tertiary")}>
              {allHomework.filter(hw => hw.status === 'pending').length}
            </span>
          </button>
          <button 
            onClick={() => setActiveTab('completed')}
            className={clsx(
              "flex items-center gap-2 px-6 py-4 font-bold text-sm transition-all whitespace-nowrap border-b-2",
              activeTab === 'completed' ? "border-emerald-500 text-emerald-600 bg-white" : "border-transparent text-text-secondary hover:text-text-primary hover:bg-white/50"
            )}
          >
            <CheckCircle2 size={18} /> Completed
            <span className={clsx("ml-1 px-2 py-0.5 rounded-full text-xs", activeTab === 'completed' ? "bg-emerald-100 text-emerald-700" : "bg-page text-text-tertiary")}>
              {allHomework.filter(hw => hw.status === 'completed').length}
            </span>
          </button>
        </div>

        {/* Homework List */}
        <div className="p-6 space-y-4">
          {displayedHomework.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center animate-[fadeIn_0.3s_ease-out]">
              <div className="w-20 h-20 bg-page rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 size={40} className="text-text-tertiary opacity-50" />
              </div>
              <h3 className="text-lg font-bold text-text-primary">No {activeTab} homework</h3>
              <p className="text-sm text-text-secondary mt-1 max-w-sm">
                {activeTab === 'pending' 
                  ? "Great job! Your child has completed all their assigned homework." 
                  : "Your child hasn't completed any homework yet."}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-[fadeIn_0.3s_ease-out]">
              {displayedHomework.map((hw) => {
                const isCompleted = hw.status === 'completed';
                const subjectTheme = getSubjectStyle(hw.subject);
                
                return (
                  <div key={hw.id} className={clsx(
                    "flex flex-col rounded-2xl border transition-all hover:shadow-md",
                    isCompleted ? "bg-emerald-50/30 border-emerald-100" : "bg-white border-border hover:-translate-y-1"
                  )}>
                    {/* Header */}
                    <div className={clsx(
                      "px-5 py-4 border-b flex items-center justify-between rounded-t-2xl",
                      isCompleted ? "bg-emerald-50/50 border-emerald-100" : "bg-page/50 border-border"
                    )}>
                       <div className="flex items-center gap-3">
                         <div className={clsx("w-10 h-10 rounded-xl flex items-center justify-center text-white font-extrabold text-lg shadow-inner bg-gradient-to-br", subjectTheme.split(' ')[0], subjectTheme.split(' ')[1])}>
                            {hw.subject.charAt(0)}
                         </div>
                         <div>
                           <h4 className="font-extrabold text-text-primary text-base leading-tight">{hw.subject}</h4>
                           <div className="flex items-center gap-1 mt-0.5">
                             <UserSquare2 size={12} className="text-text-tertiary" />
                             <span className="text-xs font-semibold text-text-secondary">{hw.teacher}</span>
                           </div>
                         </div>
                       </div>
                       {!isCompleted && hw.urgency && getUrgencyBadge(hw.urgency)}
                       {isCompleted && <span className="bg-emerald-100 text-emerald-600 p-1.5 rounded-full"><Check size={16}/></span>}
                    </div>

                    {/* Body */}
                    <div className="p-5 flex-1 flex flex-col">
                       <p className="text-sm text-text-secondary mb-6 line-clamp-3">
                         {hw.description}
                       </p>
                       
                       <div className="mt-auto space-y-4">
                         
                         {/* Dates */}
                         <div className="flex items-center justify-between text-xs font-semibold">
                           <div className="flex flex-col gap-1">
                             <span className="text-text-tertiary uppercase tracking-wider text-[9px]">Assigned</span>
                             <span className="flex items-center gap-1 text-text-primary"><CalendarDays size={12} className="text-blue-500"/> {hw.assignedDate}</span>
                           </div>
                           <div className="w-px h-6 bg-border"></div>
                           <div className="flex flex-col gap-1 items-end">
                             <span className="text-text-tertiary uppercase tracking-wider text-[9px]">Due Date</span>
                             <span className={clsx("flex items-center gap-1", hw.urgency === 'high' && !isCompleted ? "text-red-600" : "text-text-primary")}>
                               <Clock size={12} className={clsx(hw.urgency === 'high' && !isCompleted ? "text-red-500" : "text-orange-500")}/> {hw.dueDate}
                             </span>
                           </div>
                         </div>

                         {/* Actions / Attachments */}
                         {hw.attachment && (
                           <div className="pt-3 border-t border-border">
                             <button className="w-full flex items-center justify-between p-2 rounded-lg bg-page hover:bg-page/80 border border-border border-dashed text-xs font-bold text-text-primary transition-colors group">
                               <div className="flex items-center gap-2 truncate">
                                 <FileText size={14} className="text-indigo-500 flex-shrink-0" />
                                 <span className="truncate group-hover:text-indigo-600 transition-colors">{hw.attachment}</span>
                               </div>
                               <Download size={14} className="text-text-tertiary group-hover:text-indigo-600 transition-colors flex-shrink-0" />
                             </button>
                           </div>
                         )}

                       </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
