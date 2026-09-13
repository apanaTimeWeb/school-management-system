"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalExamGroup } from '../examinations_types/PrincipalExaminations.types';
import { fetchPrincipalExamGroups } from '../examinations_api/PrincipalExaminationsApi';
import { CalendarDays, Clock, CheckCircle } from 'lucide-react';

export default function PrincipalExaminationsCalendarTab() {
  const [groups, setGroups] = useState<PrincipalExamGroup[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalExamGroups().then(data => {
      if (isMounted) {
        setGroups(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => <div key={i} className="h-48 bg-card border border-border rounded-xl animate-pulse" />)}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-[18px] font-bold text-text-primary">Exam Calendar & Groups</h2>
        <span className="px-2 py-0.5 bg-primary/20 text-primary border border-primary/30 rounded text-[11px] font-bold">
          {groups.length} Total
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group) => (
          <div key={group.id} className="bg-card border border-border hover:border-primary/50 transition-colors rounded-xl p-5 shadow-sm flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-[16px] font-bold text-text-primary leading-tight">{group.name}</h3>
                <p className="text-[12px] text-text-secondary mt-1">{group.term}</p>
              </div>
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${
                group.status === 'Completed' ? 'bg-success/20 text-success border-success/30' :
                group.status === 'Ongoing' ? 'bg-info/20 text-info border-info/30' :
                'bg-warning/20 text-warning border-warning/30'
              }`}>
                {group.status}
              </span>
            </div>

            <div className="space-y-3 mb-6 flex-1">
              <div className="flex items-center gap-2 text-[13px] text-text-secondary">
                <CalendarDays size={16} className="text-primary" />
                <span>{new Date(group.startDate).toLocaleDateString()} - {new Date(group.endDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-start gap-2 text-[13px] text-text-secondary">
                <Clock size={16} className="text-info mt-0.5 shrink-0" />
                <div className="flex flex-wrap gap-1">
                  {group.targetClasses.map(c => (
                    <span key={c} className="bg-page px-1.5 py-0.5 rounded border border-border/50 text-[11px]">{c}</span>
                  ))}
                </div>
              </div>
            </div>

            <button className="w-full py-2 bg-page hover:bg-white/10 border border-border rounded-md text-[13px] font-bold text-text-primary transition-colors mt-auto">
              View Detailed Schedule
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
