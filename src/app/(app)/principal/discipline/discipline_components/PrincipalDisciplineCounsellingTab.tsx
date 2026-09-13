"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalCounsellingRecord } from '../discipline_types/PrincipalDiscipline.types';
import { fetchPrincipalCounselling } from '../discipline_api/PrincipalDisciplineApi';
import { Users2, Search, Filter, PhoneCall, CheckCircle } from 'lucide-react';

export default function PrincipalDisciplineCounsellingTab() {
  const [records, setRecords] = useState<PrincipalCounsellingRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalCounselling().then(data => {
      if (isMounted) {
        setRecords(data);
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
          <h2 className="text-[18px] font-bold text-text-primary flex items-center gap-2">
            <Users2 className="text-info" size={20} />
            Counselling & Parent Meetings
          </h2>
          <p className="text-[13px] text-text-secondary mt-1">Monitor counselling sessions, parent meetings, and follow-ups.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex items-center gap-2 bg-input border border-border rounded-md px-3 py-1.5 focus-within:border-primary transition-colors">
            <Search size={14} className="text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search by name..." 
              className="bg-transparent border-none outline-none text-[13px] text-text-primary w-full sm:w-48 placeholder:text-text-secondary/50"
            />
          </div>
          <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.dispatchEvent(new CustomEvent('open-coming-soon', { detail: 'This action is part of the next development phase.' })); }} className="flex items-center justify-center gap-2 px-4 py-1.5 bg-page hover:bg-white/5 border border-border rounded-md text-[13px] font-bold text-text-primary transition-colors">
            <Filter size={14} /> Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
              <th className="p-4 w-48">Subject Name</th>
              <th className="p-4 w-40">Session Date</th>
              <th className="p-4">Issue Discussed</th>
              <th className="p-4 w-48">Parent Meeting Status</th>
              <th className="p-4 w-40">Follow Up</th>
            </tr>
          </thead>
          <tbody>
            {records.map((rec) => (
              <tr key={rec.id} className="border-b border-border/50 hover:bg-white/5 transition-colors">
                <td className="p-4">
                  <p className="text-[14px] font-bold text-text-primary">{rec.subjectName}</p>
                  <p className="text-[12px] text-text-secondary">{rec.type} • ID: {rec.subjectId}</p>
                  <p className="text-[11px] text-text-secondary/70 mt-1">Counsellor: {rec.counsellor}</p>
                </td>
                <td className="p-4 text-[13px] font-bold text-text-primary">{rec.sessionDate}</td>
                <td className="p-4">
                  <p className="text-[13px] text-text-secondary">{rec.issue}</p>
                  <p className="text-[11px] text-text-primary font-medium mt-1">Notes: {rec.notes}</p>
                </td>
                <td className="p-4">
                  {rec.parentMeetingRequired ? (
                    <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border w-fit ${
                      rec.parentMeetingStatus === 'Completed' ? 'bg-success/20 text-success border-success/30' : 'bg-warning/20 text-warning border-warning/30'
                    }`}>
                      {rec.parentMeetingStatus === 'Completed' ? <CheckCircle size={14} /> : <PhoneCall size={14} />}
                      {rec.parentMeetingStatus}
                    </span>
                  ) : (
                    <span className="text-[12px] text-text-secondary italic">Not Required</span>
                  )}
                </td>
                <td className="p-4">
                  {rec.followUpDate ? (
                    <span className="text-[13px] font-bold text-primary">{rec.followUpDate}</span>
                  ) : (
                    <span className="text-[12px] text-text-secondary italic">None</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
