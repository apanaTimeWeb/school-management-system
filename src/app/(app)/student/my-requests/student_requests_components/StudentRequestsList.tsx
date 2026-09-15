"use client";

import React from 'react';
import type { StudentRequest } from '../student_requests_types/student_requests_types';
import StudentRequestTracker from './StudentRequestTracker';
import { Inbox, FileText, CheckCircle2, MessageCircleReply } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  requests: StudentRequest[];
}

export default function StudentRequestsList({ requests }: Props) {
  
  if (requests.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-10 text-center text-text-secondary bg-card border border-border rounded-xl shadow-sm">
        <Inbox size={48} className="text-border mb-4" />
        <h3 className="text-lg font-bold text-text-primary">No Requests Found</h3>
        <p className="text-sm">You haven't made any requests in this category.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {requests.map(req => (
        <div key={req.id} className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow group flex flex-col lg:flex-row gap-6">
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                {req.category}
              </span>
              <span className="text-xs font-semibold text-text-secondary">{req.dateSubmitted}</span>
            </div>
            
            <h3 className="text-lg font-bold text-text-primary mb-1 flex items-start gap-2">
              <FileText size={18} className="text-text-secondary mt-0.5 shrink-0" />
              {req.title}
            </h3>
            <p className="text-sm text-text-secondary mb-4 ml-6">{req.description}</p>
            
            {req.adminRemark && (
              <div className="bg-success/5 border border-success/20 rounded-lg p-3 flex items-start gap-3 ml-6">
                <MessageCircleReply size={16} className="text-success shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-bold text-success uppercase tracking-wider block mb-1">Admin Remark</span>
                  <p className="text-sm text-text-primary">{req.adminRemark}</p>
                </div>
              </div>
            )}
          </div>

          <div className="w-full lg:w-[400px] bg-page border border-border rounded-xl p-4 shrink-0 flex flex-col justify-center">
             <span className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-4 block text-center">Request Status Lifecycle</span>
             <StudentRequestTracker currentStatus={req.status} />
          </div>
          
        </div>
      ))}
    </div>
  );
}
