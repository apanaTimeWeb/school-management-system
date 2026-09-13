"use client";
import React, { useState } from 'react';
import { BookOpen, Users, BarChart2, TrendingUp, Search } from 'lucide-react';
import { useTeacherResultsStore } from '../results_store/useTeacherResultsStore';
import { TEACHER_RESULTS_CLASSES } from '../results_constants/TeacherResultsMockData';
import TeacherClassPerformanceModal from './TeacherClassPerformanceModal';

export default function TeacherResultsMain() {
  const { openPerformanceModal } = useTeacherResultsStore();
  const [search, setSearch] = useState('');

  const filteredResults = TEACHER_RESULTS_CLASSES.filter(r => 
    r.className.toLowerCase().includes(search.toLowerCase()) || 
    r.subject.toLowerCase().includes(search.toLowerCase()) ||
    r.examName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full w-full max-w-7xl mx-auto">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary">Results & Analytics</h1>
          <p className="text-[14px] text-text-secondary mt-1">Analyze class performance and student marks for your assigned subjects.</p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-4 mb-6">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-2.5 text-text-secondary" size={18} />
          <input 
            type="text" 
            placeholder="Search by class, subject, or exam..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-input border border-border rounded-lg pl-10 pr-4 py-2 text-[14px] text-text-primary focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResults.map((result) => (
          <div key={result.id} className="bg-card border border-border rounded-xl flex flex-col hover:border-primary/50 transition-colors group">
            
            {/* Header */}
            <div className="p-5 border-b border-border bg-black/20">
              <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider mb-2 inline-block ${result.isPublished ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'}`}>
                {result.isPublished ? 'Published' : 'Draft / Processing'}
              </span>
              <h3 className="text-[16px] font-bold text-text-primary group-hover:text-primary transition-colors mb-1">{result.examName}</h3>
              <p className="text-[13px] text-text-secondary font-bold flex items-center gap-2"><BookOpen size={14}/> {result.subject} <span className="text-border">|</span> <Users size={14}/> {result.className}</p>
            </div>

            {/* Stats */}
            <div className="p-5 flex-1 grid grid-cols-2 gap-4">
              <div className="bg-page border border-border p-3 rounded-lg text-center">
                <span className="block text-[22px] font-bold text-success">{result.averagePercentage}%</span>
                <span className="text-[10px] text-text-secondary uppercase tracking-wider font-bold">Class Average</span>
              </div>
              <div className="bg-page border border-border p-3 rounded-lg text-center">
                <span className="block text-[22px] font-bold text-info">{result.highestPercentage}%</span>
                <span className="text-[10px] text-text-secondary uppercase tracking-wider font-bold">Highest Score</span>
              </div>
              <div className="col-span-2 flex items-center justify-between text-[13px] font-bold text-text-primary px-2">
                <span>Pass Rate:</span>
                <span className={((result.passedStudents / result.totalStudents) * 100) >= 80 ? 'text-success' : 'text-warning'}>
                  {Math.round((result.passedStudents / result.totalStudents) * 100)}% ({result.passedStudents}/{result.totalStudents})
                </span>
              </div>
            </div>

            {/* Action */}
            <div 
              onClick={() => openPerformanceModal(result)}
              className="px-5 py-4 border-t border-border bg-primary/10 flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors text-primary font-bold text-[13px] gap-2"
            >
              <BarChart2 size={18} /> View Detailed Analytics
            </div>

          </div>
        ))}
      </div>

      <TeacherClassPerformanceModal />
    </div>
  );
}
