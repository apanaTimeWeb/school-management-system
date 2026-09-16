"use client";

import React, { useState } from 'react';
import { 
  PieChart, ChevronDown, CheckCircle2, Download, 
  CalendarClock, GraduationCap, Award, FileText, 
  BookOpen, Wallet, CreditCard, Library, Bus, ScrollText,
  FileBarChart, Loader2
} from 'lucide-react';
import clsx from 'clsx';

// Mock Data
const childrenList = [
  { id: 'c1', name: 'Aarav Kumar', class: 'Class 5', section: 'A', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&backgroundColor=b6e3f4' },
  { id: 'c2', name: 'Riya Kumar', class: 'Class 8', section: 'B', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=f4b6e3' },
];

const REPORTS = [
  { id: 'attendance', title: 'Attendance Report', description: 'Monthly/Yearly attendance summary.', icon: <CalendarClock size={24} />, color: 'bg-orange-100 text-orange-600', border: 'border-orange-200' },
  { id: 'academic', title: 'Academic Report', description: 'Subject-wise progress and remarks.', icon: <GraduationCap size={24} />, color: 'bg-indigo-100 text-indigo-600', border: 'border-indigo-200' },
  { id: 'result', title: 'Result Report', description: 'Official marksheet and grades.', icon: <Award size={24} />, color: 'bg-purple-100 text-purple-600', border: 'border-purple-200' },
  { id: 'assignment', title: 'Assignment Report', description: 'Submission status and scores.', icon: <FileText size={24} />, color: 'bg-blue-100 text-blue-600', border: 'border-blue-200' },
  { id: 'homework', title: 'Homework Status', description: 'Pending vs Completed tracking.', icon: <BookOpen size={24} />, color: 'bg-cyan-100 text-cyan-600', border: 'border-cyan-200' },
  { id: 'fee', title: 'Fee Statement', description: 'Total dues and paid amounts.', icon: <Wallet size={24} />, color: 'bg-emerald-100 text-emerald-600', border: 'border-emerald-200' },
  { id: 'payment', title: 'Payment History', description: 'Detailed transaction logs.', icon: <CreditCard size={24} />, color: 'bg-green-100 text-green-600', border: 'border-green-200' },
  { id: 'library', title: 'Library Statement', description: 'Issued and returned books log.', icon: <Library size={24} />, color: 'bg-rose-100 text-rose-600', border: 'border-rose-200' },
  { id: 'transport', title: 'Transport Info', description: 'Route, fees, and attendance log.', icon: <Bus size={24} />, color: 'bg-yellow-100 text-yellow-600', border: 'border-yellow-200' },
  { id: 'certificate', title: 'Certificate Status', description: 'List of all issued documents.', icon: <ScrollText size={24} />, color: 'bg-pink-100 text-pink-600', border: 'border-pink-200' },
];

export default function ReportsPage() {
  const [selectedChildId, setSelectedChildId] = useState(childrenList[0].id);
  const [showChildSwitcher, setShowChildSwitcher] = useState(false);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const childInfo = childrenList.find(c => c.id === selectedChildId)!;

  const handleDownload = (reportId: string, reportTitle: string) => {
    setDownloadingId(reportId);
    // Simulate generation time
    setTimeout(() => {
      setDownloadingId(null);
      alert(`${reportTitle} for ${childInfo.name} has been generated and downloaded successfully!`);
    }, 1500);
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header & Child Switcher */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-border shadow-sm">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight flex items-center gap-3">
            Reports Center <FileBarChart className="text-indigo-500" size={28} />
          </h1>
          <p className="text-text-secondary text-sm mt-1">Generate and download official reports for your child.</p>
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

      {/* Reports Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-[fadeIn_0.3s_ease-out]">
         {REPORTS.map(report => (
           <div 
             key={report.id} 
             className={clsx(
               "bg-white rounded-2xl border p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group",
               report.border
             )}
           >
             {/* Decorative Background Icon */}
             <div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-500">
               {React.cloneElement(report.icon as React.ReactElement, { size: 100 })}
             </div>

             <div>
               <div className={clsx("w-12 h-12 rounded-xl flex items-center justify-center mb-4", report.color)}>
                 {report.icon}
               </div>
               <h3 className="font-extrabold text-text-primary text-lg mb-1">{report.title}</h3>
               <p className="text-sm text-text-secondary mb-6 font-medium leading-snug">{report.description}</p>
             </div>
             
             <button
               onClick={() => handleDownload(report.id, report.title)}
               disabled={downloadingId === report.id}
               className="w-full flex items-center justify-center gap-2 py-2.5 bg-page text-indigo-700 font-bold rounded-xl border border-border hover:bg-indigo-50 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
             >
               {downloadingId === report.id ? (
                 <>
                   <Loader2 size={16} className="animate-spin" /> Generating...
                 </>
               ) : (
                 <>
                   <Download size={16} /> Download PDF
                 </>
               )}
             </button>
           </div>
         ))}
      </div>

    </div>
  );
}
