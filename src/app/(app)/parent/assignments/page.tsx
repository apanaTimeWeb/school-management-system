"use client";

import React, { useState } from 'react';
import { 
  FileText, ChevronDown, CheckCircle2, Clock, CalendarDays, 
  Paperclip, UserSquare2, AlertCircle, Download, Check, ExternalLink,
  MessageSquareQuote, Award, FileCheck2
} from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';

// Mock Data
const childrenList = [
  { id: 'c1', name: 'Aarav Kumar', class: 'Class 5', section: 'A', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&backgroundColor=b6e3f4' },
  { id: 'c2', name: 'Riya Kumar', class: 'Class 8', section: 'B', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=f4b6e3' },
];

const assignmentData = {
  'c1': [
    { 
      id: 1, subject: 'Science', teacher: 'Mrs. Verma', 
      title: 'Solar System Project', 
      instructions: 'Create a detailed presentation on the Solar System. Include all 8 planets and their characteristics. Minimum 10 slides.', 
      assignedDate: '01 Oct, 2023', dueDate: '15 Oct, 2023', 
      status: 'pending', attachment: 'solar_system_guidelines.pdf', urgency: 'high' 
    },
    { 
      id: 2, subject: 'English', teacher: 'Ms. Davis', 
      title: 'Book Review', 
      instructions: 'Submit a book review of "Charlie and the Chocolate Factory". Highlight the main characters and the moral of the story.', 
      assignedDate: '05 Oct, 2023', dueDate: '12 Oct, 2023', 
      status: 'submitted', 
      submittedFile: 'aarav_book_review.pdf', submissionDate: '10 Oct, 2023'
    },
    { 
      id: 3, subject: 'Mathematics', teacher: 'Mr. Raj', 
      title: 'Algebra Assignment 1', 
      instructions: 'Solve the attached worksheet. Ensure all steps are shown clearly.', 
      assignedDate: '25 Sep, 2023', dueDate: '30 Sep, 2023', 
      status: 'graded', 
      submittedFile: 'aarav_math_assignment1.pdf', submissionDate: '29 Sep, 2023',
      marks: '18/20',
      feedback: 'Excellent work. Just be careful with signs in question 4.'
    },
  ],
  'c2': [
    { 
      id: 4, subject: 'Physics', teacher: 'Dr. Singh', 
      title: 'Lab Report: Pendulum', 
      instructions: 'Submit the formal lab report for the Simple Pendulum experiment conducted last week.', 
      assignedDate: '08 Oct, 2023', dueDate: '14 Oct, 2023', 
      status: 'pending', attachment: 'lab_report_format.pdf', urgency: 'medium' 
    },
    { 
      id: 5, subject: 'History', teacher: 'Mr. Mehta', 
      title: 'Essay: The French Revolution', 
      instructions: 'Write a 1500-word essay discussing the main causes of the French Revolution.', 
      assignedDate: '01 Oct, 2023', dueDate: '10 Oct, 2023', 
      status: 'graded', 
      submittedFile: 'riya_history_essay.docx', submissionDate: '09 Oct, 2023',
      marks: '22/25',
      feedback: 'Well researched! Try to add more focus on the economic factors.'
    },
  ]
};

export default function AssignmentsPage() {
  const [selectedChildId, setSelectedChildId] = useState(childrenList[0].id);
  const [showChildSwitcher, setShowChildSwitcher] = useState(false);
  const [activeTab, setActiveTab] = useState<'pending' | 'submitted' | 'graded'>('pending');

  const childInfo = childrenList.find(c => c.id === selectedChildId)!;
  const allAssignments = assignmentData[selectedChildId as keyof typeof assignmentData];
  const displayedAssignments = allAssignments.filter(a => a.status === activeTab);

  const getSubjectStyle = (subject: string) => {
    const s = subject.toLowerCase();
    if (s.includes('math')) return 'from-blue-500 to-blue-600 bg-blue-50 text-blue-700';
    if (s.includes('sci') || s.includes('phy') || s.includes('chem')) return 'from-emerald-500 to-emerald-600 bg-emerald-50 text-emerald-700';
    if (s.includes('eng') || s.includes('hin')) return 'from-purple-500 to-purple-600 bg-purple-50 text-purple-700';
    if (s.includes('his') || s.includes('geo')) return 'from-orange-500 to-orange-600 bg-orange-50 text-orange-700';
    return 'from-pink-500 to-pink-600 bg-pink-50 text-pink-700';
  };

  const getUrgencyBadge = (urgency?: string) => {
    if (urgency === 'high') return <span className="px-2 py-0.5 bg-red-100 text-red-600 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><AlertCircle size={10}/> Urgent</span>;
    if (urgency === 'medium') return <span className="px-2 py-0.5 bg-orange-100 text-orange-600 rounded-md text-[10px] font-bold uppercase tracking-wider">Due Soon</span>;
    return null;
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header & Child Switcher */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-border shadow-sm">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">Assignments</h1>
          <p className="text-text-secondary text-sm mt-1">Review pending projects, submitted works, and teacher feedback.</p>
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
            <Clock size={18} /> Pending 
            <span className={clsx("ml-1 px-2 py-0.5 rounded-full text-xs", activeTab === 'pending' ? "bg-pink-100 text-pink-700" : "bg-page text-text-tertiary")}>
              {allAssignments.filter(a => a.status === 'pending').length}
            </span>
          </button>
          <button 
            onClick={() => setActiveTab('submitted')}
            className={clsx(
              "flex items-center gap-2 px-6 py-4 font-bold text-sm transition-all whitespace-nowrap border-b-2",
              activeTab === 'submitted' ? "border-blue-500 text-blue-600 bg-white" : "border-transparent text-text-secondary hover:text-text-primary hover:bg-white/50"
            )}
          >
            <CheckCircle2 size={18} /> Submitted
            <span className={clsx("ml-1 px-2 py-0.5 rounded-full text-xs", activeTab === 'submitted' ? "bg-blue-100 text-blue-700" : "bg-page text-text-tertiary")}>
              {allAssignments.filter(a => a.status === 'submitted').length}
            </span>
          </button>
          <button 
            onClick={() => setActiveTab('graded')}
            className={clsx(
              "flex items-center gap-2 px-6 py-4 font-bold text-sm transition-all whitespace-nowrap border-b-2",
              activeTab === 'graded' ? "border-emerald-500 text-emerald-600 bg-white" : "border-transparent text-text-secondary hover:text-text-primary hover:bg-white/50"
            )}
          >
            <FileCheck2 size={18} /> Graded & Feedback
            <span className={clsx("ml-1 px-2 py-0.5 rounded-full text-xs", activeTab === 'graded' ? "bg-emerald-100 text-emerald-700" : "bg-page text-text-tertiary")}>
              {allAssignments.filter(a => a.status === 'graded').length}
            </span>
          </button>
        </div>

        {/* Assignment List */}
        <div className="p-6 space-y-4">
          {displayedAssignments.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center animate-[fadeIn_0.3s_ease-out]">
              <div className="w-20 h-20 bg-page rounded-full flex items-center justify-center mb-4">
                <FileText size={40} className="text-text-tertiary opacity-50" />
              </div>
              <h3 className="text-lg font-bold text-text-primary">No {activeTab} assignments</h3>
              <p className="text-sm text-text-secondary mt-1 max-w-sm">
                There are currently no assignments in this category.
              </p>
            </div>
          ) : (
            <div className="space-y-6 animate-[fadeIn_0.3s_ease-out]">
              {displayedAssignments.map((assignment) => {
                const subjectTheme = getSubjectStyle(assignment.subject);
                
                return (
                  <div key={assignment.id} className="flex flex-col lg:flex-row bg-white rounded-2xl border border-border overflow-hidden transition-all hover:shadow-md">
                    
                    {/* Main Details (Left Side) */}
                    <div className="flex-1 p-6 flex flex-col justify-between">
                       
                       <div>
                         <div className="flex items-center justify-between mb-2">
                           <div className="flex items-center gap-2">
                             <div className={clsx("px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider", subjectTheme.split(' ')[2], subjectTheme.split(' ')[3])}>
                               {assignment.subject}
                             </div>
                             {assignment.urgency && getUrgencyBadge(assignment.urgency)}
                           </div>
                           <div className="flex items-center gap-1 text-text-secondary">
                             <UserSquare2 size={14}/> <span className="text-xs font-bold">{assignment.teacher}</span>
                           </div>
                         </div>
                         
                         <h3 className="text-xl font-extrabold text-text-primary mb-2 leading-tight">{assignment.title}</h3>
                         <p className="text-sm text-text-secondary mb-4 leading-relaxed">{assignment.instructions}</p>
                       </div>

                       {/* Attachments / Files */}
                       <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border mt-auto">
                         {assignment.attachment && (
                           <button className="flex-1 flex items-center justify-between px-4 py-2.5 rounded-xl bg-page hover:bg-page/80 border border-border text-xs font-bold text-text-primary transition-colors group">
                             <div className="flex items-center gap-2 truncate">
                               <Paperclip size={14} className="text-indigo-500 flex-shrink-0" />
                               <span className="truncate group-hover:text-indigo-600 transition-colors">Instructions: {assignment.attachment}</span>
                             </div>
                             <Download size={14} className="text-text-tertiary group-hover:text-indigo-600 transition-colors flex-shrink-0 ml-2" />
                           </button>
                         )}
                         {assignment.submittedFile && (
                           <button className="flex-1 flex items-center justify-between px-4 py-2.5 rounded-xl bg-blue-50 border border-blue-100 text-xs font-bold text-blue-700 hover:bg-blue-100 transition-colors group">
                             <div className="flex items-center gap-2 truncate">
                               <FileCheck2 size={14} className="text-blue-500 flex-shrink-0" />
                               <span className="truncate">Submitted File: {assignment.submittedFile}</span>
                             </div>
                             <ExternalLink size={14} className="text-blue-500 flex-shrink-0 ml-2 opacity-50 group-hover:opacity-100" />
                           </button>
                         )}
                       </div>

                    </div>

                    {/* Status Box (Right Side) */}
                    <div className="w-full lg:w-72 bg-page/30 p-6 border-t lg:border-t-0 lg:border-l border-border flex flex-col justify-center">
                       
                       <div className="space-y-4">
                         {/* Dates */}
                         <div className="flex items-center justify-between text-sm">
                           <span className="text-text-secondary">Assigned</span>
                           <span className="font-bold text-text-primary">{assignment.assignedDate}</span>
                         </div>
                         <div className="flex items-center justify-between text-sm">
                           <span className="text-text-secondary">Due Date</span>
                           <span className={clsx("font-bold", assignment.urgency === 'high' ? "text-red-600" : "text-text-primary")}>{assignment.dueDate}</span>
                         </div>
                         
                         {/* Submission Info */}
                         {assignment.submissionDate && (
                           <div className="flex items-center justify-between text-sm pb-4 border-b border-border border-dashed">
                             <span className="text-text-secondary">Submitted On</span>
                             <span className="font-bold text-emerald-600 flex items-center gap-1"><Check size={14}/> {assignment.submissionDate}</span>
                           </div>
                         )}

                         {/* Grading */}
                         {activeTab === 'graded' && assignment.marks && (
                           <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-sm relative overflow-hidden">
                             <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/10 rounded-bl-full -z-0"></div>
                             <div className="relative z-10">
                                <div className="flex items-center justify-between mb-3">
                                  <span className="text-xs font-bold uppercase tracking-wider text-text-tertiary flex items-center gap-1"><Award size={14} className="text-emerald-500"/> Marks</span>
                                  <span className="text-lg font-extrabold text-emerald-600">{assignment.marks}</span>
                                </div>
                                <div>
                                  <span className="text-xs font-bold uppercase tracking-wider text-text-tertiary flex items-center gap-1 mb-1"><MessageSquareQuote size={12} className="text-blue-500"/> Teacher Feedback</span>
                                  <p className="text-xs text-text-secondary italic">"{assignment.feedback}"</p>
                                </div>
                             </div>
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
