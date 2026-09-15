"use client";

import React, { useState } from 'react';
import type { SchoolEvent, EventCategory } from '../student_events_types/student_events_types';
import { Calendar, Clock, MapPin, CheckCircle, ArrowRight, XCircle } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  events: SchoolEvent[];
  isAlreadyRegistered: (eventId: string) => boolean;
  onRegisterClick: (event: SchoolEvent) => void;
}

export default function StudentEventsList({ events, isAlreadyRegistered, onRegisterClick }: Props) {
  const [filter, setFilter] = useState<EventCategory | 'All'>('All');

  const filteredEvents = filter === 'All' ? events : events.filter(e => e.category === filter);

  return (
    <div className="flex flex-col gap-6">
      
      {/* Mini Filter */}
      <div className="flex flex-wrap items-center gap-2">
        {['All', 'Sports', 'Cultural', 'Competition', 'Workshop'].map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat as any)}
            className={clsx(
              "px-3 py-1.5 text-xs font-bold rounded-full border transition-colors",
              filter === cat ? "bg-primary text-white border-primary shadow-sm" : "bg-card text-text-secondary border-border hover:border-primary/50"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.length === 0 ? (
          <div className="col-span-full p-10 text-center text-text-secondary bg-card border border-border rounded-xl">
            No events found for this category.
          </div>
        ) : (
          filteredEvents.map(evt => {
            const isReg = isAlreadyRegistered(evt.id);

            return (
              <div key={evt.id} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:-translate-y-1 transition-all group flex flex-col">
                {/* Decorative Header */}
                <div className={clsx("h-24 p-4 flex flex-col justify-between relative overflow-hidden", evt.imageColor || "bg-primary")}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  <span className="relative z-10 text-[10px] font-bold text-white uppercase tracking-wider bg-black/30 w-fit px-2 py-0.5 rounded backdrop-blur-sm">
                    {evt.category}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-text-primary mb-2 line-clamp-2">{evt.title}</h3>
                  <p className="text-sm text-text-secondary line-clamp-2 mb-4 flex-1">{evt.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-xs font-semibold text-text-secondary">
                      <Calendar size={14} className="text-primary" /> {evt.date}
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-text-secondary">
                      <Clock size={14} className="text-info" /> {evt.time}
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-text-secondary line-clamp-1">
                      <MapPin size={14} className="text-danger" /> {evt.venue}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-border mt-auto">
                    {isReg ? (
                      <div className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-success/10 text-success text-sm font-bold border border-success/20">
                        <CheckCircle size={16} /> Registered
                      </div>
                    ) : evt.isRegistrationOpen ? (
                      <button 
                        onClick={() => onRegisterClick(evt)}
                        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-primary text-white text-sm font-bold shadow-sm hover:bg-primary-hover transition-colors"
                      >
                        Register Now <ArrowRight size={16} />
                      </button>
                    ) : (
                      <div className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-page text-text-secondary text-sm font-bold border border-border">
                        <XCircle size={16} /> Registration Closed
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

    </div>
  );
}
