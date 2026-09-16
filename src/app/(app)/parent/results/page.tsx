"use client";

import React, { useState } from 'react';
import { 
  Award, ChevronDown, CheckCircle2, FileText, Download, Printer, 
  History, TrendingUp, Star, MessageSquareQuote, CheckSquare, XSquare
} from 'lucide-react';
import clsx from 'clsx';

// Mock Data
const childrenList = [
  { id: 'c1', name: 'Aarav Kumar', class: 'Class 5', section: 'A', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&backgroundColor=b6e3f4' },
  { id: 'c2', name: 'Riya Kumar', class: 'Class 8', section: 'B', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=f4b6e3' },
];

const resultsData = {
  'c1': {
    exams: ['Mid-Term Examination 2023', 'Unit Test 2 2023', 'Unit Test 1 2023'],
    currentResult: {
      examName: 'Mid-Term Examination 2023',
      percentage: '92.5%',
      cgpa: '9.4',
      rank: '3',
      status: 'Pass',
      remarks: 'Aarav has shown excellent progress in Mathematics and Science. Needs to participate more in class discussions.',
      subjects: [
        { name: 'Mathematics', marks: 95, maxMarks: 100, grade: 'A+' },
        { name: 'Science', marks: 92, maxMarks: 100, grade: 'A' },
        { name: 'English', marks: 88, maxMarks: 100, grade: 'A' },
        { name: 'Hindi', marks: 90, maxMarks: 100, grade: 'A' },
        { name: 'Social Studies', marks: 97, maxMarks: 100, grade: 'A+' },
      ]
    }
  },
  'c2': {
    exams: ['First Term Board Prep 2023', 'Pre-Boards 2023'],
    currentResult: {
      examName: 'First Term Board Prep 2023',
      percentage: '78.2%',
      cgpa: '7.8',
      rank: '12',
      status: 'Pass',
      remarks: 'Riya is doing well but needs to focus more on Physics derivations and Chemistry formulas.',
      subjects: [
        { name: 'Physics', marks: 72, maxMarks: 100, grade: 'B+' },
        { name: 'Chemistry', marks: 68, maxMarks: 100, grade: 'B' },
        { name: 'Mathematics', marks: 85, maxMarks: 100, grade: 'A' },
        { name: 'English', marks: 90, maxMarks: 100, grade: 'A' },
        { name: 'History', marks: 76, maxMarks: 100, grade: 'B+' },
      ]
    }
  }
};

export default function ResultsPage() {
  const [selectedChildId, setSelectedChildId] = useState(childrenList[0].id);
  const [showChildSwitcher, setShowChildSwitcher] = useState(false);
  const [selectedExamIndex, setSelectedExamIndex] = useState(0);

  const childInfo = childrenList.find(c => c.id === selectedChildId)!;
  const data = resultsData[selectedChildId as keyof typeof resultsData];
  const currentExamName = data.exams[selectedExamIndex];
  const result = data.currentResult;

  const getGradeColor = (grade: string) => {
    if (grade.includes('A')) return 'text-emerald-600 bg-emerald-50 border-emerald-200';
    if (grade.includes('B')) return 'text-blue-600 bg-blue-50 border-blue-200';
    if (grade.includes('C')) return 'text-orange-600 bg-orange-50 border-orange-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header & Child Switcher */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-border shadow-sm">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">Academic Results</h1>
          <p className="text-text-secondary text-sm mt-1">View detailed report cards, grades, and teacher remarks.</p>
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
                  onClick={() => { setSelectedChildId(child.id); setShowChildSwitcher(false); setSelectedExamIndex(0); }}
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
        
        {/* Left/Main Column: Results */}
        <div className="lg:col-span-2 space-y-6">
          
          <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
            
            {/* Toolbar / Exam Selector */}
            <div className="p-4 border-b border-border bg-page/50 flex flex-col sm:flex-row items-center justify-between gap-4">
               <div className="flex gap-2 overflow-x-auto w-full custom-scrollbar pb-1 sm:pb-0">
                  {data.exams.map((exam, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedExamIndex(idx)}
                      className={clsx(
                        "px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all",
                        selectedExamIndex === idx ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20" : "bg-white border border-border text-text-secondary hover:text-indigo-600"
                      )}
                    >
                      {exam}
                    </button>
                  ))}
               </div>
            </div>

            {/* Overall Stats Banner */}
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                 
                 <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-2xl text-center">
                    <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-2">
                       <TrendingUp size={20} />
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 mb-1">Percentage</p>
                    <p className="text-2xl font-extrabold text-indigo-900">{result.percentage}</p>
                 </div>
                 
                 <div className="bg-purple-50 border border-purple-100 p-4 rounded-2xl text-center">
                    <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                       <Star size={20} />
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-purple-600 mb-1">CGPA / GPA</p>
                    <p className="text-2xl font-extrabold text-purple-900">{result.cgpa}</p>
                 </div>

                 <div className="bg-orange-50 border border-orange-100 p-4 rounded-2xl text-center">
                    <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                       <Award size={20} />
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-orange-600 mb-1">Class Rank</p>
                    <p className="text-2xl font-extrabold text-orange-900">#{result.rank}</p>
                 </div>

                 <div className={clsx("border p-4 rounded-2xl text-center", result.status === 'Pass' ? "bg-emerald-50 border-emerald-100" : "bg-red-50 border-red-100")}>
                    <div className={clsx("w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2", result.status === 'Pass' ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-600")}>
                       {result.status === 'Pass' ? <CheckSquare size={20} /> : <XSquare size={20} />}
                    </div>
                    <p className={clsx("text-[10px] font-bold uppercase tracking-wider mb-1", result.status === 'Pass' ? "text-emerald-600" : "text-red-600")}>Status</p>
                    <p className={clsx("text-2xl font-extrabold", result.status === 'Pass' ? "text-emerald-900" : "text-red-900")}>{result.status}</p>
                 </div>

              </div>

              {/* Subject Marks Table */}
              <div className="border border-border rounded-xl overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-page/80">
                      <th className="p-4 text-xs font-bold uppercase tracking-wider text-text-tertiary border-b border-border">Subject</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-wider text-text-tertiary border-b border-border text-center">Marks Obtained</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-wider text-text-tertiary border-b border-border text-center">Max Marks</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-wider text-text-tertiary border-b border-border text-center">Grade</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {result.subjects.map((sub, idx) => (
                      <tr key={idx} className="hover:bg-page/30 transition-colors">
                        <td className="p-4 font-bold text-text-primary text-sm">{sub.name}</td>
                        <td className="p-4 text-center font-extrabold text-text-primary">{sub.marks}</td>
                        <td className="p-4 text-center text-text-secondary font-semibold">{sub.maxMarks}</td>
                        <td className="p-4 text-center">
                           <span className={clsx("px-3 py-1 rounded-full text-xs font-bold border", getGradeColor(sub.grade))}>
                             {sub.grade}
                           </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          </div>
          
        </div>

        {/* Right Column: Actions & Remarks */}
        <div className="space-y-6">
          
          {/* Teacher Remarks */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full -z-0"></div>
            <div className="relative z-10">
              <h3 className="text-sm font-bold text-blue-800 flex items-center gap-2 mb-3 uppercase tracking-wider">
                <MessageSquareQuote size={18} className="text-blue-600" /> Class Teacher Remarks
              </h3>
              <p className="text-sm text-blue-900 leading-relaxed italic bg-white/60 p-4 rounded-xl border border-white">
                "{result.remarks}"
              </p>
              <div className="mt-4 flex items-center gap-2">
                 <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold text-xs">TR</div>
                 <div>
                   <p className="text-xs font-bold text-blue-900">Mrs. Sharma</p>
                   <p className="text-[10px] text-blue-700">Class Teacher ({childInfo.class})</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="bg-white border border-border rounded-2xl p-6 shadow-sm space-y-3">
             <h3 className="text-sm font-bold text-text-primary mb-3">Report Actions</h3>
             
             <button className="w-full flex items-center justify-between p-3 rounded-xl bg-pink-50 hover:bg-pink-100 border border-pink-100 text-pink-700 transition-colors group">
               <span className="flex items-center gap-3 text-sm font-bold">
                 <Download size={18} className="text-pink-500 group-hover:scale-110 transition-transform" /> Download PDF
               </span>
             </button>

             <button className="w-full flex items-center justify-between p-3 rounded-xl bg-page hover:bg-page/80 border border-border text-text-primary transition-colors group">
               <span className="flex items-center gap-3 text-sm font-bold">
                 <Printer size={18} className="text-text-secondary group-hover:scale-110 transition-transform" /> Print Report Card
               </span>
             </button>

             <button className="w-full flex items-center justify-between p-3 rounded-xl bg-page hover:bg-page/80 border border-border text-text-primary transition-colors group">
               <span className="flex items-center gap-3 text-sm font-bold">
                 <History size={18} className="text-text-secondary group-hover:scale-110 transition-transform" /> View Previous Years
               </span>
             </button>
          </div>

        </div>

      </div>
    </div>
  );
}
