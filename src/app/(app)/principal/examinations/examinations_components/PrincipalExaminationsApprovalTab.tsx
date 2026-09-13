"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalExamMarksApproval } from '../examinations_types/PrincipalExaminations.types';
import { fetchPrincipalMarksApprovals } from '../examinations_api/PrincipalExaminationsApi';
import { usePrincipalExaminationsStore } from '../examinations_store/usePrincipalExaminationsStore';
import { FileCheck, AlertCircle, CheckCircle } from 'lucide-react';

export default function PrincipalExaminationsApprovalTab() {
  const [approvals, setApprovals] = useState<PrincipalExamMarksApproval[]>([]);
  const [loading, setLoading] = useState(true);
  const { setApproveModalOpen } = usePrincipalExaminationsStore();

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalMarksApprovals().then(data => {
      if (isMounted) {
        setApprovals(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => <div key={i} className="h-20 bg-skeleton-base animate-pulse rounded" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      
      <div className="bg-info/10 border border-info/30 rounded-xl p-4 flex items-start gap-3 shadow-sm">
        <AlertCircle className="text-info shrink-0 mt-0.5" size={18} />
        <div>
          <h4 className="text-[14px] font-bold text-info">Marks Verification Required</h4>
          <p className="text-[12px] text-info/80 mt-1">
            Teachers have submitted marks for recent examinations. Please verify average scores and approve them to allow publishing of report cards to parents.
          </p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
                <th className="p-4 w-40">Exam & Class</th>
                <th className="p-4 w-48">Subject & Teacher</th>
                <th className="p-4 w-24 text-center">Avg Marks</th>
                <th className="p-4 w-24 text-center">Highest</th>
                <th className="p-4 w-32 text-center">Status</th>
                <th className="p-4 w-32 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {approvals.map(app => (
                <tr key={app.id} className="border-b border-border/50 hover:bg-white/5 transition-colors">
                  <td className="p-4">
                    <p className="text-[14px] font-bold text-text-primary">{app.examName}</p>
                    <p className="text-[12px] font-medium text-text-secondary mt-0.5">{app.className} ({app.totalStudents} stds)</p>
                  </td>
                  <td className="p-4">
                    <p className="text-[14px] font-bold text-text-primary">{app.subject}</p>
                    <p className="text-[12px] text-text-secondary mt-0.5">By: {app.teacherName}</p>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-[14px] font-bold text-info">{app.averageMarks}%</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-[14px] font-bold text-success">{app.highestMarks}%</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${
                      app.status === 'Approved' ? 'bg-success/20 text-success border-success/30' :
                      app.status === 'Rejected' ? 'bg-danger/20 text-danger border-danger/30' :
                      'bg-warning/20 text-warning border-warning/30'
                    }`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    {app.status === 'Pending Verification' ? (
                      <button 
                        onClick={() => setApproveModalOpen(true, app.id)}
                        className="px-3 py-1.5 bg-primary/10 hover:bg-primary text-primary hover:text-black border border-primary/30 hover:border-primary rounded-md text-[12px] font-bold transition-colors flex items-center gap-1.5 ml-auto"
                      >
                        <FileCheck size={14} />
                        Verify & Approve
                      </button>
                    ) : (
                      <span className="text-[12px] font-medium text-success flex items-center justify-end gap-1">
                        <CheckCircle size={14} /> Approved
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
