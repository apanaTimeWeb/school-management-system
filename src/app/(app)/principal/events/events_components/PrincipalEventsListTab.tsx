"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalEvent } from '../events_types/PrincipalEvents.types';
import { fetchPrincipalEvents } from '../events_api/PrincipalEventsApi';
import { Search, Filter, CalendarDays, Ticket, IndianRupee, MapPin } from 'lucide-react';
import { usePrincipalEventsStore } from '../events_store/usePrincipalEventsStore';
import clsx from 'clsx';

export default function PrincipalEventsListTab() {
  const [events, setEvents] = useState<PrincipalEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const { setSelectedEvent } = usePrincipalEventsStore();

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalEvents().then(data => {
      if (isMounted) {
        setEvents(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="space-y-4">
          {[...Array(4)].map((_, i) => <div key={i} className="h-24 bg-skeleton-base animate-pulse rounded" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="p-5 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-[18px] font-bold text-text-primary">School Events List</h2>
          <p className="text-[13px] text-text-secondary">Approve or review upcoming school activities and budgets.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex items-center gap-2 bg-input border border-border rounded-md px-3 py-1.5 focus-within:border-primary transition-colors">
            <Search size={14} className="text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search events..." 
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
              <th className="p-4 w-64">Event Info</th>
              <th className="p-4 w-40">Schedule</th>
              <th className="p-4 w-40">Organizer & Budget</th>
              <th className="p-4 w-32 text-center">Status</th>
              <th className="p-4 w-32 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {events.map((evt) => (
              <tr key={evt.id} className="border-b border-border/50 hover:bg-white/5 transition-colors group">
                <td className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 text-primary">
                      <Ticket size={20} />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-text-primary mb-0.5 cursor-pointer hover:text-primary transition-colors" onClick={() => setSelectedEvent(evt)}>{evt.title}</p>
                      <span className="inline-block px-2 py-0.5 rounded-sm bg-page border border-border text-[11px] font-bold text-text-secondary">{evt.type}</span>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <p className="text-[13px] font-bold text-text-primary flex items-center gap-2 mb-1"><CalendarDays size={14} className="text-info"/> {evt.startDate}</p>
                  {evt.startDate !== evt.endDate && <p className="text-[12px] text-text-secondary">To: {evt.endDate}</p>}
                </td>
                <td className="p-4">
                  <p className="text-[13px] font-bold text-text-primary mb-1">{evt.organizer}</p>
                  <p className="text-[12px] text-text-secondary flex items-center gap-1"><IndianRupee size={12} className="text-success"/> {evt.budget.toLocaleString()}</p>
                </td>
                <td className="p-4 text-center">
                  <span className={clsx("inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold border", 
                    evt.status === 'Pending Approval' ? 'bg-warning/10 text-warning border-warning/30' :
                    evt.status === 'Approved' ? 'bg-primary/10 text-primary border-primary/30' :
                    evt.status === 'Completed' ? 'bg-success/10 text-success border-success/30' :
                    'bg-danger/10 text-danger border-danger/30'
                  )}>
                    {evt.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button 
                    onClick={() => setSelectedEvent(evt)}
                    className="px-4 py-1.5 rounded bg-primary/10 hover:bg-primary border border-primary/30 hover:border-primary text-[12px] font-bold text-primary hover:text-white transition-colors"
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
