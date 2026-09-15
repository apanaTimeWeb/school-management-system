"use client";

import React, { useEffect, useState } from 'react';
import { fetchStudentReportsData } from '../student_reports_api/student_reports_api';
import type { StudentReportsData, ReportConfig } from '../student_reports_types/student_reports_types';
import StudentReportModal from './StudentReportModal';
import { Loader2, FileBarChart2, FileText, UserCheck, BookOpen, Award, Wallet, Library, CheckCircle, Download, Eye, AlertCircle } from 'lucide-react';
import clsx from 'clsx';

/**
 * RESPONSIBILITY: Orchestrates the Reports grid and handles interactions.
 */
export default function StudentReportsMain() {
  const [data, setData] = useState<StudentReportsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedReport, setSelectedReport] = useState<ReportConfig | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetchStudentReportsData();
        if (isMounted) {
          if (response.success) {
            setData(response.data);
          } else {
            setError(response.message);
          }
        }
      } catch (err) {
        if (isMounted) setError("Failed to load reports.");
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }
    loadData();
    return () => { isMounted = false; };
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center motion-safe:animate-pulse">
        <Loader2 className="animate-spin text-primary w-10 h-10" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="bg-danger/10 border border-danger text-danger p-4 rounded-md">
        {error || "No data found."}
      </div>
    );
  }

  const getReportIcon = (type: string) => {
    switch(type) {
      case 'Attendance Report': return { color: 'text-amber-500 bg-amber-500/10', icon: <UserCheck size={28} /> };
      case 'Result Report': return { color: 'text-success bg-success/10', icon: <Award size={28} /> };
      case 'Fee Statement': return { color: 'text-danger bg-danger/10', icon: <Wallet size={28} /> };
      case 'Assignment Report': return { color: 'text-info bg-info/10', icon: <FileText size={28} /> };
      case 'Homework Status': return { color: 'text-indigo-500 bg-indigo-500/10', icon: <BookOpen size={28} /> };
      case 'Library Statement': return { color: 'text-teal-500 bg-teal-500/10', icon: <Library size={28} /> };
      case 'Certificate Status': return { color: 'text-pink-500 bg-pink-500/10', icon: <CheckCircle size={28} /> };
      case 'Academic Report': return { color: 'text-purple-500 bg-purple-500/10', icon: <FileBarChart2 size={28} /> };
      default: return { color: 'text-primary bg-primary/10', icon: <FileBarChart2 size={28} /> };
    }
  };

  const handleDownload = (report: ReportConfig) => {
    if (!report.isAvailable) return;
    alert(`Downloading ${report.type} as PDF... (Mock Action)`);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 motion-safe:animate-[fadeIn_0.3s_ease-out]">
        {data.reports.map(report => {
          const theme = getReportIcon(report.type);
          return (
            <div key={report.id} className={clsx(
              "bg-card border rounded-xl p-5 shadow-sm transition-all flex flex-col group",
              report.isAvailable ? "border-border hover:border-primary hover:shadow-md cursor-pointer" : "border-border opacity-70 cursor-not-allowed grayscale-[30%]"
            )}>
              
              <div className="flex items-start justify-between mb-4">
                <div className={clsx("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border border-current border-opacity-20", theme.color)}>
                  {theme.icon}
                </div>
                {!report.isAvailable && (
                  <span className="flex items-center gap-1 text-[10px] font-bold text-text-secondary bg-page border border-border px-2 py-0.5 rounded uppercase" title="Data not compiled yet">
                    <AlertCircle size={10} /> Unavailable
                  </span>
                )}
              </div>

              <h3 className="text-base font-bold text-text-primary mb-2 leading-tight">{report.type}</h3>
              <p className="text-xs font-semibold text-text-secondary leading-relaxed mb-4 flex-1 line-clamp-3">
                {report.description}
              </p>

              <div className="text-[10px] font-bold text-text-secondary uppercase tracking-wider mb-4 border-t border-border pt-3">
                Last Updated: {report.lastUpdated}
              </div>

              <div className="flex gap-2 mt-auto">
                <button 
                  disabled={!report.isAvailable}
                  onClick={() => setSelectedReport(report)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-page border border-border text-text-primary text-xs font-bold rounded-lg hover:border-primary hover:text-primary transition-colors disabled:opacity-50"
                >
                  <Eye size={14} /> View
                </button>
                <button 
                  disabled={!report.isAvailable}
                  onClick={() => handleDownload(report)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-primary/10 border border-primary/20 text-primary text-xs font-bold rounded-lg hover:bg-primary hover:text-white transition-colors disabled:opacity-50 disabled:bg-page disabled:text-text-secondary disabled:border-border"
                >
                  <Download size={14} /> PDF
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {selectedReport && (
        <StudentReportModal report={selectedReport} onClose={() => setSelectedReport(null)} />
      )}
    </div>
  );
}
