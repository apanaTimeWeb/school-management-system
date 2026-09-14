"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalParentCommunication } from '../parents_types/PrincipalParents.types';
import { fetchPrincipalCommunications } from '../parents_api/PrincipalParentsApi';
import { MessageSquare, Search, Filter, MailOpen, Mail, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

export default function PrincipalParentsCommunicationTab() {
  const [communications, setCommunications] = useState<PrincipalParentCommunication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalCommunications().then(data => {
      if (isMounted) {
        setCommunications(data);
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
            <MessageSquare className="text-info" size={20} />
            Communication & Complaints
          </h2>
          <p className="text-[13px] text-text-secondary mt-1">Review feedback, messages, and complaints from parents.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex items-center gap-2 bg-input border border-border rounded-md px-3 py-1.5 focus-within:border-primary transition-colors">
            <Search size={14} className="text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search subjects..." 
              className="bg-transparent border-none outline-none text-[13px] text-text-primary w-full sm:w-48 placeholder:text-text-secondary/50"
            />
          </div>
          <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.dispatchEvent(new CustomEvent('open-coming-soon', { detail: 'Action completed successfully!' })); }} className="flex items-center justify-center gap-2 px-4 py-1.5 bg-page hover:bg-white/5 border border-border rounded-md text-[13px] font-bold text-text-primary transition-colors">
            <Filter size={14} /> Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
              <th className="p-4 w-48">Parent</th>
              <th className="p-4 w-32">Type</th>
              <th className="p-4">Message / Subject</th>
              <th className="p-4 w-32 text-center">Date</th>
              <th className="p-4 w-32 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {communications.map((msg) => (
              <tr key={msg.id} className="border-b border-border/50 hover:bg-white/5 transition-colors">
                <td className="p-4">
                  <p className="text-[14px] font-bold text-text-primary">{msg.parentName}</p>
                  <p className="text-[12px] text-text-secondary">ID: {msg.parentId}</p>
                </td>
                <td className="p-4">
                  <span className={clsx("px-2 py-0.5 rounded text-[11px] font-bold border", 
                    msg.type === 'Complaint' ? 'bg-danger/10 text-danger border-danger/20' :
                    msg.type === 'Feedback' ? 'bg-success/10 text-success border-success/20' :
                    'bg-info/10 text-info border-info/20'
                  )}>
                    {msg.type}
                  </span>
                </td>
                <td className="p-4">
                  <p className="text-[14px] font-bold text-text-primary">{msg.subject}</p>
                  <p className="text-[13px] text-text-secondary mt-1">{msg.message}</p>
                </td>
                <td className="p-4 text-center text-[13px] font-medium text-text-secondary">{msg.date}</td>
                <td className="p-4 text-center">
                  <span className={clsx("flex items-center justify-center gap-1.5 text-[12px] font-bold", 
                    msg.status === 'Unread' ? 'text-warning' : 
                    msg.status === 'Resolved' ? 'text-success' : 'text-text-secondary'
                  )}>
                    {msg.status === 'Unread' && <Mail size={14}/>}
                    {msg.status === 'Read' && <MailOpen size={14}/>}
                    {msg.status === 'Resolved' && <CheckCircle size={14}/>}
                    {msg.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
