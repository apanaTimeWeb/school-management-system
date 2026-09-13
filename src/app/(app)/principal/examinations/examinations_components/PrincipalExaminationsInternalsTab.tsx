"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalInternalPracticalExam } from '../examinations_types/PrincipalExaminations.types';
import { fetchPrincipalInternalExams } from '../examinations_api/PrincipalExaminationsApi';
import { FlaskConical, FileText, CheckCircle } from 'lucide-react';

export default function PrincipalExaminationsInternalsTab() {
  const [internals, setInternals] = useState<PrincipalInternalPracticalExam[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalInternalExams().then(data => {
      if (isMounted) {
        setInternals(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="space-y-4">
          {[...Array(4)].map((_, i) => <div key={i} className="h-16 bg-skeleton-base animate-pulse rounded" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="p-5 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-[18px] font-bold text-text-primary">Internals & Practicals Monitoring</h2>
          <p className="text-[13px] text-text-secondary">Track the completion status of non-theory assessments.</p>
        </div>
        <div className="flex gap-2">
          <select className="bg-input border border-border rounded-md px-3 py-1.5 text-[13px] text-text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary">
            <option>All Types</option>
            <option>Practical</option>
            <option>Internal Assessment</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
              <th className="p-4 w-40">Class</th>
              <th className="p-4 w-48">Subject</th>
              <th className="p-4 w-32">Type</th>
              <th className="p-4 w-40">Teacher</th>
              <th className="p-4 w-32 text-center">Status</th>
              <th className="p-4 w-32 text-right">Date</th>
            </tr>
          </thead>
          <tbody>
            {internals.map(item => (
              <tr key={item.id} className="border-b border-border/50 hover:bg-white/5 transition-colors">
                <td className="p-4">
                  <span className="text-[14px] font-bold text-text-primary">{item.className}</span>
                </td>
                <td className="p-4">
                  <span className="text-[14px] font-medium text-text-primary">{item.subject}</span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-1.5 text-[13px] font-medium text-text-secondary">
                    {item.type === 'Practical' ? <FlaskConical size={14} className="text-info" /> : <FileText size={14} className="text-warning" />}
                    {item.type}
                  </div>
                </td>
                <td className="p-4 text-[13px] text-text-secondary">
                  {item.teacherName}
                </td>
                <td className="p-4 text-center">
                  <span className={`px-2 py-0.5 rounded text-[11px] font-bold border ${
                    item.status === 'Finalized' ? 'bg-success/20 text-success border-success/30' :
                    item.status === 'Marks Entered' ? 'bg-info/20 text-info border-info/30' :
                    'bg-page text-text-secondary border-border/50'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="p-4 text-right text-[13px] text-text-secondary font-medium">
                  {item.dateScheduled || '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
