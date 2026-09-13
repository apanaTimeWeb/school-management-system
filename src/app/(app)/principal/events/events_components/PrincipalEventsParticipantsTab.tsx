"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalEventParticipant } from '../events_types/PrincipalEvents.types';
import { fetchPrincipalParticipants } from '../events_api/PrincipalEventsApi';
import { Search, Filter, Trophy, Star } from 'lucide-react';
import clsx from 'clsx';

export default function PrincipalEventsParticipantsTab() {
  const [participants, setParticipants] = useState<PrincipalEventParticipant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalParticipants().then(data => {
      if (isMounted) {
        setParticipants(data);
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
            <Star className="text-warning" size={20} />
            Participants & Results
          </h2>
          <p className="text-[13px] text-text-secondary mt-1">View student participations and achievements in school events.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex items-center gap-2 bg-input border border-border rounded-md px-3 py-1.5 focus-within:border-primary transition-colors">
            <Search size={14} className="text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search students..." 
              className="bg-transparent border-none outline-none text-[13px] text-text-primary w-full sm:w-48 placeholder:text-text-secondary/50"
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-1.5 bg-page hover:bg-white/5 border border-border rounded-md text-[13px] font-bold text-text-primary transition-colors">
            <Filter size={14} /> Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
              <th className="p-4 w-56">Student Name</th>
              <th className="p-4 w-64">Event Title</th>
              <th className="p-4">Role/Position</th>
              <th className="p-4 w-40 text-center">Result</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((pt) => (
              <tr key={pt.id} className="border-b border-border/50 hover:bg-white/5 transition-colors">
                <td className="p-4">
                  <p className="text-[14px] font-bold text-text-primary">{pt.studentName}</p>
                  <p className="text-[12px] text-text-secondary mt-0.5">Class: {pt.classAndSection} • ID: {pt.studentId}</p>
                </td>
                <td className="p-4">
                  <p className="text-[13px] font-bold text-text-primary">{pt.eventTitle}</p>
                  <p className="text-[11px] text-text-secondary">Evt ID: {pt.eventId}</p>
                </td>
                <td className="p-4">
                  <span className="px-2.5 py-1 rounded bg-page border border-border text-[12px] font-medium text-text-primary shadow-sm">
                    {pt.role}
                  </span>
                </td>
                <td className="p-4 text-center">
                  {pt.result ? (
                    <span className={clsx("inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border", 
                      pt.result === '1st Prize' || pt.result.includes('Winner') ? 'bg-primary/20 text-primary border-primary/30' :
                      pt.result.includes('Runner') ? 'bg-info/10 text-info border-info/30' : 'bg-success/10 text-success border-success/30'
                    )}>
                      <Trophy size={14}/> {pt.result}
                    </span>
                  ) : (
                    <span className="text-[12px] text-text-secondary italic">Participated</span>
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
