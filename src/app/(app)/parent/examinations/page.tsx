"use client";

import React, { useState } from 'react';
import { 
  GraduationCap, ChevronDown, CheckCircle2, CalendarDays, Clock, 
  MapPin, AlertCircle, FileText, Beaker, FileSignature, Info
} from 'lucide-react';
import clsx from 'clsx';

// Mock Data
const childrenList = [
  { id: 'c1', name: 'Aarav Kumar', class: 'Class 5', section: 'A', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&backgroundColor=b6e3f4' },
  { id: 'c2', name: 'Riya Kumar', class: 'Class 8', section: 'B', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=f4b6e3' },
];

const examData = {
  'c1': {
    examName: 'Mid-Term Examinations 2023',
    instructions: [
      'Students must report to the exam hall 15 minutes before the start time.',
      'Bring your own stationery. Borrowing is not allowed.',
      'Electronic devices including smartwatches are strictly prohibited.'
    ],
    schedule: [
      { id: 1, subject: 'Mathematics', date: '20 Oct, 2023', day: 'Friday', time: '09:00 AM - 12:00 PM', room: 'Hall A', type: 'Theory', syllabus: 'Chapters 1 to 5 (Number System, Algebra, Geometry)' },
      { id: 2, subject: 'Science', date: '23 Oct, 2023', day: 'Monday', time: '09:00 AM - 11:30 AM', room: 'Hall A', type: 'Theory', syllabus: 'Chapters 1 to 4 (Plants, Animals, Human Body)' },
      { id: 3, subject: 'Science Practical', date: '24 Oct, 2023', day: 'Tuesday', time: '10:00 AM - 11:30 AM', room: 'Biology Lab', type: 'Practical', syllabus: 'Experiment 1 to 3' },
      { id: 4, subject: 'English', date: '26 Oct, 2023', day: 'Thursday', time: '09:00 AM - 12:00 PM', room: 'Hall A', type: 'Theory', syllabus: 'Prose (Ch 1-3), Poetry (Ch 1-2), Grammar Section A' },
    ]
  },
  'c2': {
    examName: 'First Term Board Prep 2023',
    instructions: [
      'Hall ticket is mandatory for entry.',
      'Use only blue or black ballpoint pens.',
      'Maintain strict silence inside the examination premises.'
    ],
    schedule: [
      { id: 5, subject: 'Physics Practical', date: '15 Oct, 2023', day: 'Sunday', time: '08:30 AM - 10:30 AM', room: 'Physics Lab', type: 'Practical', syllabus: 'Optics and Mechanics Lab' },
      { id: 6, subject: 'Physics', date: '18 Oct, 2023', day: 'Wednesday', time: '09:00 AM - 12:00 PM', room: 'Main Hall', type: 'Theory', syllabus: 'Chapters 1-7 (Full mechanics and thermodynamics)' },
      { id: 7, subject: 'Chemistry', date: '21 Oct, 2023', day: 'Saturday', time: '09:00 AM - 12:00 PM', room: 'Main Hall', type: 'Theory', syllabus: 'Chapters 1-5 (Organic Chemistry basics)' },
      { id: 8, subject: 'Mathematics', date: '25 Oct, 2023', day: 'Wednesday', time: '09:00 AM - 12:00 PM', room: 'Main Hall', type: 'Theory', syllabus: 'Calculus, Algebra, Probability' },
    ]
  }
};

export default function ExaminationsPage() {
  const [selectedChildId, setSelectedChildId] = useState(childrenList[0].id);
  const [showChildSwitcher, setShowChildSwitcher] = useState(false);
  const [expandedSyllabusId, setExpandedSyllabusId] = useState<number | null>(null);

  const childInfo = childrenList.find(c => c.id === selectedChildId)!;
  const currentExam = examData[selectedChildId as keyof typeof examData];

  const getSubjectTheme = (subject: string, type: string) => {
    if (type === 'Practical') return 'from-teal-500 to-emerald-600 bg-teal-50 text-teal-700 border-teal-200';
    
    const s = subject.toLowerCase();
    if (s.includes('math')) return 'from-blue-500 to-blue-600 bg-blue-50 text-blue-700 border-blue-200';
    if (s.includes('sci') || s.includes('phy') || s.includes('chem')) return 'from-indigo-500 to-indigo-600 bg-indigo-50 text-indigo-700 border-indigo-200';
    if (s.includes('eng') || s.includes('hin')) return 'from-purple-500 to-purple-600 bg-purple-50 text-purple-700 border-purple-200';
    return 'from-pink-500 to-pink-600 bg-pink-50 text-pink-700 border-pink-200';
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header & Child Switcher */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-border shadow-sm">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">Examinations</h1>
          <p className="text-text-secondary text-sm mt-1">View exam schedules, syllabus, and important instructions.</p>
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Exam Schedule */}
        <div className="lg:col-span-2 space-y-6">
          
          <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
            {/* Banner */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-8 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
               <div className="relative z-10 flex items-center gap-4">
                 <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/30 shadow-lg">
                   <GraduationCap size={32} className="text-white" />
                 </div>
                 <div>
                   <h2 className="text-sm font-bold text-indigo-100 uppercase tracking-wider mb-1">Upcoming Exam</h2>
                   <h3 className="text-2xl font-extrabold tracking-tight">{currentExam.examName}</h3>
                 </div>
               </div>
            </div>

            {/* Schedule List */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                <CalendarDays className="text-indigo-500" size={20} /> Exam Schedule
              </h3>
              
              <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                {currentExam.schedule.map((exam, idx) => {
                  const theme = getSubjectTheme(exam.subject, exam.type);
                  const isPractical = exam.type === 'Practical';
                  
                  return (
                    <div key={exam.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      
                      {/* Timeline Node */}
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-white shadow-md z-10 absolute left-0 md:left-1/2 -translate-x-1/2">
                        {isPractical ? <Beaker size={16} className="text-teal-600" /> : <FileSignature size={16} className="text-indigo-600" />}
                      </div>

                      {/* Spacer for MD view */}
                      <div className="hidden md:block w-1/2"></div>
                      
                      {/* Card Content */}
                      <div className="w-[calc(100%-3rem)] md:w-1/2 pl-6 md:pl-0 md:px-8 py-2">
                        <div className={clsx(
                          "p-5 rounded-2xl border transition-all hover:shadow-md relative overflow-hidden group/card",
                          isPractical ? "bg-teal-50 border-teal-200" : "bg-white border-border hover:border-indigo-200"
                        )}>
                          
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex flex-col">
                              <span className={clsx("text-[10px] font-bold uppercase tracking-wider", isPractical ? "text-teal-600" : "text-text-tertiary")}>{exam.day}</span>
                              <span className={clsx("text-sm font-extrabold", isPractical ? "text-teal-800" : "text-text-primary")}>{exam.date}</span>
                            </div>
                            <span className={clsx(
                              "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1",
                              isPractical ? "bg-teal-100 text-teal-700" : "bg-indigo-100 text-indigo-700"
                            )}>
                              {isPractical ? <Beaker size={10}/> : <FileSignature size={10}/>} {exam.type}
                            </span>
                          </div>
                          
                          <h4 className={clsx("text-lg font-extrabold mb-4", isPractical ? "text-teal-900" : "text-text-primary")}>
                            {exam.subject}
                          </h4>
                          
                          <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="flex items-center gap-2">
                              <div className="p-1.5 rounded-md bg-white/60 backdrop-blur-sm">
                                <Clock size={14} className={isPractical ? "text-teal-600" : "text-text-secondary"} />
                              </div>
                              <span className="text-xs font-bold text-text-secondary">{exam.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="p-1.5 rounded-md bg-white/60 backdrop-blur-sm">
                                <MapPin size={14} className={isPractical ? "text-teal-600" : "text-text-secondary"} />
                              </div>
                              <span className="text-xs font-bold text-text-secondary">{exam.room}</span>
                            </div>
                          </div>

                          {/* Syllabus Accordion */}
                          <div className="border-t border-border/50 pt-3 mt-3">
                            <button 
                              onClick={() => setExpandedSyllabusId(expandedSyllabusId === exam.id ? null : exam.id)}
                              className="w-full flex items-center justify-between text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
                            >
                              <span className="flex items-center gap-1.5"><FileText size={14}/> View Syllabus</span>
                              <ChevronDown size={14} className={clsx("transition-transform", expandedSyllabusId === exam.id && "rotate-180")} />
                            </button>
                            
                            {expandedSyllabusId === exam.id && (
                              <div className="mt-3 p-3 bg-white/60 rounded-lg text-sm text-text-secondary animate-[fadeIn_0.2s_ease-out]">
                                {exam.syllabus}
                              </div>
                            )}
                          </div>
                          
                        </div>
                      </div>

                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          
        </div>

        {/* Right Column: Instructions */}
        <div className="space-y-6">
          
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-bold text-red-800 flex items-center gap-2 mb-4 uppercase tracking-wider">
              <AlertCircle size={18} className="text-red-600" /> Exam Instructions
            </h3>
            <ul className="space-y-3">
              {currentExam.instructions.map((inst, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></div>
                  <p className="text-sm text-red-900 leading-relaxed">{inst}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-sm text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
               <Info size={24} className="text-blue-600" />
            </div>
            <h4 className="text-sm font-bold text-blue-900 mb-1">Need Help?</h4>
            <p className="text-xs text-blue-700 mb-4">If you have any queries regarding the timetable or syllabus, please contact the class teacher.</p>
            <button className="text-xs font-bold bg-blue-600 text-white px-4 py-2 rounded-xl shadow-sm hover:bg-blue-700 transition-colors">
              Contact Teacher
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
