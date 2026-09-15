"use client";

import React from 'react';
import type { EventResult } from '../student_events_types/student_events_types';
import { Trophy, Download, Medal, Calendar } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  results: EventResult[];
}

export default function StudentEventsResults({ results }: Props) {
  
  if (results.length === 0) {
    return (
      <div className="bg-card border border-border rounded-xl p-10 flex flex-col items-center justify-center text-center">
        <Trophy size={48} className="text-text-secondary/30 mb-4" />
        <h3 className="text-lg font-bold text-text-primary">No Results Found</h3>
        <p className="text-sm text-text-secondary mt-1">Results and certificates will appear here after events conclude.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {results.map((res) => {
        const isWinner = res.rankOrScore.includes("1st") || res.rankOrScore.includes("2nd") || res.rankOrScore.includes("3rd");
        
        return (
          <div key={res.id} className="bg-card border border-border rounded-xl p-5 shadow-sm flex flex-col md:flex-row items-center gap-5 hover:border-primary/30 transition-colors">
            
            {/* Medallion */}
            <div className={clsx(
              "w-16 h-16 rounded-full flex items-center justify-center shrink-0 border-4",
              isWinner ? "bg-amber-100 text-amber-500 border-amber-200" : "bg-page text-text-secondary border-border"
            )}>
              {isWinner ? <Trophy size={28} /> : <Medal size={28} />}
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <span className="text-[10px] font-bold text-primary uppercase tracking-wider">{res.category}</span>
              <h3 className="text-base font-bold text-text-primary mb-1 line-clamp-1">{res.eventTitle}</h3>
              <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-semibold text-text-secondary mb-3">
                <Calendar size={14} /> {res.date}
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-border pt-3 mt-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-text-secondary uppercase">Result:</span>
                  <span className={clsx("text-sm font-bold", isWinner ? "text-amber-500" : "text-text-primary")}>
                    {res.rankOrScore}
                  </span>
                </div>
                
                {res.hasCertificate && (
                  <button className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold rounded-md transition-colors">
                    <Download size={14} /> Certificate
                  </button>
                )}
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
}
