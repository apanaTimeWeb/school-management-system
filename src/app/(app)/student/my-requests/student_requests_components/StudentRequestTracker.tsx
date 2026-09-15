"use client";

import React from 'react';
import type { RequestStatus } from '../student_requests_types/student_requests_types';
import { Check, Clock, X, Loader2 } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  currentStatus: RequestStatus;
}

export default function StudentRequestTracker({ currentStatus }: Props) {
  // Define the ordered steps. Rejected replaces Approved if applicable.
  const steps = [
    { label: 'Pending', icon: <Clock size={12} /> },
    { label: 'Under Review', icon: <Loader2 size={12} /> },
    { 
      label: currentStatus === 'Rejected' ? 'Rejected' : 'Approved', 
      icon: currentStatus === 'Rejected' ? <X size={12} /> : <Check size={12} /> 
    },
    { label: 'Completed', icon: <Check size={12} /> }
  ];

  // Determine active step index
  let activeIndex = 0;
  if (currentStatus === 'Under Review') activeIndex = 1;
  if (currentStatus === 'Approved' || currentStatus === 'Rejected') activeIndex = 2;
  if (currentStatus === 'Completed') activeIndex = 3;

  return (
    <div className="relative flex justify-between items-center w-full max-w-sm mx-auto px-4">
      
      {/* Connecting Line (Background) */}
      <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-border -translate-y-1/2 z-0"></div>
      
      {/* Connecting Line (Progress) */}
      <div 
        className={clsx(
          "absolute top-1/2 left-8 h-0.5 -translate-y-1/2 z-0 transition-all duration-500",
          currentStatus === 'Rejected' ? "bg-danger" : "bg-primary"
        )}
        style={{ width: `calc(${(activeIndex / 3) * 100}% - 32px)` }}
      ></div>

      {steps.map((step, idx) => {
        const isCompleted = idx < activeIndex;
        const isCurrent = idx === activeIndex;
        const isRejectedNode = step.label === 'Rejected';

        // Styling logic
        let bgColor = "bg-page";
        let borderColor = "border-border";
        let textColor = "text-text-secondary";

        if (isCompleted) {
          bgColor = currentStatus === 'Rejected' ? "bg-danger" : "bg-primary";
          borderColor = currentStatus === 'Rejected' ? "border-danger" : "border-primary";
          textColor = "text-white";
        } else if (isCurrent) {
          bgColor = isRejectedNode ? "bg-danger text-white" : "bg-primary/20 text-primary";
          borderColor = isRejectedNode ? "border-danger" : "border-primary";
          textColor = isRejectedNode ? "text-white" : "text-primary";
        }

        return (
          <div key={idx} className="relative z-10 flex flex-col items-center gap-2">
            <div className={clsx(
              "w-6 h-6 rounded-full flex items-center justify-center border-2 transition-colors",
              bgColor, borderColor, textColor,
              isCurrent && !isRejectedNode && "animate-pulse" // Subtle pulse on active step
            )}>
              {step.icon}
            </div>
            <span className={clsx(
              "text-[9px] font-bold uppercase tracking-wider absolute -bottom-6 w-24 text-center",
              isCurrent ? (isRejectedNode ? "text-danger" : "text-primary") : (isCompleted ? "text-text-primary" : "text-text-secondary")
            )}>
              {step.label}
            </span>
          </div>
        );
      })}

    </div>
  );
}
