"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalCommunicationHistory } from '../communication_types/PrincipalCommunication.types';
import { fetchPrincipalHistory } from '../communication_api/PrincipalCommunicationApi';
import { History, Search, Filter, CheckCircle, Clock } from 'lucide-react';
import clsx from 'clsx';

export default function PrincipalCommunicationHistoryTab() {
  const [history, setHistory] = useState<PrincipalCommunicationHistory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalHistory().then(data => {
      if (isMounted) {
        setHistory(data);
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
            <History className="text-info" size={20} />
            Communication Logs
          </h2>
          <p className="text-[13px] text-text-secondary mt-1">Review previously sent messages and broadcast statistics.</p>
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
          <button className="flex items-center justify-center gap-2 px-4 py-1.5 bg-page hover:bg-white/5 border border-border rounded-md text-[13px] font-bold text-text-primary transition-colors">
            <Filter size={14} /> Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
              <th className="p-4 w-64">Subject & Preview</th>
              <th className="p-4 w-40">Recipient / Date</th>
              <th className="p-4 w-48">Channels Used</th>
              <th className="p-4 w-32 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {history.map((log) => (
              <tr key={log.id} className="border-b border-border/50 hover:bg-white/5 transition-colors">
                <td className="p-4">
                  <p className="text-[14px] font-bold text-text-primary">{log.subject}</p>
                  <p className="text-[12px] text-text-secondary mt-1 line-clamp-1" title={log.messagePreview}>{log.messagePreview}</p>
                  <p className="text-[11px] text-text-secondary/70 mt-1">Sender: {log.sender}</p>
                </td>
                <td className="p-4">
                  <p className="text-[13px] font-bold text-text-primary">{log.recipients}</p>
                  <p className="text-[12px] text-text-secondary mt-1">{log.sentDate} • {log.sentTime}</p>
                </td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-1.5">
                    {log.channels.map(ch => (
                      <span key={ch} className="px-2 py-0.5 rounded bg-page border border-border text-[11px] font-medium text-text-secondary">
                        {ch}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex flex-col items-center gap-1.5">
                    <span className={clsx("flex items-center justify-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold border", 
                      log.status === 'Sent' ? 'bg-success/10 border-success/30 text-success' : 
                      log.status === 'Pending' ? 'bg-warning/10 border-warning/30 text-warning' : 'bg-danger/10 border-danger/30 text-danger'
                    )}>
                      {log.status === 'Sent' && <CheckCircle size={12}/>}
                      {log.status === 'Pending' && <Clock size={12}/>}
                      {log.status}
                    </span>
                    <span className="text-[11px] text-info font-bold">{log.deliveryRate}% Delivered</span>
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
