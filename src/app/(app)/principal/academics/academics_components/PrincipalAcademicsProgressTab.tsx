"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalSyllabusProgress } from '../academics_types/PrincipalAcademics.types';
import { fetchPrincipalSyllabusProgress } from '../academics_api/PrincipalAcademicsApi';
import { Target, TrendingUp, AlertTriangle } from 'lucide-react';

export default function PrincipalAcademicsProgressTab() {
  const [progress, setProgress] = useState<PrincipalSyllabusProgress[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalSyllabusProgress().then(data => {
      if (isMounted) {
        setProgress(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-16 bg-skeleton-base animate-pulse rounded" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      
      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-success/10 border border-success/30 rounded-xl p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
            <Target className="text-success" size={24} />
          </div>
          <div>
            <p className="text-[12px] font-bold text-success uppercase tracking-wider">On Track</p>
            <p className="text-[24px] font-bold text-text-primary">85%</p>
          </div>
        </div>
        <div className="bg-warning/10 border border-warning/30 rounded-xl p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-warning/20 flex items-center justify-center">
            <AlertTriangle className="text-warning" size={24} />
          </div>
          <div>
            <p className="text-[12px] font-bold text-warning uppercase tracking-wider">Delayed</p>
            <p className="text-[24px] font-bold text-text-primary">15%</p>
          </div>
        </div>
        <div className="bg-info/10 border border-info/30 rounded-xl p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-info/20 flex items-center justify-center">
            <TrendingUp className="text-info" size={24} />
          </div>
          <div>
            <p className="text-[12px] font-bold text-info uppercase tracking-wider">Avg Completion</p>
            <p className="text-[24px] font-bold text-text-primary">60%</p>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
                <th className="p-4 w-40">Class & Section</th>
                <th className="p-4">Subject & Teacher</th>
                <th className="p-4 w-64">Completion Progress</th>
                <th className="p-4 w-32 text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {progress.map((prog) => (
                <tr key={prog.id} className="border-b border-border/50 hover:bg-white/5 transition-colors">
                  <td className="p-4">
                    <p className="text-[14px] font-bold text-text-primary">{prog.className}</p>
                    <p className="text-[12px] text-text-secondary">Section {prog.sectionName}</p>
                  </td>
                  <td className="p-4">
                    <p className="text-[14px] font-medium text-text-primary">{prog.subjectName}</p>
                    <p className="text-[12px] text-text-secondary">{prog.teacherName}</p>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-between text-[11px] font-bold text-text-secondary mb-1">
                      <span>{prog.chaptersCompleted} / {prog.totalChapters} Chapters</span>
                      <span>{prog.completionPercentage}%</span>
                    </div>
                    <div className="h-2 w-full bg-page rounded-full overflow-hidden border border-border/50">
                      <div 
                        className={`h-full rounded-full ${
                          prog.status === 'Delayed' ? 'bg-danger' : 
                          prog.status === 'Ahead' ? 'bg-primary' : 
                          'bg-success'
                        }`}
                        style={{ width: `${prog.completionPercentage}%` }}
                      />
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${
                      prog.status === 'Delayed' ? 'bg-danger/20 text-danger border-danger/30' : 
                      prog.status === 'Ahead' ? 'bg-primary/20 text-primary border-primary/30' : 
                      'bg-success/20 text-success border-success/30'
                    }`}>
                      {prog.status}
                    </span>
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
