"use client";

import React from 'react';
import type { ExamResult } from '../student_results_types/student_results_types';
import { FileBadge, Download, Printer, Percent, Trophy, GraduationCap, CheckCircle2, MessageSquareText } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  result: ExamResult;
}

/**
 * RESPONSIBILITY: Renders the detailed report card for the selected term.
 */
export default function StudentResultsReportCard({ result }: Props) {
  
  const KpiBlock = ({ title, value, icon, valueColor }: any) => (
    <div className="flex items-center gap-4 bg-page border border-border rounded-xl p-4">
      <div className={clsx("w-10 h-10 rounded-full flex items-center justify-center bg-card shadow-sm border border-border", valueColor)}>
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">{title}</span>
        <span className={clsx("text-xl font-bold", valueColor)}>{value}</span>
      </div>
    </div>
  );

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
      
      {/* Report Header */}
      <div className="bg-primary/5 p-6 border-b border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative overflow-hidden">
        
        {/* Decorative Background */}
        <div className="absolute -right-10 -top-10 opacity-5 pointer-events-none">
          <FileBadge size={150} />
        </div>

        <div className="z-10">
          <h2 className="text-2xl font-bold text-text-primary mb-1">{result.termName}</h2>
          <p className="text-sm font-semibold text-text-secondary">Report Card • Published on {result.datePublished}</p>
        </div>
        
        <div className="flex items-center gap-3 z-10">
          <button className="flex items-center gap-2 bg-page border border-border px-4 py-2 rounded-md text-sm font-bold text-text-secondary hover:text-primary hover:border-primary/50 transition-colors shadow-sm">
            <Printer size={16} /> Print
          </button>
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md text-sm font-bold shadow-sm hover:bg-primary-hover transition-colors">
            <Download size={16} /> PDF
          </button>
        </div>
      </div>

      <div className="p-6">
        
        {/* Top Level KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <KpiBlock 
            title="Percentage" 
            value={`${result.percentage}%`} 
            icon={<Percent size={20} />} 
            valueColor={result.percentage >= 75 ? 'text-success' : 'text-amber-500'} 
          />
          <KpiBlock 
            title="Grade" 
            value={result.grade} 
            icon={<GraduationCap size={20} />} 
            valueColor="text-primary" 
          />
          <KpiBlock 
            title="Status" 
            value={result.status} 
            icon={<CheckCircle2 size={20} />} 
            valueColor={result.status === 'Pass' ? 'text-success' : 'text-danger'} 
          />
          {result.rank && (
            <KpiBlock 
              title="Rank" 
              value={result.rank} 
              icon={<Trophy size={20} />} 
              valueColor="text-amber-500" 
            />
          )}
        </div>

        {/* Detailed Marks Table */}
        <div className="mb-8 overflow-hidden rounded-xl border border-border">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-page">
                  <th className="p-4 border-b border-border text-xs font-bold text-text-secondary uppercase tracking-wider">Subject</th>
                  <th className="p-4 border-b border-border text-xs font-bold text-text-secondary uppercase tracking-wider text-center">Max Marks</th>
                  <th className="p-4 border-b border-border text-xs font-bold text-text-secondary uppercase tracking-wider text-center">Obtained</th>
                  <th className="p-4 border-b border-border text-xs font-bold text-text-secondary uppercase tracking-wider text-center">Grade</th>
                  <th className="p-4 border-b border-border text-xs font-bold text-text-secondary uppercase tracking-wider">Remarks</th>
                </tr>
              </thead>
              <tbody>
                {result.subjects.map((sub) => (
                  <tr key={sub.id} className="hover:bg-primary/5 transition-colors border-b border-border last:border-0">
                    <td className="p-4 text-sm font-bold text-text-primary">{sub.subjectName}</td>
                    <td className="p-4 text-sm font-semibold text-text-secondary text-center">{sub.maxMarks}</td>
                    <td className="p-4 text-sm font-bold text-text-primary text-center">{sub.obtainedMarks}</td>
                    <td className="p-4 text-center">
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md">
                        {sub.grade}
                      </span>
                    </td>
                    <td className="p-4 text-xs text-text-secondary">
                      {sub.remarks || '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-page border-t-2 border-border font-bold">
                <tr>
                  <td className="p-4 text-sm text-text-primary">Total</td>
                  <td className="p-4 text-sm text-text-primary text-center">{result.totalMaxMarks}</td>
                  <td className="p-4 text-sm text-primary text-center">{result.totalObtainedMarks}</td>
                  <td colSpan={2}></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Teacher Remarks Summary */}
        <div className="bg-info/5 border border-info/20 p-5 rounded-xl flex items-start gap-3">
          <MessageSquareText size={20} className="text-info shrink-0 mt-0.5" />
          <div className="flex flex-col">
            <span className="text-xs font-bold text-info mb-1 uppercase tracking-wider">Class Teacher's Remarks</span>
            <p className="text-sm text-text-secondary/90 leading-relaxed font-semibold italic">"{result.teacherRemarks}"</p>
          </div>
        </div>

      </div>
    </div>
  );
}
