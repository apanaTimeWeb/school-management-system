"use client";

import React, { useEffect, useState } from 'react';
import { fetchStudentRequestsData, submitStudentRequest } from '../student_requests_api/student_requests_api';
import type { StudentRequestsData, StudentRequest, RequestCategory } from '../student_requests_types/student_requests_types';
import StudentRequestsList from './StudentRequestsList';
import StudentNewRequestModal from './StudentNewRequestModal';
import { Loader2, Plus, Filter } from 'lucide-react';
import clsx from 'clsx';

/**
 * RESPONSIBILITY: Orchestrates the My Requests central hub.
 */
export default function StudentRequestsMain() {
  const [data, setData] = useState<StudentRequestsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [activeFilter, setActiveFilter] = useState<RequestCategory>('All');
  const [showNewModal, setShowNewModal] = useState(false);

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetchStudentRequestsData();
        if (isMounted) {
          if (response.success) {
            setData(response.data);
          } else {
            setError(response.message);
          }
        }
      } catch (err) {
        if (isMounted) setError("Failed to load requests.");
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }
    loadData();
    return () => { isMounted = false; };
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center motion-safe:animate-pulse">
        <Loader2 className="animate-spin text-primary w-10 h-10" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="bg-danger/10 border border-danger text-danger p-4 rounded-md">
        {error || "No data found."}
      </div>
    );
  }

  const handleNewSubmit = async (payload: Partial<StudentRequest>) => {
    const res = await submitStudentRequest(payload);
    if (res.success && res.data) {
      setData(prev => prev ? { ...prev, requests: [res.data!, ...prev.requests] } : null);
      setActiveFilter('All');
    }
    return res;
  };

  const categories: RequestCategory[] = ['All', 'Leave Request', 'Certificate Request', 'Bonafide Request', 'Document Request', 'Other'];
  
  const filteredRequests = activeFilter === 'All' 
    ? data.requests 
    : data.requests.filter(r => r.category === activeFilter);

  return (
    <div className="flex flex-col gap-6 motion-safe:animate-[fadeIn_0.3s_ease-out]">
      
      {/* Top Bar: Filters & Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-card border border-border p-4 rounded-xl shadow-sm">
        
        <div className="flex flex-wrap items-center gap-2">
          <Filter size={16} className="text-text-secondary mr-2" />
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={clsx(
                "px-3 py-1.5 rounded-full text-xs font-bold transition-all border",
                activeFilter === cat 
                  ? "bg-primary text-white border-primary shadow-sm" 
                  : "bg-page text-text-secondary border-border hover:border-primary/50"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <button 
          onClick={() => setShowNewModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg shadow-sm hover:bg-primary-hover transition-colors shrink-0"
        >
          <Plus size={16} /> New Request
        </button>

      </div>

      {/* Main List Area */}
      <div className="w-full">
        <StudentRequestsList requests={filteredRequests} />
      </div>

      {/* Modal */}
      {showNewModal && (
        <StudentNewRequestModal 
          onClose={() => setShowNewModal(false)} 
          onSubmit={handleNewSubmit} 
        />
      )}

    </div>
  );
}
