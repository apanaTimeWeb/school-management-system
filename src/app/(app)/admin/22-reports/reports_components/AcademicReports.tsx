"use client";

import React, { useState } from 'react';
import { UserCheck, GraduationCap, ClipboardList, BookOpen, FileText, Download } from 'lucide-react';
import clsx from 'clsx';

export default function AcademicReports() {
  const [activeTab, setActiveTab] = useState('student');
  
  const generateReport = () => {
    alert("Report Generation Started! Downloading PDF/Excel...");
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in relative">
      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('student')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'student' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <GraduationCap size={18} /> Student & Admission
        </button>
        <button onClick={() => setActiveTab('attendance')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'attendance' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <UserCheck size={18} /> Attendance Reports
        </button>
        <button onClick={() => setActiveTab('exam')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'exam' ? 'bg-warning/10 text-warning' : 'text-text-secondary hover:bg-bg-page')}>
          <ClipboardList size={18} /> Exam & Results
        </button>
        <button onClick={() => setActiveTab('certificate')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'certificate' ? 'bg-success/10 text-success' : 'text-text-secondary hover:bg-bg-page')}>
          <FileText size={18} /> Certificate Reports
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'student' && (
          <div className="flex flex-col gap-6 fade-in">
             <h2 className="text-xl font-bold text-primary border-b border-border pb-2 flex items-center gap-2">
               <GraduationCap size={20}/> Student & Admission Demographics
             </h2>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-bg-page border border-border p-5 rounded-lg flex flex-col gap-4">
                   <h3 className="font-bold text-sm">Admissions Report</h3>
                   <div className="flex flex-col gap-2">
                     <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary">
                       <option>Current Academic Year (2025-26)</option>
                       <option>Previous Year (2024-25)</option>
                     </select>
                     <button onClick={generateReport} className="bg-primary text-black py-2 rounded-lg font-bold shadow-sm hover:bg-primary-hover flex items-center justify-center gap-2 text-sm transition">
                       <Download size={16}/> Export Excel/PDF
                     </button>
                   </div>
                </div>
                
                <div className="bg-bg-page border border-border p-5 rounded-lg flex flex-col gap-4">
                   <h3 className="font-bold text-sm">Class-wise Strength Report</h3>
                   <div className="flex flex-col gap-2">
                     <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary">
                       <option>All Classes</option>
                       <option>Primary (1 to 5)</option>
                       <option>Secondary (6 to 10)</option>
                     </select>
                     <button onClick={generateReport} className="bg-primary text-black py-2 rounded-lg font-bold shadow-sm hover:bg-primary-hover flex items-center justify-center gap-2 text-sm transition">
                       <Download size={16}/> Export Excel/PDF
                     </button>
                   </div>
                </div>
             </div>
          </div>
        )}

        {activeTab === 'attendance' && (
          <div className="flex flex-col gap-6 fade-in">
             <h2 className="text-xl font-bold text-info border-b border-info/30 pb-2 flex items-center gap-2">
               <UserCheck size={20}/> Attendance Reports
             </h2>
             <div className="bg-bg-page border border-border p-6 rounded-lg flex flex-col gap-4 max-w-xl mx-auto w-full">
                <p className="text-sm font-semibold text-text-secondary text-center">Generate cumulative attendance reports to identify chronic absenteeism.</p>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Select Class</label>
                  <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-info font-bold">
                    <option>Class 10 - Section A</option>
                    <option>Class 10 - Section B</option>
                  </select>
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Date Range</label>
                  <div className="flex gap-2">
                    <input type="date" className="flex-1 bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-info font-bold" />
                    <input type="date" className="flex-1 bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-info font-bold" />
                  </div>
                </div>

                <div className="flex gap-2 mt-2">
                  <button onClick={generateReport} className="flex-1 bg-info text-white py-2.5 rounded-lg font-bold shadow-sm hover:bg-info/90 flex items-center justify-center gap-2 text-sm transition">
                    <Download size={16}/> Download PDF
                  </button>
                  <button onClick={generateReport} className="flex-1 bg-info text-white py-2.5 rounded-lg font-bold shadow-sm hover:bg-info/90 flex items-center justify-center gap-2 text-sm transition">
                    <Download size={16}/> Download Excel
                  </button>
                </div>
             </div>
          </div>
        )}

        {activeTab === 'exam' && (
          <div className="flex flex-col gap-6 fade-in">
             <h2 className="text-xl font-bold text-warning border-b border-warning/30 pb-2 flex items-center gap-2">
               <ClipboardList size={20}/> Exam & Performance Reports
             </h2>
             <div className="bg-warning-bg/20 border border-warning/30 p-6 rounded-lg flex flex-col gap-4 text-center max-w-xl mx-auto w-full">
                <p className="text-sm font-semibold mb-2">Export complete Marksheets, Topper Lists, and Subject-wise performance analytics.</p>
                <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-warning font-bold">
                  <option>Term 1 Examination</option>
                  <option>Final Examination</option>
                </select>
                <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-warning font-bold">
                  <option>Class 10 (All Sections)</option>
                </select>
                <button onClick={generateReport} className="bg-warning text-white py-2 rounded-lg font-bold shadow-sm hover:bg-warning/90 transition flex items-center justify-center gap-2">
                  <Download size={16}/> Generate Results Report
                </button>
             </div>
          </div>
        )}

        {activeTab === 'certificate' && (
          <div className="flex flex-col gap-6 fade-in h-full justify-center items-center opacity-70">
            <FileText size={64} className="text-success mb-2" />
            <h3 className="text-lg font-bold">Certificate Issue Logs</h3>
            <p className="text-sm font-bold text-text-secondary max-w-sm text-center">Track how many Bonafide, Transfer (TC), and Character certificates have been issued in the current academic year.</p>
            <button onClick={generateReport} className="bg-success text-white px-6 py-2 rounded-lg font-bold shadow-sm hover:bg-success/90 transition flex items-center gap-2 mt-4">
               <Download size={16}/> Export Log Book
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
