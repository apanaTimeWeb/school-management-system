"use client";
import React, { useEffect, useState } from 'react';
import { X, FileText, Download } from 'lucide-react';
import { usePrincipalResultsStore } from '../results_store/usePrincipalResultsStore';
import { PrincipalReportCardDetail } from '../results_types/PrincipalResults.types';
import { fetchPrincipalReportCard } from '../results_api/PrincipalResultsApi';

export default function PrincipalResultsReportCardModal() {
  const { isReportCardModalOpen, setReportCardModalOpen, selectedDraftId } = usePrincipalResultsStore();
  const [report, setReport] = useState<PrincipalReportCardDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isReportCardModalOpen && selectedDraftId) {
      setLoading(true);
      fetchPrincipalReportCard(selectedDraftId).then(data => {
        setReport(data);
        setLoading(false);
      });
    }
  }, [isReportCardModalOpen, selectedDraftId]);

  if (!isReportCardModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-0">
      <div className="w-full max-w-2xl bg-bg-main border border-border rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        <div className="px-5 py-4 bg-card border-b border-border flex items-center justify-between shrink-0">
          <h2 className="text-[16px] font-bold text-text-primary flex items-center gap-2">
            <FileText className="text-primary" size={18} />
            Sample Report Card Preview
          </h2>
          <button 
            onClick={() => setReportCardModalOpen(false)}
            className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
          {loading ? (
            <div className="space-y-4">
              <div className="h-20 bg-skeleton-base animate-pulse rounded" />
              <div className="h-40 bg-skeleton-base animate-pulse rounded" />
            </div>
          ) : report ? (
            <div className="bg-white text-black p-8 rounded-lg shadow-inner">
              {/* Report Card Header (White Theme for Print) */}
              <div className="text-center border-b-2 border-black/20 pb-4 mb-6">
                <h1 className="text-2xl font-black text-black">SCHOOL ERP 360</h1>
                <p className="text-sm font-bold text-gray-600 mt-1">ACADEMIC PERFORMANCE REPORT</p>
              </div>

              <div className="flex justify-between items-end mb-6">
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Student Details</p>
                  <p className="text-lg font-bold text-black">{report.studentName}</p>
                  <p className="text-sm font-medium text-gray-700">Roll No: {report.rollNo}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Performance</p>
                  <p className="text-2xl font-black text-black">{report.percentage}%</p>
                  <p className="text-sm font-bold text-gray-700">Overall Grade: {report.overallGrade}</p>
                </div>
              </div>

              <table className="w-full text-left border-collapse border border-black/20 mb-6">
                <thead>
                  <tr className="bg-gray-100 border-b border-black/20">
                    <th className="p-3 text-sm font-bold border-r border-black/20">Subject</th>
                    <th className="p-3 text-sm font-bold text-center border-r border-black/20">Marks Obtained</th>
                    <th className="p-3 text-sm font-bold text-center">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {report.subjects.map((sub, i) => (
                    <tr key={i} className="border-b border-black/10">
                      <td className="p-3 text-sm font-medium border-r border-black/20">{sub.name}</td>
                      <td className="p-3 text-sm text-center border-r border-black/20">{sub.marks}/100</td>
                      <td className="p-3 text-sm font-bold text-center">{sub.grade}</td>
                    </tr>
                  ))}
                  <tr className="bg-gray-50">
                    <td className="p-3 text-sm font-bold border-r border-black/20 text-right">Total Marks</td>
                    <td colSpan={2} className="p-3 text-sm font-black">{report.totalMarks}/400</td>
                  </tr>
                </tbody>
              </table>

              <div>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Principal's Remarks</p>
                <p className="text-sm font-medium italic text-gray-800 bg-gray-100 p-3 rounded">{report.remarks}</p>
              </div>
            </div>
          ) : (
            <p className="text-center text-text-secondary text-sm">Failed to load report card.</p>
          )}
        </div>

        <div className="px-5 py-4 border-t border-border bg-card flex justify-end gap-3 shrink-0">
          <button
            onClick={() => setReportCardModalOpen(false)}
            className="px-4 py-2 rounded-md bg-page border border-border text-text-primary text-[13px] font-medium hover:bg-white/5 transition-colors"
          >
            Close Preview
          </button>
          <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.dispatchEvent(new CustomEvent('open-coming-soon', { detail: 'Action completed successfully!' })); }}
            disabled={loading}
            className="px-4 py-2 rounded-md bg-primary text-white text-[13px] font-bold hover:bg-primary-hover transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            <Download size={14} /> Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}
