"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalResultPublishDraft } from '../results_types/PrincipalResults.types';
import { fetchPrincipalPublishDrafts } from '../results_api/PrincipalResultsApi';
import { usePrincipalResultsStore } from '../results_store/usePrincipalResultsStore';
import { FileText, Send, Eye } from 'lucide-react';

export default function PrincipalResultsPublishTab() {
  const [drafts, setDrafts] = useState<PrincipalResultPublishDraft[]>([]);
  const [loading, setLoading] = useState(true);
  const { setReportCardModalOpen } = usePrincipalResultsStore();

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalPublishDrafts().then(data => {
      if (isMounted) {
        setDrafts(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="space-y-4">
          {[...Array(4)].map((_, i) => <div key={i} className="h-20 bg-skeleton-base animate-pulse rounded" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="p-5 border-b border-border">
        <h2 className="text-[18px] font-bold text-text-primary flex items-center gap-2">
          <FileText className="text-info" size={20} />
          Result Publishing & Report Cards
        </h2>
        <p className="text-[13px] text-text-secondary mt-1">Review compiled results for each class and publish report cards to parents.</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
              <th className="p-4 w-48">Exam & Term</th>
              <th className="p-4 w-32">Class</th>
              <th className="p-4 w-32 text-center">Performance</th>
              <th className="p-4 w-32 text-center">Status</th>
              <th className="p-4 w-48 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {drafts.map(draft => (
              <tr key={draft.id} className="border-b border-border/50 hover:bg-white/5 transition-colors">
                <td className="p-4">
                  <p className="text-[14px] font-bold text-text-primary">{draft.examName}</p>
                  <p className="text-[11px] text-text-secondary mt-0.5">Submitted: {draft.submissionDate}</p>
                </td>
                <td className="p-4 text-[13px] font-medium text-text-secondary">
                  {draft.className} ({draft.evaluatedStudents} stds)
                </td>
                <td className="p-4 text-center">
                  <span className="text-[14px] font-bold text-info">{draft.passPercentage}% Pass</span>
                </td>
                <td className="p-4 text-center">
                  <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold border ${
                    draft.approvalStatus === 'Published' ? 'bg-success/20 text-success border-success/30' : 'bg-warning/20 text-warning border-warning/30'
                  }`}>
                    {draft.approvalStatus}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button 
                      onClick={() => setReportCardModalOpen(true, draft.id)}
                      className="px-3 py-1.5 bg-page border border-border hover:bg-white/10 rounded text-[12px] font-bold text-text-primary transition-colors flex items-center gap-1.5"
                    >
                      <Eye size={14} /> Review Sample
                    </button>
                    {draft.approvalStatus === 'Pending Review' && (
                      <button className="px-3 py-1.5 bg-primary/10 hover:bg-primary border border-primary/30 hover:border-primary rounded text-[12px] font-bold text-primary hover:text-black transition-colors flex items-center gap-1.5">
                        <Send size={14} /> Publish
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
