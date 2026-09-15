"use client";

import React, { useEffect, useState, useMemo } from 'react';
import { fetchStudentCommunications } from '../student_communication_api/student_communication_api';
import type { StudentCommunicationData, CommunicationMessage, CommunicationCategory } from '../student_communication_types/student_communication_types';
import StudentCommunicationSidebar from './StudentCommunicationSidebar';
import StudentCommunicationList from './StudentCommunicationList';
import StudentCommunicationModal from './StudentCommunicationModal';
import { Loader2 } from 'lucide-react';

/**
 * RESPONSIBILITY: Orchestrates the Communication view.
 */
export default function StudentCommunicationMain() {
  const [data, setData] = useState<StudentCommunicationData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [selectedCategory, setSelectedCategory] = useState<CommunicationCategory>('All');
  const [selectedMessage, setSelectedMessage] = useState<CommunicationMessage | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetchStudentCommunications();
        if (isMounted) {
          if (response.success) {
            setData(response.data);
          } else {
            setError(response.message);
          }
        }
      } catch (err) {
        if (isMounted) setError("Failed to load messages.");
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }
    loadData();
    return () => { isMounted = false; };
  }, []);

  const filteredMessages = useMemo(() => {
    if (!data) return [];
    if (selectedCategory === 'All') return data.messages;
    return data.messages.filter(m => m.category === selectedCategory);
  }, [data, selectedCategory]);

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

  const handleMarkAsRead = (msgId: string) => {
    setData(prev => {
      if (!prev) return prev;
      return {
        ...prev,
        messages: prev.messages.map(m => m.id === msgId ? { ...m, isRead: true } : m)
      };
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 items-start">
      
      {/* Sidebar Filters */}
      <div className="w-full md:w-64 shrink-0">
        <StudentCommunicationSidebar 
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          messages={data.messages}
        />
      </div>

      {/* Message Feed */}
      <div className="flex-1 w-full">
        <StudentCommunicationList 
          messages={filteredMessages} 
          onViewMessage={(msg) => {
            setSelectedMessage(msg);
            if (!msg.isRead) handleMarkAsRead(msg.id);
          }}
        />
      </div>

      {/* Reader Modal */}
      {selectedMessage && (
        <StudentCommunicationModal 
          message={selectedMessage}
          onClose={() => setSelectedMessage(null)}
        />
      )}

    </div>
  );
}
